var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = {"classes":[{"id":821,"sl":38,"methods":[{"sl":44,"el":47,"sc":3},{"sl":49,"el":59,"sc":3},{"sl":61,"el":66,"sc":3},{"sl":68,"el":70,"sc":3}],"el":71,"name":"IdServiceImpl"}]}

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {"test_11":{"methods":[{"sl":49},{"sl":61},{"sl":68}],"name":"testServiceInjection","statements":[{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":62},{"sl":63},{"sl":64},{"sl":69}],"pass":true},"test_25":{"methods":[{"sl":49},{"sl":61},{"sl":68}],"name":"testDecoratedServiceInjection","statements":[{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":62},{"sl":69}],"pass":true},"test_21":{"methods":[{"sl":49},{"sl":61},{"sl":68}],"name":"testServiceExports","statements":[{"sl":50},{"sl":51},{"sl":53},{"sl":54},{"sl":55},{"sl":57},{"sl":62},{"sl":63},{"sl":64},{"sl":69}],"pass":true},"test_14":{"methods":[{"sl":61},{"sl":68}],"name":"testDirectServiceInjection","statements":[{"sl":62},{"sl":63},{"sl":64},{"sl":69}],"pass":true}}

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [[], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [], [25, 21, 11], [25, 21, 11], [25, 21, 11], [], [25, 21, 11], [25, 21, 11], [25, 21, 11], [], [25, 21, 11], [], [], [], [14, 25, 21, 11], [14, 25, 21, 11], [14, 21, 11], [14, 21, 11], [], [], [], [14, 25, 21, 11], [14, 25, 21, 11], [], []]