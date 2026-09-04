import { NextResponse } from 'next/server';
import { site } from '@/lib/site';

type ContactResult =
  | { ok: true }
  | { ok: false; errors: Record<string, string> };

function wantsHtml(request: Request) {
  const accept = request.headers.get('accept') ?? '';
  return accept.includes('text/html');
}

function validate(formData: FormData): ContactResult {
  const honeypot = String(formData.get('fax_number') ?? '').trim();
  if (honeypot) return { ok: true };

  const name = String(formData.get('name') ?? '');
  const email = String(formData.get('email') ?? '');
  const problem = String(formData.get('problem') ?? '');
  const consent = formData.get('consent');

  const errors: Record<string, string> = {};
  if (!name.trim()) errors.name = 'Tell us your name.';
  if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email.trim())) errors.email = 'Enter a valid email.';
  if (!problem.trim()) errors.problem = 'This is the one field we actually need.';
  if (consent !== 'on' && consent !== 'true') {
    errors.consent = 'We need consent to respond to you.';
  }

  if (Object.keys(errors).length > 0) return { ok: false, errors };

  const payload = {
    to: site.email,
    name: name.trim(),
    email: email.trim(),
    company: String(formData.get('company') ?? '').trim(),
    phone: String(formData.get('phone') ?? '').trim(),
    problem: problem.trim(),
    help: formData.getAll('help').map(String),
    stage: String(formData.get('stage') ?? ''),
    budget: String(formData.get('budget') ?? ''),
    source: String(formData.get('source') ?? ''),
    receivedAt: new Date().toISOString(),
  };

  console.info('[contact] enquiry received', payload);
  return { ok: true };
}

export async function POST(request: Request) {
  let formData: FormData;
  try {
    formData = await request.formData();
  } catch {
    if (wantsHtml(request)) {
      return NextResponse.redirect(new URL('/contact?error=1', request.url), 303);
    }
    return NextResponse.json({ ok: false, errors: { form: 'Invalid form data.' } }, { status: 400 });
  }

  const result = validate(formData);

  if (wantsHtml(request)) {
    if (result.ok) {
      return NextResponse.redirect(new URL('/contact?sent=1', request.url), 303);
    }
    const params = new URLSearchParams({ error: '1' });
    Object.entries(result.errors).forEach(([key, value]) => {
      params.set(`e_${key}`, value);
    });
    return NextResponse.redirect(new URL(`/contact?${params.toString()}`, request.url), 303);
  }

  if (!result.ok) {
    return NextResponse.json(result, { status: 400 });
  }
  return NextResponse.json({ ok: true });
}
