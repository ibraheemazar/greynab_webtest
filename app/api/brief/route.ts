import { NextResponse } from 'next/server';

export async function POST(req: Request) {
  try {
    const body = await req.json();

    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━
    // PHASE A: log to server console (Vercel logs)
    // Later: wire to Resend + Slack webhook + HubSpot
    // (see brief §2 "form delivery")
    // ━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━

    const timestamp = new Date().toISOString();
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('NEW BRIEF SUBMITTED · ' + timestamp);
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');
    console.log('Project:    ', body.projectType);
    console.log('Budget:     ', body.budget);
    console.log('Timeline:   ', body.timeline);
    console.log('Message:    ', body.message || '(none)');
    console.log('Name:       ', body.name);
    console.log('Email:      ', body.email);
    console.log('Company:    ', body.company || '(none)');
    if (body.prefill && Object.keys(body.prefill).length) {
      console.log('Prefilled:  ', JSON.stringify(body.prefill));
    }
    console.log('━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━━');

    // TODO Phase A.2 — wire these in once env vars are set:
    //
    // if (process.env.RESEND_API_KEY) {
    //   await fetch('https://api.resend.com/emails', { ... });
    // }
    // if (process.env.SLACK_WEBHOOK_URL) {
    //   await fetch(process.env.SLACK_WEBHOOK_URL, { ... });
    // }
    // if (process.env.HUBSPOT_API_KEY) {
    //   await fetch('https://api.hubapi.com/...', { ... });
    // }

    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error('Brief submission error:', err);
    return NextResponse.json({ ok: false, error: 'submission_failed' }, { status: 500 });
  }
}
