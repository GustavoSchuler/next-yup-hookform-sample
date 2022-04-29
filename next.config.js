module.exports = {
  swcMinify: true,
  compiler: {
    reactRemoveProperties: { properties: ['^data-testid'] },
    removeConsole: true,
  },
  poweredByHeader: false,
  async headers() {
    return [
      {
        source: '/(.*)',
        headers: [
          {
            key: 'X-DNS-Prefetch-Control',
            value: 'on',
          },
          {
            key: 'X-Frame-Options',
            value: 'SAMEORIGIN',
          },
          {
            key: 'X-XSS-Protection',
            value: '1; mode=block',
          },
          {
            key: 'Strict-Transport-Security',
            value: 'max-age=63072000; includeSubDomains; preload',
          },
          {
            key: 'X-Content-Type-Options',
            value: 'nosniff',
          },
          {
            key: 'Referrer-Policy',
            value: 'same-origin',
          },
          {
            key: 'Permissions-Policy',
            value: 'geolocation=*',
          },
          {
            key: 'Content-Security-Policy',
            value:
              "default-src 'self' data: *; img-src 'self' *.allin.com.br smartbmc.com.br s3.us-east-1.amazonaws.com *.e-boticario.com.br *.cookielaw.org *.hotjar.com *.hotjar.io *.eudora.com.br *.hybrid.ai *.frontend.weborama.fr *.adnxs.com  *.bestssp.com *.onaudience.com *.hybrid.ai *.admixer.net *.onaudience.com *.adriver.ru *.openx.net *.betweendigital.com *.yandex.ru *.doubleclick.net *.documentforce.com *.force.com *.salesforce.com *.salesforceliveagent.com *.boticario.com.br *.oboticario.com.br *.googleapis.com *.google.com *.google.com.br *.googleapis.com *.grupoboticario.digital *.grupoboticario.com.br edbr.vteximg.com.br res.cloudinary.com *.google-analytics.com *.s3.amazonaws.com *.googletagmanager.com *.facebook.com *.pinterest.com *.github.com *.prismic.io pipelines.actions.githubusercontent.com data: blob: ; connect-src 'self' *.orioyujh.com *.fnswb.com openfpcdn.io *.facebook.com api.ipify.org *.shopback.net *.chaordicsystems.com *.retargeter.com.br *.shopconvert.com.br ckies.net *.linximpulse.net *.shoptarget.com.br *.eudora.com.br *.prismic.io http://grupoboticario.tt.omtrdc.net *.microsoftonline.com *.microsoft.com *.boticario.com.br *.documentforce.com *.force.com *.salesforce.com *.salesforceliveagent.com *.oboticario.com.br *.google.com *.google.com.br *.grupoboticario.digital *.grupoboticario.com.br cdn.cookielaw.org *.hotjar.com analytics.strapi.io wss://*.hotjar.com *.hotjar.io *.google-analytics.com *.googleapis.com *.onetrust.com *.s3.amazonaws.com *.g.doubleclick.net *.googletagmanager.com *.configcat.com *.nr-data.net *.pinterest.com *.tiktok.com *.github.com pipelines.actions.githubusercontent.com dmomoufq3m.execute-api.us-east-1.amazonaws.com blob:; script-src 'self' *.grupoboticario.digital *.grupoboticario.com.br *.ouiparis.com *.ouiparis.com.br *.hybrid.ai *.force.com *.documentforce.com *.salesforce.com *.salesforceliveagent.com *.newrelic.com *.hotjar.com *.hotjar.io *.onetrust.com *.g.doubleclick.net *.adobedtm.com *.google.com *.googleapis.com *.gstatic.com *.googletagmanager.com *.configcat.com *.nr-data.net *.google-analytics.com cdn.cookielaw.org *.google-analytics.com cdn.cookielaw.org cdn.tiny.cloud *.dwin1.com *.googleadservices.com *.facebook.net *.facebook.com *.cloudfront.net *.pinimg.com *.shoptarget.com.br *.tiktok.com *.linximpulse.net *.shopback.com *.chaordicsystems.com *.shopconvert.com.br *.shopback.net *.github.com pipelines.actions.githubusercontent.com *.prismic.io *.go-mpulse.net https://polyfill.io dmomoufq3m.execute-api.us-east-1.amazonaws.com cdnjs.cloudflare.com blob: 'unsafe-inline' 'unsafe-eval'; style-src 'unsafe-inline' *",
          },
        ],
      },
      {
        source: '/:all*(svg|jpg|png|js|css)',
        locale: false,
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=172800, must-revalidate',
          },
        ],
      },
    ];
  },
};
