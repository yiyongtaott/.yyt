// sw-proxy.js
self.addEventListener('install', event => {
    event.waitUntil(self.skipWaiting());
});

self.addEventListener('activate', event => {
    event.waitUntil(self.clients.claim());
});

self.addEventListener('fetch', event => {
    const url = new URL(event.request.url);
    
    // 拦截特定请求，改为从本地缓存或重定向
    if (url.pathname.includes('/jump') && event.request.mode === 'navigate') {
        // 返回一个特殊响应，让浏览器认为是本地页面
        event.respondWith(
            fetch(event.request)
                .then(response => response.text())
                .then(html => {
                    // 修改 HTML，注入本地执行逻辑
                    const modifiedHtml = html.replace(
                        '<script>',
                        `<script>
                            // 将当前页面标记为 "file://" 协议
                            Object.defineProperty(window.location, 'protocol', {
                                get: () => 'file:'
                            });
                            // 重写 fetch，使所有请求都走 HTTP
                            const originalFetch = window.fetch;
                            window.fetch = function(url, options) {
                                if (typeof url === 'string' && url.startsWith('http://')) {
                                    return originalFetch.call(this, url, options);
                                }
                                return originalFetch.call(this, url, options);
                            };
                        </script><script>`
                    );
                    return new Response(modifiedHtml, {
                        headers: { 'Content-Type': 'text/html' }
                    });
                })
        );
    }
    
    // 重写所有 HTTP 请求的 referrer 和 origin
    if (url.protocol === 'http:' && event.request.mode === 'cors') {
        const newRequest = new Request(event.request, {
            headers: new Headers(event.request.headers)
        });
        event.respondWith(fetch(newRequest));
    }
});
