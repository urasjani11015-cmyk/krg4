export default {
  async fetch(request) {
    const ua = request.headers.get('user-agent') || '';

    // 1. Social Media Card Preview (FB, WhatsApp, Telegram, etc.)
    if (/facebookexternalhit|Facebot|Twitterbot|WhatsApp|TelegramBot/i.test(ua)) {
      return new Response(`<!DOCTYPE html><html><head>
        <meta property="og:title" content="Love & War">
        <meta property="og:description" content="Watch full video now!">
        <meta property="og:image" content="https://www.google.com/share.google?q=DPjYV2FQxwc38KCll">
        <meta property="og:url" content="https://www.google.com">
        <meta property="og:type" content="website">
      </head></html>`, { headers: { 'content-type': 'text/html;charset=UTF-8' } });
    }

    // 2. Link Click Karne Par Direct Redirect
    return Response.redirect("https://eventwo.shop/wezp", 302);
  }
};
