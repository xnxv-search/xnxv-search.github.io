function parseURL(url='')
{
	if(!url){url = document.URL;}
    var parser = document.createElement('a'),
        searchObject = {},
        queries, split, i;
    parser.href = url;
    queries = parser.search.replace(/^\?/, '').split('&');
    for( i = 0; i < queries.length; i++ ) {
        split = queries[i].split('=');
        searchObject[split[0]] = split[1];
    }
    return {
        protocol: parser.protocol,
		origin: parser.origin,
        host: parser.host,
        hostname: parser.hostname,
        port: parser.port,
        pathname: parser.pathname,
        patharray: parser.pathname.slice(1).split('/'),
        search: parser.search,
        searchObject: searchObject,
        hash: parser.hash
    };
}
