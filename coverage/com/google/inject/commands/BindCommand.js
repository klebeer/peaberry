var clover = new Object();

// JSON: {classes : [{name, id, sl, el,  methods : [{sl, el}, ...]}, ...]}
clover.pageData = { "classes" : [
    {"id" : 1448, "sl" : 36, "el" : 368, "name" : "BindCommand",
    "methods" : [
             {"sl" : 38, "el" : 40, "sc" : 3},  {"sl" : 43, "el" : 45, "sc" : 5},  {"sl" : 46, "el" : 48, "sc" : 5},  {"sl" : 52, "el" : 54, "sc" : 5},  {"sl" : 55, "el" : 57, "sc" : 5},  {"sl" : 66, "el" : 69, "sc" : 3},  {"sl" : 71, "el" : 73, "sc" : 3},  {"sl" : 75, "el" : 77, "sc" : 3},  {"sl" : 79, "el" : 81, "sc" : 3},  {"sl" : 83, "el" : 85, "sc" : 3},  {"sl" : 87, "el" : 89, "sc" : 3},  {"sl" : 91, "el" : 95, "sc" : 3},  {"sl" : 127, "el" : 129, "sc" : 3},  {"sl" : 349, "el" : 367, "sc" : 3},  {"sl" : 357, "el" : 360, "sc" : 9}  ]}
    ,
    {"id" : 1476, "sl" : 97, "el" : 113, "name" : "BindCommand.AbstractTarget",
    "methods" : [
             {"sl" : 98, "el" : 100, "sc" : 5},  {"sl" : 101, "el" : 103, "sc" : 5},  {"sl" : 104, "el" : 106, "sc" : 5},  {"sl" : 107, "el" : 109, "sc" : 5},  {"sl" : 110, "el" : 112, "sc" : 5}  ]}
    ,
    {"id" : 1486, "sl" : 115, "el" : 125, "name" : "BindCommand.AbstractScoping",
    "methods" : [
             {"sl" : 116, "el" : 118, "sc" : 5},  {"sl" : 119, "el" : 121, "sc" : 5},  {"sl" : 122, "el" : 124, "sc" : 5}  ]}
    ,
    {"id" : 1494, "sl" : 134, "el" : 344, "name" : "BindCommand.BindingBuilder",
    "methods" : [
              {"sl" : 137, "el" : 139, "sc" : 5},  {"sl" : 141, "el" : 147, "sc" : 5},  {"sl" : 149, "el" : 154, "sc" : 5},  {"sl" : 156, "el" : 158, "sc" : 5},  {"sl" : 160, "el" : 163, "sc" : 5},  {"sl" : 165, "el" : 183, "sc" : 5},  {"sl" : 169, "el" : 171, "sc" : 9},  {"sl" : 172, "el" : 174, "sc" : 9},  {"sl" : 175, "el" : 177, "sc" : 9},  {"sl" : 178, "el" : 180, "sc" : 9},  {"sl" : 185, "el" : 207, "sc" : 5},  {"sl" : 193, "el" : 196, "sc" : 9},  {"sl" : 197, "el" : 199, "sc" : 9},  {"sl" : 200, "el" : 202, "sc" : 9},  {"sl" : 203, "el" : 205, "sc" : 9},  {"sl" : 209, "el" : 227, "sc" : 5},  {"sl" : 213, "el" : 215, "sc" : 9},  {"sl" : 216, "el" : 218, "sc" : 9},  {"sl" : 219, "el" : 221, "sc" : 9},  {"sl" : 222, "el" : 224, "sc" : 9},  {"sl" : 229, "el" : 232, "sc" : 5},  {"sl" : 234, "el" : 253, "sc" : 5},  {"sl" : 239, "el" : 241, "sc" : 9},  {"sl" : 242, "el" : 244, "sc" : 9},  {"sl" : 245, "el" : 247, "sc" : 9},  {"sl" : 248, "el" : 250, "sc" : 9},  {"sl" : 255, "el" : 273, "sc" : 5},  {"sl" : 260, "el" : 262, "sc" : 9},  {"sl" : 263, "el" : 265, "sc" : 9},  {"sl" : 266, "el" : 268, "sc" : 9},  {"sl" : 269, "el" : 271, "sc" : 9},  {"sl" : 275, "el" : 293, "sc" : 5},  {"sl" : 280, "el" : 282, "sc" : 9},  {"sl" : 283, "el" : 285, "sc" : 9},  {"sl" : 286, "el" : 288, "sc" : 9},  {"sl" : 289, "el" : 291, "sc" : 9},  {"sl" : 295, "el" : 311, "sc" : 5},  {"sl" : 298, "el" : 300, "sc" : 9},  {"sl" : 301, "el" : 303, "sc" : 9},  {"sl" : 304, "el" : 306, "sc" : 9},  {"sl" : 307, "el" : 309, "sc" : 9},  {"sl" : 321, "el" : 325, "sc" : 5},  {"sl" : 327, "el" : 331, "sc" : 5},  {"sl" : 333, "el" : 343, "sc" : 5}  ]}
    
 ]
};

// JSON: {test_ID : {"methods": [ID1, ID2, ID3...], "name" : "testXXX() void"}, ...};
clover.testTargets = {
		"test_0" : {
					  "name" : "testInjection",
					  "pass" : true ,
					  "methods" : [{"sl": 38 },{"sl": 46 },{"sl": 55 },{"sl": 66 },{"sl": 71 },{"sl": 75 },{"sl": 79 },{"sl": 83 },{"sl": 87 },{"sl": 101 },{"sl": 116 },{"sl": 127 },{"sl": 137 },{"sl": 185 },{"sl": 200 },{"sl": 209 },{"sl": 219 },{"sl": 255 },{"sl": 266 },{"sl": 275 },{"sl": 286 },{"sl": 321 },{"sl": 333 },{"sl": 349 },],
					  "statements" : [{"sl": 39 },{"sl": 47 },{"sl": 56 },{"sl": 67 },{"sl": 68 },{"sl": 72 },{"sl": 76 },{"sl": 80 },{"sl": 84 },{"sl": 88 },{"sl": 102 },{"sl": 117 },{"sl": 128 },{"sl": 138 },{"sl": 189 },{"sl": 191 },{"sl": 192 },{"sl": 201 },{"sl": 210 },{"sl": 211 },{"sl": 212 },{"sl": 220 },{"sl": 226 },{"sl": 256 },{"sl": 257 },{"sl": 259 },{"sl": 267 },{"sl": 276 },{"sl": 277 },{"sl": 278 },{"sl": 287 },{"sl": 322 },{"sl": 335 },{"sl": 340 },{"sl": 352 },{"sl": 355 },{"sl": 362 },{"sl": 363 },]
					  }
 };

// JSON: { lines : [{tests : [testid1, testid2, testid3, ...]}, ...]};
clover.srcFileLines = [  [],   [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [  ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [ 0   ] ,
  [ 0   ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] ,
  [  ] 
];