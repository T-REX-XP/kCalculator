//io201
//["2027", "2061", "2093", "2122", "2151", "2179", "2208", "2235", "2262", "2281", "2316", "2342", "2367", "2393", "2418", "2442", "2466", "2489", "2514", "2539", "2564", "2589", "2613", "2640", "2665", "2689", "2714", "2738", "2763", "2787", "2813", "2837", "2861", "2885", "2909", "2935", "2959", "2982", "3007", "3031", "3055", "3080", "3106", "3132", "3158", "3186", "3216"]
//io203
//["2030", "2063", "2094", "2124", "2153", "2181", "2209", "2236", "2264", "2291", "2318", "2345", "2371", "2396", "2421", "2446", "2471", "2494", "2516", "2542", "2567", "2592", "2616", "2638", "2662", "2687", "2711", "2735", "2769", "2783", "2808", "2832", "2857", "2881", "2905", "2930", "2956", "2978", "3003", "3028", "3054", "3079", "3105", "3132", "3159", "3188", "3218"]
function generateExpression(data, variableName, increment) {
    var result = [];
    var fuel = 0;
    //var increment = 20;
    data.forEach((element, index) => {
        //is first element
        if (index == 0) {
            result.push(variableName + " < " + element + " ? 0");
        } else {
            var prevElem = data[index - 1];
            result.push("(" + variableName + " > " + prevElem + " && " + variableName + " <=" + element + ")? " + fuel);
        }
        fuel = fuel + increment;
    });
    return result.join(":") + ":0";
}
function calculateFormula() {
    var data = document.getElementById("tbData").value;
    var litr = parseInt(document.getElementById("tbLitr").value);
    var fieldName = document.getElementById("tbFieldName").value;

    var result = document.getElementById("tbResult");
    data = data.split("\n");
    result.innerText = generateExpression(data, fieldName, litr);
}

function onLoad() {
    var textAreas = document.getElementsByTagName('textarea');

    Array.prototype.forEach.call(textAreas, function (elem) {
        elem.placeholder = elem.placeholder.replace(/\\n/g, '\n');
    });
}

//final formula
/*
(io201 < 2027 ? 0:(io201 > 2027 && io201 <=2061)? 20:(io201 > 2061 && io201 <=2093)? 40:(io201 > 2093 && io201 <=2122)? 60:(io201 > 2122 && io201 <=2151)? 80:(io201 > 2151 && io201 <=2179)? 100:(io201 > 2179 && io201 <=2208)? 120:(io201 > 2208 && io201 <=2235)? 140:(io201 > 2235 && io201 <=2262)? 160:(io201 > 2262 && io201 <=2281)? 180:(io201 > 2281 && io201 <=2316)? 200:(io201 > 2316 && io201 <=2342)? 220:(io201 > 2342 && io201 <=2367)? 240:(io201 > 2367 && io201 <=2393)? 260:(io201 > 2393 && io201 <=2418)? 280:(io201 > 2418 && io201 <=2442)? 300:(io201 > 2442 && io201 <=2466)? 320:(io201 > 2466 && io201 <=2489)? 340:(io201 > 2489 && io201 <=2514)? 360:(io201 > 2514 && io201 <=2539)? 380:(io201 > 2539 && io201 <=2564)? 400:(io201 > 2564 && io201 <=2589)? 420:(io201 > 2589 && io201 <=2613)? 440:(io201 > 2613 && io201 <=2640)? 460:(io201 > 2640 && io201 <=2665)? 480:(io201 > 2665 && io201 <=2689)? 500:(io201 > 2689 && io201 <=2714)? 520:(io201 > 2714 && io201 <=2738)? 540:(io201 > 2738 && io201 <=2763)? 560:(io201 > 2763 && io201 <=2787)? 580:(io201 > 2787 && io201 <=2813)? 600:(io201 > 2813 && io201 <=2837)? 620:(io201 > 2837 && io201 <=2861)? 640:(io201 > 2861 && io201 <=2885)? 660:(io201 > 2885 && io201 <=2909)? 680:(io201 > 2909 && io201 <=2935)? 700:(io201 > 2935 && io201 <=2959)? 720:(io201 > 2959 && io201 <=2982)? 740:(io201 > 2982 && io201 <=3007)? 760:(io201 > 3007 && io201 <=3031)? 780:(io201 > 3031 && io201 <=3055)? 800:(io201 > 3055 && io201 <=3080)? 820:(io201 > 3080 && io201 <=3106)? 840:(io201 > 3106 && io201 <=3132)? 860:(io201 > 3132 && io201 <=3158)? 880:(io201 > 3158 && io201 <=3186)? 900:(io201 > 3186 && io201 <=3216)? 920:0
+io203 < 2030 ? 0:(io203 > 2030 && io203 <=2063)? 20:(io203 > 2063 && io203 <=2094)? 40:(io203 > 2094 && io203 <=2124)? 60:(io203 > 2124 && io203 <=2153)? 80:(io203 > 2153 && io203 <=2181)? 100:(io203 > 2181 && io203 <=2209)? 120:(io203 > 2209 && io203 <=2236)? 140:(io203 > 2236 && io203 <=2264)? 160:(io203 > 2264 && io203 <=2291)? 180:(io203 > 2291 && io203 <=2318)? 200:(io203 > 2318 && io203 <=2345)? 220:(io203 > 2345 && io203 <=2371)? 240:(io203 > 2371 && io203 <=2396)? 260:(io203 > 2396 && io203 <=2421)? 280:(io203 > 2421 && io203 <=2446)? 300:(io203 > 2446 && io203 <=2471)? 320:(io203 > 2471 && io203 <=2494)? 340:(io203 > 2494 && io203 <=2516)? 360:(io203 > 2516 && io203 <=2542)? 380:(io203 > 2542 && io203 <=2567)? 400:(io203 > 2567 && io203 <=2592)? 420:(io203 > 2592 && io203 <=2616)? 440:(io203 > 2616 && io203 <=2638)? 460:(io203 > 2638 && io203 <=2662)? 480:(io203 > 2662 && io203 <=2687)? 500:(io203 > 2687 && io203 <=2711)? 520:(io203 > 2711 && io203 <=2735)? 540:(io203 > 2735 && io203 <=2769)? 560:(io203 > 2769 && io203 <=2783)? 580:(io203 > 2783 && io203 <=2808)? 600:(io203 > 2808 && io203 <=2832)? 620:(io203 > 2832 && io203 <=2857)? 640:(io203 > 2857 && io203 <=2881)? 660:(io203 > 2881 && io203 <=2905)? 680:(io203 > 2905 && io203 <=2930)? 700:(io203 > 2930 && io203 <=2956)? 720:(io203 > 2956 && io203 <=2978)? 740:(io203 > 2978 && io203 <=3003)? 760:(io203 > 3003 && io203 <=3028)? 780:(io203 > 3028 && io203 <=3054)? 800:(io203 > 3054 && io203 <=3079)? 820:(io203 > 3079 && io203 <=3105)? 840:(io203 > 3105 && io203 <=3132)? 860:(io203 > 3132 && io203 <=3159)? 880:(io203 > 3159 && io203 <=3188)? 900:(io203 > 3188 && io203 <=3218)? 920:0)/2
*/