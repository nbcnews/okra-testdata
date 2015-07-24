var tests = [
    {
        id: '100',
        name: 'Section (tech)',
        runAt: '',
        status: '',
        errMsg: '',
        baseUrl: 'http://www.nbcnews.com',
        urlSegments: ['/tech/', '/tech', '/tech/mobile', '/tech/mobile/', '/tech/gadgets'],
        assertions: [{type: 'statusCode', value: '200'}, {type: 'html', value: '<div class="panel-section'}]
    },
    {
        id: '101',
        name: 'Home page',
        runAt: '',
        status: '',
        errMsg: '',
        baseUrl: 'http://www.nbcnews.com',
        urlSegments: ['/'],
        assertions: [{type: 'statusCode', value: '200'}, {type: 'html', value: '<header class="grid'}]
    },
    {
        id: '102',
        name: 'Article',
        runAt: '',
        status: '',
        errMsg: '',
        baseUrl: 'http://www.nbcnews.com',
        urlSegments: ['/tech/gadgets/article-test-n364676'],
        assertions: [{type: 'statusCode', value: '200'}, {type: 'html', value: '<h1 itemprop="headline">'}]
    },
    {
        id: '103',
        name: '404 page',
        runAt: '',
        status: '',
        errMsg: '',
        baseUrl: 'http://www.nbcnews.com',
        urlSegments: ['/pages/404'],
        assertions: [{type: 'statusCode', value: '404'}, {type: 'html', value: '<h1>This page is unavailable.</h1>'}]
    },
    {
        id: '104',
        name: 'static pages',
        runAt: '',
        status: '',
        errMsg: '',
        baseUrl: 'http://www.nbcnews.com',
        urlSegments: ['/pages/news-connect', '/pages/contact-us','/pages/about-nbc-news-digital'],
        assertions: [{type: 'statusCode', value: '200'}, {type: 'html', value: '<div class="grid_default"'}]
    }
];

var testRun1 = JSON.parse(JSON.stringify(tests[1]));
testRun1.testId = testRun1.id;
testRun1.id = '1000000';
testRun1.errMsg = '';
testRun1.status = 'queued';
testRun1.results = [];
testRun1.createdAt = new Date();
testRun1.baseUrl ='http://www.nbcnews.com';

var testRuns = [testRun1];

module.exports = {tests: tests, testRuns: testRuns, appName:'Blue'};
