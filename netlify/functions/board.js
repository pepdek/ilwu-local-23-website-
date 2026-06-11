exports.handler = async function(event) {
  const screen = event.queryStringParameters?.screen || '1';
  const url = `http://ilwu23.com/?screen=${screen}`;
  try {
    const res  = await fetch(url);
    const html = await res.text();
    return {
      statusCode: 200,
      headers: { 'Content-Type':'text/html', 'Access-Control-Allow-Origin':'*', 'Cache-Control':'public, max-age=300' },
      body: html,
    };
  } catch(e) {
    return { statusCode: 500, body: e.message };
  }
};
