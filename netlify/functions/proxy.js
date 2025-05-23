const axios = require('axios');

exports.handler = async function(event, context) {
  const pid = event.queryStringParameters.pid;
  const realUrl = `https://photo.chiyodagrp.co.jp/color_vari/variation.xhtml?pid=${pid}`;

  try {
    const response = await axios.get(realUrl);
    let html = response.data;

    // ドメイン置換: demo-service → dev-service
    html = html.replace(/https:\/\/demo-service\.ebisumart\.com/g, 'https://dev-service.ebisumart.com');
    html = html.replace(/src=["']jquery\.jsonp\.js["']/g, 'src="../jquery.jsonp.js"');

    return {
      statusCode: 200,
      headers: {
        'Content-Type': 'text/html; charset=UTF-8',
      },
      body: html,
    };
  } catch (error) {
    return {
      statusCode: 500,
      body: 'Failed to fetch external content.',
    };
  }
};
