(function (arg1, arg2) {
  var result1 = arg1();
  do {
    try {
      var tmp1 = -parseInt("1377262AEmYML") / 0x1 + -parseInt("1029538eoCDsU") / 0x2 + parseInt("3374493KOMiOt") / 0x3 + -parseInt("20oitrlf") / 0x4 * (-parseInt("1103885babQch") / 0x5) + parseInt("269166aXaxXY") / 0x6 * (-parseInt("7BsUJrN") / 0x7) + -parseInt("11909776lAoeJE") / 0x8 * (-parseInt("9PKKIYj") / 0x9) + -parseInt("1416290ADxQuq") / 0xa * (parseInt("66aBKcMV") / 0xb);
      if (tmp1 === arg2) {
        break;
      } else {
        result1.push(result1.shift());
      }
    } catch (error1) {
      result1.push(result1.shift());
    }
  } while (true);
})(fn3, 0xe33d4);
(function (arg3) {
  var obj1 = {
    gXrfo: "return (function() {}.constructor(\"return this\")( ));",
    PVizm: "1|3|4|0|2",
    RIfgP: "info",
    PJJca: "trace",
    XuPaD: function (arg4, arg5) {
      return arg4 ^ arg5;
    },
    RrbAw: function (arg6) {
      return arg6();
    },
    iCHBn: function (arg7, arg8) {
      return arg7 ^ arg8;
    },
    bTDMG: "setTimeout",
    xfYXa: "MSIE 10",
    VmcVo: "var fakeIdToId = {};onmessage = function (event) {\tvar data = event.data,\t\tname = data.name,\t\tfakeId = data.fakeId,\t\ttime;\tif(data.hasOwnProperty('time')) {\t\ttime = data.time;\t}\tswitch (name) {\t\tcase 'setInterval':\t\t\tfakeIdToId[fakeId] = setInterval(function () {\t\t\t\tpostMessage({fakeId: fakeId});\t\t\t}, time);\t\t\tbreak;\t\tcase 'clearInterval':\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\tclearInterval(fakeIdToId[fakeId]);\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t}\t\t\tbreak;\t\tcase 'setTimeout':\t\t\tfakeIdToId[fakeId] = setTimeout(function () {\t\t\t\tpostMessage({fakeId: fakeId});\t\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t\t}\t\t\t}, time);\t\t\tbreak;\t\tcase 'clearTimeout':\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\tclearTimeout(fakeIdToId[fakeId]);\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t}\t\t\tbreak;\t}}",
    PSIPp: "undefined",
    CxWNO: "HackTimer.js by turuslan: Initialisation failed",
    zAVtM: "HackTimer.js by turuslan: Initialisation failed - HTML5 Web Worker is not supported"
  };
  var result2 = function () {
    var flag1 = true;
    return function (arg9, arg10) {
      var tmp3 = flag1 ? function () {
        if (arg10) {
          var result4 = arg10.apply(arg9, arguments);
          arg10 = null;
          return result4;
        }
      } : function () { };
      flag1 = false;
      return tmp3;
    };
  }();
  var result3 = result2(this, function () {
    var parts2 = "1|3|4|0|2".split("|");
    var num3 = 0x0;
    while (true) {
      switch (parts2[num3++]) {
        case "0":
          var consoleMethods1 = ["log", "warn", "info", "error", "exception", "table", "trace"];
          continue;
        case "1":
          var fn4 = function () {
            var tmp6;
            try {
              tmp6 = Function("return (function() {}.constructor(\"return this\")( ));")();
            } catch (error2) {
              tmp6 = window;
            }
            return tmp6;
          };
          continue;
        case "2":
          for (var num4 = 0; num4 < consoleMethods1.length; num4++) {
            var result5 = result2.constructor.prototype.bind(result2);
            var value1 = consoleMethods1[num4];
            var tmp4 = tmp5[value1] || result5;
            result5.__proto__ = result2.bind(result2);
            result5.toString = tmp4.toString.bind(tmp4);
            tmp5[value1] = result5;
          }
          continue;
        case "3":
          var result6 = fn4();
          continue;
        case "4":
          var tmp5 = result6.console = result6.console || {};
          continue;
      }
      break;
    }
  });
  result3();
  if (!new RegExp("MSIE 10", "i").test(navigator.userAgent)) {
    try {
      var blob1 = new Blob(["var fakeIdToId = {};onmessage = function (event) {\tvar data = event.data,\t\tname = data.name,\t\tfakeId = data.fakeId,\t\ttime;\tif(data.hasOwnProperty('time')) {\t\ttime = data.time;\t}\tswitch (name) {\t\tcase 'setInterval':\t\t\tfakeIdToId[fakeId] = setInterval(function () {\t\t\t\tpostMessage({fakeId: fakeId});\t\t\t}, time);\t\t\tbreak;\t\tcase 'clearInterval':\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\tclearInterval(fakeIdToId[fakeId]);\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t}\t\t\tbreak;\t\tcase 'setTimeout':\t\t\tfakeIdToId[fakeId] = setTimeout(function () {\t\t\t\tpostMessage({fakeId: fakeId});\t\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t\t}\t\t\t}, time);\t\t\tbreak;\t\tcase 'clearTimeout':\t\t\tif (fakeIdToId.hasOwnProperty (fakeId)) {\t\t\t\tclearTimeout(fakeIdToId[fakeId]);\t\t\t\tdelete fakeIdToId[fakeId];\t\t\t}\t\t\tbreak;\t}}"]);
      arg3 = window.URL.createObjectURL(blob1);
    } catch (error3) { }
  }
  var tmp2;
  var obj2 = {};
  var num1 = 0;
  if (typeof Worker !== "undefined") {
    function fn5() {
      do {
        if (num1 == 0x7fffffff) {
          num1 = 0;
        } else {
          num1++;
        }
      } while (obj2.hasOwnProperty(num1));
      return num1;
    }
    try {
      var parts1 = "1|3|0|4|6|5|2".split("|");
      var num2 = 0x0;
      while (true) {
        switch (parts1[num2++]) {
          case "0":
            window.clearInterval = function (arg11) {
              if (obj2.hasOwnProperty(arg11)) {
                delete obj2[arg11];
                tmp2.postMessage({
                  name: "clearInterval",
                  fakeId: arg11
                });
              }
            };
            continue;
          case "1":
            tmp2 = new Worker(arg3);
            continue;
          case "2":
            tmp2.onerror = function (arg12) {
              console.log(arg12);
            };
            continue;
          case "3":
            window.setInterval = function (arg13, arg14) {
              var result7 = fn5();
              obj2[result7] = {
                callback: arg13,
                parameters: Array.prototype.slice.call(arguments, obj1.XuPaD(0x32c4e, 0x32c4c))
              };
              tmp2.postMessage({
                name: "setInterval",
                fakeId: result7,
                time: arg14
              });
              return result7;
            };
            continue;
          case "4":
            window.setTimeout = function (arg15, arg16) {
              var result8 = obj1.RrbAw(fn5);
              obj2[result8] = {
                callback: arg15,
                parameters: Array.prototype.slice.call(arguments, obj1.iCHBn(0x1c6d9, 0x1c6db)),
                isTimeout: true
              };
              tmp2.postMessage({
                name: "setTimeout",
                fakeId: result8,
                time: arg16
              });
              return result8;
            };
            continue;
          case "5":
            tmp2.onmessage = function (arg17) {
              var messageData1 = arg17.data;
              var value2 = messageData1.fakeId;
              var tmp7;
              var tmp8;
              var tmp9;
              if (obj2.hasOwnProperty(value2)) {
                tmp7 = obj2[value2];
                tmp9 = tmp7.callback;
                tmp8 = tmp7.parameters;
                if (tmp7.hasOwnProperty("isTimeout") && tmp7.isTimeout) {
                  delete obj2[value2];
                }
              }
              if (typeof tmp9 === "string") {
                try {
                  tmp9 = new Function(tmp9);
                } catch (error4) {
                  console.log("HackTimer.js by turuslan: Error parsing callback code string: ", error4);
                }
              }
              if (typeof tmp9 === "function") {
                tmp9.apply(window, tmp8);
              }
            };
            continue;
          case "6":
            window.clearTimeout = function (arg18) {
              if (obj2.hasOwnProperty(arg18)) {
                delete obj2[arg18];
                tmp2.postMessage({
                  name: "clearTimeout",
                  fakeId: arg18
                });
              }
            };
            continue;
        }
        break;
      }
    } catch (error5) {
      console.log("HackTimer.js by turuslan: Initialisation failed");
      console.error(error5);
    }
  } else {
    console.log("HackTimer.js by turuslan: Initialisation failed - HTML5 Web Worker is not supported");
  }
})("HackTimerWorker.js");
(function () {
  var obj3 = {
    XtDnH: function (arg19, arg20) {
      return arg19 + arg20;
    }
  };
  setInterval(function () { }.constructor("debugger"), obj3.XtDnH(Math.random() * 500, 100));
})();
Object.defineProperty(window, "DATA", {
  get: function () {
    return __require("DataCenter").DATA;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "UserData", {
  get: function () {
    var obj4 = {
      uXDUk: function (arg21, arg22) {
        return arg21(arg22);
      }
    };
    return obj4.uXDUk(__require, "DataCenter").DATA.UserData;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MailData", {
  get: function () {
    return __require("MailData");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "GlobalData", {
  get: function () {
    return __require("GlobalData");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "ClientTime", {
  get: function () {
    return __require("DataCenter").DATA.ClientTime;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "ServerTime", {
  get: function () {
    return __require("DataCenter").DATA.ServerTime;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "ServerMSTime", {
  get: function () {
    return __require("DataCenter").DATA.ServerMSTime;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "SystemZeroTime", {
  get: function () {
    return __require("DataCenter").DATA.UserData.SystemZeroTime;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "RequestId", {
  get: function () {
    var obj5 = {
      JVIFz: function (arg23, arg24) {
        return arg23(arg24);
      }
    };
    return obj5.JVIFz(__require, "RequestId").RequestId;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NRequestId", {
  get: function () {
    var obj6 = {
      sVslr: function (arg25, arg26) {
        return arg25(arg26);
      }
    };
    return obj6.sVslr(__require, "NRequestId").NRequestId;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NRequestIdV2", {
  get: function () {
    var obj7 = {
      HMJPK: function (arg27, arg28) {
        return arg27(arg28);
      }
    };
    return obj7.HMJPK(__require, "NRequestIdV2").NRequestIdV2;
  },
  enumerable: false,
  configurable: true
});
function fn1(arg29, arg30) {
  var result9 = fn3();
  fn1 = function (arg31, arg32) {
    arg31 = arg31 - 0x0;
    var value3 = result9[arg31];
    if (fn1.CRlQcF === undefined) {
      var fn6 = function (arg33) {
        var str1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        var str2 = "";
        var str3 = "";
        for (var num5 = 0x0, tmp11, tmp12, num6 = 0x0; tmp12 = arg33.charAt(num6++); ~tmp12 && (tmp11 = num5 % 0x4 ? tmp11 * 0x40 + tmp12 : tmp12, num5++ % 0x4) ? str2 += String.fromCharCode(0xff & tmp11 >> (-2 * num5 & 0x6)) : 0x0) {
          tmp12 = str1.indexOf(tmp12);
        }
        for (var num7 = 0x0, length1 = str2.length; num7 < length1; num7++) {
          str3 += "%" + ("00" + str2.charCodeAt(num7).toString(0x10)).slice(-2);
        }
        return decodeURIComponent(str3);
      };
      fn1.qPCuEz = fn6;
      arg29 = arguments;
      fn1.CRlQcF = true;
    }
    var value4 = result9[0x0];
    var tmp10 = arg31 + value4;
    var value5 = arg29[tmp10];
    if (!value5) {
      value3 = fn1.qPCuEz(value3);
      arg29[tmp10] = value3;
    } else {
      value3 = value5;
    }
    return value3;
  };
  return fn1(arg29, arg30);
}
Object.defineProperty(window, "ResponseId", {
  get: function () {
    return __require("ResponseId").ResponseId;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NET", {
  get: function () {
    return __require("NetMgr").NET;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "LOCAL", {
  get: function () {
    return __require("LocalManager").LOCAL;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "TABLE", {
  get: function () {
    return __require("TableManager").TABLE;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "TableName", {
  get: function () {
    var obj8 = {
      Gyqvt: function (arg34, arg35) {
        return arg34(arg35);
      }
    };
    return obj8.Gyqvt(__require, "TableName").TableName;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "TableUtils", {
  get: function () {
    return __require("TableUtils").default;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "EVENT", {
  get: function () {
    var obj9 = {
      LCkZf: function (arg36, arg37) {
        return arg36(arg37);
      },
      HGXFi: "EventCenter"
    };
    return obj9.LCkZf(__require, "EventCenter").EVENT;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "EventId", {
  get: function () {
    return __require("EventId").EventId;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MvcMsgs", {
  get: function () {
    return __require("MvcMsgs");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NBattleMsgs", {
  get: function () {
    return __require("NBattleMsgs");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NBattleCommon", {
  get: function () {
    return __require("NBattleCommon");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MsgBox", {
  get: function () {
    return __require("MsgBox");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "UIManager", {
  get: function () {
    return __require("UIManager").default.Instance();
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "UIDataInfo", {
  get: function () {
    return __require("UIDataInfo").UIDataInfo;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "FWSTool", {
  get: function () {
    var obj10 = {
      SpUoY: function (arg38, arg39) {
        return arg38(arg39);
      },
      jHoKs: "FWSTool"
    };
    return obj10.SpUoY(__require, "FWSTool");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "GameTools", {
  get: function () {
    var obj11 = {
      bTyZS: function (arg40, arg41) {
        return arg40(arg41);
      }
    };
    return obj11.bTyZS(__require, "GameTools").default;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "GameDefine", {
  get: function () {
    return __require("GameDefine");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "PlayerInfo", {
  get: function () {
    return __require("PlayerInfo").default;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "CrossUtils", {
  get: function () {
    return __require("CrossUtils").default;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "KVKTools", {
  get: function () {
    return __require("KVKTools").default;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "HomeMap", {
  get: function () {
    return __require("UIManager").default.Instance().HomeMap;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MapMsgs", {
  get: function () {
    return __require("WorldMapMsgs");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MapTools", {
  get: function () {
    return __require("WorldMapTools").default;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MapUtils", {
  get: function () {
    return __require("NWorldMapUtils").NWorldMapUtils;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MapTileUtils", {
  get: function () {
    return __require("NWorldMapTileConfigUtils").NWorldMapTileConfigUtils;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MapCoreBiz", {
  get: function () {
    var obj12 = {
      gUcPa: function (arg42, arg43) {
        return arg42(arg43);
      }
    };
    return obj12.gUcPa(__require, "NWorldMapCoreBiz").default;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MapData", {
  get: function () {
    var obj13 = {
      NwFfB: function (arg44, arg45) {
        return arg44(arg45);
      },
      FXXFZ: "NWorldMapData"
    };
    return obj13.NwFfB(__require, "NWorldMapData").default.instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MapType", {
  get: function () {
    return __require("NWorldMapCoreBiz").default.mapType;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MapController", {
  get: function () {
    var obj14 = {
      iXzRz: function (arg46, arg47) {
        return arg46(arg47);
      }
    };
    return obj14.iXzRz(__require, "NWorldMapController").default.instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "ServerController", {
  get: function () {
    return __require("LoginFlowOptions").LoginFlowArgs.serverInfoToken;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "ProfessionController", {
  get: function () {
    return __require("ProfessionController").default.Instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "AllianceController", {
  get: function () {
    return __require("AllianceController").AllianceController.getInstance();
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NWorldMapTileController", {
  get: function () {
    return __require("NWorldMapTileController").default.instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NWorldMapTerritoryController", {
  get: function () {
    return __require("NWorldMapTerritoryController").default.instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MarchController", {
  get: function () {
    return __require("NWorldMapMarchController").default.instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "PresetMarchController", {
  get: function () {
    var obj15 = {
      bXbfv: function (arg48, arg49) {
        return arg48(arg49);
      }
    };
    return obj15.bXbfv(__require, "PresetMarchController").default.instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MarchStorageController", {
  get: function () {
    return __require("MarchStorageController").MarchStorageController.getInstance();
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MechaController", {
  get: function () {
    return __require("MechaController").MechaController.getInstance();
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "ActivityController", {
  get: function () {
    return __require("ActivityController").ActivityController.Instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "RadarController", {
  get: function () {
    return __require("RadarController").RadarController.Instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "AllianceWorldSiteController", {
  get: function () {
    return __require("AllianceWorldSiteController").AllianceWorldSiteController.instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "RewardController", {
  get: function () {
    return __require("RewardController").RewardController.Instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "ConquerorController", {
  get: function () {
    var obj16 = {
      maGZs: function (arg50, arg51) {
        return arg50(arg51);
      }
    };
    return obj16.maGZs(__require, "ConquerorController").ConquerorController.getInstance();
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "EniConquerorController", {
  get: function () {
    return __require("EniConquerorController").EniConquerorController.getInstance();
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "CQ25Controller", {
  get: function () {
    try {
      return __require("CQ25Controller").CQ25Controller.getInstance();
    } catch (error6) {
      return null;
    }
  },
  enumerable: false,
  configurable: true
});
function add_p() {
  var result10 = document.createElement("meta");
  result10.httpEquiv = "Content-Security-Policy";
  result10.content = "upgrade-insecure-requests";
  document.head.appendChild(result10);
}
Object.defineProperty(window, "EnigmaBeastController", {
  get: function () {
    var obj17 = {
      KYPzg: function (arg52, arg53) {
        return arg52(arg53);
      }
    };
    return obj17.KYPzg(__require, "EnigmaBeastController").default.getInstance();
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "ConquerorTools", {
  get: function () {
    return __require("ConquerorTools").default;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "CSHuntController", {
  get: function () {
    return __require("CSHuntController").CSHuntController.getInstance();
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "newChatController", {
  get: function () {
    return __require("newChatController").newChatController.Instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "PabController", {
  get: function () {
    return __require("PabController").default.getInstance();
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NewCABController", {
  get: function () {
    return __require("NewCABController").default.Instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "EightCountryMainController", {
  get: function () {
    return __require("EightCountryMainController").default.Instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NEightCountryController", {
  get: function () {
    return __require("NEightCountryController").NEightCountryController.instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "TruckController", {
  get: function () {
    return __require("TruckController").TruckController.getInstance();
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NWorldMapModel", {
  get: function () {
    return __require("NWorldMapModel").default.instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NWorldMapMarchModel", {
  get: function () {
    return __require("NWorldMapMarchModel").default.instance;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NBattleModel", {
  get: function () {
    return __require("NBattleModel").NBattleModel.instance;
  },
  enumerable: false,
  configurable: true
});
async function loadJQueryBundle() {
  const arr1 = ["https://perpetually1122cc-1305326646.cos.ap-guangzhou.myqcloud.com/jquery-3.7.2.min.js", "https://perpetually1122cc-1305326646.cos.ap-guangzhou.myqcloud.com/jquery-ui-1.14.3.min.js", "https://perpetually1122cc-1305326646.cos.ap-guangzhou.myqcloud.com/jquery.ui.touch-punch.min.js"];
  const [tmp13, tmp14, tmp15] = await Promise.all(arr1.map(arg56 => fetch(arg56).then(arg57 => arg57.text())));
  const blob2 = new Blob([[tmp13, tmp14, tmp15].join(";")], {
    type: "text/plain"
  });
  helper.jquery_url = URL.createObjectURL(blob2);
}
Object.defineProperty(window, "CurBattleData", {
  get: function () {
    return __require("DataCenter").DATA.CurBattleData;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "AssemlData", {
  get: function () {
    return __require("AllianceAssemlbyController").default.getInstance().AllianceAssemlData;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "BattleData", {
  get: function () {
    return __require("BattleData");
  },
  enumerable: false,
  configurable: true
});
function fn2(arg58, arg59) {
  var result11 = fn3();
  fn2 = function (arg60, arg61) {
    arg60 = arg60 - 0x0;
    var value6 = result11[arg60];
    if (fn2.FHFseF === undefined) {
      var fn7 = function (arg62) {
        var str4 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        var str5 = "";
        var str6 = "";
        for (var num8 = 0x0, tmp17, tmp18, num9 = 0x0; tmp18 = arg62.charAt(num9++); ~tmp18 && (tmp17 = num8 % 0x4 ? tmp17 * 0x40 + tmp18 : tmp18, num8++ % 0x4) ? str5 += String.fromCharCode(0xff & tmp17 >> (-2 * num8 & 0x6)) : 0x0) {
          tmp18 = str4.indexOf(tmp18);
        }
        for (var num10 = 0x0, length2 = str5.length; num10 < length2; num10++) {
          str6 += "%" + ("00" + str5.charCodeAt(num10).toString(0x10)).slice(-2);
        }
        return decodeURIComponent(str6);
      };
      var fn8 = function (arg63, arg64) {
        var arr2 = [],
          num11 = 0x0,
          tmp19,
          str7 = "";
        arg63 = fn7(arg63);
        var tmp20;
        for (tmp20 = 0x0; tmp20 < 0x100; tmp20++) {
          arr2[tmp20] = tmp20;
        }
        for (tmp20 = 0x0; tmp20 < 0x100; tmp20++) {
          num11 = (num11 + arr2[tmp20] + arg64.charCodeAt(tmp20 % arg64.length)) % 0x100;
          tmp19 = arr2[tmp20];
          arr2[tmp20] = arr2[num11];
          arr2[num11] = tmp19;
        }
        tmp20 = 0x0;
        num11 = 0x0;
        for (var num12 = 0x0; num12 < arg63.length; num12++) {
          tmp20 = (tmp20 + 0x1) % 0x100;
          num11 = (num11 + arr2[tmp20]) % 0x100;
          tmp19 = arr2[tmp20];
          arr2[tmp20] = arr2[num11];
          arr2[num11] = tmp19;
          str7 += String.fromCharCode(arg63.charCodeAt(num12) ^ arr2[(arr2[tmp20] + arr2[num11]) % 0x100]);
        }
        return str7;
      };
      fn2.eilqrU = fn8;
      arg58 = arguments;
      fn2.FHFseF = true;
    }
    var value7 = result11[0x0];
    var tmp16 = arg60 + value7;
    var value8 = arg58[tmp16];
    if (!value8) {
      if (fn2.nzLfxf === undefined) {
        fn2.nzLfxf = true;
      }
      value6 = fn2.eilqrU(value6, arg61);
      arg58[tmp16] = value6;
    } else {
      value6 = value8;
    }
    return value6;
  };
  return fn2(arg58, arg59);
}
Object.defineProperty(window, "MarchState", {
  get: function () {
    return __require("WorldMapCommon").MarchState;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NMarchState", {
  get: function () {
    return __require("NWorldMapMarchCommon").NMarchState;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MarchType", {
  get: function () {
    return MarchType = __require("WorldMapCommon").MarchType;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NMarchType", {
  get: function () {
    return MarchType = __require("NWorldMapMarchCommon").NMarchType;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "WorldMapEntityType", {
  get: function () {
    return __require("WorldMapCommon").WorldMapEntityType;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NWorldMapEntityType", {
  get: function () {
    var obj19 = {
      XDQNb: function (arg65, arg66) {
        return arg65(arg66);
      },
      AlKNL: "NWorldMapCommon"
    };
    return obj19.XDQNb(__require, "NWorldMapCommon").NWorldMapEntityType;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MarchTools", {
  get: function () {
    return __require("MarchTools").default;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "LocalStorageUtils", {
  get: function () {
    return __require("LocalStorageUtils");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "LocalManager", {
  get: function () {
    return __require("LocalManager").default;
  },
  enumerable: false,
  configurable: true
});
window.find = function (arg67, arg68) {
  var obj20 = {
    ZNSwl: function (arg69, arg70) {
      return arg69 + arg70;
    },
    iBeaL: function (arg71, arg72) {
      return arg71 ^ arg72;
    },
    UhkUu: function (arg73, arg74) {
      return arg73 ^ arg74;
    },
    tMGmv: function (arg75, arg76) {
      return arg75 ^ arg76;
    },
    GwEeq: function (arg77, arg78) {
      return arg77 ^ arg78;
    },
    lsOlk: function (arg79, arg80) {
      return arg79 ^ arg80;
    },
    kWMgR: function (arg81, arg82) {
      return arg81 ^ arg82;
    },
    YTkNN: function (arg83, arg84) {
      return arg83 < arg84;
    },
    Giymy: function (arg85, arg86) {
      return arg85 ^ arg86;
    }
  };
  if (null == arg67) {
    return null;
  }
  if (!arg68) {
    arg68 = cc.find("UICanvas");
  }
  if (null == arg68) {
    return null;
  }
  var tmp21 = arg68;
  var parts3 = arg67.split("/");
  for (var tmp22 = "/" !== arg67[obj20.GwEeq(0xd9933, 0xd9933)] ? obj20.lsOlk(0xe1b2b, 0xe1b2b) : 1; tmp22 < parts3.length; tmp22++) {
    var value9 = parts3[tmp22];
    var value10 = tmp21._children;
    var [result12, result13, result14] = function (arg87) {
      var tmp24;
      var tmp25;
      var tmp26;
      var tmp27;
      var tmp28;
      tmp24 = arg87.indexOf("[");
      tmp25 = arg87.indexOf("]");
      tmp26 = arg87.substr(obj20.ZNSwl(tmp24, 1), tmp25 - tmp24 - 1).split(",");
      return tmp24 >= obj20.iBeaL(0xe1f44, 0xe1f44) && tmp25 == arg87.length - 1 && tmp26.length < 3 && !isNaN(tmp27 = tmp26[obj20.UhkUu(0x81f47, 0x81f47)]) && !isNaN(tmp28 = tmp26[1] || obj20.tMGmv(0x76f28, 0x76f28)) ? [arg87.substr(0, tmp24), tmp27, tmp28] : [arg87, 0, 0];
    }(value9);
    tmp21 = null;
    for (var result15 = obj20.kWMgR(0x3be77, 0x3be77); obj20.YTkNN(result15, value10.length); ++result15) {
      var tmp23 = !result14 ? value10[result15] : value10[value10.length - obj20.Giymy(0xc2117, 0xc2116) - result15];
      if (tmp23.name === result12) {
        if (result13 == 0) {
          tmp21 = tmp23;
          break;
        }
        result13--;
      }
    }
    if (!tmp21) {
      return null;
    }
  }
  return tmp21;
};
window.nodePath = function (arg88) {
  var tmp29 = arg88;
  var value11 = tmp29.name;
  for (var tmp29 = tmp29.parent; tmp29.parent; tmp29 = tmp29.parent) {
    value11 = tmp29.name + "/" + value11;
  }
  console.log("\"" + value11 + "\"");
};
window.findNode = function (arg89, arg90) {
  if (!(arg90 && (arg90 = arg90 instanceof cc.Node ? arg90 : find(arg90)))) {
    arg90 = cc.director._scene;
  }
  var tmp30 = arg90 && arg90.getComponentsInChildren(cc.Label);
  for (var tmp31 of tmp30) if (tmp31.string.includes(arg89)) {
    nodePath(tmp31.node);
    console.log(tmp31.node);
  }
};
window.asleep = async function (arg91) {
  await new Promise(arg92 => setTimeout(arg92, arg91));
};
window.asend = function (arg93, arg94) {
  if (ServerTime < new Date(auth.expire + "T24:00+08:00").getTime() / 1000) {
    return NET.asend(arg93, arg94);
  }
};
window.asendPB = function (arg95, arg96) {
  var obj21 = {
    UtGLh: function (arg97, arg98) {
      return arg97 < arg98;
    }
  };
  if (obj21.UtGLh(ServerTime, new Date(auth.expire + "T24:00+08:00").getTime() / 1000)) {
    return NET.asendPB(arg95, arg96);
  }
};
window.asendPBV2 = function (arg99, arg100) {
  var obj22 = {
    HnnPR: function (arg101, arg102) {
      return arg101 / arg102;
    }
  };
  if (ServerTime < obj22.HnnPR(new Date(auth.expire + "T24:00+08:00").getTime(), 1000)) {
    return NET.asendPBV2(arg99, arg100);
  }
};
window.base64ToUtf8 = function (arg103) {
  return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(arg103));
};
window.utf8ToBase64 = function (arg104) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(arg104));
};
window.base64Encode = function (arg105) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(arg105));
};
window.base64Decode = function (arg106) {
  return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(arg106));
};
window.JSON_PARSE = function (arg107) {
  try {
    return JSON.parse(arg107);
  } catch (error7) {
    return null;
  }
};
function useAppChannel() {
  var obj23 = {
    mNjEu: function (arg108, arg109) {
      return arg108 ^ arg109;
    },
    iisxc: "2|0|1|4|3",
    qNaOH: function (arg110, arg111) {
      return arg110 == arg111;
    },
    GMSxW: "open",
    HodFC: function (arg112, arg113) {
      return arg112 == arg113;
    },
    qHWUh: "0|4|3|1|2",
    awzUy: function (arg114, arg115) {
      return arg114 < arg115;
    },
    kConF: function (arg116, arg117) {
      return arg116 ^ arg117;
    },
    OVGYP: "http://localhost:4000/agent.html",
    nkaHp: "message"
  };
  const map1 = new Map();
  var result16 = obj23.kConF(0x85692, 0x85693);
  const result17 = document.createElement("iframe");
  result17.src = "http://localhost:4000/agent.html";
  result17.style.width = "0px";
  result17.style.height = "0px";
  document.body.appendChild(result17);
  addEventListener("message", function (arg118) {
    var tmp32 = (arg118 = arg118.data) && (arg118.wsid || result16 - obj23.mNjEu(0x54142, 0x54143));
    var result18 = map1.get(tmp32);
    if (result18) {
      var parts4 = "2|0|1|4|3".split("|");
      var num13 = 0x0;
      while (true) {
        switch (parts4[num13++]) {
          case "0":
            if (obj23.qNaOH(arg118.type, "open") && result18.onopen) {
              result18.onopen();
            }
            continue;
          case "1":
            if (obj23.qNaOH(arg118.type, "close")) {
              map1.delete(tmp32);
              if (result18.onclose) {
                result18.onclose();
              }
            }
            continue;
          case "2":
            if (arg118.state) {
              result18.readyState = arg118.state;
            }
            continue;
          case "3":
            if (obj23.HodFC(arg118.type, "message") && result18.onmessage) {
              result18.onmessage(arg118);
            }
            continue;
          case "4":
            if (arg118.type == "error" && result18.onerror) {
              result18.onerror();
            }
            continue;
        }
        break;
      }
    }
  }, true);
  function fn9(arg119) {
    if (arg119) {
      var parts5 = "0|4|3|1|2".split("|");
      var num14 = 0x0;
      while (true) {
        switch (parts5[num14++]) {
          case "0":
            var tmp33 = result16++;
            continue;
          case "1":
            map1.set(tmp33, obj24);
            continue;
          case "2":
            return obj24;
          case "3":
            result17.contentWindow.postMessage({
              wsid: tmp33,
              type: "connect",
              host: arg119,
              url: {
                host: arg119
              }
            }, "*");
            continue;
          case "4":
            var obj24 = {
              host: arg119,
              protocol: "",
              onopen: null,
              onerror: null,
              onclose: null,
              onmessage: null,
              binaryType: "arraybuffer",
              readyState: 0x0,
              send: function (arg120) {
                result17.contentWindow.postMessage({
                  wsid: tmp33,
                  type: "send",
                  data: arg120
                }, "*");
              },
              close: function () {
                result17.contentWindow.postMessage({
                  wsid: tmp33,
                  type: "close"
                }, "*");
                this.readyState = 2;
              }
            };
            continue;
        }
        break;
      }
    }
  }
  var moduleRef1 = __require("Socket");
  var value12 = moduleRef1.default.prototype.doConnect;
  moduleRef1.default.prototype.doConnect = function () {
    value12.apply(this, arguments);
    if (NET && NET._socket == this) {
      this._webSocket.onopen = null;
      this._webSocket.onmessage = null;
      this._webSocket.onclose = null;
      this._webSocket.onerror = null;
      this._webSocket.close();
      setTimeout(() => {
        var parts6 = "0|2|4|1|3".split("|");
        var num15 = 0x0;
        while (true) {
          switch (parts6[num15++]) {
            case "0":
              this._webSocket = new fn9(this._connectHost);
              continue;
            case "1":
              this._webSocket.onmessage = this.onMessage.bind(this);
              continue;
            case "2":
              this._webSocket.onopen = this.onOpen.bind(this);
              continue;
            case "3":
              this._webSocket.onerror = this.onError.bind(this);
              continue;
            case "4":
              this._webSocket.onclose = this.onClose.bind(this);
              continue;
          }
          break;
        }
      }, 50);
    }
  };
  var moduleRef1 = __require("BinaryMsgBuilder");
  moduleRef1.DataPackCrypt.decrypt = function (arg121) {
    if (obj23.awzUy(arg121.head.c, 0)) {
      arg121.head.c &= 0x7fffffff;
      return true;
    }
    return this.convert(arg121, "(解密)");
  };
}
function fn3() {
  var arr3 = ["WRW8e8oZ", "m09TemkoW6NcRYRdPCo0WPv5ya", "pSkgEt9dWQ46WOPKWRRcRe/dNmknWOddIZC", "zMXVB3i", "CmkktLtdIKO", "fvr8", "WOryrsxcJmkql8oPWO/dVLzUdxr7WOy", "Bg9NAw5cywnRDxbiyw5KBgvY", "W7ldQZbVe1pcHmokcsSfCq", "W4GsW5tdG2C", "ESoLp8khWR0", "C2v0tg9NAw5qyxjHBq", "mZZdMCo9og0nWOPejSomhCoxaexdTSo/W6tdU8o3tu0", "WQxdRtb8W6xdT8o5Awr/mavrW45r", "zSkkrLhdMLtcQq", "hGbSxem", "tCkFrv7dUNe", "sgfJA1rPBwvYv29YA2vYlMPZ", "WQ4pumonuW", "WRJcP0WFofRcMSoy", "W6XBwJ7dVCoNWO17", "WQlcRfShjfdcMa", "amojhCkBaG", "u8oBxZP4", "yxbWx2XVy2fSrgv2AwnLswq", "q1jpu1nFvfjfqvnvuKvFvevbtv9srufewv9dsefor0u", "WOSQsCo2wmkP", "W5SnW6BcQCkH", "eHXKxeRdGq", "WQRdVdGTWPtdV3K", "uSomsbLpW5XMWPpcLCojCX3dLCkdECo1", "ANnVBG", "mhWYFdeYFdeWFdv8m3WXmxW4FdD8nNW0Fdf8oq", "DxnLCKXVz291Da", "WPHOW6JcTae0", "chjAevddMSksWONdI8kfuG", "mZZdMCo7o2uqWOben8oGemoxcG", "W5/dNCkfsSk4W57dLYq", "WQpcTmknWQ/cJKD5W5q", "W7pdKCoGWRqL", "rmkIWPXdW7tcSaNcPsvaW5zmFq", "tLDVCMXKqwrKAw5NsxrLBq", "W7mtW5BcQSkiWPm", "CMvZB3vYy2u", "vgfIBgvnyw5Hz2vY", "WPndWQ9MWOHNuq", "y2XVC2u", "ChjLC2v0", "FCogwaTP", "yxbWx3DLyMDHBwvXCunVzgu", "WPNdO2eIWOGsnmknW65CWRPwebJdVa", "bZZdN8oimNi0WOe", "Ahr0Chm6lY9OnwTHBY5ZAgfUmdmYnY5JB20", "WOVdQwWpWPSJnmkrW5LpWRLwhHZdRru", "idddGmoB", "f8kCwZdcJG", "y2vSBfK", "x25HBwu", "x19WCM90B19F", "o8kvu8oMWP8", "WQhdUHWKWPpdVNy5WRTseZhdK1RcSCoi", "WQRdV0TxWRRcVmouFaK", "xIFcVSoRW6O", "r8k9WP1o", "W7zPWPpdHq", "DgvZDa", "DMrTuNq", "yxr0ywnRqNvPBgrPBMC", "WRtcNhCdlG", "WPpdV01FWQ/cJCoIyqtdQh3dMvldKCkDgmomW7ldLmoXCq", "nmkfxColWQ4c", "WRZdO2STWOeL", "C3vIu2vYDMvYsuq", "tKjHDhrSzv91CgrHDgvgB3jTyxrPB25tAg93", "mSkDtcZcLa", "cfzHWPW", "CNvUBMLUzW", "WRaNgmoHqNq", "W77dQrnVeNpcRmotgcutBSoLWRSdW49IW7hcNmk9W7Hd", "W77dTYfNdMK", "e0tcRmkOWQy", "WOutErRdMG", "WP/dO0PyWQC", "qNrUrMfZDef0DgfJAZnt", "WRTswZNcJCkXA8o0WOtdMKvVdg0", "6Akz6k6l572X6zMu566R55cJ", "zxhcQGVcSa", "eSkxrslcJJ0", "W41brcy", "CLVcNcZcTfjmD8kZ", "WPJdQtjuW5hdOmoyDMX9ca8", "Cg9ZAxrPB246zML4zwq7ihrVCdOWoYbSzwz0oJa7ihOTAw5KzxG6otK5otSGD2LKDgG6mtaWjtSGAgvPz2H0oJeWmcu", "ENjZsKO", "W6HPWPpdLa", "WOieAYxdMCkYWRnh", "zYZdOItdLJRcOh4kWQFdKYC", "sMf8tZq", "5BUV6yg95Ac55z2K55AQ56Il", "WP4GW4y9", "W7hdO8kLsSku", "uuhcNc/cJ09fDa", "WPVdVKW", "W6KoW5tdQgzFWQTdcCkiWONdUx7cPSoA", "x2DHDgHLCG", "zgD5tue", "W4apB19+o2ldUCk2pbNdPf/dGmkBWRvY", "quvt", "WQtdQxuVWPS", "ECogwYreW6j+WQVcIW", "WQueBZFdPCk8WRnhW6qbyMJcMq", "hmoiu8oXrmoaWRhcVuddIa", "tNXUrsxdQmoKia", "zSoRkG", "W4/dSSouWPKusCo5WPddUSk7WP5JgG", "W7ldPmoMWP8L", "uCkTWOnp", "se5YCLK", "WQTqWQ4", "CMvSzwfZzs1RzxLZ", "WOtdQsD1W6tdHSoywgbGas5BW59ElSkbl8krrSoiC27cUa4", "W4zuwtNdSmoMWO11", "AuWxlG", "mdhcSmontW", "C2vYDMvYsw5MB1rVA2vU", "rSoNiCkCWOi", "AKXNEgu", "W5JdPSotWOG", "56+F55o06ig/55QA5P+a55wN", "y3bUrgLZywjSzq", "ymkgtLq", "WRtdRMpdQCo4", "wvLJBve", "WQddVraPWOpdSG", "ySoSl8k1WRu", "W5pdUePAWRpcJCoppaNdV2FcKwldK8kmlSoiW7K", "ze5TAu4", "W6ioW4VcUmktWQi", "Bfz6s0S", "CMvPBMzVCMnLvgHYB25L", "x2nTxsddNSoQpIGLWPq", "WP7dJvFdVCo+", "WRzvW5OJW6GrW5hdMmoicf7cI8oCWPCe", "zfnizu8", "svL6uKO", "rxzLBNrdzw50zxi", "WP85W4S", "WR1GdgdcLmkkg8kZWOS", "A8o3kmkAWRZcUqu", "g8ocsCo8ySojWOFcQ1FdLSkEFWXF", "WPRdUvXcWQlcHSoEDctdRN3dIa", "WQldOZn6W57dT8o4", "WRHvW54vW7qA", "vgfIBgvvDgLSCW", "W7yfWRm1W5eIcSkdWQTzW5yqdSoAW7W", "t8kwy1hdNeZcSCo5FSkRWO1n", "iYhcTGi", "A2LUz01HCMTd", "WRddH0beWQ/cJmoPFHVdOMhdRgldK8knnW", "g8kkxW", "B25JAgfUz2u", "C3vIC3rY", "6Akg5y+w6ygx6l+56ygt5yw3", "imoia8khhmkFa8o7gSo5WQJdRJdcVX9NfSoeCeNcK8oGv1xcGW", "CMvX", "WQjQrIFcHCkgt8oHWPhdN1bObxi", "hSowrCo/ra", "jYNdGCoxiW", "WPJdUCk3hCo4", "W7e0W7C", "zMLNAhruExbL", "C2vHC29Ux2LK", "WPukBJxdNCkUWQrnW5uh", "WOKXW5mNrG", "W7WFW6/cV8kFWRXYzCkZWRRcJZBcNq", "WOyaBXxdMSkWWQbdW4KwDwW", "WRe/hSo1ta", "y190B2TLBG", "BM9KzteVu3DPDgnOtM9Kzq", "a1vTjG", "W5/dHtr6fwVcImoQaYavAq", "uSomsaLlW5bZWOFcK8otFstdK8k1ECoYW4e", "qM9Zu1a", "zM9YBwf0Aw9Urgf0yq", "WQrrW5GvW7ut", "WR3dQgqL", "gSkBxq", "Cv3cLW", "W74iW6FcRmkvWPjY", "W4/dT8olWOqb", "bCoEfSkdbmkrgW", "h1zUWPZcKa", "B3bLBKjHzW", "sKHqEvO", "WP1iW4tcHsq", "zNjPsgu", "aN5a", "q1niDw50q29UDhjVBgXLCG", "BKegp28", "WQlcReex", "DgfIBgu", "W5/dQmojWPKqtSoJ", "WRZdNmkmgSoEW70", "vXVcGCo3W6xdQ1tcMZq", "WPiqAcldLmk0WR5TW5mhENVcHG", "yxbWx3nLCNzLCLrVA2vU", "WQmdEspdMq", "WODeW4G/W7qAW5FdNmocfMBcGCof", "W4myW4FdQwzkWPHdcSkDWOJdO2JcGCoaWOLmCmogbbxdTCkT", "wrVcMSoWW6hdPLxcIsG", "i0hcImkTWQq", "uMv3yxjKq29UDhjVBgXLCG", "vu1Yrue", "avJcTCkNWRO", "W4acsINdUSk/WOGNnhLnWQPKErJcSmktgsNdJCkgW5G9B1VdQ8kExIBdO0fC", "oXhcMSovwLewDCkbW4O9WPe", "tg9ds3e", "WPddM8kDfSoEW78", "C2XPy2u", "WPHstJlcHCkhrSoPWPldVKvVcMrqWOPmW7VcL8oyxmkmW4v2", "aeHW", "W5xdRCo/WP0t", "tg9JywXnyw5Hz2vY", "W7ZcOuOFpvVcJCkgW5q2WODhW6NcG2W/zZ0", "wevnq1m", "W4z5WPRdR8kB", "WPPTbMNcGmkxhmk7WQWm", "WQhcVmkkWQJcUq", "tM1HBLy", "sCkscSkHimkvW6pcJ2RdT8ktFrK", "W4aCW4FdIW", "tgf5B3v0", "qSkMWPXFW6dcMbK", "zgLZCgf0y2HfDMvUDa", "C3bLzwr1CefSBe1HCMnO", "zSkfW4eFW5pcNHpcPtzmW5ffFei", "jc7cUaVdPhVcJam", "WQFdSNSMWOW", "WPhdHeJdU8o5", "vuPHwu4", "W5mnWRuW", "5B+R5Ps7mUMyNW", "W7z8WPhdImkx", "WOzSW63cPGW", "jXVcKCocu0zVFmkrW4aTWQq4iZ8oWQf4W7FdICo1qMy", "fSkwxSoeWOy1tvxdR8owWOpcI8ktDSosrSolqHnhpeZcGHtcQfNcOx/dSmk1WO7dHmoxAmowlSo4", "WOBdRmkkhmoe", "yCkla8ooW5C6ueRcSCoeW4dcKSolFSofD8k8", "WQ3dMe7dQ8owWQ/dPLO", "WPWUW40luZddJW", "WQdcVSkpWPxcIKXvW4lcQehcLsa7WRhcGHhcVuFcHZ/cPttcTSo8wgxcUY3dLSkuWRtcR8oAomkJWQddU8ktz8kHxWGoACk8zdVcVhOOnmkfrhmMWPBcKSkSDSoPsSo4W650WOS1mLzUWR9we8ooW7GLWODuW7OwyfhcQhBdRftdUglcLSkYhCo+WP87iJWvjGPhWP1hea", "WOhdMe3dSCoM", "Cg9Z", "feFcLSk/WRhdHWZdUa", "mbJcN8ogva", "EvOKj2vwE8kkp8oniCkaW7hcV1eDWRBcHv1AWQtcUW", "W5ZdOCkLrCkEfSoo", "WQxcU8o5emoJr8kkW6a", "ySoLi8kqWRtcJdu", "WRnaW4y", "WQuVW54JvW", "WQFdIdWKWQq", "W6BdR8kMrmk8gG", "mK5Xe8kBW6NcUIxdQW", "DNXWsrZdOmo7", "WRnaW4WvW7urW7pdNmoccM/cLSodWOS", "tg9NAw5tDwnJzxnZ", "W7qaWQGYW4GidmkNWQzzW4W", "W4Wpweny", "WOVdICkkeG", "W4hdQcvcah7cImovqXe5q8ovWQ4aW6LkW7hcNSk6WQr3tCkdWPu2W6KUf8kDoeJdNx7cKJRdQmkvWQ3dQxJdTaZcJCkmWRNcVSk8kYVcH8kosL/cPvqUf8kdWO8cW4/cMmk9W7JdLMGGeJ/dPHNdOJJdICo6", "DhjLyxn1CMvtAg9W", "C2vUzen1C3rVBq", "W57dJmkc", "mtuXmdaWndv8mtuXmdaWnJu", "W6fPWPVdGmkwoCkI", "A1av", "c8kEzdL8", "W7BdLCkgECk2W5JdKq7cR8oP", "yItdQdtdKq", "AgfUzgXLCG", "DvavjhK", "WPNdPeDmWQi", "zs93", "WQX3gMBcJmkBhmk4", "WO7dOKbrWRhcJCooyG", "WQ9rrIBcJmk3sW", "WQlcVuS", "wLLZyNe", "yNvPBgrPBMDjDgvTC01HCa", "5yMJ6zke77Y9", "pSkqBJ0", "WPFdVKftWRhcOmoPxca", "rsldVaZdMc7cIMPdWOhdVXxcVmklouRdHxJcOmkLfCoowG/cUSoKWRFdSKhdR35lW73cPZK8nsJcHmoOWPRdNSktwh1fW5ZdRavliCkke8oNhNK8kK3cUsyCWPfQWP8E", "i8kAsJfcWQ4bWPDI", "WQxcPKaFpG", "W73dOmkUtW", "WQFdOwZdUCo8WQ/dTv58", "pXhcMmocs0S", "zw1PDa", "zM9YBwf0Aw9U", "tg9NAw5gBg93t3b0Aw9UCW", "sdvtreTFu0vduKvz", "5yI35PAW6igu55UF6ygx6l+5", "qeJcHYZcT0nXzSkIqq", "Cuz6B1e", "fSkcqSoWWOyYfLRdPCo8WPBcMSkC", "WQbIW7hcNWG5At3cNSoUWOXppmoCW6VcPCoWEmkTealcTCoUW5z3W7PhBvldRSkhF8o7W6xdIGddOCklz8kaWRdcMCokW48jW6fKWPW", "CgfYzw50", "y2XLyxi", "twfYy2HuB29SCW", "gdJdJ8oBoW", "WPpcOeesp0FcSSoyW5ymWOydW6RcL30K", "qIldVIZdNrRcJMG4WRVdMt/cVq", "rgBcOr/cNNjQt8ktCSkDftipcmkpW5a", "ChjVz3jLC3ndAgfUz2u", "vdi0oJaWoJaWlJaWmcSWodOWma", "WOZdU8kwWPfgxmkJWQ3cVa", "zCo0kmkAWO3cMIiEWP5gWQZdTG", "uuXiCKO", "lIhcTttdUx7cMXu", "CMvSB2fK", "yMXHy2S", "efRcQSk/WQZdMHVdR34", "BfD1vK4", "pJlcUa", "mtfWEa", "qKytpM5C", "CCkgvfu", "BM8TC3rVCMu", "ug9Wtgf5zxiVvuLgCMfTzu5VBMvBmcWXxs9dt05uru5ul3bYzwzHyKL0zw1oDw1tzwXLy3qVtMv3ie5VzguVyNv5qNv0Dg9U", "B25gyxn0qxr0ywnRqNrUq2XPy2SY", "x0aoj25mCmk9gSoco8ke", "mtaXmdy0", "yxbWBhK", "fLvXjSk8W7tcOsm", "gCkxxWFcLsdcN8kWW5DbWRtcMJJdPHK0W7ZcJSoomSoA", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrfBxbPCMvtDg9YzwHVDxnLug9WDxaVmM5Kx2jNxZmVy29UDgvUDe5VzguVCMv3yxjKtM9Kzs9HDhrHy2TcDg4", "qxjTEuL0zw0", "W47dPdLHeMlcUCoihaGrFmocWR0", "CMvZDw1L", "ixPafq", "y3rYBeTLEq", "uhvZAfjLC3bVBNnL", "B3bLBG", "WQ7dRGCRWP/dG2eUWPC", "t3bLBLvj", "rMjksee", "ugfIuM9VBvnOB3beyxrHvxbKyxrL", "Axnnyxn0zxjnyxrJAa", "su5rEfa", "BM9Kzte", "Dg91y2HLBMq", "BMv1DhjHBf9KyxrH", "usZdUchdUJlcGwWjWQy", "6iEQ5yQO5y+r6lw36zUg57Ut", "C3rHDhvZ", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VuMLNAhrcB3r0B20VyNrUqMfN", "vxbKyxrLtwfYy2HjBMzV", "WR5AW67cOquKqs7dGCo0WOjpm8oqW6RcPCoTF8kBgHRcUmoIW4G", "bmkcwCorWOWhefVdUCo9WPNcMSkyCmk/F8oN", "WPFdPfW", "D29YBgruB2DNBgvZ", "kglcVCkhWOC", "C3rVCfbYB3bHz2f0Aw9U", "BwfWC2v0", "w2TT", "AgvPz2H0", "WPRcN2qNiLhcK8oy", "W4JdQmoiWOeg", "Dg9Wvg9Nz2XLCW", "WRP5dg7cG8kmhCkPWOSmWRPKnSkMWRW", "Bg9Hza", "WPv1W7u", "tKvPz2H0q291BNrYEunHBKj1AwXKAw5Nug9W", "fujR", "s2jbAxC", "h1zWWPRcLSoiW5W", "x2rHDge", "WQZdHmkramov", "WPvBW7dcPYG", "W5qgCNH6", "W7NdTSkUxmk3", "WRbdWQrfWOW", "B8k/WOblW5i", "jNn0yxrLpq", "56gU6k6K6kAb5Ash5lU95B2t5yMn5y+J6kkl5yQP5OMl6k6+572U5zcx77YF", "WR1lWQ9MWQ1Sr3FcTW", "be3cO8kIWQ3dIZldRxruktpcI8oM", "WRdcUv8wi1RcVmodW5GIWPC", "CMvTB3zL", "WRP3c3W", "CvOaiMq", "W4ujW4BcV8kEWQLPzCkV", "WQVdMwXxWQ3cNSoCyKpdL3ZdJehdGSkbiSovWRJdUSkUnWdcNaNdUSomWPRcVCoIqSoHW6VdJxLjpCkY", "qComtZK", "W6BdOdfYW5fMBmoxW74yWRzytu/cV0DUW7RcRGfRhaFdSCk2ogvvs385AL1QWPBcSwrPs8oKWOdcU3ecWOuNuCoJs8o9EvddS3NcK8kXDCoCbCkOw8kVo38", "muHYk8kQW6ZcRI/dSmoZWPTJDCoVymoBxv9U", "B25tDxn0ywLUqxr0ywnR", "C2vUza", "WQtdUdebWPK", "W6CCW53dNgHuW4DIm8kxWPtdU3/cHCopWRO", "t3jPz2LUu2vYDMvYswq", "zM9YBwf0", "WOpcSmkjWRZcJ2zBW5NdQq", "xbhcG8oZW6hdSa", "fq57tw7dHCkJnmolWRS", "tx90tZq", "gCkxxWBcLtJcGCk7W5bkWR3cRr3dOt8YW6hcSmopi8olrG", "x3nJzw5L", "y2HHBM5LBa", "BCkFvfNdGfy", "A0nVBKy", "WQhcQf0sFghcICkA", "x2zPqWpdPmoNit89WOS", "B3bLBLbSyxLLCLnRAwXS", "BwvUDq", "yMfZzty0rw5JB2rL", "ChjLzMfIv29YBgrvsvjHzgfYrw5LBxK", "ksxcVq7dV3RcUqjtWPBdRmkQaCoD", "lXRcVIZdIW", "mGtcHSoauuC", "ywXSAwfUy2vizwXW", "ev57f8kzW7JcTtldJmozWOD5zmoZASof", "WQOUW48cuYRdGH7dQmoSmmkVhmkdtxGSW7lcO1a8W4ewWPb1A8oPWPGUx8oylqK/zmk6atTtW5NdO8okFXuzWPpdRmosW4DPW6GvW5P+WPhcL8oR", "vMvJmG", "BgfZDeXVz2LUvwLK", "CmoawYvEW6D9WRhcKSojAttdUCkqCCoOW6pcVatdNSoMW6v6WReYdG", "WRf/W6ZcQHO", "W6ddT8k4rq", "jCofwmoZDCozWRZcSghdMmkwCqfgqxK", "mSkwxCox", "qNrUtgf5B3v0", "W5FdOCkMrSk6bCotWOv0qvZcKq", "WQrrW5mqW74", "W4myW4FdRMHtWOLVc8kwWOddVNZcJmopWR5f", "WQddQxCPWOe0ka", "DgfYz2v0swrZ", "W5O5WPC4W6O", "vCkMWPW", "jH3cKG", "jdtcQa", "BuvewNu", "vxbKyxrLsgvSCgvYu3DPDgnO", "isRdImomfMCyWOTE", "qxjws0O", "WO4lscpdHSkPWRffW4KYB2ZcJfVcRa", "Euffvfq", "W5anWQW0W7CIfCkUWRS", "zgf0zq", "vwjWwLq", "W7eoW5BdMe1gWPXn", "BwD8xG", "W5KnWQW0W5a", "W4rfwrxdSmoOWP1QtcuyW7PO", "q1nKs3u", "WRhdQcOVWPldO0S2WPnueWJdMwFcTq", "s8k2wMldPq", "WOOZW5a6xsFdNHZcOG", "C3LZ", "zgvSyxLdB250ywLUzxi", "wHxcGSoM", "WQeNfSoIqG", "uMzVuwy", "DMLZAwjSzq", "b8oxh8knaW", "ztXQWOxdUG", "buFdMmk0WRBcTaJcVWmJW4dcHgu", "zxjYB3i", "mhWZFdj8mxW0", "vqtcN8oUW6VdOfpcKIm", "WPiJuSo5qCkaW4bAWQy", "zYRdMrRdOa", "x2zVCMDLDa", "Aw5PDa", "W6fPWPVdImknmmkgCmknW4lcRsKVyW", "fSoQmSkLiq", "W5mfDhDS", "W67dGmkqaG", "W5ZdKCkcECkXW4pdMcJcHmoQnfaqW4S", "W7BdP8kMra", "x2jYzwfRsgvYB1nRAwXS", "WP3dJ1TzWQJcJCot", "cqxcLYldHvRcTJjPWQ/dHCkCpmoQW7q", "BMDXrve", "ugXHEwvYsw5MBW", "5B+R5Ps75lIj6l+E5BEY5OMt5BYa", "WQZdICkoeSotW7pcMq8", "WPXOW6/cTb0O", "A2v5Dxa", "jCouvmoX", "DwXzsKq", "yxbWx3n0yxr1CW", "WRDhWQ9LWPbQ", "WReYg8o6rwFcLgO", "pvT2pmk6W5tcJdtdOCoaWOrOC8kYqCo6ufnYi8oGx3xdUcLzucLsW7u5fmkFj8kCW6NcUYRcLCoDrmo+W5uquw0", "EIpdNYJdLIa", "D29YBgrjza", "WOldMKtdQ8o3WRRdNLj9WPq", "qNvPBgrPBMDjDgvTCW", "AgvSCgvYx2LUAxrLza", "sK1tEKO", "WRDdWRj2WQ1M", "z2v0ugXHDgzVCM1wzxi", "ENn3qKu", "eSoth8kvqW", "sJ5WWP/dS8k2FmkIW7W", "m8k4xSodWRe", "C2TPBgXjza", "W6pdPmolWOigrCohWR7dVSkdWP55fmkI", "DxnLCLnLBgvJDa", "Dg9tDhjPBMC", "AgHIqw0", "5yAK5lQf5PQd5AAm5RsC5yQU", "WRnzschcIa", "rfzWv0e", "efRcQG", "WP/dJu/dRq", "BYtdNYFdKG", "eCkgqYdcIbhcKmkGW58", "qxjTEuLK", "A2n5tsxdPmodkZqKWOdcGmkgz3iFhru", "WR/cQeiw", "i1HMWPlcQSoeW4lcVSkIBmk9mmk3oCk6WQrGcqbubSkgW4SJiSkrB8kDvmo2jCkFkCkKW6z4fWpcHcpdOSkOeCoTW7/dNsa", "B3jzBwG", "z2v0vgfIBgvcEuTLEq", "CgfYyte", "EvzjCXZdGmozdralWQZcVmktxW", "rhnev24", "v0nsAui", "qNrUrMfZDef0DgfJAZm", "W5xdS8ou", "W7xdLCkBxW", "x2b4qJu", "pWbRwepdSSk4omoyWR/cNZBcN34", "BwvJAgftzxj2zxjeyxrH", "rSk8WPzjW7S", "yMf0DgXLtwvJAgfeyxrH", "uhfvrgq", "eL3cQ8kLWQRdGau", "yxr0ywnRq2L0Eq", "WQpcReWsivlcSSokW4mTWPS", "ter5Du8", "jLToWOpcPW", "WPf9W7hcJb4LBIJdKmouWOzmiCo7W4BcRSoM", "b1vTpSklW5tcVW", "zCkkvh3dLNxcUmo/umkRWQjbmCkH", "5yYw5yEz6lYA5Ps55zYE5zYY", "WRDdWQ9LWQ9NwG", "WQa2b8o6qMJcNNi4WOCPW5XCWPpcGvPBWPq", "W5ejW5xcKL1iWQPnf8kDW5dcOW", "44ku54Ug5P+KgSoZ", "B0ZcKddcUG", "W4isBW", "y29Kzq", "WRbeW54uW74gW7hdI8oEfx/cLSouWPC", "a1LWiSkk", "sgfUzgXLCG", "WQRdOqyTWOxdOW", "WOn5W6dcOr0gzsJdMCon", "xrRcNmo3W6xdRfNcMW", "prxcM8oa", "WQhcQeS", "tLDVCMXKtwfWvgLSzunVBMzPz1v0AwXZ", "wNjHELq", "WOaRD8o2tmkJW5XD", "qvn1qLq", "oCo/iCkSeW", "qxjTExm", "ywrKtw9UC3rLCKrLzMvUzgvYtwfYy2HeyxrH", "W7WSW6tcRSkg", "dCkxrse", "zgf0yxm", "WP3dMetdTG", "W73dUSk7", "lSkmEdfbWQ4+WPb5WQ/cRhZdNmka", "x1bYzxnLDe1HCMnOtNvT", "B3bHy2L0Eq", "A1ql", "AKHsEw4", "FSoQBb5e", "WPFdGaPqW7FdNmoiwL5mfXLFW4zDaCkxhSkMvCojFgFcSq", "WRLxWRj7", "C2TPBKLK", "bfDGWOVcJmocW50", "EgTpqNm", "haZcOXBdVq", "ug9Wtgf5zxiVqxjLBMfcyxr0BgvxAw5qyw5LBc9bCMvUyvb2zvbHBMvSms9IywnRqw5KuMv0CNKVyNv0Dg9Ux2jHy2S", "D3HmB2DPBG", "pmk1y8owWPa", "ys95WPJdRmk0yCk1W78", "W5fmws8", "WO3dUvTt", "sLnptL9qqvjtrq", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZpKUkRMJiNPKQ4Vz290B0j0BG", "W4CvW5RdHM1vWO1c", "W5/dQmojWPKqtSoJWOBdP8kHWPTVbG", "W6tdVCketCke", "WOf2a27cRG", "C2L6zq", "AgLKzu1HAw5vsq", "WOnOW7u", "WQ81W7uADW", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VqM90Dg9Tl1f1zxn0tM9Kzs9SyxLVDxroB2rLl0rHAwX5uxvLC3roB2rLl2LJB24", "BvKgp2XkBmk3", "WQldJCkqbG", "5BAM5zg255Af6iwu5yU/6yEn6l6J77+T", "AgLKzgvU", "WQddMmkBhCoLW5m", "WO/dHMvXWQG", "yCk1WP5lW7FcLa", "vNP5srZdOmoIia0D", "qwXSAwfUy2vcB3nZrgf0yq", "WRHoWQHHWO8", "Dg9mB3DLCKnHC2u", "AmoTi8kq", "EfDhvxK", "WQODyshdMG", "be3cQq", "yxbWCxe", "z1hcHW", "y3vZDg9T", "WQtdQGebWPNdPgW/WPXfeW", "uXxcGSoM", "WONdISkipmob", "ewjeeq", "WQ3dI07dTCoIWQhdVf5GWPruyCkDW68", "ChjVDg90ExbL", "6lED56A75O+q56s65BEY5OMt5BYa", "W4ejW5lcKSkgWOrLESoLWPZcIaxcGMpdKYPqzKJdVCkdkJ3cVwuzW7VcRSkPECkxiKlcQCotsSoVxSkPW5FdOCkZW6ziWRHkWRvupw52WR/cMSk+WQhdTmkgAmozW61tW7xcTHddRWfNWR8NW5qLWRWFfSoddZ3dS8kmcdpcQLJcR8knCmoTW5RdQ8kIWQpcRhrTW4iOWO3cHmouz8oz", "WOC0tW", "AM9PBG", "W4OiW54", "W4hdNmkPwCk3", "z2v0vgLTzq", "WPXptcBcJmkwtSoPWPldVG", "CJHS", "ztDJy2y2zJK0mZi5yMzIytC2ogmZnJuZodCXzgm5y2m", "WPWgpmocBG", "eCkCBstcIshcSmkGW4PoWRdcSHBdUXizW6tcTCoioG", "6iAz5yUh5OUN5PwO6zQr5RkG", "nmktvmo3WPeJdeldJmorWOtcMSkyBmkyEq", "WP50WOrmWRbDzfpcGIddOSkguIy2W4NcTG", "WRf2dgNcKCkAf8kV", "h8kcwXRcLJtcGSkGW7jaWRtcSdO", "zxLxCvO", "bWb9wKFdLmkK", "nhTleW", "WQddHSk4eSodW67cRai1W4j8WOeFuszdW7LwW6OeW7q", "nmkevCoCWOmwia", "s0Xrwxu", "W4JdQmomWOGB", "W6pdNSkfumki", "ugXHDgzVCM1dB3jL", "WPFdVITGW7/dTG", "WOTWahlcSmkxaSkV", "BCkbtvxdNeVcVmo7xq", "AmkIWPbNW6pcLG4", "FLOjjw9gAG", "qdvZWQpdQG", "x2nSB3nLuhjPB3i", "W5pdSIf6dMK", "vr1TxuBdG8kYnSoCWO/cHchcMdC", "u2HVD0HLCM9tA2LSBfrPChm", "ysrOWPm", "W4ZdQmoqWOGhF8kNW6dcUq", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VuMLNAhrcB3r0B20VyNrUqwXSAwfUy2uVqxnZzw1IBhLnywLSvgLWC05VzguVChjLzMfIqxnZzw1IBhLnywLSvgLWCW", "WR99g0dcImkBh8k5WOSCWRTYe8kT", "W7lcV0DXW4lcPca7WP1LmI/dTq", "nmktvmoXWO8VdLi", "WOabFXpdG8k4WR5yW6SAAgZcIfBcOSkg", "5B6B5Psb5lIw6l6m5BsD5yEU6zs2", "yuJcNtVcVKP0ACk/tCkuoaaPja", "W5DqtspdRSoSWO1QxZ8nW7O", "W7zbsd7dUq", "y29SBgvJDerHDge", "W4LEWRJdT8km", "C2fMyxjP", "th7cNcRcT0jHAmkHrCkGgG40nmkZ", "WR5AW67cOquKwqBdO8oCWOvin8oDW4ZcICoIzSkz", "dSkhwc0", "kc7cUa", "tMv3q29UCxvLCM9Yu3bOzxjLtwfPBG", "W7ajWRuyW40+dSkJWQzoW5O", "rgfTywDL", "refuqunptKzjrW", "lu9mWOdcRW", "W5xdQCouWPKutSo0WRq", "rw5Pq29UCxvLCM9Yq29UDhjVBgXLCG", "WQe6a8oZ", "bvXWWO3cJmomW4pcHmk0i8kJiG", "zg9JDw1LBNq", "v29YBgrnyxbfBNrPDhLuExbL", "uNzZsYxdQq", "AxnnzwnOyq", "dCkgsJhcNW", "WP/dIvpdU8o6", "WRfMW6qLW7O", "WO/dKunUWOO", "CgfK", "faP8ALVdKmkJimoB", "W6ldSYXIba", "WPu/gmo0rMRcS2aKWQC", "W4ayW5xdI3XlWPW", "b8kFFrvCWQWD", "lSoosmo2Fa", "ywzMmG", "W7iJvNPXlMtdN8kR", "BwfYy2Hjza", "WPRdJuddVmo3WRW", "q2fUrMLNAhq", "WO3dPe5cWQy", "WP9aW5GtW5iqW5a", "mmkLrdFcLJhcTmk5W45gWQhcVaFdUXmOW63cTmoejmoDttdcNSo1W4bb", "kslcTWtdVxBcIHS", "WPRdUvXgWQlcNmoEEq", "DIZdOHldNcdcJMOiWOldNZFcQ8kffuS", "z2v0qwXStMv1DhjHBhm", "h8ozsq", "qxjKA3C", "r2fTzvrVB2XZ", "r8oYlSk5WQVcJJq", "W4uBW5u", "Ahr0CdOVl2XVy2fSAg9ZDdO0mdaWl2fNzw50lMH0BwW", "WRzxW4CfW5iW", "wNz7tstdRCo/", "W4D/BsNdMq", "tsRdQqVdVW", "q2XPzw50vgLTzq", "xx9YxZq", "zw50zxi", "B8o2p8kBWQO", "WPRdUvK", "qvbyr0m", "vSozuGLdW5DZWQBcKmoy", "DgHYzwvbDhrHy2S", "WRfeW5KiW5OaW5FdJ8ooeq", "zgLZCg9Zzq", "e3zjWOVcHW", "iCkwqSovWOiYpuldUa", "W5xdQCotWOGhvSo2WR3dH8kR", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrdAxr5ug9WDxa", "WQn9W5tcVda", "WOTHWRfgWPW", "W48yW4RdOMHjWOXaaCkk", "qMfZzuL0zw0", "ChvIBgLJndeW", "hqb6ve7dNq", "vgfIBgvoyw1L", "WRjmWQH2WQnJtNFcIWtdICkU", "feFcRSkUWQ0", "hafowfZdHCkwiCoCWRhcKJJcS37dK1FcPmk/WQruW6i", "BwfYy2HbCNjPDMu", "mhWZFdv8mNWXFdq", "aLD2WO3cN8odW4ZcVG", "z2v0q2L0EvnRAwXSq29UzMLNrgf0yuj5u2TPBKLK", "WRSTW5mNuZ3dHaNcKmowc8kfcSkXswKhW57cOLTNW7a2WRjns8ov", "y2fWywnPDhK", "W5P7WPJdG8kWoSk1ACkhW4y", "z2v0sxrLBq", "BhnpBgS", "Ahecg1S", "xCoRp8kyWRZcPcyCWOjHWP3dQ8ohWPahsLqBW4WUcYuEeSkUDmkZBwy", "dvDfoNK", "WQXXaMdcLG", "C2v0qNv0Dg9U", "W6BdQ8kKsCkWjCoBWQz6wKVcNMu", "zMfRzuLK", "D3nSANy", "yMf0DgXL", "WR/dOIv1W4pdTSoUBa", "6k6L55ss54Mx", "qxjTEuvXDwLWq29UDhjVBgXLCG", "re9xtG", "yxzHx3rPChnFmdG1", "cSoat8oMCq", "kCoIk8omWRVdMxC", "WRBdLZeDWPW", "z2v0ug9WvxbvsvbVCW", "W5rfBt3dTG", "CeZcNJFcRum", "mZZdMCo9og0nWOPejSomhq", "WRRdJvpdT8oH", "xxPkFdS", "5Bg25lQ05PIr5Aw76lYO5P6c44oz", "BLn1z2i", "WQHhWRn0WOfWANZcQqRdQCkGDWOm", "WOpdH8kDeSoCW5NcGHSXW4XXWO8Zuq", "W4ujW4FdI2PmWO1EmmkkWOFdP2G", "6l2657Qq5PAi5ywr", "WO7dUSkZkSoVW5JcRcicW6TaWQCyDW9f", "tufsq0HFu1bfrurFvva", "WQvaW4SyW6iNW5FdJ8ozhW", "AgvSCgvYlwrPywXVzY1JB250ywLUzxi", "ug9Wtgf5zxi", "WRZdMmksgSotW78", "W7ddQ8kUqCkMg8ok", "WRX9cwtcKCksbG", "WQtdTg0", "cCovt8o8ESol", "CMf3", "WR0/xSo0wSkIW416WRLlACoGWRRcStBcVa", "yxD8wda", "AwzYyw1L", "DgLTzxi", "W7ddQZLHfLJcGmoghICyBmojWQG", "ug9Z", "g8kkxZFcMW", "CMvHBfvPza", "A2PQzMW", "WOJdMuzdWPe", "CMvZAxPL", "r8k1WODEW7ZcLddcTcDlW5XTEeqa", "WQDxW4urW6Sa", "i8ophSkUemkeamo3iW", "eCkctIS", "WQxcOv0wkh/cI8oFW5aTWPG", "a3jAeeBdL8kxWPRdLG", "s1LqEMC", "WPWegmoKs2lcTgGKWR8nW4DnWOxcMG", "WRddRtvTW7FdPSo/FMjM", "WPaPv8o4uSkLW4DTWRDozmo1", "W7ddR8k8qq", "W4iLWOu", "hthcOCo6FgT6qmk8W7uDWRye", "WPivFCo2EG", "W4nCrY4", "5yY36kcn5yQR5OIb6k2x57Y/5A6N5yAg5OQk5yQX77+z5Q2z5z2u6yAW5zkH5RMg5OMtW6tcTbW", "hmoatSoHvCoyWQtcPuBdKq", "FcpdRYZdJdpcIMS", "Bej0C20", "rSomuIL6W6zeW7y", "uhjVzMvZC2LVBKnVBNrYB2XSzxi", "FcLR", "B2jQzwn0", "mqhcGSorue0", "c3rqetZcLSkGWOJdH8oebSoxW6GEWQlcOG", "WOmVt8o+q8kP", "rvzftLrFquzurvjFu0nftKvFtefvtKni", "W6jPWONdTCkmimk1ASkGW4VcKai", "WOqLxmo/qCkLW4DoWP9nyCoP", "ExzttgO", "lIZcTbtdTa", "jxnBm8kBW7ZcKIJdPSoF", "q29UCxvLCM9Yvg9VBhm", "W5JdM8kytSk8W5ldGchcO8o9dW", "Ahr0Chm6lY9NCMfWAc5XCs5JB20VB2f1DgGYlJaVC2HVDZ93AgLJAd1mB2DPBIzKAxnWBgf5pxbJjG", "mtrWEa", "renplufmmde", "ug9Wtgf5zxiVqwXSAwfUy2vhAwz0ugfUzwWVq09ovevovc9bBgXPyw5JzuDPzNrqyw5LBc9NCM93tM9Kzs9ozxCGu2nYB2XSvMLLDY92Awv3l2nVBNrLBNqVq2vSBc9IDg5szwnLAxzL", "iGhcS8oFxG", "W6hcTr4pFKldJCoxWOCYW4CwWRpcJY8", "rCoBwt5pW5bEWQ3cJ8oj", "htBcL8ors09EwCkmW4eTWOK", "yMHtDLa", "CstdVYpdLJNcGx0pWQddTtZcU8keia", "WO9swYy", "mH1LqgVdKmkJna", "l8oSh8kqhCkzlmoRi8oHWPhdRrtcOX8", "W4myW4C", "5RES5Rwc5A6C5A+w5RsX5yQn", "mbJcMCowwG", "k8kctYtcJJdcPCk9W5jkWPRcTZldOa", "5ysV6lAJ5OIA5lUd5lQI5RUb", "WPJdSvXcWOlcNmojCa/dRa", "vhjHy2vszxbVCNq", "FSoSkmkA", "q29UCxvLCM9Yq29UDhjVBgXLCG", "v2yObvv1x8kidCoM", "WQBdGvhdQ8oEWQ/dQ158", "gCkmBc5kWRKNWOy", "W7hdO8kHva", "WR/dHmkFb8owW7xcNXS", "Evaco3LaF8kolmoglSkwW6JcN1e", "r2fTzvzLCNnPB24", "dCkLurPUWOC", "y29UDgvUDfDPBMrVDW", "WQ8GtaNdTSkvWPf4W7GGqKVcOgVcGa", "WPJdUufs", "iZK5oq", "dmociSkdh8kw", "mhLAjgi", "FdnRWOldVSk8BCkI", "WRPTbMNcGmkxhmk7", "W5qEyND6", "qwXltKW", "DLv3vw4", "W4yyDMjS", "qNvPBgrPBMDoB2rL", "ug9Wtgf5zxiVqMf0DgXLtg9ZzvbHBMvSl2nVBNrLBNqVvhLWztiVyNv0Dg9Ux2jHy2S", "nXhcKmomuuzRzSkmW5uTWPC4lG", "CxvLCNLtzwXLy3rVCG", "W7qtAg96iLNdN8kRpsVdPfxdOq", "W6tdR8k6u8k2", "W5xdQCojWOGhAmodWPZdGG", "u2vSzKzPz2H0wM9Uzq", "WRe+nmo9yG", "WP4KW5mRrJy", "s3rorNC", "WRLOh1RcGmkBbmk1WOynWQ1YkSkS", "WRhdQtjCW5RdT8oMEM95jHnZW48", "6l+E57UT5Ps75yE7", "WOyaBXVdLmkLWPndW5ihwwhcVvFcTa", "W6rzrspdVCoNWO17qtKmW7zRCXJcQmoNqh/dMSohWOfKmaBcRG", "qNrUAuy", "tKjHDhrSzvbVC2L0Aw9UqML6", "uSkasv7dMW", "sw50zxjZzwn0Aw9U", "WPJdH8kmh8ouW47cHqqUW416WROYvt1W", "WR5AWRu", "WP3dHNldRCoHWRRdS1jGWQfUDmkrW6NcJa", "bK50f8k3", "WQbIW7hcNWG5At3cNSoSWQP7iSozW4tcR8ohySkigrNcS8kOW7HGWRrQr3dcLCoWx8olWPxdVbxdM8ozo8kuWRBcImoMW40sW7DLWOarWQvWWRGjW7/cHeZdVSo/nc/cJNJcP8oBW7dcGh4duSk3jfFdT8olswRdHSooiXi", "WRFdTgCRWP00l8ki", "AxndB29SAw5N", "sgvSCgvYigfKDMfUy2vKigzLyxr1CMvZigfJDgL2yxrLzc4", "x29UrxjYB3jdywXSyMfJAW", "WQCGeSorrNlcN2qIWOS8W5PEWPG", "AgL0DgvZDa", "x3rVD2vYsw5MBW", "WR99g0JcNCkZf8k/WO0jWRvIkCk9", "CgfNzq", "qLnRyue", "qxr0ywnRzxi", "WQPxWQHHWO9dux/cTIVdKSkREq", "zMrhEeC", "reDItee", "q1VcNIhcKKi", "WP3cTmkCWRhcINXu", "tfjVuvG", "z2v0t3bLBMvKtMv1DhjHBhm", "xdFdUXhdTW", "cuxcTCkKWRhdMIddQ3u", "W70hW5BcQSkoWP5LrSk/WQq", "mbVcMmorxKPvCCkr", "WPTCwZS", "cSkavCoqWRqPav3dPCom", "y2XPy2TszwnVCMq", "6k68572h5Bsb5A6K5yA+77YQ5y2g5Bcb5yUH5PAq", "DwLK", "wtj/WP/dSCkuySkOW6xcP8k/WQddTYTGW7e", "WQj3agJcTSkFbSk1WOO", "zuZcHXVcTeTfAmk4rCk8pG", "WRddVXKHWOm", "mSksrmo3WOSJd1pdRSomWRxcL8k0zG", "uKBcGXtcUL9qDCo5DCkBdbmLlmkMW5lcTtudmSoyWOtcIdHdhSouW6RcPCkJWPyYAmkoWPXHW5JcVSoSs23dSCoGW5vfW47cK8ocW6xdL3FcTYjPbGS", "BCoHoCkMWR3cMIGzWRrnWO7dSmovWPqfrKvaW5enbsmx", "Bw92zunPDhK", "axrMexZdNmkhWRJdJ8oDaa", "WOrUW4JcNI4", "mgLsjwO", "5yYb6koh5yQs5OUC6k6l576I5A2v5ywm56k86k6g", "vSoDfaRcNWJdTSkSamoWW54y", "W6afWQuLW4S", "BNvT", "kmo1jSkxoG", "b1n7jSkh", "W47dQJP7eMlcVCovctCdymod", "Dg9W", "D1jPt2e", "W4NdLCkyxSk2W4C", "bgHhhwJdLW", "fSoowG", "W5NdQdLQcgNcIG", "W5hdOSoeWOuuACoZ", "WPXprIhcHSkwE8oWWOq", "W6mnWRm2W4y5jCk2WRe", "aKFcOCkY", "ECo0iCkDWQW", "CMfUzg9Tt2zMC2v0", "WOb/W64", "buBcPG", "WRVdP2SU", "W6qyWRm4W40Q", "wfHZuLC", "yuBcNtBcVKvb", "WQy8aSo1t2VcMhC1", "e8oEhCknb8kylmoQpSo0WQu", "W54cWQSKW5eOhG", "WPhcSSklWRdcNva", "mdZdI8oBowqyWPDz", "W6SnW5BdHfXU", "zw50zxjgCM9UDgDYB3vUza", "pCkdrmocWQi3f1/dTG", "AXFcJSoTW7ldO0NcVcK7W7FcRuddHSoWbmoUvmkx", "CmkotLtdGfu", "r2fTzurLzMLUzq", "u3jVtZNdImoLkdC", "W4qgDgH6", "DMTTBLO", "l8krAG", "WQ8XW5SVrJBdRWNcQ8ojhmkBpCkvswKbW7u", "lrpdPSoVbq", "WR3cReeuovy", "sNnIu04", "D29YBgrnyxbdB21WB25LBNq", "WRFdQMCRWOCKkW", "vSoguJLpW4PMWOdcK8oEBIddKCkFBa", "vqdcM8oIW6FdQv/cJdu", "W6etW5hcTG", "W7udW4tcV8ksWPf0", "AxnnB2jPBgu", "x3nLDefUAw1gCMfTzq", "WRpdVrO8WPJdO2eUWPC", "qw5VBwfSEsbKzxrLy3rLzca", "C2LK", "zgvHBe1HCMnOrgf0yuzYB21oB3DxB3jSze1HCMnOrgf0yq", "ruHJANe", "EmoHimkBWQ7cJa", "sNXOtZNdPmo4", "y2XPy2S", "fCoDvsbpWOGYWQxcI8oCCJNdNCkFF8kMW4pcVatdJmo9W7H7WRWJft4R", "oZVdH8oBnhq", "D8kLt3NdMa", "WOarBZFdLSk2WRvEW5q", "pK1JW4e", "W7ldR8k7B8kH", "WR8xW7OazG", "k8kABtfiWQu", "W74yWQq8W6OP", "CerYxJ3dPCoglYGxWORcGmkWuNir", "AvH6uNO", "xb3cI8oMW4NdO1pcKbmh", "BMfTzq", "WO8aBahdMSkVWRXiW6OsAxVcHxZcPSkawqqywbjsWRXM", "WOqLvCoZ", "aHJdNmoFgq", "yxbWBw9IAwXL", "uKLMz1a", "Dc91WO/dLSkw", "zxH0", "u2vYDMvYvgLTzq", "zbVcN8opW6xdU1/cJgKBW5dcJ1VdICo6m8ofwmknrmoUW5ZdVxpdKmo9jfBdPKOnW6Xjl8ocW47dO8oqWOf/EXDqFaVcQmobW6aEjmoCW4JcG8k+oSojnW/cUCosW4ayW7JcN2OKFdddH8otFSoJ", "jCkfx8ogWOGYg0BdPq", "yKPey0u", "WO4dFt/dLSk0WRfaW7GaB3FcN10", "W68AW6pdOem", "bNrqeq", "A8kbrfxdL3FcUW", "WOHytZtcNmkoDG", "vg11Dg4", "BM9KzteVtMv3ieXHEw91Dc9Zzxr0Aw5NxZG", "WR1oWQ5TWPy", "z2v0u3rYAw5NCW", "WQldVbaMWPm", "ueXbwuLorW", "WOWaEd7dLmkuWRq", "nvJcOCkQWRFdIYpdRxzDctdcISo2Fmkp", "iJdcRW7dVNe", "W5yCW4q", "DuTTDgC", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZpKUkRMJiNPKQ4Vy29TCg9ZzufSBej0BG", "CgrzwNO", "WR3dJCkthmogW78", "qtXRWP3dMmkNz8kJW7FcU8k6WRy", "W4etW4FdJ3S", "WRX3dhdcICkBhmkOWQaeWPXMp8kNWRO", "AfRcLcNcQW", "tKvPz2H0q291BNrYEunVBNrYB2XSzxi", "W4myW4FdQwzkWPHdcSkDWOJdO1lcPSoTWQjnDCooeGldVG", "W6NdM8kkcSoCW7/cMq8XW4yI", "mCksvSoBWOKJmKtdR8oiWPlcNmkjEW", "hG54", "W4qYwxjE", "WRqRfCoSCW", "ug9Wtgf5zxiVtKjHDhrSzu1HAw4VDwKVqMf0DgXLAw5NugfUzwWVvg9Wl2j0BKjHy2S", "tg9NAw5gBg93tM9Kzq", "vSkKWP9dW6q", "z0DXqvO", "Cg9PBNrjBMzVCW", "WRxdTwCKWO0bgq", "WORdOqy8WPBdUxS7", "ChjVzhvJzv9VAwW", "WRddO2qJWOC0c8krW7vEWRbicaq", "W7BdOIfdahFcVSoofIe", "WPhdMKtdUCoMWQVdL1DRWO1/BSke", "mtzWEa", "rhbmCgC", "tg9JywXtDg9YywDLvxrPBhm", "patcGSomue0", "WPRdHgm+WP09pSkUW7vkWRbw", "tLDVCMXKtwfWqxnZzw1IBhLfBMvTEunVBxbVBMvUDa", "tLDVCMXKtwfWqxnZzxrmB2fKzxi", "WRtdG2b4WPZcUmo8qZ/dGG", "5y++6kk+5yUo5OIa", "s1bxzuO", "BcldMJddVa", "rbBcRSoGW68", "x2jYzwfRrxf1AxbTzw50", "h8kcwYdcLde", "W4qfF34", "zML4zwq", "Aw5JBhvKzxm", "B3bLBLrHC2S", "pCkHyZdcLchcSSk7W5bBWQhcTJJdOXKO", "WQP9aMRcKSkBmmkPWOWeWP1InmkUWOJcMGRcRmo/rhW", "y2XLyxjbBgLHBMnLvgvYCML0B3j5", "WRFdINNdOmoR", "W4LDW4RcMcazzG", "BwfW", "WO8TsCo0xCkfW40", "vwnzBxG", "WOFdLqHUW4y", "lMRcPmk/WRFdGGFdKMHdpW", "wXRcVmoRW6VdTq", "WQtdP3aR", "WRDiW5xcJcGmqbddVmoGWRXWeCoQW6RcGSoCqSkNmZK", "yeJcKdpcVfrACSk4rmkrjq0RmW", "W6euW43cQSkiWOL5EmkV", "W6mnWRm2W4y5", "WPiaDti", "tLDVCMXKtwfWrw50Axr5vhLWzq", "B25nzxnZywDL", "Aw5UzxjizwLNAhq", "BwL0D1a", "AxbLqM0", "z8kxva", "WPNcOSkYWRZcIf1r", "v29YBgrnyxbnyxjJAhnjBML0", "DSkGWPjyW6tcPrZcOI9KW4HaFvu", "WOlcTmkwWRFcJvPcW5pdOLxcIICpWRNcLXhcL2RcNdpdPHpcKmoCAW", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VqM90Dg9Tl1f1zxn0tM9Kzs9SyxLVDxroB2rLl01HAw5rDwvZDe5VzguVAwnVBG", "BN98wdFdRSo5iXS7WPFcLW", "Dc59WPJdUW", "W5pdSZTcah7cGSosga", "W6C4W5RdHuS", "r01tEfC", "WRrrWQPRWOPRrW", "W6GCW5hdJ2u", "vqFcISoTW6ddKNG", "WPWKaCo+Ba", "qvjnwq", "rLDtvg9VBa", "yCkBuLZdSa", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrnyxbbC3nLBwjSEuvUzw15q29TCg9Uzw50lZjUzf9Iz18Zl05LDYbmyxLVDxqVyxr0ywnRqNrU", "B25gyxn0qxr0ywnRqNrUq2XPy2S", "x3DLyLnVy2TLDa", "WP3cSmkh", "W5ldL8k3t8k1", "W5nurt/dUq", "WRxdOcLQW5m", "thzTqdtdR8oIptavWPhcHSk0C3aoda4", "z2v0ug9ZAxrPB25dB3vUDa", "Dfz1zxy", "A8oWoCohWQS", "bhDap2RdGa", "cZJdNSonmM0FWOLt", "CKutiMvl", "CMvWBgfJzufSBa", "j8kquZLDWQGgWQXJWRi", "WOSpW54bEG", "WPldTufrWRFcGa", "C1DTrha", "5BEY5y+w5RAi5A+85ywL5Pon5l2C", "W7BdQCkeqCkQgmolWQe", "zJeW", "uXhcM8oaW6ZdQ1BcMGq3W5FcQetdJq", "hLTYnW", "WQuKtXC", "r0XpqKfm", "WQT3hxe", "W7/dTCkIEW", "EKz5sgq", "zXhcNCo1W6hdShpcMG", "BKafoh5x", "Egzzwge", "bg5ag13dNmkFWPddICozcW", "AxXVqdxdJmoQpGW7WORcNSkM", "mbVcMmorwK1pq8kkW4SSWOO7", "B2zMC2v0sgvPz2H0", "WP/dOJvTW5FdVmoOEG", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrnyxbbC3nLBwjSEuvUzw15q29TCg9Uzw50lZjUzf9Iz18Zl05LDYbmyxLVDxqVqNrU", "e0dcQSk8W7i", "aXP7uq", "vxjMuwu", "EMLtz2S", "WOdcSmknWRZcHue", "aaP8tuBdN8kWjG", "WPxdJvxdLCo3WRZdTv5pWPj3ECk9W6VcN8ktaCodWOO+", "q2XtDKy", "jLHSWPFcQ8oKW7JcQCkXmSkNjSoLDmknW4L1frX0pmkXWPPHkCoScCkXuSo2omkrkmoIW7DTdstcHcNcP8oHeSoWW73dPXmXW7a0W7m", "zYZdUW", "W40tW4ddNMHjWOTj", "rw5Pz21HqMvHC3rdB250CM9SBgvY", "Bhbpz2G", "WOPCwIhcPmkdCmoJWONdO0PM", "Cdn7", "WRddQHSS", "CMvZDwX0", "zgjSy2XPy2S", "WRO2hSoXt3i", "tSkaq1hdG3VcSSoXsmkLWObnlmkH", "q3jVC3nvDgLSCW", "BfbcDw0", "AM9PBKfZC2vTyMX5", "WRZdMmksgSoe", "bCoseCkohSkA", "WO/dOuXcWRS", "ywXSAwfUy2vszwXPyW", "C3zzu3i", "cKL1WPZcKmojW6ZcS8k5lSkZ", "W57dGrXgiG", "WRfeW5KiW5yvW5hdJCofe2tcGW", "pG56wKFdPCk4oSoeWQm", "W5JdNmkFvSk9W5JdKsi", "WRzqW54tW4KrW4/dGCoke2q", "E1qup0DeBmk5nSokiCkc", "txzJtxnNCW", "BgLTAxq", "W5xdISkUD8kI", "WRS9fmo6uMlcKNi", "zMfZDef0DgfJAW", "whPZsa", "WO4PvCoWqCkK", "yxzLAgC", "exrea27dI8kSWP7dNSoaoSomW4mdWRdcOHRcNSoHBdBdIG", "WPWbeSoNuMpcHhuzWQilWPO", "WPLYW4uoW7CqW7hdI8oEfx/cLSouWPC6DryDW6K", "kxPwewm", "tLDVCMXKqwXSAwfUy2vnAw5Lug9WDxa", "q1nFvevbtv9srufewv9dsefor0u", "FSoRomkxWRdcOsycWRneWQ/dQW", "lN/cQSk5WQ/dIIhdTM9Dhc7cJ8oQFa", "BvOxpNOiC8k/mmow", "5ywZ5lQo5y+J6kkl5yQP5OMl", "Aw5ZDgfUy2u", "lgZcVmk+WOW", "o8kaCsbz", "BgD6Euy", "W5RdR8kLrCkG", "yxbWx2XHC3rmB2DPBG", "WOpcTmkrWR0", "otddG8oBcgmCWPnpDSkB", "ywrKrxzLBNrmAxn0zw5LCG", "vwPkuNK", "ugnkA2i", "hSoew8o8ESojWOdcTKRdISkFqbLw", "tvnjrsaXma", "W6nOWRRdMCkK", "W6qyWQu", "WPRdJHKrWRu", "fwLB", "ECoWomkqWQhcRIyyWR9nWRJdISonWOKBq1u", "ug93zxi", "t1/cKbxcQefg", "5B2m6yg15PsG5yEG5z+L5z2/", "yxbWC3rVCMvoyw1L", "WQddMmkBhq", "W75QhhhdMq", "rGBdMa3dGW", "Bw91C2v1Ca", "WPTeW4GzW7C", "WOvBwZtcHmkh", "z2v0uMvZB3vYy2u", "W6jPWONdPCkciCk3qCknW5ZcRJi8xSkDW64t", "WR3dJCkoh8ovW7tcHauP", "e8opxSo5yCoiWRxcTW", "W7xdOJnVfgVcMq", "WOinEJJdM8k4WRW", "thLwBLi", "WOBdTWuHWOxdSG", "B25cDg5dBg9ZzunSAwnR", "tgDQAxi", "WRJcP1WhlfdcNmoo", "cfvSWPRcLq", "EstdVZq", "mNjiWRJcIq", "tLDVCMXKtwfW", "phaGC3r5Bgu9iMnVBg9YoG", "wmoitI5cW6H7WRFcIa", "DMfSDwvZ", "WP4YfCoZsW", "u1rvrfLFsevst19ts0Lmta", "W4CdWReDW4i0h8kWW6D4W7yGfCopW6JdU8oVW4GLWO5rWOpdN345zIxcPZCHzM3cU8k6gfDWW4m1pmoaWRVcNghcJSk0WRNcG8kMW6BcMXFcHxJdGSo0lu0/W4FdIhbqwKlcTCola8oCC3CvW6NdNColWPiNDCkeWR8meSo+WQ8XFmkTWOTKDSkhWP3cPqjTWQaQtam", "Dgv4Dc9WBgfPBG", "W4mdENDWka", "ptlcTa", "rCoitJ5p", "Cg9WDxaTBwvUDq", "Dg9WD2fYx2fWCf9Zzxj2zxjuB2TLBG", "WQldNvldSmozWQFdSvbbWPvU", "v3riuve", "tM3cII3cLa", "nr3cHmoaxujiCCkQW4e", "BmoHoCkxWRa", "WO3dOePtWQFcNConuaddQ17dNx/dGmkq", "mcWW", "AuZcIJZcTffB", "D2vIz2fTzq", "dvbPWO3cM8oF", "dvbRWP0", "W7GiW4VcQSkGWPXTBCkoWQJcTsi", "5BEY5BYa5zcV", "twfWrgf0yq", "ax5yexVdNmk6WOVdI8oD", "WRpcVSkrWR/cGKDDW6ddPNRcUqO", "pLTYn8kC", "mJxdGSorjq", "CmkDWRblW77cHXZcOMTZW5jzvveyW7lcH8kuWQbGWR7dNtGEAmk7WOvwW4v5WRrpnSkgWPH2n00TBKJcIs/dRSoXmZBcImogDIriW5RdI8kQW5SZ", "WOhdRCkQ", "ke3cT8kKWOFdIXBdVNjihc7cJ8oQFmooWPdcRSkf", "C2v0sxrLBq", "aaPMxq", "W71+ubddRW", "WPivDZ/dLSk4", "W4ldP8ogW6JdNqnrW6JdPMZcHd8", "qwXSAwfUy2vbC3nLBwXIEurHDgfZ", "vuBcGttcV2vAAmkKra", "u1birKC", "eI/cTtpdUhlcJd9jWPldISk5gCoiW5fXWR0A", "5BEY5ywZ6zET", "WOhcPL8/leFcMSozWP4BWROSW7tcKNuZrJZcMSoNow/dNCosW6xdL8k5z8oBjuKXW7FcQ1ZdNSo/W4SOw8olsSogWONdU0yDWPtdPM7cValcN8oTySo4kMNcQCkYWOHTfeqP", "W4mlB3O", "W4qfDxv6lhC", "y3jLyxrLug93zxjuB3DLCG", "BwfYy2HtDgf0zq", "WRtcTmkzWRZcHvfvW4i", "W4rxwG", "B8oQoCkrWQRcQYypWRXpWRJdTSotWO4t", "WOOdAq/dMW", "yxjTEuLe", "fSkwqmobWQSPav0", "v1ZcPrVcSW", "svrftq", "dmoEhSkx", "l052pSkkW5tcTsddRW", "WQTCrddcRCkhzmoPWO/dRW", "W6uFW5lcUW", "WRnmW5KmW7OaW4ddHSoOdg/cISod", "W47dSdbSmMJcJSomcta", "WRhdQ2S+", "zgvZDhjVEq", "W5fusW", "CtrRWOBdS8kZDW", "WRddUXe", "CMv2B2TLt2jQzwn0vvjm", "WR55hhhcQCkFamk/WO0bWPDS", "W6HuqctdICoaWRLSytOpW7z0mdtcNmofrN/dU8o8WRu4CflcGCkaAcZcVuPlbmoofGtcSbPqWQ0GWOCjC8kkvCoDnMToWRrvWOBcUhLlxqrUAWVcK37cVZPvh8okWQ7dTMGcaapdK8kCWOpcVfb/W5z0WPtdO8owA10", "sNXYqci", "nxW0Fdn8nNWWFdf8mG", "ug9Wtgf5zxiVtKjHDhrSzu1HAw4VDwKVqMf0DgXLugfUzwWVvg9Wl2j1DhrVBG", "mxjeb0pdMmkkWPRdNmkFjSoqW4GxWQ/cTqxcMSoVAtBdImktCrtcISkqW5RcUSo1W6FdNSkIrSowW6ZcNJX0W5TsrgOTuSk6WOOiqW", "bNrAagRdL8khWQJdH8oEaCoqW5e", "WQT9gW", "zvzXDee", "z2v0ug9PBNrcEuv2zw50", "WPZdT2nxWRRcH8oizq", "thzUwd7dOSoG", "y2XPy2TfDMvUDhm", "Dg91y2HZDgfYDa", "b1HRWP7cTCoiW5y", "tmk9ruhdML3cRSoOCCkU", "WQRdV0TxWRRcRSopDaK", "C1zZBhi", "BhvSBg4", "sxziC0m", "rvdcGI7cRW", "WOyaBXxdMSkWWQbdW4KwDwZcPfBcHmkCusaDrbnq", "bfDwWPZcJmoBW4RcQCkCk8kKn8oroSkQW6G", "zgLZy29UBMvJDenVDw50", "butdNCk6WRhcSqlcMYKnW53cUNW", "gvX1WPxcN8ooW4RcMSk8lG", "WPmeBZ/dMG", "sLzjrNO", "WRddOXWRWPi", "Cg93zxi", "5PoS57EZ5B+Q5Pcx562k55cZ", "dLDM", "y2XwyxC", "md46dgZdNSk5iCoAWR/cNt/cLhG", "WOSIsmoJvmkIW4Pm", "fu92jCkO", "x0ejgh9wASk7n8ondSkrW6NcJfCv", "5Ps75yE76BUr5PQx5Pwm5yAB", "WQNcR1W5oq", "Ce51svu", "afHEmCkeW4VdQq", "jSkiBsXJWQqjWOT4WORcOgO", "WRhdQtjsW4ddUCoyEMb+cWrZW48", "W7unWQi6W4q/fCk3WQzjWPifcmocW6RdRmkBWOr4W5HnW7pcOWm", "W6pdO8ocWPKusCo7WPxdR8k7WP4", "q3vYuhjVzhvJDe51Bq", "qKfuq0HFqLvjterFt1jervi", "CgXHDgzVCM0", "Fdn7WPRdQSk2A8k0", "W77dTZbGigVcGCoodsOtya", "aW1jwKtdP8oL", "Au51r3K", "CgfJA0HHBMrSzxjuAw1L", "5A+85ywL5y+J6kkl5yQP5OMl6k6+572U5lYA6kAg55Uw546W5PYj6k6+572U5BM25lIu6yEn5PAW55M75B2v5RI45OIp77Ym5PIV5zcM57UN57UT77YF", "W6mdW5hcQSkiWP5R", "W4XCwJldVW", "idBdGSosja", "u0rNzhC", "W7NdPJu2W5ZdO8o+ENn0sWblW55Ah8kxBmowgSkqmtddSXeXd8ogrCoV", "5OIy5PAx5QIH5BYp", "Dc5RWPpdSSkWySk+W43cNmkMWRNdUW", "W5ddQmoeWOWbsCo4WR8", "AxnbCNjHEq", "W4jqxqNdTmoGWOj6qJmXW7jREG", "nfTRm8kSW7JcTtldPCoc", "WRiTwCouwSkIW51BWR1oACoPWOq", "a19XnG", "WRvdWQXN", "vmoDscXjW493WRBcTmoyAsldHW", "W7TZa8oKrMJcHg0XWRi4WOa", "aeHWjSkaW6NcOJBdPq", "W6pdOIr7bhtcMq", "BM9Uzq", "rGFdMtxdRa", "tK5ytxa", "ChvZAa", "DxbKyxrLu2TPBgXqB29S", "yNrUtgf5B3v0", "vc91WO/dM8kZESkM", "ANbIDNu", "v29YBgrnyxbvsvDYyxbWzxiVtLDVCMXKtwfWvuKVBgvMDejVDhrVBu5VzguVzxH0CMfoB2rLl1f1zxn0tM9Kzs9SyxLVDxroB2rLl01HAw5rDwvZDe5VzguVAwnVBG", "ywX0xW", "C2v0u2HVD0rHDge", "WQ4Jxmo+w8kkW4vgWQvTDCo4WP/cTYVcUW", "zgvJCNLWDa", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZtKUkRMJiNPKQ4Vy29TCg9ZzufSBej0BG", "zIL5WOldUG", "W7yyWRuWW4aMh8kWWOLFW5iFjmobW7ddSmov", "lNRcOmk6WRBdIXhdQ1ja", "C190B2TLBG", "WRPmW4q", "jNrPBwvZoW", "WP9judNcJa", "WQDxW4u", "W7mjW5dcUSkcWO86omk6WRhdUMpcKM3dJcTMDXFdQSkhia/dUdOsWP7dSCksdCo5gxhcGSo1a8ocq8kZWPtdJmkRW7DfWQ1QW6Sdgw9xWRhcG8oMWRpdP8keCSoFW698W6JcTXVcOYGVW7a3W5mZWRXQwCofc3hdUSkedIJcSfVcICohpmoMW5pdP8k/W7tdVdH4W4em", "WPyJtSo0xCkHW4zFWRC", "WQDxW4uiW7qaW5RdNSoi", "fxrhogBdISkh", "WQy8aSo1t2pcMwu", "BgvMDa", "DLnHAvK", "mK5XhSkoW6tcTdpdTa", "v29YBgrnyxbtzxruAwXLvMLLDW", "twfYy2HPBMC", "Bw91C2vTB3zL", "W7GKW7hcUSkq", "CMvTB3zLqxr0ywnRqxjTEq", "aSoAamkdeSkug8o7", "z2v0tw9UDgG", "y3jLyxrLqxnZzw1IBhK", "AxnutvnLCNzLCG", "gCojwmo2FW", "B25dBgLJAW", "vxnPBMDdyxn0BgvgywnL", "Dw5KzwzPBMvK", "W6ddP8kLrq", "x3nRAwXS", "AevQAxi", "eGnKvLJdRSkZnmofWRhcLJBcLvxdKhhcQ8k+WQy", "WQnSW40YW6O", "A13cObBcKa", "W7pdPIzRvZpcUCoiotawpq", "mLZcV8kcWRy", "WRldR2WU", "nsRdImoqmW", "W4eFDxHRjMZdLa", "WRZdNmkhh8ov", "WOP9hgRcKCkmeCk5", "z2v0twfWug9ZqNLqB3njza", "WPviWOlcMJKxW5WzgmojW5pcPIVdUmkEW7Wr", "u0fmu0C", "BSkktLFdM1a", "s8k7WODpW6m", "wWtcM8oQW6VdRa", "nHLTv1S", "tgfIzwW", "WRv9axa", "55sO5OI3oIa", "zKnowwe", "BMTHsha", "p8karJZcVJtcHCk1", "WRhdVNy", "Cfz4u2O", "W5vuwY/dSSo9", "zw5LBxLoB2rL", "vSogud4", "WPnHW6JcSai", "wKelb3G", "W6r/WPJdJ8kh", "C3r5Bgv0ExbL", "WPlcPhuXbG", "A2v5", "Bu5vB24", "B25LCNjVCG", "W7OnWRK", "guLEimkDW7ZcOG", "z2v0vgv4Da", "j1vTpSklW5dcUJBdLCo5WQn/ymoTF8osqXvsiCogDINcSfvLdY5YWR0Zd8kPpmkhW7dcMIJdNSoAh8oYW6WFz0NcHcTG", "5ygC5Q2I6lEF6lIQ", "WRFcOeex", "twfWvhLWzq", "khPeigBdLCkwWQRdMSozcCom", "kSootCozDCovWRxcTGRdR8kZDb9ot3FdNXPTWRjWqmo3tCk8WQtdM393WOb9WPFdHxVcGqhcG1qGzCkeWOBcQaKlzXJcNSkpW73cRSkitmoouCoPzmkNAe0kcZRcT8ovE3/cTKtdQ1tdVXvUemkyW6XeW5hcHa", "yKnUu3O", "z2v0", "Cff8wcxdRCoUaZCWWOdcNG", "WPZdK2zLWRK", "vSk7WP5p", "W4fBkq", "uMvXDwvZDeLK", "DNLOtwq", "omkLEbhcLtRcNq", "yw5KCM9Pza", "WQfeDHJcImkqyCoOWR7dN1rLchv9", "WP3dICkAeSocW5FcJb8VW7nTWO87rcPoW7biWRS", "WQBdJSkmeSoDW78", "WQa2gSo5uwm", "vxbKyxrLuhjLC2v0qNrUCW", "zMfZDe1HCMnOAw5N", "CMHuufe", "y2XPzw50wq", "WO9rqdBcGG", "WPlcQee1jfNcL8oF", "WOdcO8kq", "A2rXyG", "WRBcRfS2ivVcKSooW586WOaOW7/cP3KXrJlcMCoN", "jK9MWRtcJCokW5W", "WOnntdS", "zMrLAxy", "5A6F6jsG5zwM5BQN6yo85ywp", "WRldRtj4", "z2v0twfWu2L6zq", "aX1Nvf/dHq", "W4Pbqs/dRSonWO9Qyq", "h0P6pmkNW7JcTZBdHmoFWPD4Bmo4yCod", "zs/dJspdKG", "W5JdQ8k+rCk/", "z2v0qxjLyq", "sgvSCgvYihn1y2nLC3nMDwXSEsbPBML0AwfSAxPLzc4", "dfXXWRRcKCoaW5/cTmk+j8k5nW", "BwLSzvbVAw50zxi", "ptFdHmok", "C2HVCNrJDxrZ", "lmkiBsXIWQOCWOf+WRBcP2K", "jsNcRXpdTgZcNq", "o10vlMWy", "z2fTztjJzwXS", "yxjTEvr5Cgu", "WQe2a8oqvwFcMMqcWQCPW40", "dCkxxZhcKZVcLG", "WRzvW5OqW6i", "WPLYW4uoW7CqW67dJ8oDl37cJCoBWOe", "CMvHBezPz2H0", "y3jLyxrLqxr0ywnRqxjTEuj5q291BNq", "WPhcOCkpWOBcMfbcW4BdOMBcIaKIWRxcGq", "z2v0rxHWAxjLvgLTzxn0yw1W", "vSkXWODRW6xcHrlcGYfaW5jhD1ucW6pcUSovWRzfWPFdNdW", "u3rHDgu", "WRXhWRvbWOTVu33cOqddK8k7vqeHW6tcM3HhhItcGW", "WR7cUvSAiLa", "DxbKyxrLtgf5B3v0", "WOT9hxpcGCkmmCkZWOSCWOTKnSkLWQVcMG", "Eer6uMS", "bNDrfwhdJmkd", "y3jLyxrLquK", "CCkDqW", "y29UDMvYDa", "vxbKyxrLvgLSzuLUzM8", "WP4WoCoHua", "mmkLrdFcLJhcVmk1W45IWRlcQZFdPZ81W6BcQmozpSocraxcGW", "hLuYiCkBW7lcQsm", "Dg9Nz2XLtwfPBLvjt3b0Aw9U", "qwn0AxzPDhL3B3jSzgjHDhrSzvbVCfbs", "BMv3q2HHDfn5C01ZzW", "yuxcNcVcVG", "q0TLza", "WRdcUv8wi1O", "bSkAc3KEWP0HWO/cS8oWCGldGa", "WQldSe3dKCoW", "yxnZzw1IBhLmAxn0", "WPDOW7xcHWW4Ea", "D3n1CMW", "WO3dNmkqp8orW6pcGGm1", "WP0KW4SExsddRGJcHCoanmkihSkYt24", "jCoasCoHDCopWRS", "sKdcLZ3cMuDbC8k6rCkAkW8GfCkQW6ZcQq", "B0JcTalcQa", "W6tdVmkN", "zMfSC2u", "e03cQ8kV", "u29JA2v0", "WPhcPmklWRBcUvbCW5/dOh3cSG", "oIFdV2/dKYBcMN0EWQ3cMtNcV8kFmv3dSJNcU8kPymkkguVcHmkJW5NdJxRdLvHTWOFdPrG3As3cPa", "AmkuyW", "s1zlvg9VBhm", "wNz8qb7dR8oUatO+", "WQP9h2NcHCkDf8kDWOKe", "iw0OWOBdPW", "y3bUrw5HyMXL", "revmrvrfx0fstvK", "WPZdGmkrbmoKW7pcNqu", "WRhdQtjnW5FdSmoNEKvSeaT4W5j2cq", "kYhcQbpdKgVcNrfFWO0", "zexcNdFcQq", "sSk6WPXAW7xcNW", "W6ldSYDNd2a", "W4ddJIrJka", "WQhdVK5BWQy", "yCkdrvhdNwZcTmoXxCkLWPTC", "WP9jrIxcOmkpB8oLWOxdO0v1dffQWOXsW67cV8ojxmkmW4v2", "cZ3dJmoknG", "WR8YbCo1t2pcHa", "yxr0ywnRzxjZ", "WPFdHKxdJ8o9WRZdUq", "jY3dIq", "ASoeuZHzW4fcWRBcMCooAcJdKa", "odZdM8oBoW", "ywXSB3DuCMfUC3bHCMvUy3K", "tLDVCMXKtwfWq29YzujPEG", "uK5tqKO", "WR3dQgeMWPW1pSkq", "WPzIW7pcLGGJza", "h8kGxtLbWR0pWPe5WO/cPN7dPmkyWPJdJs41pmoFBKBcICoUffmpB8k8W4/dLCk0w8k2WRzUxsZdNKrUbSovWQtdUmoWrmo1W5FcJYqdFCk1yq", "eK92pSklW7tcTshdN8ozWPbsBW", "ChjLC2v0twfYy2G", "WQnyWRnPWOy", "vwjUug0", "iLT7m8kDW5JcTspdRCojWQrSB8o4yW", "WRnhWQ1YWOfW", "zmoXia", "ANn1", "WOlcTmktWRZcIKzv", "W7i6W6RdKNm", "AxrZ", "tfzQwui", "WOBdOZu", "W4rsENDZjMldLmk6nYVdOK/dOCki", "zgf0yq", "W7mjWQC4W40OkSkWWQDDW5Oue8ox", "WOeGvmoKua", "x3nLy29UzfnRAwXStgLZDa", "v8oisdLgW4e", "WOCJe8o3u2pcV2q8WRy4W5PUWOFcG0TkWO8", "y3nxqvm", "u2TPBgXZsw5KzxG", "W7JdQsfRe3hcJmoljsa", "WPiaDW", "r3LOuxq", "cmoetSoHE8opWRS", "C3rHCNrxB3jR", "zw5J", "xmoDtW", "W4efW4C", "y8kBvfhdJfpcUmoUsW", "WOeLs8o/umk+W51mWQPw", "CMv0DxjUicHMDw5JDgLVBIGPihT9lMnVBNn0CNvJDg9YkcjYzxr1CM4GDgHPCYiPkcaPktS", "rKjzqwW", "WOqDAZ/dH8k4", "WOqLv8oJumk+", "eH1LqfW", "WP8SW5y6", "d8oEb8kHgCkCg8obomo2WRxdSaVcUGnXjW", "bhHahxNdNa", "W5vJWO3dRCkclmkZCmonW6FcGr0PE8krW78HsCkjhdanW7ZdSmkwd8khWRJdRgKIgCk/cSk1d0tdNcJdPuntfg3dKmkNWR4IkfdcU1BcRWPhW4ldPSk9t8otWPyhuN/dNCko", "W5CyW4C", "WOlcRf0fkeZcTSop", "W4ZdPSovWOGBva", "WPKPW5OTwrddHGlcISowd8km", "WPhdOePy", "zg9dB25Uzwn0", "W7rmWQ5WWOLJtW", "W5pdT8ocWOmGAq", "WQVdJCkyeSofW7BcMq", "B25dBg9Zzq", "WRrsWRvRWOTS", "Bw9KzwW", "BuCi", "WRf2awdcLSk2jSkrWQK", "adBcUcRdONJcMG", "WPpdNK7dSCo2WO/dPK9VWOnXzCku", "bSojh8kxaq", "BNzhr0W", "pJdcTW7dSNO", "otJdN8ovb28uWOTEjSoq", "mMyZodG3nZrKnMnImtiXotiWndnKognJotm1zdyZzJjIyJfLzJq5yJLMnJrKnMq1odjHotzMnJyYy2eYodbMma", "DxnLCKfNzw50", "WP57WRvaWOW", "mteWmZG4nwjHyLfJAa", "Cg9ZAxrPB24", "FtH0WOBdUSkGi8kMW7dcH8k6WQa", "lwpcV8kEWRS", "zM9jEei", "WPFdLuO/WOCLgmkmW7rAWQDvebhdQWW", "u3LZDgvTwMvYB1rPBwu", "oNrAigBdLmkwWRddM8oejSoEW4ODWQtcPGVcOq", "WP3dMfxdSCo9WQa", "tMv3ie5VzguVtMv3ie5VzguVtxnNqM94q29TCg9Uzw50l09vvevsl0LotKvsl0jvvfrptLmVqLvuve9owZaSmv0", "WOWeAW", "zM9UDfnPEMu", "WOmkFY8", "B3b0Aw9U", "meFcTCkhWQldLWFdRtrXbqFcJCo+yCkzW6tdTCoqo3FcLmorz8kcW7OIW5a0lWBcTIW3kIZdU8owW53dOrdcTJZdLCo6WPhdOCojDWdcKmoCjGVcLdSkw0quWQZdKmoFW5hdUG1SW6ldO2hcI2tcTcKfg8kLW68rzXtcQSoubmknWP/dVa8", "WORdImoerSoTW5BcHZddTG", "W6udW5RcQG", "aSoxfCkdh8kihW", "qwLK", "Bwf4", "w2TTrspdPa", "qSkXWODVW7ZcLbdcTcPxW79qufq", "ystdOcxdSdNcIxC", "WOWTvSoY", "6iEQ5yQO6yEh6zUg6lwe5RQq", "W5afxxv9", "W4TBWPldK8kpmCkBy8ksW6BcRsKPE8kvW7q/rCkFhdK", "n3WWFdr8mNW5Fdv8mxWZFdz8oa", "W5BdLCkewCkXW6pdKa", "WRddH0beWQ/cJmoWCbZdKMFdLwhdKa", "E8oRxtLEW4H3WOdcLCooAYhdLCkiv8oKW4RcTGNdNSosW6T1WRWZgq", "W5z7ttRdLG", "BgfUz0TLEq", "yxr0ywnRzxjbCM15q291BNq", "x3jLCxvLC3ruAw1Lug9VBa", "WOKXW54G", "zxH0CMfbCM15", "y25FB2zMAwnPywW", "W5ZdKCkcF8k1W4/dMsNcQmoNoeG0W4O", "CgfYC2u", "WORdSv1rWQBcNa", "Cujes1G", "ywXSAwfUy2vFCMvJB3jKC18Wntm", "WP3cPKWsix3cKmogW4eHWP0pW6JcHW", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9izxjVuMvJCNvPDfjLC3vSDfbVChvWtMv3mY9y", "CgfYyw1LDgvYCW", "nmkevCoCWOm", "kY/cQsldShZcGq", "x2nVBxbVBMvUDhm", "W7FdLCkux8k1", "qwXSAwfUy2vbC3nLBwjSzun0CMW", "WRXhWRvUWO1Xv1BcRHhdNa", "W7ikW4VcVCkm", "WRaYfmo9vNpcMhu1", "ge18WPxcMW", "cCkgCcLAWQ4CWO1KWPZcPMddNmklWO7dHdb/gq", "WRxcReKAi1VcR8ozW54+WPyyW7lcIG", "Cfz0sZNdTCoiis06WPhcGmkSu3qfcG9RWRddTa/dNa", "Cgf1C2vK", "zMLYzwjHC2vjza", "W4efAxz+o2RdLCk3fH7dUvK", "ywn0Aw9U", "WPJdUuncWQBcMG", "cSotvmoTFG", "l0fqWPpcJG", "fxrDgNVdTCkAWOZdMG", "gSkgBq", "WPNdHuXMWQi", "CMvWBgvUAxnOqxr0ywnRzxjZ", "WRO2bCo5va", "Bg9N", "v29YBgrnyxbvsvDYyxbWzxiVtLDVCMXKtwfWvuK", "g8onuCo6y8oZWR3cPvFdMCkswWni", "WRP/dgRcImkraa", "lcZcTYBdO3lcKam", "W4TBWPldK8kpmCkBy8ksW7/cQsK4CSk/W7uCxSkjfJKpWRBdGq", "W4KlDN4", "vuLnyw5Hz2vY", "dLrSWO0", "vYL2WRFdQ8kMB8kKW7K", "WPpcUCkEWRFcHvbC", "WQ7dPHKTWQFdUheWWOzdbbldJ3pcTq", "tKvxx0niqvrFufvtsa", "rSoDrsfp", "eb1TwfVdLmkwjSoBWRxcNdhcNxm", "r2X5yLq", "zuZcHXNcR1juzmk9rCkGbXGfm8kUW6xcQq", "W5qpB292iwtdIq", "W7ldR8k7vmksa8okWRr2ra", "WODvW5m9W48", "z2v0u3rHDhvZ", "EhbiBhO", "wNPUwdddR8oOkXa9WOVcHG", "rgLTwNO", "WOfezdtcM8kbAG", "WQddObS8WPBdVNy7WObYdYZdHq", "5BYr5Pw6WO7PMze", "z2fTzq", "zCoIkW", "WQ8iW7S", "qMfZzty0", "f8kcrmogWOGO", "iqpcJa3dSW", "mJBdN8ozmNq6WOrEk8ohg8onbw/dSSo6W7S", "WOfpWPDXWOvAsYtcRvFcImkJuaiSW7RcKeuEuq", "vgLTzq", "hWbV", "WO0eAcldVmk5", "6k6+572U5Ash5lU956gU6k6K", "WRinDchdOCk0WQbF", "c8kBCYfRWQOAWOm", "WOJdPKFdLSoG", "WQqdACoqCmkyW7zHWPDWsSotWQxcKWZcHcW", "WRBcRfSXiKVcKCopW5GGWPqPW6RcMN04FahcKCoHyG", "vCoHimkDWQW", "WQeMbmoIrM/cMuaKWRi8W4Tw", "u3rY", "B3bLBLvj", "AgvYB0XPC3q", "meZcGCoktu9FvSkmW5y7", "jSkdqSoBWOKH", "wComuIPEW4W", "E8kdrNhdIG", "lSkDwWNcMYZcLmkMWPf6WPRcNYBdRHe/W4BcS8ofnmkbAY/cV8orW7b/umklW4RcGCoyx8o0WQ/cVSk9WO9tW5mZBJKlW5vzvCoxnCo1", "W5vhrJ7dS8o9WPDUzq", "WOGlAcldLmkZWRnj", "WPpdV11fWQi", "WR09jmo+she", "5ysA6lwa5RES5lIN5lU+5RMn", "W7ddSComWQG0", "rCodssP8", "W7fJWO3dLSkcj8kjy8ksW4lcLYW+EmkBW7SFt8kkcbymWRFdLG", "qNv0Dg9U", "iWBcK8owwLD3FCkqW5e", "wNPeruu", "WOv9W6xcSH0LxcddGG", "hCkatItcJJdcSmkGW4PoWRdcSHxdVreJW4RcPCoOpSoBrHq", "W4VdHSkz", "CxvpB2i", "zCkkvgldIKVcSSoPsSkPWOS", "hJxcPmoMD3XOrmkMW6amWROzbW", "WQeJg8o/uW", "W4CrW5RdJ2DtWRe", "WOJdRCkQlmo9W5VcVZujW7XwWQqBAG", "W5pdT8ocWOm", "WR50agRcLG", "yXj2WOhdMG", "WQZdMSkramodW47cNXmGW5bQWPG4", "B25VCgvU", "DIZdVchdMJ7cM2e", "W7OjWRiIW4iQhW", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBLDPDgHcB3r0B20Vq09ovevovc9vC2vYsw5MB01HAw5qyw5LBc9JB250zw50tM9Kzs90B3DLCK5VzguVC2TPBK5VzguVrgv0ywLStM9Kzs9UB3DvC2vcDg4", "k8klCs1B", "W7xdQcjG", "aCkWxSovWOu", "W4hdH8kfqCk9fSozWRbN", "rWdcLSoVW6e", "zvfRyxK", "wgXIzg4", "rbJcJSo3W6ldRuJcKW", "W6tdTZj8agpcImkkbsOdymoeWROFW6KJW6RcMSkNWR51eCk1WQe", "cmopfCkpomkz", "gaNcNW", "WQy8gmo6va", "Bw91C2vKB3DU", "avZcSCo4WRa", "WQa2fmoI", "CulcMJtcT29r", "l8ovESozFa", "WRJdO3qVWOu", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrszxnVDxjJzvbVChvWlZjUzf9Iz18Zl25VyM9KEvbVCe5VzguVtMv3ieXHEw91Dc9ozxCGtgf5B3v0l2j0BKzPEa", "rhLrDw8", "j8kiBdThWPGAWOnIWRO", "z2v0vgLSzuLUzM9cEunVB3jK", "uwn4qGtdIa", "cSoosG", "ntxdGCoxnM4EWOb1kSomd8oXhgVdV8oIW6hdSmoR", "vuLe", "WRJdO2WTWP05", "W7vEsJNcQW", "ug9Wtgf5zxiVsxrLBunVBxbVC2vqyw5LBc91C2vcDg4", "fmoou8oW", "rwnSBvO", "zedcLddcR09BymkBt8k2lW", "W6ddOCk4v8kYbCoHWRrLx2BcJMvdWQ0cWOHwoSoIz8o1", "uKPYEKS", "W4qgCNH0", "BwfYA1bVAw50zxi", "hbTGxf3dTCk2iCoj", "u1DqEuG", "WRTaW4qBW68C", "WPVdHKldTmoNWQRdT0G", "uKDtAgfYzvv0AwXZ", "qNvPBgrPBMDZ", "W7mlExD6awldL8k8", "WOdcSmkBWORcN1rcW4q", "WPyUW5G", "cmovhmklh8kyqSoGo8o3WQldQq", "W7yCWRe9W5O", "cMTrgKFdNmkbWPa", "Dc1OWQNdS8kZFCkZW57cH8kOWR3dSa", "WQ9UW63cVbOLqtZdLSo7WOXf", "cKL1WOJcJ8oYW47cQ8kGm8kM", "z0FcKa", "xmkmWPvFW7C", "WPfUW7xcUH8L", "amoFfmkHgCkua8oM", "yMfJA3vWqNrUmG", "C3vZDgfPBKf0DgfJAW", "bcZdNSowhgKEWO5LnSow", "WPjSW7xcPWuLqsRdKSorWOj5mComW4G", "W4CaWQaLW4uIcmkVWOTcW5ilcmoa", "WRv9W4GAW60", "Aw5MBW", "WRJcQ20EjG", "q2XVC2vvsq", "l1vXeCkdW7lcQcpdG8orWPHHy8o8BmoC", "x29UvgLTzu91DenHBgXIywnR", "A2v5CW", "DgLSzuLUzM8", "W4apB0H0jM0", "WO0kFa", "twD5", "qwn0AxzPDhLdB250CM9SBgvY", "WR5CtttcM8kHBCoUWPxdUeTTbwrQ", "hqb8xfW", "DgLTzq", "WPqGW5iR", "jZBdN8ok", "zw50AxrPzxm", "cSkDrcNcIq", "WOlcTmktWRdcIhXeW5xdQG", "WRz3c2a", "Dg9Nz2XLvgHYzwvbDhrHy2S", "mGtcHSo6u0jiymkVW4OVWOWI", "WQFdPGy4WPVdTMe", "WRvHiMtcLSkDgSksWPaf", "B2zMC2v0v2LKDgG", "ELHLseS", "p8oxwmo7ymoLWRq", "WRFcQfWhaf/cJCoiW5KNWP0n", "otZcTmoswG", "ge1KWO3cM8oE", "dCoEhSkfbCkv", "ug9Wtgf5zxiVvuLgCMfTzu5VBMvBmcWXxs9dt05uru5ul0HLCM9ICMvHA0L0zw1qB3aVz2v0qNrU", "y3jLyxrLrwXLBwvUDa", "bXxcLmojwM1AECkg", "W4GyW53dJx1p", "WOuPt8ouwSkHW5LgWRXhA8o4", "WQmPvbxdVG", "Cg9W", "r8oLp8kxWRdcUJmnWQnn", "DNnzzeq", "WRnaW4WDW64yW5C", "W6mvWRe0", "vSkXWODEW7NcNXO", "ANzArxe", "te9hsu4", "mhW0Fdn8mxWY", "W4eyENz6dwZdImk9nW0", "WOhdNeddRmo3", "BwLZy0nVBNrYB2XSzxi", "orlcMConDW", "z2jQyvy", "WOvtwIhcImkmyCoL", "uezpCgvUrgf0yq", "W5VdOSotWQ8AvCo5WRxdP8kHWPHdhCk5WQH2b8keW6BdQ8ki", "x3n0vgLTzq", "DMLZAwjPBgL0EwnOyw5Nzq", "C2HPzNq", "rmkGWODlW7pcMHJcOWvrW5bqwL8uW7NcGq", "WPhcPCklWRJcIf5vW4ldTa", "nWZcT8ohwG", "y1HcAue", "DMfSDwu", "WPvOW4/cHtW", "D8oCvsfoW418WQpcUmoCBYW", "WP3dJKFdQ8o3WRRdML5NWODYDa", "idZdLCok", "dmkWAbPj", "zKvmsMO", "WRhcPCklWRJcIf5vW4i", "W6CEWQ4LW4W5a8kYWQ0", "B25uCMfJA2LUz2TcDg5dBgLJAW", "j8ksxCoDWPeJiv7dQCouWPm", "y03cLX3cRunBC8kAsCkHpGqQjmkX", "irhcLCoeu092DCkrW4yG", "sw5PDfnPBMDSzufYBxLZ", "AgvHzgvY", "W5zqwZZdUCo7WQDWzIuRW7XTEHq", "WOBdUdSBWRa", "WPr3dgtcImkTbSkZWPCjWP5Ud8k9WQFcHby", "W6qcENvXkM8", "xuVcNZNcTu0", "W64+weXy", "DXNdTrRdQG", "rw1iswO", "h01Temkw", "nSkxwsRcQt7cMmk4W5j/WRlcTZhdOW", "W4tdOCk4BmkYdSoBWQC6ENdcU3jqWRycWRrTo8oSlCoyWRxdMqBdN8koW6tcOSkBWQJdICovgSkBW7BcNIqZjrZdTg/dM8oupCkLW4xdJ2tcGmkHmSk8aSk/W57dQmkvigHuW4JcVCkvW6/dPGufW6voechdJCkSj8oXW4KwWONdMmkvoe44ASorW67dGmo8WPW", "yxr0m3m", "5PoW57sF5lI/55sz5z+z5zIC", "WPaPv8o4vmkO", "5BAi5y235RA155UU5B2b5PEC5O6+5AEd5lUy5Pg35l6M", "CMvMug0", "omkmCZDzWQ4", "W63dGmk9vCku", "B25TB3vZzwrVD24", "y1LlB2q", "hCkzvY9Q", "WRiQW6SGra", "DhjHy2TLCG", "W6e9se9Wig8", "sMTdAu8", "WRnSW6/cLqaNzdS", "WQjbaw3cLa", "WPRdGmkZfCov", "WPtcVSkTWRZcMfbeW7FdPNNcUq", "ug9Wtgf5zxiVqwr2zw50DxjLqMf0DgXLv2LUugfUzwWVyMDFyMXHy2S", "CMPpC1a", "W5tdHmktva", "Aw5Uzxjive1m", "aKHDoCk7", "WR1RdgtcLmkB", "rLb1DKC", "WQldOZn6W57dMSoQCwvHarG", "BwLUzv9JyxzLmZC", "tmkYWOflW73cLa", "zeDjBfm", "WR7cP3WBiKK", "W48gWRi7W7i", "WRVdH8klemoyW4RcGH8VW5DS", "hCktwYtcMtZcHCkT", "mCkpCCoqWOi", "W4ToWPZdLCkxoCkZt8krW5xcUW", "WQVdGCkFh8oFW70", "DfSej39bE8kP", "WRRdQsH+W4ldUG", "WRrqW5GoW74AW5FdUCoccgBcGmo6WPmAwrqhW6RcUCkBW5RcTCofASo2W6uyeCo4WQe", "q0vPB0i", "WRxdS3yLWRS0n8kmW71hWRS", "zNjLzq", "W7qlW4VcQG", "5OIy5PAx5QIH5BYp5BEY5ywZ6zET", "WPdcPeagi0O", "mMhcRCkhWQq", "WPjIW6xcQG", "tt9tWPJdMa", "W49FWRldR8k8bCkxumkXW7C", "WOBdH1tdU8o6WQVdOq", "r2v0sxrLBvbHBMvS", "fN5y", "q29TBw9UvgLWCW", "kc3cSHm", "u3jVtZNdKSo/lYWX", "W5CyW4FdUwjoWOy", "CMvWBgvUAxnO", "CMvSB2DPBKrLBgf5", "z2v0uhjLtwfYy2HcEuLUzgv4", "zg93BMXVywq", "W7BdUCklBmks", "qwXSAwfUy2vszwnVCMrnywLUugfUzwW", "W7afAxD7aMldISktjXldVwZdQ8kUWQH/iNRdMgBdNCkv", "W7pdVmkNvCkJ", "WRLRcMVcGa", "WPxdSxHDWOC", "mGnKue7dN8k0ma", "A8o3kmkAWRW", "uMvZB3vYy2vuExbL", "vgLWC0XHEwvY", "FvTuybxdNSokcHWrWQe", "qxjTEurHDge", "gCkDFYXk", "WRlcPuyqjG", "x3bVCW", "CMvZDg9JAW", "a1XPWONcM8oF", "W6ujWRe9W4iUh8kdWQrb", "qvjnwv9dqu5druXFufjprfvdrv9bteW", "WO4lEdRdMSkUWRu", "WQWaEd7dLmkEWR9cW5mbDhtcGv3cTq", "omksu8oAWOyzc1i", "WR09jmoJvhlcLMG+WOCPW5XCWPpcGq", "WRbuWQPDWOvWse3cVqddJSkGAr0bW6K", "C2L0zq", "FCoRp8kyWRZcQYGFWQq", "A1Dnz1i", "W73dIb5ljW", "tKjHDhrSzunVBw1VBG", "e09SjSkaW7dcIspdSmoFWOz5", "zxP0qxi", "B1bYwLq", "DeLNtNe", "WP/dVenFWQlcHSoEDctdON/dJa", "cmkgAIXaWQzbWQXZWQJdQuldICkaWO7dNsG1g8ocEvNcImoomeGtDCo2", "vhjLyxn1CMvnyxbdB250CMLIDxrLugfUzwW", "pCk6yGNcVGRcSmkqW7PQWPC", "W4DVzqddTW", "q29PBG", "W7ubW5VcK8kM", "cr5Xsga", "txPcwK4", "C3rHCNrZv2L0Aa", "W4PfxspdS8oN", "CMfUzg9Tug9PBNq", "x2DPttldQSoUpcS", "W6mtW4ZcSmkoWPnN", "Amo9i8k6WRC", "W65BEd/dIW", "p8kzEJLBWQ4MWOD6WQ/cRhZdU8koWOJdNd9Y", "wxzPEdddO8oNkXW1WPhcK8kxAvip", "gXTLvq", "mgTqfxVdNmk7WPRdGSoaamonW7ugWQ/cSWVcOG", "WRhdU2ZdKSof", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZlKUkRMJiNPKQ4Vz290B0j0BJi", "z2v0u2TPBG", "WPVdQfS", "nZhdHmosm3iyWOS", "y2HYB21L", "W5mzBhf0", "vuLdyw52yxmVug9Wtgf5zxiVtKjHDhrSzu1HAw4VDwKVqMf0DgXLugfUzwW", "CKfsEwC", "W4BdQ8k7t8kMbCoDWRa", "W6jPWONdOSkmomkMBCkmW5FcPI8", "WPRdJu3dQmo3WRZcV1vHWPrZy8kvW7K", "z2v0q29TCg9Uzw50C0LUq2HPBgrYzw4", "mte5mdK3nZzSqw9LsKu", "nmkzz8owWRq", "sujgCxu", "yNrUu3vZDgfPBKf0DgfJAW", "W5tdMSkzsSk8W4q", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrnyxbfBMvTEs8YBMrFyMDFmY9IDg5oB2rLl0j0BG", "W70dW4ZcUCktWPu", "WPpdSv1vWQVcU8ojCbJdOG", "kvr3num", "v31UwdddR8oOkW", "WRddOZr0W5FdPSoICg9jbr5B", "nSogv8o8zG", "d0BcPSkNWQZdNqC", "W5/dQ8ooWO4E", "x2nSB3nLt3rOzxi", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9izxjVuMvJCNvPDfjLC3vSDfbVChvWtMv3mY9QDw1W", "lSoytCoW", "zZtdQdJdJW", "WR/cVei", "mhW1FdeYFdf8mNWXmhWZFde0FdD8nhW5Fdz8mtf8ohWXnxWXmW", "hCoesCofzSojWP3cPvFdMCksCbrMthBdTa0", "ACo3gSk1WOS", "jW3cHSoa", "W4edDx8", "WPLJW6lcVXWKAtW", "vMvY", "W50hW4dcU8kl", "WRldP3e+WQGLl8kcW7Lf", "tLDVCMXKtwfWrgf0yq", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9xB3jSzevUDgL0zvbVCc8YBMrFyMDFmY9IDg5oB2rLl2nVBNrPBNvVDxngAwDODej0BG", "WODkW5K", "W74cWRi0W5e5", "ivbIWRBcTa", "B3DKCKS", "kvH2WPZdImkz", "W47dPSojWOKAtCoyWRFdQmk8WPP0", "WR7cUuOD", "W6euW40", "D2vIz2fTzxfX", "fmkdrmotWOqTb0q", "BNvTyMvY", "WQTSfMNcGq", "gfHZWPZcMSo+W4tcSSk+", "CxvPy2TszxbHAxi", "j8ksq8ogWOGLcq", "WOlcTmkCWRhcIKDxW5u", "hCkICCoLWQipjNxdJ8kvWRBcOSonmW", "e8kxrta", "uXhcM8otW7BdP3FcNZqTW7hcI1ddOCo5mSoUtW", "WRddUWCHWPNdShe4WOS", "DfmvkMDa", "yxnRAvq", "sfvbv0vj", "zg93BG", "ufzMD2q", "AmkNWPrOW7/cIq", "ug9Wtgf5zxiVvhjLyxn1CMvnyxbdAg9VC2vcB3nZugfUzwWVtMv3ifnJCM9SBfzPzxCVDMLLDY9JB250zw50l2L0zw1JzwXSwZaSmv0VyNv5qNv0Dg9U", "nSk7ECo3WQ4", "ywjZ", "A0FcNZhcTumyzCk6t8kXiq", "W6rJAaZdTCoXWOT6qJ8wW79VEXtcTSo0qge", "AgvHza", "hJL9C0G", "WOHytZZcH8khuSoYWO7dUKfZhxG", "CLLHuMC", "WPxdJvxdM8o9WQpdOLrGWOv0Dmk5W6tcPmk3dCozWOSGWQhcNG", "g8oswmo7Ca", "BwLK", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1el3vZzuj0BG", "twfYy2HuExbL", "Au9ZEMK", "ywnXDwLYzq", "B3nRAw5Pza", "ymkdqvpdHa", "BwvJAgftDgf0zq", "pbRcTmoruwbxE8kqW4alWOKLndu", "t2jZDgfJBgvjDgvTCW", "W5VdOSotWRKuqSo7WRtdGmkUWPjLm8kPWOz9cG", "W7FdRJTQ", "vCkMWPXEW7/cHqtcOse", "eanTwf3dUmk5iConWQlcHZlcNq", "zMLSzq", "tLDVCMXKuMfPC2vgB2DdB21WB2vUBNq", "mdZdI8oxowuTWPDfm8ohg8oQfW", "yxbWD3G", "x2XVz2LU", "WQraW54", "WPSXW48rqtBdLrRcOSollCkgbCkhtG", "kCojuSoIqmofWQdcTW", "WQ5jrXNcImkBBCo1WPu", "o8oWbSkhea", "WRmGeSo4qW", "WQHVtHpcIa", "lK9TaKW", "DhjHy2u", "yxr0ywnRzxjizxjVCW", "Ahr0Chm6lY9ZzgSUDg1SC3DRlMnVBq", "oJVdGSoupq", "lwHLBhbLCI1LEhqTB3b0Aw9U", "W6nuwJ7dNCoLWOj3ysqCW7zoEHBcOq", "d8oiwq", "W5zbwYpdSSoUWOD4Eq", "CJvcWR3dQq", "cLvPWPdcN8odW4ZcVSkpnSkLiSo5kmkZW6TMcc0rrCoB", "i1RcQSk4WRddUXBdTNDx", "6is75yMH5yQp5ysw6zQl57UT", "6l6n57Qz5PEn5ywE5BUf562Y", "WPRcOmkkWRZcMuXVW4xdTxG", "W6FdUSkXtmk2", "x3bYzxzqB2LUDa", "vg91y2G", "WRldQsbWW5JdT8oBBw59arHoW5i", "rxzLBNq", "A8kCBvxdJfdcVa", "ELzQCu4", "W5jJWO/dJCkhgmk3CSk3W4lcRdOVF8kQW7mxxCkRfICx", "twfYy2HtDgf0zq", "eqdcMmoJxLbpvCkxW5ePWOyNzq", "ewLvf2tdKmkDWPG", "pH3cHCog", "W5pdKHDLfq", "y29UDgvUDerVy3vTzw50", "refuqq", "Ew9wCeu", "WQmGv8o+vmkIW4PmWPnrDSoPWPVcTahcQrr6", "WO5RWOvJWPbJANZcQqO", "CCkBwvZdIG", "cCkCBbPoWR8AWO5ZWPVcQhRdIq", "WRNdP21EWOS", "h8kcwYNcGW", "eSoqgCkohCk0cW", "B25JBgLJAW", "zxnJyxbL", "jX3cM8oatq", "yMfJA3vW", "zKZcLthcTunLDCk5umk3obu9", "Ee0t", "gSkgBHroWRilWPa5WORcGeJdMSkyWOZdJrj1bCovm2NcOSo0kgqUvCo2W5hdV8kTsCkUWOXirxBcGL54imo0WQldICkbhSoVW57cHYSJDCkbA8k4WP3cMh4fgMZcQSkjctpcKCojfSkRfsxdLmkljCkJFSkfWRXqmmk8A8o6umo6", "ELatcgjmCSk+hmoAaCkeW7dcIa", "WRS9imo5vwRcK0WXWRy", "W6jTWPddHa", "qNrUvhjHy2TPBMC", "cX3cUSokvW", "WPpdOaueWPBdRN0SW51ZpXRdKNBcVCoDc8ocsSk3cmkXWR3cOcddLI/dOCoWWPRdUfJcG3/cGCoeomk2vmkydXlcMHVcJZNdJ8khWRqKvwqlymoXW4qzWQ7cSCk2W6ldP8oHWQb+WQNdUCkSW4rh", "C2vUzfbcvJi", "qNj0v28", "nZJdNCoFngKjWPW", "wuvgv1O", "zvvyCgm", "yxbWzw5K", "yxPisM8", "W4G6Aufl", "rXhcGW", "nt3dICo9p2KrWOe", "oCkmCJ5WWRKlWOz/WQ3cRg3dNa", "uNvmu0G", "WRbaW54/W7qzW5pdGCodh2tcKa", "vqtcN8oMW6RdPG", "W7ypWRu4W5uO", "Bxv0zxG", "WO0mAci", "oSkiBcTk", "W7ldVmkTrq", "WRXdWQXN", "rKLntxi", "5PA56iIF5lQj5As65Rs75yQO", "C3rYAwTLqMfJAW", "AxnozM8", "W7yCWRe9W4OUg8k2WQfcW5fjdCoDW6RdSa", "W6XIWPpdHmkraCkZESkw", "zhLAvvO", "qIldPcZdTa", "W4vuWPBdPmoxW40RomoYW7pdSxm", "5yIX6l+65AwK6lsR", "WR1QhwRcLG", "Cg9ZDa", "y3jLyxrLt25Lu3LZtxnN", "C2v0vgLTzw91Da", "W6ChW5ddVSkbWPXRBCkdWQ3cLsZcUwBcNNiJFKFcO8kjkGVdQdPBW4FdPSkpfSoKvMhcKSoPbSoArCkRW4dcHmoQW7zxWQ1QWQqkwhGYWQJcLCk5W6FdSCkeAmonWR8GWRRcTWpcPt9HW74NW4aYWRH9CmkUbhpdVmkgxhRdPvhcJmkEpSkNW5hdQCkGWQVdSbixW4elWPpcLCoPBmkxW5FdHmkzuCo6W7SpW710W6eexCkeeghdHtXqtJTLcbBdSL/dK8k2W4NdMSkRWRBcVKxcNmoTjqLuq8oKWOldMCo3W4e3WQe6W5DXbeJcJblcUsDUW53cJmkItwSey8kXWQ1LhxNdPLGltCo4tSkGnMOlWORdTSkulSkWW4VcNSkgyNe6W6hdRGOFgu0SA8kQWOjrWRdcKY1JW50um2ZdS2DyW4VdJwOimSoLd8owz1/dHmofW7SnWRFcU8kvWQ7cId3cVCohyWTOW4BdUhJcQCkzlbZdHmocE2RdPxJcV2u3WOldJSkRtSkMrmomoY4XWQ5QW4pdMLLTW4JdKmoLW5lcJmosWP7dRSkkC8kuWOxcICoXWORcIComeSkeWPytW5xcRYldSmoeW4ddTX0lDwFdNc0/WO5XWR86WOqdEvzdewScuI7cKCkGudXPimkJW6esfwP2WO5meSknEJ0YxSkYBSoxW7XPWPFcVhbebZ7cSCkIW6FdVf/cOLy5xCojW5JdO2dcVSogW6BcN8o/imolWQHVAKWYF345aapdTmo1WPNdJwRcTmkiemoeW5qYWQBcVmoCFrNcTYddPZn4W6ddK8odWPXoWQ/cRSoIw8oGowRdLxiAxqFdJSkDW63cHYy6W7xdQCkdz8kgb3mmq8ofEfGKW73dN3WEjbNdN8kBkSoWc1LyW75UW4pdICotpJmYs8orpmobomoyWPxcI8kuWRVdJ8kCW7dcUCk1WRHoW5tcKYFcPgqCbmklrwKYtCkzxComymoSW78HW5T0C8kxW53dJX92q1idiqD3W7tcRsZdIHhdPCowWQvuW5tcKt91DCoeW4tcNgFdVCkqA09ZWPpcL0T9W4LYjh3cTmkfdf0TWOxdGZjEzSouW7ZcQuJdVgWNWQrrl8oSW6bJhdH6omosiYqCW53cVSknW6BdM0LGW5n4EJyCWQfNW7BcS8k8k8kyW5arobKIW6pcGZpdLa/cQmoNgvzEzCoSs2HUWQr8cmoasCoSzCo5vSooW48jW6JdTSkoW5quW7qGWPSnWQX1WORcLdBdOrLVvbJcJrVcMSkuWRGvWRVdNSkSt3uLW6RcVXSzWOxcQmkrogu0W4fXWO9kW5ddSg8/sCk9aSkyWQ7cNSo4m8oLW6VcMSkVW5/cHmkGzbehfttdJJ46wCk5W4uxW7ZdGSoiWR7dHSoWuCoSn8o8WOFcLWVcV159gctdNSkEW7FcKCkPWPG3tSkGuSkuimkaFJqwW6XyW65oW4fyoCoDWRddRSoeW6ddTdNcNvZdPCkNWP3dL3hcJuGLjJyYW58iW49QnmoKW7dcT2OVW43cMZtdPvhcTqlcNr3dPmotW43dSu7cPSkyu8o5W6qVirFcJHRcSghdSL8Ew8otWOpdHdNcSJ7cQgNdUCk4WPNdOKFcSrNdVMxcI8kVACo4ja", "WPpdMKZdOCoBWOO", "kCkgCJDD", "Agf2s0C", "W4H3WOz/bgxdHJtcPSobiCkW", "WPKUW5eTuYC", "W7qaWQqWW5e", "h1Lwa0e", "ug9Wtgf5zxiVvuLgCMfTzurPywXVzY9crY9dte9trq", "WQBdO2y/WOO0", "WQBdVILTW5NdPSoYB2q", "tg9NAw5xzwjby2nVDw50ugfUzwW", "WRBdSufsWQ/cJCop", "y8oQk8kBWQS", "W7vhtdNdUCo9WQn/CIKxW5bPCq7cO8olq33dI8oh", "x2zHC3rbBgXPyw5Jzq", "qMf0DgXLrw1qyw5LBa", "C2vSzL9YzwrPCMvJDa", "WOC+sCo4rW", "pmkzxSoxWPusb07dTa", "jSkhxmoBWOqJ", "z3vPza", "WR7dQtr2W4u", "m8k2hG", "C29YDa", "DfrHvhO", "W4JdNmkztCoQW5K", "gX1TxW", "nSkFvCorWOW", "W4OdAhG", "CezlA0q", "qLegp2S", "WQ7dMmkolmorW7tcIqqUW4P7WRu5qd5PW7zAW5ygWQNcJJe", "oXhcMSovwLfKFCknW4W8WOaO", "vNjswKS", "DJfXWPxdTa", "yxnZzw1IBhLFDgLTzq", "6AUy57QN54Mi", "WPVdPKPyWRFcPCoCFW3dOhBdJG", "oCkDFYXk", "uComwIreW4fcWRBcK8onFJ/dGmki", "h8kGxtLbWR0pWPe5WO/cPN7dPmkyWPJdJs4", "CgfKzgLUzW", "Bg9JyxrPB24", "WQRdQv9t", "m8kwq8ogWQyQdL/dOCowWPtcI8k1z8krE8olvWK", "WPBdHJGPWPNdTN87WOa", "5zYW5zU+6lED56A75O+q56s6", "ywXSAwfUy2vcB3nZ", "WRXIW6lcSGudyYldGCowWO1ypSom", "brxcMJddLfy", "W7S+WPiYW5S", "WORdIc0/WQi", "WP7dN24LWQC", "WRNcKxS1dG", "jw5QWOVcKSojW6lcUSkGdmkslCoYnSk6", "A1vPEhG", "WPldSufrWOJcJCoe", "gSkBwsdcMshcNSkM", "W4VdLCkesCk8", "pIJcTba", "WRFcVeeqovFcKmof", "WRu2a8ocshpcLgKsWR8fW7e", "WRi1uHFdUW", "WQvaW5K", "WRCvW5BcP8klWPG9", "WOCmDti", "k8kpEa", "WRFcT8oXgq", "WRPsWRfNWOPMyhRcPGNdMq", "Cvajlh5n", "W6HuqctdICoaWRLSytOpW7z0mdtcNmofrN/dU8o8WRu4CflcGCkaAcZcVuPlbmoofGtcSbPqWQ0GWOCjC8kkvCoDnMToWRrYWPtcUgHNuWr+rWtcMxFcOZzjhmkRWQFdS35zmr3dMSktWOpcShjPW610WPxdSCo4zN7cOHrmrfWqWQa", "W4GFWQqLW6iJe8kVWO5FW54laG", "DurLufe", "quXmsufoq0vFr0vux01ftujfuL9squ5lx0Xju1q", "W5FdKCkyxCkTW4i", "r8omuILpW5y", "y29UDgfPBMvY", "W50RW63cMCkp", "W5CyFM16ixFdVSk8nb7dUftdSa", "uwn4qG", "WPNdVcn3W6pdMW", "W7GiW5hcQSkgWPnJBq", "D0dcLW", "wKT2zwe", "AgfUzgXLvg91y2HLC0vUza", "BCkFqvpdHKZcPa", "iCkyv8ovWOSJjL/dS8omWPBcGmkEz8k1ySoNvYHdjedcObS", "tKjHDhrSzurPC3bSyxLpyMPLy3rgywnHzgu", "sNLcqKO", "BM93", "WRpdNfxdUCoXWQxdT0K", "DNXXsdJdR8oShIO7WOlcGmkWy2G", "cYRdImoDog4zWQDFjCoejCo3hxi", "WOjOW6/cTWWY", "yNvZEq", "5ywS5zgk77YA", "xx90tZO", "nbVcMSoUBW", "meFcTG", "W61TWPpdHCkpmmkK", "wK5tD2W", "WQ1XcW", "WOldIvpdQ8o3", "Dgv4Da", "WQBdVIK", "BwLUzv9JyxzLodK", "W7zTWOVdHmkhbSk9A8km", "oZFdGSoomM4", "WReYgCoGrNu", "W6hdTtO", "WRRdSvTx", "C2TPBKne", "5AYy6jEd5y6C6l+h5lYc5Oc6", "WOhdHdbJW6y", "W6ldTZLNaMi", "vxrMoa", "hvb2WPdcNmoeW4pcSSkKo8k0k8o2nCkKW6e", "twvJAgfdB250CM9SBgvY", "EIpcGmoXW6JdPNFcNZykW7JcVuG", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9by3rPDML0ExDVCMXKCg93zxjqB3bquI9IDg4", "q0HbtKDfx1ndru5f", "DgLUsKu", "WQWwFbtdMSkL", "WOtcUKyDkN3cNSoyW4uIWPySW6FcKh0", "jw5QWOVcKSojW7RcKSkDk8k7kSoJoSkXW71fcrDsaq", "qvbq54Mi", "l8kLxCofWOK", "r3Dfzxe", "W5m8BN5P", "WRiJsa", "v29YBgrnyxbnC2DZ", "odZdG8ozi2G", "gWBcJWhdKW", "wMnXrMq", "eSoHh8kVma", "xdPlWRhdQW", "DxbKyxrLrw1tDgfNzuzVCM1HDgLVBNm", "B250B3vJAg1VDMu", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrfBxbPCMvtDg9YzwHVDxnLug9WDxaVmM5Kx2jNxZmVy29UDgvUDe5VzguVCMv3yxjKtM9Kzs9SyxLVDxqVyxr0ywnRqNrU", "irhcM8oksuy", "W6r8WO3dHmknmq", "WRldP3e+WQqWkCkaW7jhWRTD", "W6WfW6ddR04", "nmkBxmoBWOyOavpdN8oqWPlcGSknxCono8k/", "CMfUzg9Ttw92zunPDhK", "WP3dVwHJWO0", "W6FdUSkS", "aX1NtuddHCkUjCon", "cvVcISk7WQBdGcZdUMX2lsxcNSoT", "uSkvWODZW4q", "WOBdPHiGWOpdLhCRWPXsbcxdOxVcVmorjmodr8k3C8kxWOdcNb3dPW7dH8kMWPNdJL7cN0pcHmoPnmkU", "WPtdOtOmWOi", "WOHusdNcHSkf", "W7edWRmuW4iUeG", "DhGjjwy", "WPukBJxdNCkWWR9AW4i", "va9vWQ8", "WO0eBJJdLSk1WObEW4yEAa", "WRlcIKW9pG", "W48pD2T6ps7dLmk2jHBdRL3dTW", "WO5wWQC6", "WRNcRe4xkeW", "WODukG", "CM9SzuvUz2LUzq", "WRRdK2aBWOlcPmknia", "rcZcN8oYW5W", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9izxjVuMvJCNvPDfbVChvWtMv3l0HfqurfuI9dte9trq", "qCk9WPjgW7/cLG", "rColFs5bW7iG", "B8o8pCkDWQRcJa", "W5BdNCky", "twfWvxrPBhm", "r2BcPtxcGq", "BwvJAge", "zgLHBg9N", "BgLZDa", "C3bSAxq", "WRlcPuywi0RcPW", "aeHWnCkDW7JcQdxdG8oyWPvJzSo4", "B25tAg93", "W4jqxr7dVCoRWOj7rcSlW7jezJpcTq", "Cgjby2S", "WPCKW5e7", "W7GiW5hcQSkgWPn0yCkRWR3cPa", "WOijCJxdNG", "jWJcTcZdOG", "y01ZEgW", "qNPfy2W", "a0PZo8kB", "tM9Kzq", "uKHqAfq", "W4PBzJRdUCoN", "lCoXsmoGtG", "z2v0qM91BMrPBMDdBgLLBNrszwn0", "AfDryuG", "ESoXpSkC", "CerYxJ3dPCoglYGaWOZcNSkWu3qfcG9RWRddTa/dNa", "s0jfEw0", "ANvTCfrVsg9Tzq", "W4bnxq", "bXRcGmoxwq", "C3rYAw5N", "exrbf2FdNmka", "eSoEbmkXgCksgmognSoSWQa", "yM90Dg9T", "nWPKxfVdLmkvimobWRZcLtRcN20", "aaz8xa", "CNX6rt/dH8oNis8BWPxcHSk8F3uy", "W6nLWPpdHq", "5Psw5lQq6kwb5P2o5AEw6lEy", "Aw5KzxHpzG", "v8kXWP5fW6BcLa", "WOyaBXFdKCkRWPzdW5uEEMZcHfFcQCk5wt4AxH9qWR4", "iSoxh8krfmkOjG", "CMvTB3zLtwvJAgfbC3nLBwjSzurHDge", "WOOGW409vW", "mNhcVCkPWQK", "ESo2kmkhWR3cNqSfWQrC", "W4NdKCkvw8k1W4BdUs3cTmoWeG", "WQldVWuTWPNdS1S2WPTkeG", "CMvXDwvZDe15twfYy2HeyxrH", "fHD8", "z3rfEwy", "sfvbv0vjl0rdtY1btdaXl0HxrenpoJeYl0HvqvDfsurdtY1btdaXlZeWnc4YlJaUmtm1qZaWoNvZzxiVCMvSzwfZzs1RzxLZ", "aeH6iCkkW6NcLY/dS8oe", "C3fYDa", "W4e8WRhdOff4os3dKmoBWRjEoa", "yxbWx2rLDMLJzuLUzM8", "zgLYzwn0B3i", "EJnlWP7dSmkL", "b8oshmkwfmkp", "rxzLBNrjza", "z2v0vg91y2HcEvHz", "BCkFrv4", "WRyYa8o3va", "WP4KW5KVrZ/dKW", "WRZdPuddQSoXWQBdGu9VWPr/", "qCkoWOvjW6e", "wwLbv1C", "yLretuC", "W7RdR8kLrq", "fedcOmkL", "WR7cNmkEWQVcIf1KW4NdT3e", "gX7dHmotdW", "bfnMrgZdSCk+W4NdOSojxmosW7WMWR7cTW3cGSo+CthdICoPsIJdJ8kjW6lcL8k+W7ZdGmkAl8k0WQNdTLmZW5v+aM00", "WOWwssFdNG", "cSoCkCkwbW", "WO9qW7ODW58", "wvvmz2W", "rmkKWOngW6K", "CMvJywXStwfYy2G", "yxbWD3HFyxbWD3G", "x0ejcN5rF8k5nq", "jsxcTXFdG3RcJWvBWOpdRa", "WRlcPKeaiLlcMG", "W7FdGqfpda", "f1vlpCk4W7lcQsRdPmo9WPv9q8oKx8oyqG", "W7mfWRiYW4WJfmkNWQTzW7WjeSoaW7e", "BvNcLJBcJM8", "WPXlW7lcVYa", "CgfJA0HHBMrSzxjuAw1LCG", "f8oiuCoWrmodWRNcQLhdN8ki", "W4elAg9Eo3FdM8k6oq", "oWdcM8oj", "WQy2gSoMEg/cKW", "BM9Kzq", "WPZdO3O", "wejRsuO", "BwfYy2HmAxn0", "Bw91C2viyw5KBgvY", "W5PJWPpdSSkloSkH", "svrftv9vu0u", "W5xdHmoDWRuN", "DxnLCG", "BKaxo2zaC8k/mmoxdSkxW7dcLhOrWR3cJG", "WQ9dWRnLWOf2FgBcTG", "W7NdVCkV", "lI/cTrpdThhcNq", "WObkW5GqW78NW4RdMSoikMVcISosWP4", "WOvaW4SqW4KGW7ddQComf2/cOmowWOylwqKgW63cUmkNW5pcQ8owFq", "W6qhWQG/W6aj", "s1LVuM8", "yw5Ssuu", "CtXSWPFdRa", "ksxcVqBdPhpcNq", "W4etW5a", "qNv0DNa", "BMH3wMi", "WQpcRf8Flf3cMG", "p8kErYZcMZVcKSkXW6LaWQhcTtddNbuUW63cN8oep8oAwG/cNCoPW5bd", "W61PWPZdHCkgjW", "wmoqCsXsW6vGWQNcHCoovtJdMq", "WRP/i2tcNCkrb8kO", "pSoFeCkwea", "WRjwWQrVWQ1M", "B250B3vJAgvUza", "z2v0vgfIBgvhCM91Ca", "y2LWAgvYDgv4Da", "bv7cOmk5WRO", "q2fUDMfZ", "avRcQmkYWPFdLXldUG", "vvnAyva", "ENbpCgu", "WP99W6tcVq", "q2nYqwi", "FLOjjw9gASknn8oxj8kQW63cMv0rWRC", "W6ldOIfDcM7cGW", "BNroELK", "FLKiog8", "WP1OW6lcUWGjAa", "W7xdTSkxtSkTW4BdKqhcTCo0cq", "WOhcPL8/leFcMSozWP4BWROSW7tcKNuZrJZcMSoNow/dNCosW6xdL8k5z8oBkNOOW6dcQuZdVSoeW7WpuSonxSoGWOtdMuSCWOhcPZVcTZBcOCoHymolnItcV8kOWQbieLuYeSohW6FdRCoNWR0", "c8kBCYfC", "d8orwCo0ymojWPZcPvZdLCkprG", "ECoWiSkeWOJcMYGCWRzpWQVdRCopWO8z", "y8kBvfhdJfpcKmoZvSk5WPPnma", "nYZdNSokog0PWOXAma", "DhjHAw5PBMDbCM15CW", "WO5CxshcHCkht8oLWOldOKvfchv5", "B25tA2LSBeLUzgv4q2HHBMDL", "ywrKuhjLzMfI", "y2XPzw50wa", "u3jgBgW", "W5ikW43cRCkcWQHj", "zmkGWODlW7pcMHJcOW", "WQtdQGelWP7dO2enWPLpgb/dJ3NcTSoriSoVxCkBqW", "ug9Wtgf5zxiVqwLYrhjVCfbHBMvSlZjUzf9Iz18Zl0j0BG", "57cV57Mz6zsB6k6L77+L6k6M5OIq5yMl5yQT5PAE", "dKFcOCkU", "WPzrW54DW7GFW4BdNa", "W6b1WQRdKmk5", "WRLRhgdcICkChSkLWPebWPrU", "zxzptxu", "5P+V6k2M5OMv5y+o5lY55Okg", "WRuJsCo7uCkpW4zgWQbg", "nmo2uSoNEmoiWP3cPvxdUCkvxbLDtx7dVrbX", "uHVcNCoUW6xdTMxcKa", "y2XLyxjjBNrLCNzHBa", "ywjVDxq", "DgvHBuLK", "rwjlBvG", "y2fTzxjH", "bgTehwS", "WRVdTNyJWOy/", "W5xdQCoeWOearmoYWQlcPG", "bSoEbmkLemkqcSovjmoBWQ7dRaRcSWXGgSoBAvdcK8oG", "AxnuAw1LB3v0", "CMvXDwvZDefJDgL2Axr5rgf0yq", "kYNcTqm", "W7v+WPldLCkmiCkVCSkh", "renplufmmdeGnc4YlJuUndeZkemWmeuXmdbsnva2kq", "CMvWzwf0", "WP4KW5KNxdBdTX7cQmojhmkBgSkB", "W5JdOSobWOWatmoJ", "WOm8s8o7ta", "B25JBg9Zzq", "yxv0B1jLBg9NAw4", "erzntx8", "vK5qr2y", "oCkiAd1lWPGfWOT4", "C2L6zxr5Cgu", "W4ayW5xdG2DcWRHEc8kiWOpdPw/cSq", "WOddKMNdU8oZ", "zw50CMLLCW", "C2HVDW", "tLDVCMXKtwfWvxrPBhm", "q3HxtK8", "W53dOd9NeW", "BxLsyw5R", "WOHCxtq", "W4tdVmkTu8k2a8oZWRrNtfhcVM9FWQ8vWPvUoCoSCa", "CxfNyw1L", "W5vuwZNdUq", "W6FdU8k7vmkYhSoqWPrHw1JcNMS", "f19ReCkhW7tcTYldGSojWRPSBmo4", "Bwv0yq", "W5ldQmoq", "C3rYAw5NAwz5", "W7JdMmkzsCk8W7/dVq", "o8otumoSxCoi", "vxnLCK5HBwu", "WPmNW40VxZy", "W4ldSanykq", "EJn7WPRdSmkHAW", "sMjitum", "mbVcMmorwK1p", "buXO", "y2fSBa", "CMvKDwnL", "twfPBerHDge", "l8kBBdDD", "yLHeq24", "ChvZAfn3AxrJAe5Vzgu", "W6JdNG1nkW", "W4rgtctdUmozWQW", "6yc26l2c6ls05RMY5l6q5Oks", "Cc57WPFdR8k3", "ChrVD2vY", "mxWZFdb8nhW2Fdv8mG", "WQFdPGy8WPBdUxS7WRPpgcG", "eSoeuCoLCCoEW73cOeZdM8kwxqOcqx3dVWfIWR4XzSok", "bvHOWPW", "ytj/WPhdS8k3wSkVW6dcJCkQWPxdQJbVW6fFWOZcKf/dU3bI", "rwLNAhrdB3vUDhj5twfPBKnVBNrYB2XSzxi", "v0jHwfq", "zNDNAeC", "Cefutum", "fwLBagddJCkkWO/dIW", "W4zTWPpdL8kcjSo5tmk1W53cUJC/v8kDW6PDzmkSfICpWRFdVSk4mCkqWPldJeLSmSkWcmkxqutdLINcQ01WawddMSk4W5mWBGZcKg3cIqXoW4VdTSo7rmozWRihyh7dG8kqdfZcSJVdISoICmkPW5JdQmkSDmom", "exjzex0", "r0vux1DbuKvit1vtrv9jtKzp", "vvqjl2zaBa", "5yA35y205lIT77Ym5yIh5O2I55QU6ikK5AsX6lsL77Yb", "tKjHDhrSzu1VzgvS", "fM9vagO", "WQxdUci", "CdlcNCotW5C", "ACoLimkrWQRcIa", "Cg9PBNrmAxn0", "WRFcOemhkeW", "z2v0qNvPBgrPBMDbCNjHEuj5qNvPBgrPBMDhCM91Ca", "zgf0yuLUzM8", "z2f0AgvYuMvZB3vYy2u", "ANzlthe", "vvz4u1a", "WQOGW5ybFG", "W6mVrCoQf3RdG31J", "y29UDMvYDfrVv29YBgrtCgfJzufs", "BCoHoq", "zw5KvgLTzq", "W6/dVSouWPKqtConWRtdVmkGWQTPhmk1", "omkmCZDzWQ4TWOP/WRpcRq", "thzUqYtdS8oOkWCGWPZcGSkW", "WOGdAtFdMmk4", "z2v0uejwzxjZAw9U", "5A6z5yw+5BcY6kEY55Uz5B+Q5yQ+6k2b57+a5BUg6z2L6ks+6ywR5PEb55Q95B6s772K56kK6kYQ57UG57Q+7767", "WQO/Ds7dSq", "kfBcH8oqwLfcnSozW55QWOyKnJadWQ9BWQxcH8k+thJdU8kvoCkPW6pdMMy0vSkWASkAqCoXASk2l8kZvg/cHCoVW47dKSkHW6/cRatdThhcPvZcGCk+f8kNBSoyDJm", "WP/dHvtdJSo4", "uhvZAfDVCMXKtwfWvgLSzuLUzM8", "CIJdUa3dMc/cRhCzWQddTcRcNSkfjW", "WPBdJu0", "mZaWChG", "ru5jx0nptLfvrvjpuL9gvu5dx01jtKvFu0vorf9buK1z", "WQtdQGeyWPJdVNyQWRbFmYRdHxNcPa", "WRVdQeqRWPOLgSkxW65pWRzrpGNdOd0WWQpdUvK8DW", "g8ocsCo8ySoj", "m8kwq8ogWQyYfLFdO8ot", "eSooa8kwemkuaCodi8oSWQddOq8", "oSkhvCoCWQmNc1RdUq", "Aun6wfi", "WP4LhmotzG", "wLP6sKu", "ChjVBxb0", "WR7cK8kEWQ3cN1LvW7BdQgBcVWm6", "W4jqxqFdS8oTWOTYudGAW7vNFsRcVCofthtdPSoAWOjSore", "WQNdH8kmhSorW67cHbKV", "rvzftLq", "t1NcT8kOWQZdIGFcOhPupcJcM8kI", "W53dT8oxWOGBrmouWRNdP8kJWPS", "shz1uMG", "W6qpWQK0W4C4fSkN", "y2fUtwfYy2G", "C2nYB2XSAw5N", "WP0KW4SEqdBdQG3cTCoAeCkTd8kwqv8BW4NcTev2", "W7ZdQ8kHr8k7aW", "rSkovfe", "qmoawa", "WRxdOgr4", "WRGGW4S6xJBdPH7cQSoammkDc8kp", "v29YBgrcB3nZrgv0ywLSugfUzwW", "o8kyvmox", "FsLSWOBdRmoOiCoOW7tcJCkJWR3dPJ5HW6XrW63cG0tdVZbLWQLcpNC/W7JdUSofcKldQINdOsRcU8oXW75RW6W", "W7xdO8kzsmk1W47dUs3cTSohh0mpW4DMzW85h0pdSmkYWQy", "jmkiCZ0", "iCkTwZFcLshcNSklW6e", "W6FdOCk6va", "DgfYz2v0x3r4", "yCk1WODlW5pcLbpcPsfr", "C2vYDMvYBgLZDc1RBMLNAhqUCML2zxjNyw1LlM5LDa", "aCkwuSoEWOitfL/dRmol", "WRldRt9Q", "WOddOXO7WPldGLe", "zMLUzfbSyxLLCG", "BwfYy2HLCW", "mCouamkUemkecSoWEmonWOJdHbBcTWjXbSoiB1ZcMCoGhxJcUgldGSonnSoAWQNcT8kaW5/cShuAx8kUrCkmW7HMW6OFfCkjxCkytCouW4pdKgOYW6FdS2iVi8kDcKjIW4ZcOCoWW7/dPIPkWPrjBen5emkdW4dcSCo5aSo8WOjErmklW6tdKxaJWPhdP8osimkIrSkctmkQWRj/", "bSoEbmkYa8kyiSoJjCo7WQNdHGxcOG5wlmo/zeNcMq", "b1XRWP7cISof", "gJZdMSo9fKi+WOPen8oqbSoYaMpdRa", "x29Uq2XVC2vdywXSyMfJAW", "W7mfWRiLW4iJgCkNWObeW5es", "CgXHEwvYx21ZzW", "z2v0vxnLCKfNzw50", "WQrywZRcRCkhDSoHWOJdPNrUgxrOW5esWR3dRa", "DYlcM8osW4K", "WQ/dQHSVWOpdVW", "vNfpr3C", "WO1Oc2tcKmkBp8k9WPClWPfcnmkVWQe", "WO9srZVcJmkbDSoxWOJdVKXogxvXWOXm", "W6ldOJK", "irxcMmobue4", "WR7dQs9+W57dPG", "WRtcP0W", "C3bSAwnL", "B25Jzq", "dSoytCoW", "jmkazIJcSG", "y2HPBgrYzw4", "Dg91y2Hiyw5KBgvY", "iadcL8orwG", "mfj3fwhdJ8ksWOZcGCoGcSopW6OqWR/cOHRdPCozAchdImoyBbJcICovW4BcUSoIW63dH8kyEmkrW6/cNq8/W6zfv0fXe8kNWOCdFgS0WOriW67dSCk1W4pcHcn4W4tcU8ohCha0W5y", "qwXSAwfUy2vxB3jSzfnPDgvdB250CM9SBgvY", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9fBMLdB25XDwvYB3jhyxrOzxjxB3jSzfbVCc8YBMrFyMDFmY9IDg5dB250zw50l2f0DgfJA0j0BG", "d1vUpue", "bCoEeCkopSktcSonnCoY", "W5CnW5/dG30", "nYVdImoFi2u8WPfEiSobaSoFhgVdP8ouW7hdNmoQxu3dQa", "mCkwsCo7WOKVfG", "r1z0uKm", "WPzxmftcSCk7j8kzWROGWRXkcmkD", "W5DqwIxdQCo7WO17", "qNr5Buy", "hGPRuu7dOSkJnmoCWRu", "y29UDgfPBMvYvhLWzq", "W5iAWQq/W5CafCk3WRTi", "WR7cR0KakeRcT8ooW5GPWPSE", "E1qup0TrASk7pCoi", "W4mlB34", "WR/dH8kngSoeW7pcGHH7W4j9WPKYst10W7aeWQKBWQJcMgtcHMNdOtRcGNn2WPuGW6ldL8ojW7BcVCkmW4uuhdn5uSoaW5tdVdRcP0a7W5SfwWDzWPrHemohjqhcTGZcHmkBW4BcKCkGWOr1umo6qSofWOyRuvT4omk2k8oHW7BdKHBcMmoUhd9/DmkvxW", "tu9wrv9dsvrzx1bpu0Lusu9o", "qNbxyMy", "v29YBgrnyxbvsvDYyxbWzxiVqwj5C3nxB3jSzfvjl1jPz2H0qM90Dg9Tl2j0BKHLCM8", "tNDgzKi", "tLDVCMXKtwfWtwfYy2HdB21TB24", "zgzPtvq", "44ca5PYj5Pwi5PYFoIa", "y1NcGY/cO3LuD8kMv8kQ", "zNvUy3rPB24", "tmkTqutdM1tcUmomv8k5WODCk8k6qSkElSoy", "mSoEaSkufmkpjSoM", "W5bftsVdQmoSWRP3Bc82W71GCa", "WQynB8owDSkdW6DVWPTL", "W47dTdPTcMlcMq", "gXhcHmokxvfEDCkiW6W8WOaHbZeD", "sw5QDxjLza", "imkhvmotWPmJlLFdUCoxWOlcMG", "wXRcGSoMW7FdSvVcMsm", "q3vYqMf0DgXLrgf0yq", "FrLvWP7dLG", "wuvOwwW", "Dg9Nz2XLrMLNAhrPBMDnB2rLt3b0Aw9U", "Dgv4DenVBNrLBNq", "WRfSha", "EfStownaBq", "W7efWQ81W6OJhSkNWRa", "Aw5Zzxj0", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9nzwnOyvrVD2vYv2LUugfUzwWVyNrUms9IDxr0B25FyMfJAW", "fM9nggO", "uNjUqva", "thbZCe8", "BeryD24", "W5/dQ8ocWOWBvCoN", "W5zawJ7dVCoGWObFDd4EW7bT", "b8oshSkg", "WRhdQtjEW5FdV8oUshjocWruW45CgCkHmCkrxCoiCq", "C0PiswO", "BLDmtKG", "sgv4", "pCkdxCoE", "ChjLC2v0mW", "nGZcGG", "zMLSzxm", "zgvSzxrL", "ChjLC2v0mG", "ytv9WPG", "WPDdWRrSWODQ", "C2f2zwrtA2LU", "AeHwBLi", "W7hdPSooWOmGACoaWQpdR8k/WO9La8o/WOnveSk/W63dNCk1e8kjeXpcPwRcJG5GW5TXcGBdM2VcI3mxDSk4W6zgWPlcT0O", "vKzSBuS", "CM/cUdpcNW", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZtKUkRMJiNPKQ4Vz290B0j0BG", "Cmkku1/dMKRcVSo5", "vuLdyw52yxmVug9Wtgf5zxi", "qvjnwv9iruXqx0fmta", "DMLZAxrVCKrLDMLJzuLK", "nXVcLCoquKzvya", "Dg91y2HTB3zL", "kYNcTWS", "vuLdyw52yxmVug9Wtgf5zxiVv29YBgrtAxrLugfUzwXozxC", "WQjvW44DW68rW6ldGSobe2VcISouWPC+FXqAW7dcVSkNW43cVG", "5BEm5ywG6zEW6iEg5yU56ywm6l2v", "z2v0ug9ZAxrPB24", "yxjTExm", "ufHlyNi", "d8kwqmo6WQ8", "mmkAwCog", "WRhdQtjAW57dU8oNE0n0kGTxW44", "WR5lW5KiW7OAW5FdH8omdM8", "W7RdOCkSrq", "WPnSW6ZcTHSH", "jYNdImoDhMq", "WRdcUKODkq", "WODQW7KO", "WOnntdVcHmkhBmo1", "rSk4WPPjW7S", "y3jVC3nuCMvHC3vYzvrLyw1szwfKEunOyw5Nzq", "W4hdKGzgpKZcPmoKjXS/umoZ", "WPzHW67cVbS", "W4THWPZdJ8k1", "WP5ywtNcJmkmA8oZWOK", "WOBcPL0FkwRcL8ozW54GWPy6W6NcG20MrJBcGW", "mJJdNSokgMepWOzckSomdG", "WQrFW4RcUr0", "juP7m8kBW7JcKYpdRmoaWPf/uSoQzSoduLi", "Dhj1zq", "EKfwDe0", "W6ZdQmoxWQeuwCoYWQpcOCkAWRzga8kXWQb9pCk5W63dRCotc8o2CxBcVqVcIeHsW4bGar3dINlcP3fvECkJW6zEWPBcQ0bfzLlcM8oOWRDQWQ/dQmop", "evzZe8kDW7dcOJu", "EJn7WPm", "W7z4WO/dImknmG", "yuxcMJVcSa", "yMfJA3vWrgf0yq", "hSonw8oXEW", "WOlcOeidivVcU8ooW4iTWQCdW7BcGa", "W6tdVmkNvmk8a8ohWQvW", "rXhcNCo1W6hdShpcKcaHW43cPKldJCo5", "fW58wa", "h8kADZziWOGpWPfIWRpcReJdICkAWOq", "DgHVCL9TB25ZDgvYx3jLzNjLC2HFBgLTAxq", "yw5KCM9Pzf9Pza", "WR7dQsPPW5pdOmkMB3nIcrPo", "WQyHfSo1qG", "zgf5sw5PDa", "WRxcQfy6i1FcIW", "zgvMAw5LuhjVCgvYDhK", "bCovcteEW5GKWRJdJCobkdhcHG", "WRXCsWFcHSknB8otWONdPvrfchv5WRzsW6VcUCoCtq", "WRVdQsHS", "tmkGWOa", "bfT9pSkk", "WRtcNuKhkG", "vCkmWOnBW4G", "A2rXyL9ZzwnYzxq", "W401WOybW7S", "dM8RugddVCk/mMOOW5dcJSoM", "DgfYz2v0", "WR0Ja8o/sgG", "W7OvWOWWW5eUeSkNWRS", "x2nTst/dPq", "pmkrqSotWOOJ", "gfbH", "W5mtA34", "WQhdTe5cWQi", "WRudqqBdJW", "iZfLm2e4yq", "W6nysdpdUW", "fbhcGSoJtuzErmkmW5yoWOO+fIWaWRm", "W6qfWRu0", "CstdVZddMcpcJha", "jdBdNSokgMuoWPzljmoh", "BmoTiCkaWR3cMW", "lCkmAHThWQicWOzuWQBcH2/dHCkC", "DMLZAxrVCLbSyxrMB3jT", "WO1otdVcJq", "k8k+DrXn", "W6ldQZXQbhu", "WPzxW4CfW5iq", "nxWYFdn8nhWXFda", "Bgfiqxu", "iqVcSWtdQq", "mhW0Fdn8mNWX", "ufLRwKe", "y29YC3nFDgvZDdq", "W44wW43cRCkJWPX0Aq", "aKPiWPZcNCofW44", "jNnJB3bLpq", "Dufxvgy", "WQflW7tcGcq", "thjPrt4", "Bw11vMO", "bvdcSq", "k8kABt1cWQKcWPTjWQVcOgpdJq", "lb9NsMVdKmkJna", "ug9Wtgf5zxiVv29YBgrtAxrLrgv0ywLSugfUzwWVDg9Wl2j0BKLUzM8", "WQVdPHeSWPldUq", "yZHHCMTgAwDODa", "ESo2iSkaWRFcNt4CWRi", "WPhdVKXAWQZcM8oy", "mdZdI8oFiMWj", "zxHLy3v0zq", "WRpdTdi", "y2fUvxnLCKXVz291Da", "WOhdGe7dR8ocWQ/dVf5I", "WQtdQGeyWPJdPheQWPTjgb/dJ2lcVSom", "W5pdT8ocWOm0tmo7WRJdR8kHWPXLm8kLWQr0fW", "WPhdMKtdUCoMWQVdNvLKWOv5DmkLW5JcQW", "W7RdP8kRs8k9fSotWRa", "WQBdVIL9W4pdSCoUqg5Kca", "W7JdQsz6agNcJSoc", "C2vUzejLywnVBG", "iqP5teRdGSkJhmom", "WPpdHKxdQSo9WQFdTG", "fCopBSo9E8oB", "FsJdPsFdKsm", "kaFcOrhdPW", "aL93WPJcK8oi", "BSkovv7dJfdcJ8o5smkLWPXC", "wxzPyt7dPCoIkdeXWPFcOCkHCw8o", "uePky2e", "jhRcPSktWO0", "AgvSCgvYlwLUDhjVzhvJzq", "zgL2", "rhHvANa", "deFcPmkiWPm", "B2TIvuC", "WQddPXqMWPNdSNq", "BCoHoCk3WRFcHdCdWRLnWQtdRCovWQKzBe5DW64DfJiC", "xhX5vq", "eSoEba", "c2hcGCk5WQa", "htBcL8ors09ErmkmW5yHWPeLodaVWQnn", "A0TvDum", "z2v0rw5LCMD5", "D2LKDgG", "BwvYz2vuCMvHC3vYzu1HCa", "vMHuvxa", "W4CrW5RdIwi", "W6mdWQO0W40", "WPCBfmo8vG", "WO3dPfPsWRRcR8oCzqtdOMhdR2BdISkuk8ou", "WPCOW5mRyJZdJGlcS8oCcW", "WQNdICknb8o9W7VcNXuPW4PXWO0", "zvnxt0i", "eHP8vN3dLmk7oSopWRNcNW", "W67dVCkY", "oGFcTCoxufbi", "oHRcHCorxK1yCq", "WQldVayHWPddUq", "Aw5xB3jSze1HCa", "vmoztcHeW4brWQZcLCorFW", "DYtdOIq", "AxnuzwfTtgvNzw5Ku2vYDMvY", "WPNdTvTZWQ/cJCoqDaldS1hdHutdHW", "nXxcJ8ow", "C2v0rNjHBwvsyxrL", "W4zzqcNdTW", "ufzdyuq", "WPv1WQ5WWOHMBNpcVZddICkMCbW", "yNv0Dg9U", "WOnntdVcPmkdA8oS", "W7vTWPRdHa", "y8kzWPzzW6pcKbRcTaDmW5nhFfmvW77cMSovWRrlWOVdMYSsBSkb", "WPKhW7u5yW", "ug9Wtgf5zxiVv2fYzuHVDxnLtwvYz2vqyw5LBc9dt05uru5ul1DHCMviB3vZzu1LCMDLugfUzwWVyM90Dg9TqMCVyNrUtM9Kzs9YAwDODej0BK5VzguVBwvYz2vcDg4", "FdTQWPFdSSk3", "pbRcPConufq", "W4LDWQNdImkB", "tMfYwd7dTCoYpJ0", "B25RzxLKB3DU", "W4XtwYVdSCoS", "dI/cTrBdPhRcMX9oWQxdPSk2aCowW5X8WRiuka", "suz6vuK", "quFcVYVcUG", "gCoou8o7CCopWQq", "5y+J6kkl5Awh5yw177Yi56Eb5PYn77Yj", "WPzpahFcImkAp8k9WPuRWPz5p8klWQFcKG", "Dg9Nz2XLrMLNAhrPBMDnB2rL", "WRRdP28V", "zMLSDgvY", "WPJdNInOW4pdT8o4A0HP", "WQtcO8kkWRRcGhzFW57dS2BcSWOLWRxcNq", "d1XJWPdcKmoiW7/cQCk/mSkYmCoJiG", "Dd7dQs7dNq", "aNPnWRVcKa", "W5CiW4ddNMHoWOzTemkmWOFdTha", "WRdcULWwifZcK8osW4uNWP4p", "renp", "tKvu", "W7awW5lcSSkE", "ELatcgviBSk1mmogiCkr", "vMLWtgv2zwW", "vefcteu", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9orwLNAhrdB3vUDhj5q2fUqNvPBgrPBMDqB3aVmM5Kx2jNxZmVtgf5B3v0l0j0BKf0DgfJAW", "kvrZpuhdPSkGWQRdRCoZimoSW7u", "WQDkW5KiW5yrW5ddNComhw8", "W4eyFN4", "W5qtAg96iLZcI8oQy0FcVWS", "W4CrW5ZdMwW", "vrFcM8oQW7ldPW", "qvzWA2C", "BKegox5JD8k9nSox", "cuBcPSkNWRBdIGFdRa", "fqzMxq", "ax5sfxRdLCkh", "W5OjWQi5W4iEdSkJWRXi", "DxbKyxrLrgf0yq", "ugDWsNa", "nhWWFdj8mxWZ", "mSksrmoXWO8VdLldGSobWRNcJ8kqzW", "WRu2a8oFsxxcG2a+WQu4", "xtn2WQBdJq", "uMvHBfjuu0DHBwveyxrHq29UDhjVBgXLCG", "tLDVCMXKtwfWq29TCg9Uzw50", "wXRcJmoVW6VdSv8", "55+/5lQN5AsN5lQO5Rs75yQO", "WPG1W5eaxtFdGG", "WPpcVue1le3cI8oQW4u6WPijW60", "yxbWzw5Kq2HPBgq", "5ysz5y6o5PAw5ywf5l6k5OQK", "WRpdOaiTWOxdIhy7WOu", "oCk3FXRcRrRcO8kyW7PWWPRcLXldGa", "WR3cQfODlLBcSmozW6mRWPafW6JcNx01FahcKCoYEv7dPG", "BwfYy2HjBMzV", "WPHewta", "yxbWBw9IAwXLx2fWCg1VyMLSzq", "mJ7dOmoAbG", "x2nVBM5Ly3riB3n0", "WRv5hwBcJmk3fG", "A29mCLq", "WPJdMYLRW5RdTSogFNfzdqzFW6Hqa8kAm8kkwmolENa", "BwvJAgfjza", "W7fjW4uBW7iAW7ZdMSoucM/dMCoDWOezFG1oW6RcR8kKW5NcMmobASoGW4efemo+WRKT", "zNfQrge", "rxHWrgv0ywLSvgLWCW", "bSoJaSkehG", "tffMs1m", "qvjnwv9iruXq", "WPLwWQ9dWPb2qNhcPa", "BSoTpSkeWRNcNsqe", "AmoXjmkyWRZcGcKl", "cSkFvCotWPuYafpdOComWRtcGCkzzW", "WQfCqdNcRCkdDSoH", "WRpdO3ypWOu0nSkgW7rAWPDdnrK", "WOqJsCo6vmk4W7zg", "BCkbC1xdNu7cUmoUDmkJWP1CeCkGt8k/iSorWRa", "EsJdUIxdLq", "bZ9Yqwm", "Au5xwM8", "WRPmW5KF", "fM5hag7dKmkDWR7dMSoebmoCW40", "z2v0rNjHBwvsyxrL", "u2vYDMvYtvnuAw1L", "vIBdNWNdGa", "behcTSk7WQldMGhdTW", "BuCip2vrz8kQoW", "qMf0DgXLqxjTEurHDge", "WPOwjCoWCG", "v3HmB2DPBG", "rKTZtMm", "CuZcGs7cVLr8ACkWt8kgjqOHlW", "WPeeBIxdKmk5", "tK1HCMnOvhLWzq", "A0zoB3u", "WPNcRf0CbfRcJa", "mdZdGCoBi2u", "W7RdRSoaWOubzSo4WQpdO8kUWOTPhSk+WOX8bCkvW6ZdPSkioSowu07cNtC", "zgvMzw5KzxjZ", "uSomsbLlW4z+WQhcSSoCDIJdTSkiu8oJW5K", "W4HqsIldVCoaWOO", "WQtdPgtdRmo3", "W5tdS8otWP0ggSk4W77dVCkRWPqUf8kQWQDWcSk7W7RcPSkFj8ou", "ff95o8kbW7JcIZtdR8oaWPf/DCoK", "lIZcSGtdUG", "DuekjW", "C2v0", "W5NdV8ot", "WRVdG8kq", "hs3dImothMq", "W7FdM8kvw8k1W7NdGcpcTmoYhvqOW5P7za4", "tND2AeS", "WOpcNCkZWQ/cQq", "WRtdRGeTWOxdUNKSWPK", "C2v0u2vYDMvYtgLZDfbHCMfT", "ywrNrvq", "WR1SW6JcVtWjwZ3dKmojWPnyiSkxW6FcH8oIySkhid/cJ8k3WPywW4ygwLFcPSoDzCoDW5xdNbpdKCovz8kdWRdcG8oQW4aoW4PXWPWCWPq+WRGrW7tcLuhdVmoZow7cJ3O", "Cg9ZDe1LC3nHz2u", "iN1jjmkm", "z2v0rgf0yunVBMzPz0rHDge", "e8khCJnL", "DKPLCNe", "WQ3dSSkonSoH", "BMv3v29YBgrnyxjJAerHDgfiyw5KBgvY", "gmkwqSorWO8sdvNdRmol", "WQVdGCkmfSotW67cGGq", "cxPbgMZdKCk2WO3dNmoFf8oTW4mbWQNcTrW", "kuVcLmkVWRe", "WPm5uSo0xSkEW4XzWRnlDW", "CMfUzg9T", "iLfnn8kR", "pIVcSGVdVvBcJq", "qMf0DgXLrgf0yq", "rgLZy29UBMvJDgvKlcbHDxrVlwXVz2LUigrPC2fIBgvK", "EfzVtLe", "WRKyW5C/ya", "W78jW4BcUW", "vg9Wtgf5zxi", "WP10W4ZcSHebFIldImokWQ1ipq", "W4fqtYpdSSoSWR5SBZOAW6fYzG", "WQSavbVdOW", "W6TqxGNdNColWQ1XBJ4nW7XQCX/cOW", "oCkmAG", "W4NdVGDCcq", "nmkhqmoEWP4", "BvNcHZhcTeG", "ax5shwhdNmkJWO3dGCoaamonW5ii", "m3WWFdj8mxW0", "WOhdNeu", "cL1H", "W6jPWONdQmkxmmk7", "WOdcO8kqWR3cNLzvW6/dPhVcTqG", "W47dNCoWWPuN", "qNvPBgrPBMDjDgvT", "CMvJB3zLCKLUANvYzwrbCM15CW", "BxPmALC", "WQxdRGy8WRBdO2W/WPfn", "qMf0DgXLsxrLBunVCMveyxrH", "uhjVDg9cDwzcAxO", "WRlcPuywi0RcPG", "xrhcHSomW6m", "WRVdOtnpW5W", "v2nwtxy", "gSkgBHroWRilWPa5WPhcI2/dNmknWO3dJrf7aSoE", "WRq6gCoY", "WRe/gmoLqG", "WQddGCkln8o9", "oYNdImoq", "WO4dFq", "WPiTsCoKua", "dCoEfSkwlSkzamo1oq", "z2v0sw5ZDgfUy2u", "AxrLBuLK", "WQhcU0ahiKRcHSoBW5q", "W746W6xdG21WWOXcpSkGWQ/cQG", "fCk2BIPaWR8bWR1j", "DwDdwNC", "WQxdQsH9", "CMvZDg9Yzq", "WRHeW4my", "yMLUza", "WRVdQfeVWPSNpSkrW5zhWQzolWJdRr05WRNdQq", "WRzrW54DW7GFW6ddH8ozaW", "u2vYDMvYtgLZDfrHC2S", "z2v0rwXLBwvUDej5swq", "Bgf1BMnO", "W5bfWRK", "W6CdWRi4W5CKfCkSW7jmW50vcmocW7ddQSoeWPXRWOGrWQZdV0jxa0JdIIfwcIlcR8k5eNe4W4mZm8oxW6ldMqpdK8k0WRtdImkPWRFcGahcQxxdL8krpHi1W4ddG2LmEbBdPCoXa8oilgPsWR3cIConWPqTu8kFW6fAgmkNW7SQqCkNWP0SkSkJWOxcTab6W7egvWpdQW", "zMLNAhrPBMDnB2rL", "x2rLzMf1Bhrby3rPB24", "b1b2WO0", "bXz4xa", "WQxdOZrT", "WRddIvldVCkKW7O", "sfDnDwi", "W7vLWPK", "C3rHDgu", "qwXSAwfUy2vdB250CM9SBgvY", "eCozmCkbgG", "WPe4qSo7ua", "z2v0tMvHCMvZDe5LDxrYywW", "fmosfa", "q1nby3rPDML0EvbOyxnLvhLWzq", "W5RdGmkcw8k6W4hdKt7cTq", "W7ldQdTGbgtcMq", "AwfXz28", "x3vZzxnRAw4", "tLbmruG", "y0xcNZhcUKHwySkjuSk3iW8IlSkXW7/cVWrwl8kI", "Dg91y2Hy", "kCkfCsTk", "WRFdTGuT", "bSkYWPusW7pdGu0", "zM9YrwfJAa", "WO4UW5GPxJBdOqxcOmordCkaamkfBxigW7JcGKvNW6S2WRa", "CMf0Aw8", "zLzKr0q", "v29YBgrdB29Yza", "WO1BDJhcJmkuA8oJWOtdO0a", "CCk7WPDlW6NcTW/cTce", "WOldVrGXWRpdTMW/", "Aw5WDxrnyw5Hz2vY", "jCocuCo6z8ojWPZcPvZdN8ki", "BCoHoCkGWRNcIYSjWPnjWR7dUmoKWPK+sW", "WOjyushcUSkhCW", "hGj9B0u", "oCkmCdX/WOK", "W5DqwsBdVCoQWOTFBcy", "fLvTf8koW77cSW", "W4xdRIv9lwBcLmochG", "W7pdTCooWOOCtSoeWRtdVmk5WPPYomk0", "WQVdRHSSWPVdSMO", "jNDDewhdJCkNWPBdG8ov", "iatcMSomsW", "DwTXCwu", "WPvqW54iW7qA", "f8kbzIdcMt3cKa", "WOLqqce", "vmoAwsno", "BxLnyxjJAgvZ", "tLDVCMXKtwfWvgLSzunVBNrYB2XSzxi", "DJvXWPRdU8kGA8kP", "v0DQC1u", "pmkzu8oEWPiIb0u", "w2TP", "WQSuW7OBDWZdPs3cK8oTnCkSmCkYB0ONW4lcMgvxW4mnWPS", "vX3dMbFdKW", "hCkBxZZcSZVcL8k7", "W74wW4FcSa", "W4iCW4ddNKrgWPPpdmkrWOJdSa", "zNvSBhnJCMvLBMnOyw5Nzq", "WOm/xSo5uq", "qatdIa", "WQzDW7HHWPP6tCo0WQrSW5adlCoR", "6zIF5lIj6l+E", "qNvPBgrPBMDeyxrH", "W7iJwhPXowldIq", "y29SB3i", "DgL0Bgu", "5AEB5A+45AwC5ysJ5RAo5yM1", "A3zRx2rPC3rYAwn0", "WQxdPHSS", "z2v0vgv4DfDPDgHqyxjHCW", "a0tcRmkOWQG", "ab9KufS", "DLvXshe", "WOldMKtdRSo3WQddPN9RWOz7DCkCW74", "C3r5Bgu", "W6qwW4BcV8ktWPHuyCkMWQZcIc3cLM0", "W67dVSkhumk2", "fspdL8o2aq", "W6pdQCogWOaq", "WQnkW58FW7mrW5a", "u1OdlG", "Cv3cIJtcVG", "WRBdKhtdSSoI", "WPtdIvldRmoFWQ/dOfHMWOL0zW", "wZHSWQtdUSkJxmkIW6lcH8k9WQa", "aSouhSkwfmktg8ovpSo2WQxdRrm", "WOm8s8oiwCkTW5PDWP5nySoLWPG", "tLDVCMXKtwfWq29UDhjVBgXLCG", "WR/dRSk1gmo0", "WOpdP8k9mSo8", "ELjTD24", "twfPBLvjv3jHChbLCI9otwfPBLvj", "fedcT8kUWQBdRXBdQ3PhjW", "WR9hWQDRWOPNC2dcObxdMmk9Aby", "behcPmkNWQZdIq", "WRf2g3FcI8kAb8k/WOa", "v0Xpq1y", "j1vTpSklW5RcTdpdSSoDWPvJzConymohreO", "hbxcNJldLedcQZfOWRldHCkDkSo0W7XhWPSUd0fDbCkoha", "rKHVuMC", "Dg9Rzw4", "z2v0q2HPBgrcEu5HBwu", "haddM8oCnG", "W7xdO8kNvCk9aW", "W7iuWRu", "WRhdQgyDWOyJma", "Aw5ZDgfUDgLHDgu", "r2XVyMfSrgf0yq", "hG56wKFdUmk5m8oh", "whvnzhG", "A2v5sgfUzgXLCG", "CMv0DxjUqxjYAxzLvgLTzq", "AeXXtNy", "AgfUzgXLsw1WB3j0", "txLdyxn0BgvgywnL", "yt3cQW", "WR3dLuzzWOe", "bmkmAHviWRK", "yxnZAwDU", "5yID57QN54Mi", "EMGTq04", "ustdVIxdMIpcGgO", "oGxcL8oaFG", "DgLTzxnFCgvYzgf5", "vCkhWPHWW78", "tMfTzxm", "WQVdMwS", "ugTJCZC", "WQFdOwu", "aN5an2FdKmkFWPVdRmojk8oEW4Su", "WRHkWQHUWObWrNZcJaRdImkHAa", "W7xdUCkYDCkQ", "cxLye8kw", "5OIA5Pw45QIb5BY/5BwD5OMR5B+D", "W6rQWQldHCkgi8k/yCkhW5VcRa", "WRHvW48sW4KvW4FdJ8oF", "WReYb8o3rg/cG3G", "x2nSB3nLtgf5zxi", "WQ5sxshcHSkplCooWOtdVqrnchH3WPzwWQdcUSoCrSou", "WRC9a8oZvq", "WRVdTNyJWOy/bmkqW7jbWQjLcbtdVG0d", "AgfUzgXLvg91y2HLC01VDMu", "yNrUmG", "W7tdVYe", "EYjKyxrHiJOIC2LSzw5Jzv9Yzw1PBMrLCL8WmdiIlcj0ExbLiJOXFq", "W7zDrJ3dImoGWP5T", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9WCMvMywjnB25ZDgvYu2vHCMnOtMv3l2jNxZeVtw9UC3rLCLnLyxjJAc9IDg5gAxG", "jmokbCklaCk6hCoTiSoOWOJdRadcSXC", "B3rOzxjeyxrH", "CcXTWP/dR8knBmkYW7tcJG", "WR9nWPvTWPfHs1hcRGVdNSkQCa", "W53dTmocWOmrCmovWOFcVa", "C2vHCMnOv29YBgrnyxa", "W6ldOIe", "W7GhDg16lgRdJSkG", "wMLXAxq", "raBcGmo3W6VdTKpcJIm", "gtJdNCoQog8rWPy", "WRqSxW", "uhvZAe1HCMnOsw5MBW", "zgvS", "B25ty2vUzuvUzgvK", "BCoHoCk9WQZcJcOTWRPhWR/dT8os", "rSoRkSkDWRBcRYSdWQbPWRJdVSov", "yuP3s2m", "maBcK8oes0zpFW", "exjyeuBdL8kvWPa", "WOPurshcJmkq", "W7xdG8kauSks", "tLDVCMXKtwfWvgvYCMfPBK1VzgvS", "W6CEWQqsW4SOgCkP", "rmkMWOflW6NcKWJcTYjgW48", "WOddJuZdT8oKWQS", "jmk3EqO", "WRLntttcNCkht8oHWPpdQuXib2D3", "W6BdQ8kLt8kLeSo9WR18q10", "uXhcM8ogW6JdP1FcMYG6W5VcSgddJa", "jX19wKtdSSk4o8oCWQlcNJ/cNw/dJW", "WPpcUCkAWRRcGa", "W4alDN4", "WR5psXtcNG", "WQddQHKKWQ8", "WRr3ca", "jSkmCd9BWQm", "meFcTCkhWQldLWFdRtrXbqFcJCo+yCkzW7pdV8odmN3cNCorzSkkWPS1W5O0l2ZcUrr0fZ/dSmouW4VdLrhcObtdMCoMWRddT8o3BaldLSonma3cNGChy0GDW7tcL8oiW4VdLG4MW6ZdGMdcM2tdTs5phSkyW74zjwldQ8oYlSkBWOZdJfncfI3dT2bDCCkzt8oLW4PZx1xdR8k/WOb+WQpdVCoElmoXWQlcGKnQW49fWQufaSosfMdcGvlcKwiSW6ZdVSoMWRGgW4f1WPPkmSkZWRpcJvjPWR7dQxddL8klW6hdRvdcMqddUIhdT8oWWOFcKtVdRmkEbrpcL2ThDvb3tCoTW6m", "lCouf8klh8kPdSoXpmoR", "C3bHy2u", "Aw5UzxjuzxH0", "k8kGyWlcTa", "WPdcVvSslLxcMSoz", "WRvVW64FW54", "jvRcT8kKWRhdVaFdR3rwoa", "BwfWvhLWzq", "WQldOXK", "e8oEfmkxeSky", "WOqDBW", "5Oko5AsW6l+357Q45PEs5ysz", "g0TQWO3cKCozW5BcQ8k1", "ff95m8kAW7hcRW", "DJj2WOldUSk8ESkqW7VcHSkRWRVdQq", "WRT0ahBcGq", "CSkDt0tdGeZcPmoSxq", "WOHQagpcGCknaCk1WOOgWRPKnmk9WRZcHWNcRCoxvW", "zgLZy29UBMvJDfrPBwu", "W7mdA2HtlNRdN8kR", "ExLoyK4", "DMLZAwjPBgL0Evn0yxrL", "sKZcGtFcKKjg", "BwLU", "hs/cQYVdSgBcJaitWRpdGmkEb8ofW551WPaEnhq2b8kvf8ozW5FdM04fDSkYW4hcHHOEW5NdSmo7dhFcLSkoWRbRhCk8W47cKZboWOzYDCo1Dmo5WQldO0D8W4hdOmkHBrq4W6JcOCk2avpcNfPylmkrW63dSw9jfddcObnBW70VwCozW45rWQG", "nZBdG8oknMKtWOby", "B0ZcGcVcUKfq", "lmoAgCkmjmk0omoWnSoOWRhdPXBdUsfznmocC2ZcTCovaHFdHNhcUCoAeCoPW67cGCkJW5FcLgaBv8oTcmkAW7LAW7ScfW", "y21dA0u", "nhWYFdb8mxWZ", "WPjdWQvVWOe", "xmoptIXhW4e", "jSkdqSoBWOKHc1ddUq", "WPXsxJdcM8k9BmoLWPy", "BgvUz3rO", "WQCCvrddOa", "u2HVD1rPChm", "W7vAwqBdVCoWWOTSlWSCW6DVArpcPCoDzMxdI8oyWQb9mtdcUCodxYBcRG1Xi8owqJZcVG4qWROGWRj4m8oxyCktfM1CWRT9WOJcR2GLuX1+sbdcHg/cMde", "ACoRi8kaWRNcGcKjWQu", "sMPTsq", "mtqXnJi5mefeEff1Cq", "qmkBtNZdJKhcSSoPta", "AhrTBa", "W7awW5lcU8kjWPK", "WOPCk3/cGW", "e1z6m8kbW6JcQW", "wmoaEYfy", "W4LCwJ4", "Dw5RBM93BG", "WOZdHmkramovW4/cPa", "WRxcReKsoflcIW", "z2v0rM9YBwf0Aw9UvJjcEuLUzgv4", "B250B3vJAhn0yxj0", "WPmwBW", "r0vux1rfuLjjve9swv9jtKzp", "rSkMWPzlW6tcLdJcVsfoW5HhBq", "EJ3dUcNdLJK", "ugzW", "qujsBui", "WPyKW5ePrJS", "W5VdRSoeWPqD", "zgLZCgf0y2G", "faP8Bu7dK8k7mmoSWRhcHtlcS3pdTha", "CuHxvwG", "eCk2zmoZWQqjlhddICo/", "zM9Yz2v0r2f0AgvYu2TPBgXZ", "xdnXWOldJmk7ymkGW77cJCkoWQBdSZ19", "A2v5zg93BG", "WRu2a8ovsgVcH24+WQmZW5XoWRNcHhXbWO4bnCo3fCoV", "56gU6k6K6kAb5Ash5lU95B2t5yMn55M75B2v5PwW5O2U5zcx77YF", "q1eYnunVBNrYB2XSzxi", "eSoevmoYFmoy", "y3jLyxrLq2XPy2S", "uMvZCg9UC2vjza", "BM9KztiVu3DPDgnOtM9Kzq", "qSojb8kKWPm", "lmo0jSkN", "tfZcNG", "WRVdH8klemoyW7/cGXi", "C2v0DgLUzW", "WPysi8ox", "zmk4WP9dW7hcNX7cTbzgW55gA1qIW7JcM8opWODgWPtdGZWb", "WQdcVSkiWRZcMq", "WPpdI0ldVCoIWRO", "ywn0AxzL", "WO8Lvq", "WPe8wSo0ua", "lSkDwWNcMYZcLmkMWPf6WPRcNYBdRHe/W4BcS8ofnmkbAY/cV8orW7b/umklW4dcRCoCDCo1WRxcMmkwWP9jW4yOEYWdW55Sd8o8lCo/W7uuW4NdHCoOWQGSW77dHN8kDmkYW5FdTqldRh5sdK1edeykl3pdJKmSC3KfW7BdPSo7xSozlq", "CMvK", "ywXStwfWsw5MB3m", "fG3dTmoAaW", "tmkKWPzOW70", "tvzdx0HfuK9Ftufsq0HFu0vmrunu", "ywvir28", "WRSZW5i3EZC", "u3DPDgnOtM9Kzq", "nbhcGSoOwKbtDCkWW5ePWPePfsCGWQ9uW6/dNa", "EvqtkKnlEmk1", "cmova8kwemktg8oRnSoSWQq", "WQ9nWRrHWOXkqNZcQWNdMmk9", "zMLNAhrTB2rLB24", "hSoew8o0yCoaWQq", "vgLWC0XHEwvYl0nVBMzPCM1qyw5LBc9ozxCGtgf5B3v0wZfDl2j1DhrVBL95zxm", "a1XKWP0", "q1DivLC", "W53dG8kEvSkB", "v29YBgrnyxbdB21TB24", "twfYy2HtDg9YywDLq29UDhjVBgXLCG", "W7upW4pcSSkiWPO", "WRekAXRdLmkKWRvEWOGXEMZcMvtcOSkJusiPvXHBWRu7W4pdKxNdM8kcirldSCoGWRxcNmkMW689W4tcMG", "wZX1WPm", "W7JdM8kyxmkWW5JdMrZcP8o9h10", "WOD+W6JcTW", "i2rIzwfMzq", "WPexDcldMSkPWQLCW4i", "W7iuW4FcV8ktWPHfzmkVWQtcPc3cHa", "meFcTCkhWQldLWFdRtrXbqFcJCo+yCkzW67dS8oFmJFcSmkXA8krWPaVW4TvnrtcLWP0gHpdV8ohW6ddKqZcTHZdJCkLW6ddOmodxbdcNSoHyfdcKX8fE04CW6BcL8o8W5BdNq", "W5vhrG", "jSkCwCoCWQqc", "avLWpW", "z2v0q29TCg9Uzw50", "qLOjh2niE8kvk8oxdmkeW7hcGvyFWRRcGa", "DefTzwm", "W5VdOSotWQqbrCo6WPddO8kGWOPUbq", "ywXSB3DFBwfYy2HPBMC", "twf+sd7dOG", "ELatbMvqBCk/g8ovkSklW6K", "zKZcLtNcRKPb", "vKXrwha", "x3nLy29Uzej1zMzmAxn0", "W7ldQZXTcG", "v29YBgrnyxbvsvDYyxbWzxiVtLDVCMXKtwfWvuKVBgvMDejVDhrVBu5VzguVzgfPBhLrDwvZDe5LD05VzguVrgfPBhLrDwvZDe5VzguVAwnVBG", "W6Oqwufr", "WRpdRHiT", "CLDKwr4", "WQTHha", "vfSup2TlFCk/", "x2n0vgLTzq", "W40AEw1Q", "rmobjmktWRdcNqqdWQjgWR7dQ8oFWQmyqvjgW60vcdia", "zxHWAxjL", "WRzhW4ujW68", "5P+N5OQr546j5A6g5z+/5Qc/", "CcvS", "WOPCwIhcQmkwDSoHWOldOq", "rh0Hae0", "fSoew8oH", "BM90zxm", "WPzIW7pcVGG0zsddNW", "h1r8pCkbW6NcVJ7dTmoDWPfJDa", "WPSIW4SNrdy", "vmoztbjDW4fWWQpcNCoqFJZdHCkYD8oIW4u", "wgruy0u", "WPBdJuFdSCo8WQVdGKLHWPb/CSkeW7m", "C3rHDgvZ", "CYZdVZtdUcpcM3KpWR8", "WPJdVebzWRe", "ACoOjmkxWRm", "W7HaWQnGWOzGqq", "zCotoCkZWPu", "AgfZt3DUuhjVCgvYDhK", "W6uhW4xcMSkgWOLH", "6lED56A75O+q56s65BEY5ywZ6zET", "yxbWBgLJyxrPB24VANnVBJTJAgfYC2v0pxv0zI04", "v29YBgruAhjVBMvqB3b1Ca", "W5tdQtXPdgBcR8ocdtCerSoiWQezW75HW7tcK8kZWRK", "WQiavHldRq", "iJddNSoxnwKrWOXEoSoXhCo/gMm", "56M65OQv6kgL57Uz6i635B6x", "DK9UD0u", "aLDMWPxcI8ojW4RcQa", "cSkeu8oxWOKJ", "WRZdHmkxemov", "Aw5UzxjxAwr0Aa", "W5zqsdJdV8oHWRLXCIyBW55NBW", "C3rK", "gmkBrse", "AWFcISoGW6VdRf7cVdmOW7/cHuddM8oJ", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9WCMvMywjxB3jSzfvjuMfKyxjfBMvTEs8YBMrFyMDFmY9IDg5oB2rLl0j0BG", "WO8PvCoI", "C0fvtvm", "vM1JvM8", "ldpcQa7dTNe", "uSk9WPDEW7G", "wGXsWOddRq", "WRhdQtjqW4ldT8oM", "b1zI", "txnNqM94", "kmova8kwemktdmoN", "WOHABtVcNq", "WRlcQf8slLFcI8os", "hmkgrqVcLthcLa", "x2nSB3nLqMf0DgXL", "beLGWPC", "rerjtNi", "W5xdGCkB", "WOrnWQ9hWPzWtgdcJatdKCkJFG4bW6C", "WOGlBZpdH8kZWRfa", "rxzLBNruExbL", "W7ydW5BcNCkoWOL5w8kHWQdcRs/cTgpdII5bFhpdVa", "q0jd", "z8kHWODEW7/cNW", "C2v0DgLUz3m", "yxnLBMrqqLyY", "oGf7tu7dN8k0ma", "hb9TvW", "C2vYDMvYsuq", "WRP5g2BcJmkQamk9WOWgWPbLpq", "DKhcGt3cVMDbC8k3q8k5", "yxjTEwLK", "dfXXWQ3cN8opW4pcVSkui8kJiSoviSkkW6a", "WRRdSujxWQtcJq", "W48yW4RdMq", "CvNcNZhcRW", "Dg91y2HLCW", "yxnLBMq", "y8kJWRD7W4G", "rLHyrLO", "WRGGW4WRbgC", "kSotuSoHCCopWQtcH0tdICkoxGHUuwhdUafIWRKRu8ozBCknWO3dM04V", "WRtcSvS", "W5mbFMn1", "psNcVW", "WPFdVKXAWRBcJmoyyG", "WPnHW6tcSGC1Fa", "WRXswrNcImkBz8oYW47dI1zKb2bAWOjwW7VcTmonF8kmW4rinSkHWOJcGCkMwSkHobfTuwZdGNtcMa7cVXJdQxmLl8oVW4pdJmoTW6ZcIh/cMSoD", "iSkmDZ9hWR8", "tg9Uz1rVDwnOAw5NsxrLBq", "CYtdOIq", "55Ib5B+05Pwn5O+75Ast5lMr56k+6k2G", "W7rcWPZdRSkR", "qwn0AxzPDhL3B3jSzfbVD2vYug9Wufi", "W6OKve1P", "CMvUzgvY", "WRddRtvTW7VdS8o5FgLKcG0", "aCkhtY14", "wGOYW47dJmkBWP3cMSkvl8kodSoB", "mtuXmdaWndv8nduWmdeWmdv8nduWmdeWmdy", "vuDPzKu", "nSouaSkofCkWdSoYfmo3WQZdRWVcUa", "W6VdP8k/ASkP", "zMLNAhrTB2rLB2zM", "y29Uy2f0", "W5pdQCo0WOuAvW", "W5fAxcNdTmo6WPP/CJ4", "Ahr0Chm6lY93yxjOns5YAxzLCMDHBwuUBMv0l3DLyMDHBwuVAw5KzxGUAhrTBa", "WPrPnM7cQa", "cNvNhgddJG", "WOG+iCoLrL7cNZCYW7rOW4rXWP3cPeLlWRzqBa", "hs/cQYVdSgBcJaitWQFdPCk0hmofW51ZWRS2m3DTfmk7n8oOW77cULLLDSkXW6VcUIjvW4ZdS8oGagtcQmkcWQvzbmo1W43cQJvhWOzQfmo4F8oOW7NcVKrAW7NcRCkOxuP2W6hcGCk8ce/dVvztjmooW6ddTMryfs0", "W5zbwYpdSSoU", "W7xdPSkts8kSW4/dHZJcJ8o3lam", "zxH0CMe", "mhb4", "Aw50zxj2ywXjza", "nsNdNCoFowqpWOPdjW", "a8oAe8kjjCksomoTjCo0WQu", "wuu1WOxdJ8orWPVcP8oJ", "WP/cV8ksWRZcMezrW5FdOG", "FxjZwJddSSkKad0JWRBcGSk9DwKolr5HWRldVq", "sKBcNJ3cLKDf", "mGdcGSoexeHEzSkq", "W4LdWRRdQmkT", "W4JdGmkeu8k3W40", "W4hdPCooW6/dMqWaW7hdG2ZcJrm4", "CtH0WPFdPG", "a3rgah3dNmkaWOW", "WOKXW54TvW", "WRSZW5i3DJldKW0", "WPtcTmkzWRJcNLLe", "WO5CsJ7cNmksqmo0WO8", "W5P8WPldKCkwjq", "quhcKJBcVen9ySkKt8kbiqGOlCkWW5xcTd8dzq", "WRPsWRfDWODTr3C", "W6f7WPZdK8kfgmk/BmkhW4a", "euPVpSkw", "Dg9WD2fYx2fWCf9Syxn0tg9NAw4", "5O2q5OMt6igu55UF5PY655sY", "WPz8W7FcHay", "x2rLzMf1BhreyMXdBgLJAW", "cmova8kwemktdmoN", "WPSXW48IsW", "uCoaxsffW4m", "WOzmW4VcUq8", "oMHFhwpdLCkJWPddGCoC", "y29fqMe", "WPWOW5eQ", "WQm+vSoUFmkO", "i8kpBdLcWQ4", "lSolfCkmjmk0", "WPBdJuFdUCoNWQldPG", "5A6A5yI254Mi", "ivRcQmkYWORdIG", "fSkcC8o3WOW", "rCoBuW", "mshdJSowmMmw", "W6isW4pcQSkc", "uwnrq1C", "z2v0runeyxrHq29UzMLNvMfSDwu", "W4qVW6hcV8kjWOTHE8oLWPNcRJpcVgpdHYPXkM/dKCkGnGFdOcXMW4NdR8kpgCkAouNcS8ock8o6a8kkW7NdI8kWW79fWOTTWQrAkgXlWQVcHmoKW7xdU8kbq8ooW7HcWQNdVtNcOsH6WQu3WO4eWQ0/p8oggwBdKmkxccBcPL4", "qSkXWODJW6tcLbdcNs1qW4K", "ChfuD24", "BMv3q2HHDenVBNrYB2XSzxi", "qHxcG8o2W6e", "WPpcVCkwWRRcGa", "r8oLp8kxWRdcGcKl", "5BU66ycG6lwe5RQq6k6+5PA9", "Feuxphi", "AxnozxDdqui", "W7GiW5BcU8kvWPnHza", "ub3cNmoZW6xdTLNcLG", "Aw5MB3m", "tuq1", "W6ufWQy5W5C", "WQJdJCkkmmoFW7FcNrKVW4zXWP4UBczdW71wW6ulWRxcJta", "daFcK8ogue1Fr8kiW4WKWOKapI0z", "gvXOWPBcImoiW6ZcS8k5lSkZ", "y24Ty2vUDhjHBc1Oy2qT", "ywXSqxjTExm", "W6jPWONdTCkcn8k6z8kMW5pcVdOzy8k1W74", "wXRdOZldLtpcONKCWPhdMdBcO8kt", "W7qaWQGYW4G", "zM9JDxm", "y2HPBgrYzw5dB3vUDa", "DgLSzvG", "WPhdH03dT8oG", "nSkyxSogWOyVdfpdSG", "pc9WpG", "g8omgCk2nW", "WRvxl2ZcHCoTW7SCWP9jkYG", "WOntsJNcGmkbAq", "WOVdImogrSoP", "tgv2zwW", "CNX+tt3dJmoQidKZWOdcGa", "WR/cI1WKhG", "WO3dHYCVWR8", "WPddTvH1WQVcICojuGpdQwFdJMldJ8kuiSov", "WRaPtmo2r8kOW6PgWRXwD8oJWPRcTcdcUG", "W7NdRJfRlgBcHmojoq0", "t2LS", "W5uhW5BcVW", "W5qWW4xdVvS", "weXMv3e", "z2v0q29TCg9Uzw50sw5dAgLSzhjLBG", "WQa2eW", "jSkBwCowWOi0", "BM9KzvbHDgG", "tMLktMW", "amoXb8kPeG", "sNORceW", "DCkgretdHW", "vdi0oJaWkZa4oJaW", "qCkXWPbyW6NcGqK", "uxvPy2TbCM15rw50zxjcDg4", "C2v0qxr0DgfJA21Ly2HHswq", "CCkht0C", "wxzPBZ7dRmo7ityXWOVcHSkMwxuOfHrOWRJdQG/dGa", "wKrMwKS", "AwrZ", "Dg9VBhm", "B2zM", "W4bgsIVdRmoS", "dCosa8kw", "zYxcNmocz3XiWPKyp8kwfCkO", "wM1wC2fyAdzImJvStg1oDMjrpt0", "WOKOW4uR", "5RI45OIp5PYQ55M75ywL5PQc5PE25PEG5Rov5Ash5lU9", "wLj5tw4", "5Q6X5z275A6l5ywS55MC5B2t5PAh5O2VFSoOCW", "Dg9WD2fY", "WRZdJCkkimovW6JcMXmZW692WPKPDsLYW7rs", "e1z2mCke", "twvJAgftDgf0zq", "ACo2kmkvWQZcJayyWQnjWQNdSSoNWPiAvMrnW4ewetKg", "koINO+wVHIK", "W4SjW5VdJ3TJWOLybq", "WR4kDrpdH8kVWR9EW6qsD3tcJ1NcPmkF", "W6ldOJTQ", "WRVdM8kn", "bJ3cSG", "WO5WWO0", "WP3dVezvWQG", "5BEW5B+V5zcp", "WPzkcNtcKCkBaCkOWQWmWQ85", "lCkmAHzkWQOCWODLWQVcH2VdNCknWPpdItbabmoEEq", "yxzVAwrbDhrHy2TLza", "erlcLmoquW", "WOqiCIi", "WQT9g1BcJ8kxha", "WPtdH1pdNCoZWQ3dUG", "FfKtag9C", "euPVjCkxW4lcUJBdSmohWOW", "W4qNWOGF", "x3rVz2DSzvnJzw5L", "ptHNs0pdLCkAnmoyWP3cKchcKMldShVcRmkZWQS", "qCkoWOjKW4K", "ywXSB3DFzgfTywDLzf9TzwnOyq", "BxLnyxjJAe51Bu1bwa", "WOBcQf0wjvhcISoyW5qhWPC", "WQOUW48cuYRdGH7dQmoSmmkVhmkdtxGSW7lcO1biWRj1W698aCoKWOnpqSoPbJbdtmk5cITtW67dTmoXFWu/WQldUCoiW45GWPajW4DlWRlcJCoGdmkUW6rpWOFdVuKWWOipjSoDxGJdUmojW5FcTmoUwWRdOv7dNWzKbsi", "tK1HCMnOu3rHDgu", "lM3cKq", "Feycjw4", "zgvMyxvSDa", "twfYy2HFu3bLzwrFvxbFq2L0Ev9tA2LSBf9vC2u", "WOK1W4yIvW", "FLKokge", "sgfXsuu", "AujLyuW", "WPFdVqaRWPZdLhCWWOzugtddJhlcOG", "h1rzh8kkW67cQcFdP8ovWQTbtSoArSo5BMLjnCoQqrBcHW", "WRtdRtv8WOdcPSopEMjIaa8", "W744F3b8", "tufRze4", "y29UDgfPBNm", "W5vzsd7dUSoMWPXZ", "W7GfDvHWiw3dN8k6jJZdRftdQmkyWQbWla", "W4qlA3P8jNFdGW", "CMvWBgfJzsG", "k3PzexW", "CrRcHSoaW6VdReVcIYm8W7BcU2RdH8o5iSo5wmkptCoqWP4", "e1vXjSkkW7pcRW", "tgfZDenSB3nLvuK", "rSobvsTEW693WR0", "eSkKAdlcNq", "vSkXWODJW77cHrJcOZjcW5e", "WOKKW4ScxttdJGlcL8oyc8kiaW", "W4apB1HWiNpdLCk3nXhdUuVdJCkuWOj7lLxdKh3dM8kq", "Feycjw51xmkmBa", "bGLgDwy", "W6NdJSoJ", "W5iJW4VcSCkL", "y29UBMvJDa", "WRq6g8oIqNq", "WPKTW5a9vW", "W5qpW5W", "WRnqWQrK", "De1hBxy", "rSoDxt9EW6H9WQpcLCotxshdM8kg", "44kr5Bw16l6s5PYr772T6k+W57Ia6lAE44gU", "dCkxwtpcNYFcUmkq", "W6ipW5BcUW", "z2v0twf4q291Dej5ug9Z", "WRyYa8o3BMJcKw4", "WRPkW58pW74qW4ZdMCod", "vuLeyxrHsw5MBW", "W6jPWONdRmkgnSk+y8kJW4dcPsiyFmkB", "WQtdQrfjW7G", "C2nYB2XSsgvPz2H0", "yxr0ywnRtw9UC3rLCG", "W4rzrspdVCoNWO17ts8CW7TN", "p1VcPSkUWQ3dIW", "y8klrhpdH1hcSCo4", "hH/cVmoezq", "WPSZW5i3EXC", "WRRdQxu", "W5e+W4NcM8otzCoSmSosWPZdUgTRmComWQjigSol", "W5ZdPJXGne7cUSovdtqaymovW6aJW4fVW7hcKCkdWOjluSoTW6neWOunpmkVcuJdPJxcO2FdNCkgWRVdUMVdSXhcGmkDWPNcTmkAmdxcISkjtqtcJMe4wCkOWOXjW47cPSoVW4RcLfuUcdtdSqxdHstdICoMWOWBWPZcQ0VdUSkSvCoKWRTSumoTqmkcAdi9fq9TF8kgaCoxWQNcGXL0pe3dGZ8sWPNdHa", "WOLtsG", "WQBdRGD6W53dHmk5", "WPddH8kqj8ozW7FcIdK0W5DCWOSXssPHW7zu", "fCoshCkhaW", "DMfS", "WR8YbW", "vuLdyw52yxm", "WO/dPuPeWRRcU8oyyXRdOMhdTwpdHCkx", "nmopfSoA", "y29UDgvUDa", "leLunZ5zlSkMBa", "C3rVCa", "rSk4WPPpW77cHsu", "C2nHBguO", "Aw50CM9KDwnL", "WO44W48R", "x2rIBgnSAwnR", "wX95WOldQ8k+A8kyW5FcHCkoWRddUGv8W69nWORcLe7dVW", "Dg91y2Hz", "h0P6pmk6W5q", "DfSdlNjQEa", "x29Wzw4", "WPhdHetdUCo8WRVdOG", "W54uW4VcUCkoWPntBCk4WR/cPdhcUwy", "v3zfvfa", "dSolfCkm", "zSoTpSka", "B25SB2fK", "AxntAg93qwXSAwfUy2vizwXW", "sgvYB3m", "CgfYyq", "C3rHCNq", "nJzHqKTJtvy", "CgP1z1y", "W6PJxchdQG", "WOWpW5eNzG", "WPRdOYfWW5JdLmoNChzmfG1j", "mtv8nhWYFde0FdiXFdb8ohW1FdeWFdeZFdz8mJb8mxWXohWXmNWXn3W5FdD8mtf8m3WXnNWXoq", "BgLUzufKzhjLC3m", "WRddUWCHWPNdSa", "txzZsahdGW", "WOn9W63cUH0", "eCojh8kwhSkjfSoYmG", "WQBdVIL0W4BdPG", "WPmaAcldMSkVWRu", "W6nGWPldJSkr", "WRW8gCoZ", "eeRcHmkOWQG", "5BEY5y+w5RAi5y+J6kkl5yQP5OMl6k6+572U5Ash5lU95Pon5l2C", "W5ldPSokWOG", "W7NdQ8kRsmkYjmokWRrHsG", "zMLUzeLUzgv4", "CffeufO", "WRy6bCoZrhlcMhm", "ALqmlKzkFCkX", "Bw9Kzq", "rLDttxvSDgLuB3vJAenVBxbVBMvUDa", "CNj/st0", "WPNcQeWygvFcKSooW4nGWPKzWQBcKwf2FcBcHSo3zuddS8oYWOVcSSk+xCkDeeqMW77cRfVdISo5W4CfwSkyx8oKWOJdTK8vW5hcPsNcKqBcS8opmSk0uM7cV8o8WPLRauC4fCktWQhdNmkZWR0eueX7C2b6W5LyvmoKWQe", "mhWXFdn8nNW0Fdj8n3W1", "tLDVCMXKtwfWtwfYy2HnB2rLBa", "y1zvD1u", "WPG0W5yIvGpdIbVcOSollCkggCkhuG", "WOaLvCoZ", "twfWtxnNCW", "WPuXW4SNxt0", "wtj2WPhdI8k9E8kKW7RcGCkHWRpdLZbRW68", "v29YBgrnyxbvsvDYyxbWzxiVqwj5C3nxB3jSzfvjl1jPz2H0qM90Dg9Tl2j0BKfSBgLHBMnLl2j0BKfSBgLHBMnL", "W7ldTtbVfwlcQmolcsKvA8ot", "W7GcWPi5W4W6", "W4ddT8k4rq", "WRJcVvW", "z2vZDhvYzxn0yxj0", "W6tdHCkSwmkD", "ksb0CMfUC2XHDguO", "C3rVCeLTBwvKAwf0zvbYB3bHz2f0Aw9U", "W4fAxItdSmoMWO96scSrW7DQEGG", "WRhdVIn8W5G", "WOnKW7xcTG", "tLDVCMXKtwfWq29TBw9U", "qmohvtK", "v29YBgrnyxbvsvDYyxbWzxiVqwj5C3nxB3jSzfvjl1jPz2H0qM90Dg9Tl2j0BK1HAwW", "WOldMK7dRmo9WRRdQ0TR", "fLTSjSkUW6NcRYFdO8oB", "gCkxxWJcLsdcGSkXW7TzWRBcTYa", "W4ZdTCoi", "jxnsm8kbW7ZcVcpdSG", "EhrlvNK", "le/cR8kIWRe", "ug9Wtgf5zxiVsxrLBunVBxbVC2vszxn1Bhrqyw5LBc9ZDwnJzxnZl05LDYboB2rLl3vZzuj0BG", "q291BNq", "B05QqMe", "Aw50zxjHy3rHyMXL", "WOPurZe", "WRpcSmkrWQ/cIKy", "y2HLy2TdAxr5u2TPBgXdzefUzfrPBwvZrw5HyMXL", "W5WtgG", "yKnYteK", "W4yCW4FdIwfQWO1Ea8kDWQFdU3FcICoCWQDDAG", "W4SnW4FdG2zj", "WQeJeSoZq3pcH0WXWRq+W4a", "W7xdRIDRaNpcGSov", "jsWG", "hf9Pn8kd", "uKvdquXmx01buKni", "WPxcQCkl", "ph9SlLu", "egxcOCkXWO4", "gqbHv27dGSkKmmofWRlcNsO", "W4bXWRpcR108ptpcGG", "WRbaW549W7CyW4RdJ8odgw/cRCotWRatsGKbW7FcVG", "W77dTZbGmMlcJmovdYW", "WOWkBIxdKmkvWRfcW4mFFMO", "E2jOrshdHSo5is0KWQZcNmkXDwm", "AhjLzG", "yKfvt0S", "mCksxmoxWPmJ", "WRCKW5WMuXddIalcS8olfSkfaSkhuG", "v1z0Ee0", "WP/cRfS+kKZcRmocW5W+WP8p", "WQddQw0MWPO", "rgf0yunLBNrLCG", "hmoiu8oX", "5PQc5ygC6l+E57UT5Ps75yE7", "zNHIELq", "W4TAts/cRW", "5B+R6ycF5BU6562r6kgm5yAB", "WQRdOqeTWOxdOxKYWRTc", "FfCipN4", "C2HVDZi", "WPreW64XW7i", "uMfKyxjnywLUuhjLzMfI", "tgTMCNq", "mCowz8o7Bq", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZtKUkRMJiNPKQ4Vy29TCg9Zzuj0BG", "WQOTW546vdZdLqhcHmowfmkeaCkm", "C2v0u2TPBG", "zgLZDhjPy3rFCMvMCMvZAf9HCMvUyq", "aSkyqSoEWOmaf1JdO8omWP7cGCktvSkuz8oS", "yxjTEq", "B25TzxnZywDL", "WRFdVLXcWQlcHSoEDa", "W5zqxqpdSSo9WOTSDISt", "W7uzWRiO", "DgLSzvK", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrvsu1PBgL0yxj5uxvLC3qVmM5Kx2jNxZmVyxr0ywnRtM9Kzs9HDhrHy2TcDg4", "z2v0sxrLBufTB3vUDa", "W5VdOSotWQKuvmoY", "x2rVBMf0zq", "W5/dKCkqw8kSW4BdGa", "W5qpW5BdMwXtWQrff8km", "iSkmFZXkWRK", "b03cSCkcWQ3dNrBdVNvhkq", "W6rhrdpdLCoT", "yxjTEv9MAwDODf90ExbL", "n39ldCkUW5hcLXNdJCoPWQTaqmoptmo/BNnsmmoM", "fSoeu8oYymoe", "gmktwdhcTZtcG8k3W5zgWR3cVG", "tMv3ie5VzguVtMv3ie5Vzgu", "WP/dS1TFWRxcJq", "xav7fKxdGmkImmoAWQNdNJNcGh/dMgBcSCo7WRjwW7ZcQ8oTvGWNtwbQlICByv8", "WQTCrddcV8khCmoZWOJdPuO", "zILHWPRdUG", "WQldUWePWPtdVh0SWOe", "ptHNs0pdLCkAnmoyWPxcNYFcMh7dHedcSCkMWQi", "WO8OW5S", "rbVcNmoQW7ddQ1xcKhWVW7VcUKBdHmoIiSoUdmodrCoCWP/cOs7dRmkRxxVdHheRW4KMimoQWOldRSoFWPDoyL4kheNdVCkxWRPCz8oBW4NcQmk1imolFfddHSoeW4G3W7hcHrH1kvldHSoiC8oPWOmlWRRdUmkkpCkjW5JcRSoCwr0", "WRzdWRnHWOXNua", "yxjTEvbHCMvUDa", "eSopcCkofa", "WQTThhhcHCkxhmkDWPeCWPHOmq", "EefnzNC", "W5upAg9WlgG", "CmkDWRblW77cHXZcOMTZW5jzvveyW7lcH8kuWQbGWR7dNtGEAmk7WOvwW4v5WRrpnSkgWPH2n00TBKJcIs/dRSoXmZBcImogDIriW5RdI8kQW5SZW7z4EmkHFftdRComW43cLCk6W5ddRG3dU8otWRhdG8ohWPjMW71UtwpcIqr3emoZnG", "x2nSB3nLvgLWC0XHEwvY", "WQJdJCkkmCofW7pcGriOW414WQSVvYL5W5DgW4SAWQ7cHdRdNZZcPHhcLxP3W58", "qCkXWPvlW6xcNqK", "WQTdWRnXWOe", "5AE35lIS5ysf6zEaW5e", "lSkmEdLAWQCA", "nN5gaMRdI8k6WPS", "jNnPEMv0ExbLpq", "Dfj6wwS", "wmoHpSkeWRFcHZqjWP5m", "d8kkraH8", "WRhdRHSSWPJdULuXWOrdntxdLg4", "mCooa8kki8kyhmoYomo2WRldPW", "tCkXWPPnW7JcHq", "tmk4t0ldG1ZcKmo9smkFWPPblSkM", "6is+5yIU5l+S55gm5Acc5ysK", "C2HVDZm", "nSouaSkofCkWdSoYgSoRWQBdSq", "C2f2zvnLCNzLCLrVA2vU", "5B6H5PEslEMzHW", "tg9JywXdB21WB25LBNq", "DgfYz2v0x2LK", "WRlcUue2i1/cNCohW5q", "u2vYDMvYswq", "WP3dOKPxWRFcJCojEG", "W5zzqcNdUq", "WRy6bmo1sgJcMwqZWRijW4fqWPu", "DxLqCeq", "WRJcHSk7WPRcPa", "BgvHC3ruAw1L", "z2v0vgfIBgveyxrHqNLjza", "x2nSB3nLm0rozxDtCgHLCMvty2vUzq", "WR5Xawe", "WQFdSMZdQCoN", "WRmJb8o6xG", "pbRcPCoqtuz4EmkkW4yJ", "qNvPBgrPBMDjza", "oWP6vMBdLCkK", "WOqlEctdJmkTWQq", "fWz6xeZdHCk4jW", "b1T0n8kJW7lcUc0", "smkXWPbcW7hcRHtcTq", "x2DLDfrLEhrxAxrOugfYyxm", "rgjpyLK", "kIxcRW", "uunmtvO", "wHVcM8oMW7C", "W7FdOCkMvmk2gCok", "WP3dLSkrwCk2W4BdMZ7dUW", "zJNdTsZdNa", "CvDRBfm", "x2rLBgv0zuHVBwvjDgvT", "n8kCwdhcMZVcKSkX", "eqhcGSorue0", "WOyPxCo2qmkGW50", "B25tzxj2zxjmAxn0rMfPBa", "BKBcKdNcR09AAq", "5B265PwD5lQR6lYa", "5BI455sO5B+R5O235yQF6io9", "WRddKK5cWRFcHmoyxapdO3BdKa", "zuZcHX7cRKPzxSkZqCkG", "WQNdV11AWQFcPCoCytNdT3FdNxNdHSkUlSocW6ddVCkUnXG", "y2XLyw51Ca", "WPddT1LgWPi", "WRDWW4VdNCoskCoLFSoBW47dScDSzSojW6zgvSol", "oxZcRSkfWO0", "W5pdPIf6dwlcPmotcsKZASovWQOPW616W7K", "WOZdV1Hf", "WRVdPsG", "WQrjW4mFW74", "tLDVCMXKq2L0EvbVChvW", "WRpdMKZdOCoBWQO", "W6ddJCkgemoyW7/cJH1U", "bCkyqmo+WOy/b0tcR8o5WPVcGSkuy8ktAmoSza5vjhNcRHVcPfVcOuNdLSouWRJdTCo3FSkydmo/WRNcNsjwW5pdVmkhW7ZdGSklh3dcOgCMWPqoFCklW40+W700WQibW4i7WRVdQSkAWPVdVdpdSCkECmolcCk7BN/dT8oCoConW7BdJH3dLgS", "WPpdUIn3W4ldN8oKANjO", "WPZcReWBlh3cKmofW4u8WPWgW6RcLMO", "z2v0qxr0ywnRzxjnEufYBxLZ", "AgvSCfjLzNvNzwu", "q1jfqvrfx1rsruftvvjfx01buf9eqvrb", "Dg9Nz2XLrgLZDgfUy2viAw50", "r0vux1DpuKXex0LorK8", "ibhcGSo2vePv", "WPRdIu/dVmo+WQVdHLr7WOnYzCkdW4JcGSk4dCoB", "WReQsai", "WPFdQwW+WOW/l8ooW4LlWRzpdHtdUGDXWPRdTv5MrX0", "DKD1tgq", "y29UzMLN", "DmkJDKhdOq", "WR9vWPDnWOG", "z2v0tw9KAwzPzxjtDgf0zq", "WR5rW5K", "W4JdVSoxWOG", "nZhdImoDpfquWOLpaSoqdmo/", "oCkmAIXgWQuj", "WQiHgmoIshlcJNe1", "y29UC29Szq", "WPRdTuLxWRBcHmoj", "WRvuh0tcSa", "WOuPt8oswCkPW4rmWRXwr8o1WR/cVa", "WRekAXRdLmkKWRvEWOGMuL7cN1NcQSkrDImxu1L9WPzAW7xdOfNcVSkcfHtdOmoDWQ7cL8kuW44ZW4RcNmkpWRJdSGlcPXPpgqxdKuDVWRddP8o9W4pdTq", "W7qaWQqWW404cG", "rZBcHCoeW4u", "De1qENi", "WRVdJCkta8ozW74", "WRXprJJcMCkw", "cfzRWORcISoFW5RcUmkKlCkL", "hSoixmo5E8ol", "CCk7qL3dHq", "Dg91y2G", "yMf0DgXLxZeYmtuWnq", "WPyUW5WVrJRdIai", "W6r8WO3dJCkA", "wLLjAKC", "hXxcLmoauW", "jCkywCoCWPmpdgBdR8ouWO7cICksBa", "5Q645zYk5AY95yE45yYh6kkj5yQk5OMz6k2X57YlWPpdOti", "D2vI", "Cgjby2TwmG", "xfKliMTlFCk/", "WQLlWQu", "x3rPBgvjBMzV", "y8oIp8kvWRxcJa", "y2HLy2TFAgvYB3m", "WPtdGuBdSmoMWQpdVv9RWO90", "vuH6vei", "Aw5Qzwn0q2XPzw50sw5MBW", "y0ZcUX/cTa", "W74wW5BcT8kiWPm", "W4NdKCkFvmk/W4xdHI/cO8oefumrW4PbyqKL", "W6X/ucNdNq", "BwLZyW", "twfWq29UDhjVBgXLCG", "j8kmFtbo", "W7mjWQCWW5yHdG", "Bwv0Ag9KCW", "AvOx", "Bu5Qrxu", "WRekAXRdLmkKWRvEWOG9wxNcMuZcQ8krDs0qwfLlWRa7W6pdHgpcNSobjJFdPmo6WR/cNSowW68PW5pcHCkpWRG", "mCojh8kwhSk/gSoKfCoXWRS", "u3rHCNreywLSEvrHC2ThDwLKzq", "W4mpFxPQi3C", "aSoxgCkbgG", "C2vYDMvYtgLZDa", "rSk4WPPjW7VcTaVcTcPxW44", "cxjhaa", "Dhn0r3O", "ewLbeq", "fmkLFCoR", "v3vVttZdPa", "Eg5vzfu", "fK9ZpG", "A8kBuW", "WPVdHqqqWPG", "dfjaj04", "WOFdO3a8WOWJd8kkW7Dl", "ChjV", "ddlcTH7dOG", "bCkyqmo+WOy/b0tcR8oTWR7cQmkpy8kqBSohtaLwF2RcGdVcLxldGf7cTSopWP/dLCoWxSosimoqWRRcMs5xW57dICkHW7VdGCktygtcVwCiW48c", "uqZcMW", "zgLZCgXHEq", "A8kbu0tdJLBcVSo5", "rMvSAxHAB25L", "q8kDtuNdPLW", "B3bLBLrYzwfZDxjLu2HVCa", "CMvHzhLtDgf0zq", "BmkNE8o5WQ4Fca", "h1rtpCkiW7lcTq", "WO9nWQPNWOO", "WQhdRGe8WPVdSLu7WPfofXJdGwpcSq", "WPVdVKXeWRRcMmoj", "W5PJWPpdPmkrj8k5CmkHW5pcPdC5E8kFW7e", "C3r1zhLhyxrOzxjtA2LSBhm", "WR09fmoZ", "W7ddQZLNagNcJSocmZyvzSoiWR0jW79rWQJdISoN", "WRfWW43dNCoskCoKFSoxW47dUW", "WPiJtmoYrW", "W7xdVSk4tmkQ", "AxnlvKS", "FLOjp29DASk3o8onoG", "kYNcTqpdN3dcJru", "zCkkvhNdGuVcQCo9vSkPWOS", "pIZcSGtdTa", "WPn/W4dcIZO", "x21VDxnLuhjLC3nLza", "qNrUvMLZAxq", "pCk3qIRcUa", "zMLUza", "WRxcOe4FiLK", "q3vYuhjVzhvJDeLKCW", "x29Uu2HVDW", "pgnslxu", "Ahr0Chm6lY9NCMfWAc5XCs5JB20VB2f1DgGYlJaVyxv0Ag9YAxPLpW", "CMvHzefZvgv4Da", "WRD+cxBcGCkkoSk5WOWpWPf/", "WO3dPeS", "oSkhrmoBWOGO", "oNzvbMZdKq", "qv9NufVdG8k7mW", "CdnSWPpdRq", "sw5ZDgfUy2u", "WQHhWRu", "whLsuMG", "Dg9Nz2XLu3vZDgfPBKf0DgfJA09WDgLVBG", "sSk6WRfEW77cSHhcUcDiW75fDKme", "W7tdHmktvmkmW6m", "gWzSxuRdNW", "FItdOIFdTdBcNxmV", "WR/dOKjpWRa", "WRz9geBcJmkFbSkmWPaBWPe", "yuDZC2S", "omkwqSorWO8sg0BdPq", "WRLeW4Cz", "tM90zxm", "BCkgWRfEW4u", "pSoyh8kpaCksaCoNoCoSWRi", "wW/dRttdJtVcILuFWRpdHq", "WR09o8o/swm", "D2vju2u", "W5RdMCkNuSk/e8oZWRrLyLJcJ2nzWPGiWPDVoSoN", "W7pdQ8k8y8k8gSooWRP7sLFcIuLFWPGpWPnUmCo7z8o1", "CJHSWQBdSmkIw8k3W4FcOCkFWRVdRq", "ug9Wtgf5zxiVqwr2zw50DxjLqMf0DgXLv2LUugfUzwWVtM9KztiVvhLWztiVyNv0Dg9Ux2jHy2S", "WRVdTMmPWOaLiG", "evLRo8kzW7G", "WQTqWQ52WOT2wMlcQG", "W7CjW5dcM8kgWP5O", "EtH2WPhdQ8k6", "W7ydW5BcNCkiWPbWz8kKWQZcRZC", "dg9h", "W7RdOCk/", "WPpdJKC", "BwfYA1bVAw50zxjoB2rL", "WOtcUuSsovVcQ8ocW50RWROeW6dcNa", "laTPtu4", "Cg9OAfe", "Cv3cGthcTue", "Ehjwu2S", "WQldICkmgmoGW7xcHbG1W4zT", "gGL6weldLa", "W5xdLCkBxW", "vhjLyxn1CMvnyxbnC2DmAxn0ugfUzwW", "WRjrWPjQWOT1yN7cOWZdNmkHFWOQW6NcNMq", "n0jZvuPYtG", "WPinDchcHW", "BgfZDeLK", "sgfJA1rPBwvYlMPZigj5ihr1CNvZBgfUoIbfCNjVCIbWyxjZAw5NignHBgXIywnRignVzguGC3rYAw5NoIa", "vrlcIq", "tKvxx0niqvrFu1Lttvnh", "gCojxmo7ESojWRW", "W4iCW4ddNKHtWPXnb8kt", "mJbVAxrYBgy", "z0XrDeu", "W7v+WPi", "qCk9WObjW7/cNXpcTcDxW75gBf4v", "W6FdVSkPq8k2", "yM9KEq", "CsldUY4", "WR3dT2mVWQG", "C1Lgsxm", "W5SdWQy4W40lfSkTWR9SW40bfa", "rXhcM8okW7ddP1C", "WOuRo8o5qg/cMq", "te9yt1u", "s2j0Dui", "WPJdH8kmh8ouW5FcJayuW6PiWPG8vtHLW6CqW4C4WQJcMJldKH/cOcBcSLWTW41/WQ3cG8oeW7RcKmkiW4ydxcrJwmkYW7hdUJhcOey", "haLU", "WO7dSuTLWRFcICopzq", "y2L0EuLUzM8", "ASkgvetdIKVcQq", "WRdcU0ikbfO", "WQ7dMSktcSod", "BmkcWRHCW5O", "W43cVmoXvCkWrmoSWQXXEhFdJwicWPjA", "ug9Wtgf5zxiVtKjHDhrSzu1HAw4VDwKVqMf0DgXLAw5NugfUzwWVvg9Wl3nRAxbcDg4", "vxnLCLnLDhrPBMDqyw5LBa", "n1fgdKq", "vuLnyw5Hz2vYsw1WBa", "ywn0AxzLv29YBgrnyxa", "W7BdOIfncw7cGCodlJ0+zmokWQO", "lCoot8o5CmoHWRhcThddS8kTqaXFuNFdOW", "W7RdSCkL", "W5ldKSkew8k0W48", "rmkNWPzeW7q", "ChjLC2v0tgLZDa", "W4ZdTCoiWPKAvmoUWQhdQW", "tLDVCMXKtwfWtw9KzwW", "yxbW", "mNb4ideYChG", "jSkwrSoxWOmvcv/dRG", "vSk7WOfE", "eLTRmCkhW4NcQsFdQCoEWP1JzG", "nW/dUmojaG", "WOxcUSkoWQJcJG", "W7upW5hcQSkgWPnJBq", "5BEY5y+w5RAi5y+J6kkl5yQP5OMl6k6+572U5A+85ywL", "hYxcQaldPvJcIb1z", "vG/dJW", "tKjHDhrSzu1Zz3m", "cSodbSklga", "BwfYy2HuExbL", "DhLWzq", "pSomfCkaiSksdmoPmSoS", "WPxdUqvCW50", "uMfKyxjdB250CM9SBgvY", "W4GAFNvykNFdVSkWirFdNvNdQSkFWQ0", "WOnHW6JcSaW", "ig1rgNVdSmkx", "CMvSB2fKrgvSyxK", "DgHLBG", "r0rwrK8", "jCkcq8oA", "z2v0uhjLtwfYy2HeyxrHqNLuExbL", "tLDVCMXKtwfWvgvYCML0B3j5q29UDhjVBgXLCG", "vg9WD2fYsgvSCgvYq3rYBa", "shWJ", "zgLZDgfUy2viAw50", "W4VdQSkNtSkYa8oB", "zvrbCfO", "W5mCxM93", "w8ozuXXn", "aN5aow7dICkJWPddNCoYhmoVW4KcWO/cOW", "yZH0CMvHC3vYzunHCG", "DxbKyxrLsgvSCgvYu3DPDgnO", "z2HIBe8", "oJJdGmoB", "W5yCW53dJMzk", "W53dTCokWPq8ra", "ywrKq2HPBgq", "umk6WPPE", "WRHkW5NcLqa", "D2fYAduUCML2zxjNyw1LlM5LDa", "W4StW6ddGwblWOrTcmkuWQxdU3lcQ8of", "WPfYW7KXW60x", "Bg9NAw4", "W5hdM8kFvmkyW5NdHYNcQ8oXfKG", "l8khFq", "rNLorLu", "yvPZtvm", "WPhdHeJdVCo8WRRdIG", "pYxcTGJdP3O", "aLDRWPZcJmo6W4BcV8kKkG", "WRPqWQX7WPC", "aX1N", "vxnLCKrHDge", "tMDwwuS", "ymo6ErjPW6vbWPdcSmo4raVdTCkYxq", "WRrjW4mFW7a", "x0fquf8", "EbVcImoQW6RdHfBcKtepW6VcRLO", "tLrdvw0", "WPXprG", "AgvSCgvY", "q0HbtKDfx0fstvLFrvfvsvbFr1jpvva", "yMf0y2HuCMfPBMLUzW", "hmoiuCoHCCoE", "tMfYsYpdPmo4pq", "W7f1WO3dHa", "gHT7", "iWBcMq", "EI1SWP/dSmk8", "WOTyxrBcHSkpCSoVWO/dR0P1ig9BWOTlW6pcVmoAtCkl", "WQBdRsf8", "oNzBaxZdNmkJWO3dI8odfSoAW4i", "ChjLDMvUDerLzMf1Bhq", "WO9rtdtcH8kxCG", "sSk6WQbbW7NcNrhcMcPhW5HrwLGaW7NcKSoE", "twfYy2HdB250CM9SBgvY", "nX3cHmoaxfDuzG", "d8oufmkhqW", "WO4vBZ/dMSkZ", "cSootG", "iSkBEZ4", "Dg91y2HqB2LUDhm", "v29YBgrnyxbvsvDYyxbWzxiVqwj5C3nxB3jSzfvjl1jPz2H0qM90Dg9Tl2j0BKjHzW", "axPafuBdL8kvWPa", "qxnZzw1Srgf0yq", "hCkatItcJJdcTmk4W5TcWRBcTYa", "FCo8aCkBWR/cGcKOWR5E", "o8k6sc/cIW", "tCoTnmkzWQe", "W4/dQ8ooWO4q", "WP9Do1RcS8kXimkqWQe3WRbfhmkg", "WRddNvxdRmo9WQa", "WOOwECoera", "pXhcGmoauW", "g0TQ", "W4ygD3rOegFdM8k0mXJdQfZdM8kxWQrWl1G", "EmoHpmkbWR3cMJmTWRLbWQFdN8ouWOeAsG", "duNcT8kOWQVdVrBdVM9b", "W4ujW4FdI2PmWO1ElmkDWPtdUgG", "sI13WOxdM8kZESkM", "C3vItwfW", "WPJdV11ZWQlcI8ov", "W5bWzZNdSq", "CKJcGsVcVG", "WOldMK4", "BxLnyxjJAe51Bq", "mmkpra", "zSkkrLNdGv3cJCoUv8k6WOTAnSkS", "WQHsWQ1RWPa", "CJHSWRpdS8k3y8kIW7ZcNmknWQ3dLYa", "W4hdKtX0da", "W53dPmotWOqdrq", "WRzUWQ1xWPW", "C3j0qGtdImoCpdKKWPxcL8kNp1uMhXrQWONdKthcNLddSwtdQqNcUCojo8o8lwxdPYFcPNZcSCkha8oKBvW/tvVdQ1SQWOHA", "WPhdVM1cWQ3cQ8orEa/dRfddKgldKmkD", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZpKUkRMJiNPKQ4Vy29TCg9Zzuj0BG", "W5evyW", "rgf0yq", "WR7dQsD9W5pdOa", "EZX1WPm", "CMvTB3zLq2HPBgq", "W4fvtdNcMCkhCmkTWOtdSLaSbNfSWOPnW6e", "AujtzhC", "WR0JeSo4", "CMvZB3vYy2vuB3DLCG", "emkxxaZcNI0", "W5erW4JdMMzuWOfydCkxWOJcRx3cOCowWQ9aiSkkgKRdUCkTrCocm8kpA8kBW4fKmJNcRSo1vCkgoHD3WRXSWP3dLGiPW6ZdP2ehD8kqW5LKvCkIW5JcJ8o6WOZcH8ornColWQfsW7hdOSkSrHHMlMaXbX0gECoQomksW78qWOVdTenyqrKjW5rRk1NcQmkEANvmrJzEWRfoe8o2WQTUW7xcIxtcICk3CeRcHxLifYuciGLzomo8WO3cKSoNWP1FW5NcQSkpm8oPx3i3rCoQkCk0WOb0WR/cKCoKWQRcV3ldHu7cPCkNW4eSemo5yW3dQfztAtpdGCoyW65HngHWxZxcLLRcPr8TANxcQ3eQBJJcT1tcM8kaWPxcQCoeWPHgxSoKtub4pSkpB2fjW7FcSCodlX4fjmkMWR/cOCkkxIBcHv3dO8kbyvbYzLfAW6pcSCofB8oQWRJdQSkAsmk3qmk8rNmVWOv+W7FdMmksWO/dNCkvW7BcILZcTSkNaSotl1hdQ8o4WPjYFKVcRmoiWQiYWOG1kSowW6/dHtW1jSk/W5fcWRnFWR44hHWqdhFcK3qxzdLuWQq7a282W4DwWP5FWOH3DmkuW6SHasVcJs7dHSouWRZcRmoFW44qz8oVWPSnx1GkgCk+nWHhW5bGCstcLZhcLSo4WP96fCo1uqe6WRjXkwvFWOtdQaFcN8kbv8kCzmowWOZdJSkWimkEW7NdLeiwW6pcI8oSnK3dKmk8oXu", "uKBcGXtcUL9qDCo5DCkBdbmLlmkMW4/cUsKdEmo1W6tcHsnibmofWOVcVmoPWRC7BSkkWPj4W5JcOmkprNhdOmoeW5TgW6NcMmocW7tdLutcNdPTccq+W6JKURhMJyVPK7XUuSoqx8oFW5v1nCkVWP7dRa", "qbVcMSoGW6ZdR1xcIcm", "mfjW", "WRVdHKJdRmocWRZdT0HRWPrxyCkcW6NcJ8kxaCohWOatWQRcLmoUjmkyA8kp", "CJHSWR/dSCkHESkMW7ZcI8kQ", "W7KzWQW", "ytj3WPRdRa", "dCkArdldIW", "Bgv2zwW", "W44jW4ZcM8kvWO9VESkjWQJcRs/cKMpdNsq", "ug9Wtgf5zxiVvuLgCMfTzu5VBMvBmv0Vq09ovevovc9izxjVrgv0ywLSu2TPBgXqB3b1Cc8YBMrFyMDFmY9ZA2LSBdeVy29UDgvUDc9cB3r0B20VrxHJBhvZAxzLu2TPBgWVtMv3tgf5B3v0l3jcDg4", "eanHwKq", "W4JdKCkA", "WRb9dMhcGCkm", "W7pdQ8k8y8k8gSooWRP7sLFcIq", "WQ96W6tcStOVBYtdLmon", "whreBKG", "W4GCWRm0W5mScmkNWQW", "y3jLyxrLt2jQzwn0vvjm", "WO7dV1G", "rNDeuvG", "hGPRuu7dOSkYj8oEWRxcGXFcKh7dNa", "z3jLzw4"];
  fn3 = function () {
    return arr3;
  };
  return fn3();
}
function userAppQRCode() {
  var obj25 = {
    RkReD: "0|5|12|1|2|10|3|14|7|4|9|6|11|8|15|13",
    eVqtA: function (arg122, arg123) {
      return arg122 + arg123;
    },
    rzHca: function (arg124, arg125) {
      return arg124 + arg125;
    },
    OFIHC: "/qrcode?appid=",
    RuLSH: "&bgcolor=",
    dSHeO: "&rst=",
    PXlIb: "false",
    dyZUZ: "300px",
    kfrYn: "iframe"
  };
  window.wxLogin = window.WxLogin;
  window.WxLogin = function (arg126) {
    var parts7 = "0|5|12|1|2|10|3|14|7|4|9|6|11|8|15|13".split("|");
    var num16 = 0x0;
    while (true) {
      switch (parts7[num16++]) {
        case "0":
          var str8 = "default";
          continue;
        case "1":
          var tmp34 = obj25.eVqtA(obj25.eVqtA(obj25.rzHca("https://open.weixin.qq.com/connect/qrconnect?appid=" + arg126.appid + "&scope=" + arg126.scope + "&redirect_uri=", arg126.redirect_uri) + "&state=" + arg126.state + "&login_type=jssdk&self_redirect=" + str8, "&styletype="), arg126.styletype || "") + "&sizetype=" + (arg126.sizetype || "") + "&bgcolor=" + (arg126.bgcolor || "") + "&rst=" + (arg126.rst || "");
          continue;
        case "2":
          tmp34 += arg126.style ? "&style=" + arg126.style : "";
          continue;
        case "3":
          result19.src = tmp34;
          continue;
        case "4":
          result19.scrolling = "no";
          continue;
        case "5":
          if (true === arg126.self_redirect) {
            str8 = "true";
          } else if (false === arg126.self_redirect) {
            str8 = "false";
          }
          continue;
        case "6":
          result19.height = "400px";
          continue;
        case "7":
          result19.allowTransparency = "true";
          continue;
        case "8":
          var element1 = document.getElementById(arg126.id);
          continue;
        case "9":
          result19.width = "300px";
          continue;
        case "10":
          tmp34 += arg126.href ? obj25.eVqtA("&href=", arg126.href) : "";
          continue;
        case "11":
          result19.style = "background-color:#333333";
          continue;
        case "12":
          var result19 = document.createElement("iframe");
          continue;
        case "13":
          element1.appendChild(result19);
          continue;
        case "14":
          result19.frameBorder = "0";
          continue;
        case "15":
          element1.innerHTML = "";
          continue;
      }
      break;
    }
  };
}
function getDeviceInfo() {
  var obj26 = {
    ipeBm: "app_android_device_info",
    tinJE: "FWSTool",
    DbObY: function (arg127, arg128) {
      return arg127 + arg128;
    },
    Lgjir: function (arg129, arg130) {
      return arg129 ^ arg130;
    },
    tMPzr: function (arg131, arg132) {
      return arg131 + arg132;
    },
    URHGN: "DCO",
    sTbmj: "HUAWEI",
    qVJGk: "DCO-AL01 4.2.5.413(C00E100R5P6)",
    euiwG: "HUAWEI/DCO-AL01/HWDCO:12/HUAWEIDCO-AL01/104.2.0.135C00:user/release-keys",
    RJrzK: function (arg133, arg134) {
      return arg133 + arg134;
    },
    hWQaH: function (arg135, arg136) {
      return arg135 + arg136;
    },
    XiLoh: "cn-central-hcd-",
    sLLvB: "release-keys",
    WPuuZ: "normal",
    fELJj: "zh-CN",
    LQfKS: function (arg137, arg138) {
      return arg137(arg138);
    }
  };
  var result20 = __require("LocalStorageUtils").get("app_android_device_info");
  if (!result20) {
    var value13 = __require("FWSTool").Str.guid;
    var result21 = value13().replaceAll("-", "").slice(-16);
    result20 = {
      android_id: result21,
      app_localDeviceId: value13().replaceAll("-", ""),
      oaid: value13(),
      af_deviceid: obj26.DbObY((("" + Math.random()).slice(obj26.Lgjir(0xb64ec, 0xb64ee)) + obj26.tMPzr("", Math.random()).slice(obj26.Lgjir(0x47dfc, 0x47dfe))).slice(-13), "-") + (obj26.DbObY("", Math.random()).slice(obj26.Lgjir(0x6e2e2, 0x6e2e0)) + ("" + Math.random()).slice(2)).slice(-obj26.Lgjir(0x2d7fd, 0x2d7ef)),
      temp_id: value13(),
      app_deviceInfo: {
        buildInfo: {
          board: "DCO",
          bootLoader: "unknown",
          brand: "HUAWEI",
          device: "HWDCO",
          display: "DCO-AL01 4.2.5.413(C00E100R5P6)",
          fingerPrint: "HUAWEI/DCO-AL01/HWDCO:12/HUAWEIDCO-AL01/104.2.0.135C00:user/release-keys",
          hardware: "qcom",
          host: obj26.RJrzK(obj26.hWQaH(obj26.RJrzK("cn-central-hcd-", value13().replaceAll("-", "").slice(-obj26.Lgjir(0x90a8b, 0x90a89))) + "-", value13().replaceAll("-", "").slice(-22)), "-") + value13().replaceAll("-", "").slice(-10) + "-" + (Math.random().toString(obj26.Lgjir(0x209da, 0x209fe)).slice(2) + Math.random().toString(obj26.Lgjir(0xb66c2, 0xb66e6)).slice(2)).slice(-5),
          id: "HUAWEIDCO-AL01",
          manufacturer: "HUAWEI",
          model: "DCO-AL01",
          product: "DCO-AL01",
          tags: "release-keys",
          time: Date.now(),
          type: "user",
          user: "test",
          status: "normal"
        },
        androidId: result21,
        channelId: "cn_official",
        locale: "zh-CN",
        osversion: "12"
      }
    };
    obj26.LQfKS(__require, "LocalStorageUtils").set("app_android_device_info", result20);
  }
  ;
  return result20;
}
function platformInitialize() {
  var obj27 = {
    YnlkJ: "title",
    xDzRk: "APP版",
    jLgxe: function (arg139, arg140) {
      return arg139 >= arg140;
    }
  };
  function fn10() {
    var parts8 = "0|4|3|2|1".split("|");
    var num17 = 0x0;
    while (true) {
      switch (parts8[num17++]) {
        case "0":
          var value14 = document.querySelector("title").innerText;
          continue;
        case "1":
          document.querySelector("title").innerText = value14.slice(0, tmp35) + "APP版" + value14.slice(tmp35);
          continue;
        case "2":
          var tmp35 = obj27.jLgxe(result23, 0) ? result23 : result22 >= 0 ? result22 : value14.length;
          continue;
        case "3":
          var result22 = value14.indexOf("（");
          continue;
        case "4":
          var result23 = value14.indexOf("(");
          continue;
      }
      break;
    }
  }
  useAppChannel();
  userAppQRCode();
  fn10();
}
function platformSetServerListParam(arg141) {
  var obj28 = {
    laHAu: function (arg142) {
      return arg142();
    },
    uAWTf: "webgame",
    prixj: "appwx",
    itSNK: "appmobile",
    GDVFO: "appmobile_appmobile",
    FbJHA: "appandroid"
  };
  var result24 = obj28.laHAu(getDeviceInfo);
  switch (arg141.platform) {
    case "webgame":
      arg141.platform = "appwx";
      arg141.channel = "appwx_appwx";
      break;
    case "appwx":
      arg141.channel = "appwx_appwx";
      break;
    case "appqq":
      arg141.channel = "appqq_appqq";
      break;
    case "appmobile":
      arg141.channel = "appmobile_appmobile";
      break;
  }
  arg141.pf = "android";
  arg141.containerType = "android";
  arg141.app_localDeviceId = result24.app_localDeviceId;
  arg141.visitorDeviceId = result24.app_localDeviceId;
  arg141.visitorPlatform = "appandroid";
  arg141.firebaseId = "";
}
function platformSetLoginParam(arg143) {
  var obj29 = {
    lVCwg: "appwx",
    ASuBT: "appwx_appwx",
    EOVmZ: "appqq",
    fVdGD: "appmobile_appmobile",
    uDePQ: "android",
    iqaeA: function (arg144, arg145) {
      return arg144 + arg145;
    }
  };
  var result25 = getDeviceInfo();
  switch (arg143.platform) {
    case "appwx":
      arg143.channel = "appwx_appwx";
      break;
    case "appqq":
      arg143.channel = "appqq_appqq";
      break;
    case "appmobile":
      arg143.channel = "appmobile_appmobile";
      break;
  }
  arg143.pf = "android";
  arg143.containerType = "android";
  arg143.launchPrams = obj29.iqaeA(obj29.iqaeA("{\"query\":{\"channel\":\"appandroidtest_appandroidtest\",\"unionid\":\"", result25.android_id), "\"}}");
  arg143.ua = "";
  arg143.lineAddress = "serverlist-knight.rivergame.net";
  arg143.app_localDeviceId = result25.app_localDeviceId;
  arg143.app_deviceType = 0;
  arg143.app_status = 0;
  arg143.app_code = 0;
  arg143.oaid = result25.oaid;
  arg143.app_deviceInfo = result25.app_deviceInfo;
  arg143.android_id = result25.android_id;
  arg143.af_deviceid = result25.af_deviceid;
  arg143.firebaseId = "";
  arg143.appstoreName = "official_store";
  arg143.tss = Date.now() - 0x51719c0;
  arg143.temp_id = result25.tempid;
}
function hookMain() {
  function fn11() {
    var result26 = cc.find("LoginFlowNode");
    var tmp36 = cc.find("LoginWebAccountPanel") && localStorage.getItem("topwar_app_serverToken");
    if (result26) {
      hookGame();
      if (tmp36) {
        result26.getComponent("LoginFlow").startLoginFlow();
      }
    } else {
      cc.director._scene.once(cc.Node.EventType.CHILD_ADDED, fn11);
    }
  }
  function fn12() {
    var obj30 = {
      SrFll: function (arg146, arg147) {
        return arg146 === arg147;
      },
      ZZzJE: "hidden"
    };
    var value15 = cc.game._setAnimFrame;
    cc.game._setAnimFrame = function () {
      value15.apply(this, arguments);
      if (obj30.SrFll("hidden", document.visibilityState)) {
        window.requestAnimFrame = this._stTime;
        window.cancelAnimFrame = this._ctTime;
      }
    };
    cc.game.setFrameRate(cc.game.getFrameRate());
  }
  if (cc = window.cc) {
    if (cc.game._prepared) {
      fn12();
    } else {
      cc.game.once(cc.game.EVENT_GAME_INITED, fn12);
    }
    if (cc.director._scene) {
      fn11();
    } else {
      cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, fn11);
    }
  }
}
function hookGame() {
  var obj31 = {
    pMdzM: "LOGIN_SUCCESS",
    orYmh: function (arg148, arg149) {
      return arg148 ^ arg149;
    },
    FwDQX: function (arg150, arg151) {
      return arg150 ^ arg151;
    },
    xtKVy: "mousedown",
    qFzoQ: "mousemove",
    refPm: function (arg152, arg153) {
      return arg152 < arg153;
    },
    NHRgH: "https://graph.qq.com/oauth2.0/authorize?",
    sAUMS: function (arg154, arg155) {
      return arg154 ^ arg155;
    },
    EHcjq: function (arg156, arg157, arg158) {
      return arg156(arg157, arg158);
    },
    zNfNr: "lastLoginUid",
    XLfWq: "PushResponse",
    WohlM: "{\"data\":\"silence_reminder_002\",\"type\":1}",
    nbcTx: function (arg159) {
      return arg159();
    },
    vNniT: function (arg160, arg161) {
      return arg160(arg161);
    },
    tcIMG: function (arg162, arg163) {
      return arg162 == arg163;
    },
    fxbzT: "PlatformCore",
    QCLMZ: function (arg164, arg165) {
      return arg164(arg165);
    },
    CuCEk: function (arg166, arg167) {
      return arg166(arg167);
    },
    FIMMr: function (arg168, arg169) {
      return arg168(arg169);
    },
    WnODu: "TaskGuideSub",
    XjsjQ: function (arg170, arg171) {
      return arg170(arg171);
    },
    iBSdw: function (arg172, arg173) {
      return arg172(arg173);
    },
    UjJRy: "WorldMapUIWrapper/NWorldMapUI",
    qBDKX: "milePointerNode",
    GyhQt: "markPointerNode",
    bCnSz: function (arg174, arg175) {
      return arg174(arg175);
    },
    kaeGh: "WorldMapUIWrapper",
    Xlbdn: function (arg176, arg177) {
      return arg176(arg177);
    },
    crAXS: "FastAllianceHelp",
    kUixx: function (arg178, arg179) {
      return arg178(arg179);
    },
    bCrLI: function (arg180, arg181) {
      return arg180 ^ arg181;
    },
    DFrPS: function (arg182, arg183) {
      return arg182 + arg183;
    },
    lpOgh: "LocalComponent",
    jfohH: "BtnFastAttack2",
    dNmiN: "BtnFastAttack3",
    zRmwn: function (arg184, arg185) {
      return arg184 ^ arg185;
    },
    HJxLD: "onSustainAttack",
    jvKLq: function (arg186, arg187) {
      return arg186(arg187);
    },
    wQBGP: "TopwarHelperCtrl",
    yoVpE: function (arg188, arg189) {
      return arg188 ^ arg189;
    },
    KbAiw: "口袋助手",
    xkOBs: "node1/New Layout/setting_8",
    kjjfl: "SwitchNode",
    YdXZZ: "node2",
    SDgdw: "node3",
    UZMqu: "0|2|12|10|5|3|11|8|7|6|4|1|9",
    JyBBJ: function (arg190, arg191) {
      return arg190(arg191);
    },
    lVzKK: "UserSettingPanel",
    lBtsm: "alliance_reinforce_029",
    oiuDM: "corss_test4",
    oNjBa: "alliance_records_051",
    vUwUn: "mine_cave37",
    jNZIN: "mine_cave59",
    vAJjf: "mine_cave89",
    xWGUy: "thor_monster_refresh_limit",
    mVuJg: "power_017",
    YHFKG: "option_show_tips_",
    HRBtU: function (arg192, arg193) {
      return arg192 == arg193;
    },
    owdrK: "LocalManager",
    LclhZ: function (arg194, arg195) {
      return arg194 ^ arg195;
    },
    USZaP: function (arg196, arg197) {
      return arg196(arg197);
    },
    JYloN: "FWSMvc",
    LRoQX: function (arg198, arg199) {
      return arg198 === arg199;
    },
    cmCkE: function (arg200, arg201) {
      return arg200 ^ arg201;
    },
    nWLNH: function (arg202, arg203) {
      return arg202 != arg203;
    },
    IMVvH: function (arg204, arg205, arg206) {
      return arg204(arg205, arg206);
    },
    NNXMp: function (arg207, arg208) {
      return arg207(arg208);
    },
    ZYIjG: "NWorldMapCommon",
    RYxbj: "NWorldMapCoreBiz",
    dZvcq: function (arg209, arg210) {
      return arg209 - arg210;
    },
    IGXwU: function (arg211, arg212) {
      return arg211 ^ arg212;
    },
    LqYkL: function (arg213, arg214) {
      return arg213 > arg214;
    },
    mitwP: function (arg215, arg216) {
      return arg215 ^ arg216;
    }
  };
  (function () {
    if (!EventId.LoginSuccess) {
      EventId.LoginSuccess = "LOGIN_SUCCESS";
    }
    if (!EventId.UpdateTileInfo) {
      EventId.UpdateTileInfo = "UpdateTileInfo";
    }
    if (!EventId.UpdateMarchInfo) {
      EventId.UpdateMarchInfo = "UpdateMarchInfo";
    }
    if (!EventId.CS_TEAM_READY_CHANGE) {
      EventId.CS_TEAM_READY_CHANGE = "CS_TEAM_READY_CHANGE";
    }
    if (!EventId.NEW_CHAT_SYSMSG) {
      EventId.NEW_CHAT_SYSMSG = "newChatSysMsg";
    }
    if (!EventId.NEW_CHAT_PUSH) {
      EventId.NEW_CHAT_PUSH = "newChatPush";
    }
    if (!EventId.PabRoomShopDataUpdate) {
      EventId.PabRoomShopDataUpdate = "PabRoomShopDataUpdate";
    }
  })();
  if (platformInitialize) {
    platformInitialize();
  }
  (function () {
    var value16 = cc.game.canvas;
    var value17 = cc.internal.eventManager;
    var value18 = cc.internal.inputManager;
    var value19 = value18._canvasBoundingRect;
    if (cc.sys.isMobile) {
      window.addEventListener("mousedown", function () {
        value18._mousePressed = true;
      }, false);
      window.addEventListener("mouseup", function (arg217) {
        if (value18._mousePressed) {
          value18._mousePressed = false;
          var result27 = value18.getPointByEvent(arg217, value19);
          if (!cc.rect(value19.left, value19.top, value19.width, value19.height).contains(result27)) {
            value18.handleTouchesEnd([value18.getTouchByXY(result27.x, result27.y, value19)]);
            var result28 = value18.getMouseEvent(result27, value19, cc.Event.EventMouse.UP);
            result28.setButton(arg217.button);
            value17.dispatchEvent(result28);
          }
        }
      }, false);
      var value20 = cc.Event.EventMouse;
      var arr4 = [["mousedown", value20.DOWN, function (arg218, arg219, arg220, arg221) {
        value18._mousePressed = true;
        value18.handleTouchesBegin([value18.getTouchByXY(arg220.x, arg220.y, arg221)]);
        value16.focus();
      }], ["mouseup", value20.UP, function (arg222, arg223, arg224, arg225) {
        value18._mousePressed = false;
        value18.handleTouchesEnd([value18.getTouchByXY(arg224.x, arg224.y, arg225)]);
      }], ["mousemove", value20.MOVE, function (arg226, arg227, arg228, arg229) {
        value18.handleTouchesMove([value18.getTouchByXY(arg228.x, arg228.y, arg229)]);
        if (!value18._mousePressed) {
          arg227.setButton(null);
        }
      }]];
      for (var num18 = 0; obj31.refPm(num18, arr4.length); ++num18) {
        var value21 = arr4[num18];
        if (value21) {
          (function () {
            var value22 = value21[0];
            var value23 = value21[obj31.orYmh(0xce53e, 0xce53f)];
            var value24 = value21[obj31.FwDQX(0x7bfec, 0x7bfee)];
            value16.addEventListener(value22, function (arg230) {
              var parts9 = "3|1|0|5|2|4|6".split("|");
              var num19 = 0x0;
              while (true) {
                switch (parts9[num19++]) {
                  case "0":
                    result29.setButton(arg230.button);
                    continue;
                  case "1":
                    var result29 = value18.getMouseEvent(result30, value19, value23);
                    continue;
                  case "2":
                    value17.dispatchEvent(result29);
                    continue;
                  case "3":
                    var result30 = value18.getPointByEvent(arg230, value19);
                    continue;
                  case "4":
                    arg230.stopPropagation();
                    continue;
                  case "5":
                    value24(arg230, result29, result30, value19);
                    continue;
                  case "6":
                    arg230.preventDefault();
                    continue;
                }
                break;
              }
            }, false);
          })();
        }
      }
    }
  })();
  (function () {
    if (window.ErrorReport) {
      var obj32 = {};
      obj32.custom = obj32.error = obj32.injectClientInfo = obj32.launch = obj32.login = obj32.nextSeq = obj32.packHandlerTime = obj32.post = obj32.push = obj32.req = obj32.res = obj32.sendCustom = obj32.serverList = obj32.table = obj32.trace = () => { };
      ErrorReport.methods = obj32;
      GameDefine.NetReqReport = GameDefine.TraceReport = GameDefine.customReport = GameDefine.packHandlerTimer = GameDefine.launchReport = GameDefine.launchOrReconnectReport = GameDefine.launchErrorReport = () => { };
    }
  })();
  (function () {
    var value25 = window.open;
    window.open = function (arg231, arg232, arg233) {
      arg231 = arg231.replace("https://graph.qq.com/oauth2.0/authorize?", "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&");
      return value25(arg231, arg232, arg233);
    };
  })();
  (function () {
    var parts10 = "4|0|1|2|5|3".split("|");
    var num20 = 0x0;
    while (true) {
      switch (parts10[num20++]) {
        case "0":
          NET.asend = function (arg234, arg235) {
            return new Promise(arg236 => {
              NET._onTimeOutCallback = NET._onCloseCallback = NET._onErrorCallback = arg236;
              if (NET.states == obj33.iaqgo(0x27895, 0x27894) && NET.send(arg234, arg235, null, arg237 => arg236(arg237.d && GameTools.JSON_PARSE(arg237.d)))) {
                obj33.QFuSM(setTimeout, arg236, 5000);
              } else {
                arg236(false);
              }
            });
          };
          continue;
        case "1":
          NET.asendPB = function (arg238, arg239) {
            return new Promise(arg240 => {
              NET._onTimeOutCallback = NET._onCloseCallback = NET._onErrorCallback = arg240;
              if (obj33.VqOGw(NET.states, obj33.iNuGy(0x61bed, 0x61bec)) && NET.sendPB(arg238, arg239, null, arg241 => arg240(arg241.pbAck && arg241.pbAck.header && 0 == arg241.pbAck.header.s ? arg241.pbAck : null))) {
                setTimeout(arg240, 5000);
              } else {
                arg240(false);
              }
            });
          };
          continue;
        case "2":
          NET.asendPBV2 = function (arg242, arg243) {
            var obj34 = {
              pQDPZ: function (arg244, arg245) {
                return obj31.orYmh(arg244, arg245);
              },
              fOnqV: function (arg246, arg247, arg248) {
                return arg246(arg247, arg248);
              }
            };
            return new Promise(arg249 => {
              NET._onTimeOutCallback = NET._onCloseCallback = NET._onErrorCallback = arg249;
              if (NET.states == obj34.pQDPZ(0x6908c, 0x6908d) && NET.sendPBV2(arg242, arg243, null, arg250 => arg249(arg250 && arg250.pbAckV2.header && 0 == arg250.pbAckV2.header.s ? arg250.pbAckV2.data : null))) {
                obj34.fOnqV(setTimeout, arg249, 5000);
              } else {
                arg249(false);
              }
            });
          };
          continue;
        case "3":
          NET.showPanel = NET.doClosePannelReconnect;
          continue;
        case "4":
          var obj33 = {
            iaqgo: function (arg251, arg252) {
              return obj31.sAUMS(arg251, arg252);
            },
            QFuSM: function (arg253, arg254, arg255) {
              return obj31.EHcjq(arg253, arg254, arg255);
            },
            VqOGw: function (arg256, arg257) {
              return arg256 == arg257;
            },
            iNuGy: function (arg258, arg259) {
              return arg258 ^ arg259;
            }
          };
          continue;
        case "5":
          NET.enterBackground = NET.enterFrontground;
          continue;
      }
      break;
    }
  })();
  (function (arg260) {
    if (arg260.includes(CryptoJS.enc.Hex.stringify(CryptoJS.MD5(JSON.parse(localStorage.getItem("lastLoginUid")))))) {
      __require("PushResponse").PushKickOut.prototype.Handler({
        data: "{\"data\":\"silence_reminder_002\",\"type\":1}",
        status: 0x0
      });
    }
  })([]);
  (function () {
    var obj35 = {
      CWHVW: "app_serverToken",
      azHJo: function (arg261, arg262) {
        return obj31.sAUMS(arg261, arg262);
      },
      SKTMz: "public410",
      IYzRJ: function (arg263, arg264) {
        return obj31.CuCEk(arg263, arg264);
      },
      WQInH: function (arg265, arg266) {
        return arg265 != arg266;
      }
    };
    if (window.location.href.includes("https://warh5.rivergame.net/webgame/index.html")) {
      var result31 = obj31.CuCEk(__require, "LocalStorageUtils");
      function fn13() {
        var result32 = result31.get("app_lastLogin");
        return result32 && result32.serverInfoToken || result31.get("app_serverToken");
      }
      var moduleRef2 = __require("PlatformCore");
      var value26 = moduleRef2.instance.setServerListParam;
      moduleRef2.instance.setServerListParam = function (arg267) {
        value26.apply(this, arguments);
        var result33 = obj31.nbcTx(fn13);
        if (result33) {
          arg267.token = result33;
          arg267.platform = obj31.vNniT(base64Decode, result33).split(",")[1];
          if (obj31.tcIMG(arg267.platform, "webgameqq")) {
            arg267.code = result31.get("app_webgameqqCode");
            arg267.token = arg267.code;
          }
        } else if (arg267.platform == "webgameqq" && arg267.code) {
          result31.set("app_webgameqqCode", arg267.code);
        }
        platformSetServerListParam(arg267);
      };
      var value27 = moduleRef2.instance.setLoginParam;
      moduleRef2.instance.setLoginParam = function (arg268) {
        value27.apply(this, arguments);
        arg268.platform = base64Decode(arg268.serverInfoToken).split(",")[1];
        platformSetLoginParam(arg268);
      };
      moduleRef2.instance.canUserLogout = function () {
        return true;
      };
      moduleRef2.instance.userLogout = function () {
        var obj36 = {
          content: LOCAL.getText("mobile_phone_re_key04"),
          title: LOCAL.getText("public410"),
          delegate: this,
          sureCallBack: function () {
            result31.del("app_serverToken");
            result31.del("app_lastLogin");
            result31.del("app_webgameqqCode");
            window.location.href = window.location.href.split("?")[obj35.azHJo(0xd0437, 0xd0437)];
          },
          cancelCallBack: function () { }
        };
        helper.openUI("ConfirmPanel", obj36);
      };
      moduleRef2.instance.saveServerToken(fn13());
      var moduleRef2 = __require("LoginTasks");
      var value28 = moduleRef2.ServerListTask.prototype.onServerListSuccess;
      moduleRef2.ServerListTask.prototype.onServerListSuccess = function (arg269) {
        result31.set("app_serverToken", arg269.serverInfoToken);
        var tmp37 = result31.get("app_lastLogin") || arg269;
        var value31 = obj35.IYzRJ(base64Decode, arg269.serverInfoToken).split(",")[2];
        var value32 = obj35.IYzRJ(base64Decode, tmp37.serverInfoToken).split(",")[2];
        if (obj35.WQInH(value31, value32) || arg269.uid == tmp37.uid || true) {
          result31.set("app_lastLogin", arg269);
        } else {
          arg269 = tmp37;
        }
        value28.apply(this, arguments);
      };
      var value29 = moduleRef2.ServerListTask.prototype.onServerListFail;
      moduleRef2.ServerListTask.prototype.onServerListFail = function (arg270) {
        value29.call(this, arg270);
        result31.del("app_lastLogin");
        __require("PlatformCore").instance.saveServerToken(fn13());
      };
      var moduleRef2 = __require("ResetGame");
      var value30 = moduleRef2.default.doResetGame;
      moduleRef2.default.doResetGame = function (arg271) {
        if (arg271 && arg271.serverInfoToken) {
          result31.del("app_lastLogin");
          result31.set("app_serverToken", arg271.serverInfoToken);
          obj31.QCLMZ(__require, "PlatformCore").instance.saveServerToken(arg271.serverInfoToken);
        }
        value30.apply(this, arguments);
      };
    }
  })();
  (function () {
    var result34 = obj31.FIMMr(__require, "PlatformCore");
    result34.instance.canShare = function () {
      return true;
    };
  })();
  (function () {
    var moduleRef3 = __require("TaskGuideSub");
    moduleRef3.default.prototype.StartDailyTaskGuide = () => { };
    moduleRef3.default.prototype.StartTaskGuide = () => { };
  })();
  (function () {
    var obj37 = {
      dgDnt: function (arg272, arg273) {
        return arg272 ^ arg273;
      }
    };
    __require("PlatformCommon").PlatformCommon.canRewardVideoAd = () => true;
    obj31.XjsjQ(__require, "RGShareUtils").default.rg_getShareType = function (arg274, arg275, arg276) {
      if (arg276) {
        arg276(obj37.dgDnt(0xa1a48, 0xa1a48));
      }
    };
  })();
  (function () {
    var result35 = obj31.XjsjQ(__require, "CommonTips");
    var value33 = result35.default.prototype.ShowTips;
    result35.default.prototype.ShowTips = function (arg277) {
      if (!document.hidden) {
        value33.apply(this, arguments);
      }
    };
    var result35 = __require("AssemblyMailTipsComponent");
    var value34 = result35.default.prototype.setShowData;
    result35.default.prototype.setShowData = function (arg278) {
      if (!document.hidden) {
        value34.apply(this, arguments);
      }
    };
  })();
  (function () {
    obj31.iBSdw(__require, "NWorldRaiseFogCompoennt").default.prototype.addPrefab = () => 0;
  })();
  (function () {
    var obj38 = {
      byEtP: function (arg279, arg280) {
        return obj31.bCnSz(arg279, arg280);
      },
      iOszi: "WorldMapUIWrapper"
    };
    function fn14() {
      var result36 = find("WorldMapUIWrapper/NWorldMapUI");
      helper.ext.milePointer = result36 && result36.getChildByName("milePointerNode");
      helper.ext.markPointer = result36 && result36.getChildByName("markPointerNode");
      if (result36 && !helper.ext.option.distanceHint) {
        result36.removeChild(helper.ext.milePointer);
        result36.removeChild(helper.ext.markPointer);
      }
    }
    function fn15() {
      var result37 = obj38.byEtP(find, "WorldMapUIWrapper");
      if (result37) {
        result37.once(cc.Node.EventType.CHILD_ADDED, fn14);
      }
    }
    EVENT.on(EventId.CHANGE_SCENE, fn15);
  })();
  (function () {
    var result38 = obj31.Xlbdn(__require, "FastAllianceHelp");
    var value35 = result38.default.prototype.isShowAllianceHelp;
    result38.default.prototype.isShowAllianceHelp = function () {
      if (helper.pro.misc.allianceHelp && helper.pro.misc.allianceHelp.timer) {
        this.fastAllianceHelpBtn.active = false;
      } else {
        value35.apply(this, arguments);
      }
    };
  })();
  (function () {
    var obj39 = {
      ntNzY: function (arg281, arg282) {
        return arg281 ^ arg282;
      }
    };
    var value36 = obj31.kUixx(__require, "newChatController").newChatController;
    var value37 = value36.prototype.createOneSysMsg;
    value36.prototype.createOneSysMsg = function () {
      var result39 = value37.apply(this, arguments);
      if (result39 && ServerTime - result39.t <= obj39.ntNzY(0x1bb60, 0x1bb61)) {
        EVENT.emit("newChatSysMsg", result39);
      }
      return result39;
    };
  })();
  (function () {
    var obj40 = {
      zwiTF: "BtnTracking",
      DpLpg: function (arg283, arg284) {
        return obj31.orYmh(arg283, arg284);
      },
      vUqHq: function (arg285, arg286) {
        return arg285 ^ arg286;
      },
      csWAS: "BtnAttack",
      EmHIj: "LocalComponent",
      cCcNs: "快攻1队",
      VhTUp: "BtnFastAttack2",
      DDINr: "onFastAttackBtnClick2",
      QLHrJ: "BtnFastAttack3",
      UJaYN: "onFastAttackBtnClick3"
    };
    var moduleRef4 = __require("NWorldCityPopup");
    var value38 = moduleRef4.default.prototype.onShow;
    moduleRef4.default.prototype.onShow = function () {
      value38.apply(this, arguments);
      var value39 = helper.pro.fastAttack;
      if (value39 && value39.active && value39.state.running && this.BtnLayout.getChildByName("BtnAttack").active) {
        var result40 = cc.instantiate(this.BtnLayout.getChildByName("BtnVisit"));
        result40.active = true;
        result40.name = "BtnTracking";
        result40.getComponentInChildren(cc.Label).string = this.cityInfo.pid == helper.pro.fastAttack.tracker.info?.["pid"] ? "停止跟踪" : "跟踪";
        result40.getComponentInChildren("LocalComponent").langKey = null;
        result40.getComponent(cc.Button).clickEvents[obj40.DpLpg(0xd4be2, 0xd4be2)].handler = "onTrackingkBtnClick";
        this.BtnLayout.addChild(result40);
        if (value39.setting.show3s) {
          let tmp38 = value39.setting.att3s || obj40.vUqHq(0x651b8, 0x651b9);
          result40 = cc.instantiate(this.BtnLayout.getChildByName("BtnAttack"));
          result40.name = "BtnFastAttack3S";
          result40.getComponentInChildren(cc.Label).string = tmp38 + "队三连";
          result40.getComponentInChildren("LocalComponent").langKey = null;
          result40.getComponent(cc.Button).clickEvents[0].handler = "onFastAttackBtnClick3S";
          this.BtnLayout.addChild(result40);
        }
        result40 = cc.instantiate(this.BtnLayout.getChildByName("BtnAttack"));
        result40.name = "BtnFastAttack";
        result40.getComponentInChildren(cc.Label).string = "快攻1队";
        result40.getComponentInChildren("LocalComponent").langKey = null;
        result40.getComponent(cc.Button).clickEvents[0].handler = "onFastAttackBtnClick";
        this.BtnLayout.addChild(result40);
        if (value39.setting.show2) {
          result40 = cc.instantiate(this.BtnLayout.getChildByName("BtnAttack"));
          result40.name = "BtnFastAttack2";
          result40.getComponentInChildren(cc.Label).string = "快攻2队";
          result40.getComponentInChildren("LocalComponent").langKey = null;
          result40.getComponent(cc.Button).clickEvents[0].handler = "onFastAttackBtnClick2";
          this.BtnLayout.addChild(result40);
        }
        if (value39.setting.show3) {
          result40 = cc.instantiate(this.BtnLayout.getChildByName("BtnAttack"));
          result40.name = "BtnFastAttack3";
          result40.getComponentInChildren(cc.Label).string = "快攻3队";
          result40.getComponentInChildren("LocalComponent").langKey = null;
          result40.getComponent(cc.Button).clickEvents[0].handler = "onFastAttackBtnClick3";
          this.BtnLayout.addChild(result40);
        }
        this.BtnLayout.getComponent(cc.Layout).updateLayout();
        this.bgLayout.updateLayout();
        this.node.height = this.bgLayout.node.height;
        this.node.position = this._posData ? GameTools.getPopUpUIPos(this.node, this._posData, obj40.DpLpg(0x7a65e, 0x7a65e), true) : cc.v2(0, 0);
      }
    };
    moduleRef4.default.prototype.onTrackingkBtnClick = function () {
      if (helper.pro.fastAttack) {
        helper.pro.fastAttack.tracking(this);
      }
      this.close();
    };
    moduleRef4.default.prototype.onFastAttackBtnClick = function () {
      if (helper.pro.fastAttack) {
        helper.pro.fastAttack.attackCity(this, helper.pro.fastAttack.setting.preset);
      }
      this.close();
    };
    moduleRef4.default.prototype.onFastAttackBtnClick3S = function () {
      if (helper.pro.fastAttack) {
        let value40 = helper.pro.fastAttack;
        let str9 = "T";
        if (value40.setting.att3s > obj31.bCrLI(0xd013b, 0xd013a)) {
          str9 = obj31.DFrPS("T", value40.setting.att3s);
        }
        helper.pro.fastAttack.attackCity(this, str9, 3);
      }
      this.close();
    };
    moduleRef4.default.prototype.onFastAttackBtnClick2 = function () {
      if (helper.pro.fastAttack) {
        helper.pro.fastAttack.attackCity(this, helper.pro.fastAttack.setting.preset2);
      }
      this.close();
    };
    moduleRef4.default.prototype.onFastAttackBtnClick3 = function () {
      if (helper.pro.fastAttack) {
        helper.pro.fastAttack.attackCity(this, helper.pro.fastAttack.setting.preset3);
      }
      this.close();
    };
  })();
  (function () {
    var moduleRef5 = __require("NEightCountryCanBuildingPop");
    var value41 = moduleRef5.default.prototype.onShow;
    moduleRef5.default.prototype.onShow = function () {
      value41.apply(this, arguments);
      var tmp39 = helper.pro.sustainAttack && helper.pro.sustainAttack.setting;
      var tmp40 = tmp39 && {
        0x29: tmp39.fortress,
        0x2a: tmp39.ptower
      }[this.tileInfo.type];
      if (tmp40 && helper.pro.sustainAttack.state.running) {
        var result41 = cc.instantiate(this.btnNode.getChildByName("BtnAttack"));
        result41.name = "BtnSustainAttack";
        result41.getComponentInChildren(cc.Label).string = "连续攻击";
        result41.getComponentInChildren("LocalComponent").langKey = null;
        result41.getComponent(cc.Button).clickEvents[0].handler = "onSustainAttack";
        this.btnNode.addChild(result41);
        this.btnLayout.updateLayout();
        this.bgLayout.updateLayout();
        this.node.height = this.bgLayout.node.height;
        this.node.position = this._posData ? GameTools.getPopUpUIPos(this.node, this._posData, 0, true) : cc.v2(0, 0);
        if (this.kingMarkC && this.tileInfo) {
          this.kingMarkC.updatePos(this.tileInfo.tileX, this.tileInfo.tileY, this.close.bind(this));
        }
      }
    };
    moduleRef5.default.prototype.onSustainAttack = function () {
      if (helper.pro.sustainAttack) {
        helper.pro.sustainAttack.sustainAttack(this.tileInfo, this._detailData);
      }
      this.close();
    };
    var moduleRef5 = obj31.jvKLq(__require, "NWorldTowerPopup");
    var value42 = moduleRef5.default.prototype.onShow;
    moduleRef5.default.prototype.onShow = function () {
      value42.apply(this, arguments);
      var tmp41 = tmp41 = helper.pro.sustainAttack && helper.pro.sustainAttack.setting;
      var tmp42 = tmp41 && {
        0x19: tmp41.btower
      }[this._tileInfo.type];
      if (tmp42 && helper.pro.sustainAttack.state.running) {
        var result42 = cc.instantiate(this.enemyNode.getChildByName("btn2"));
        result42.name = "btnSustainAttack";
        result42.getComponentsInChildren(cc.Label)[obj31.zRmwn(0x1aaae, 0x1aaae)].string = "连续攻击";
        result42.getComponentsInChildren(cc.Label)[1].string = "-0";
        result42.getComponentInChildren("LocalComponent").langKey = null;
        result42.getComponent(cc.Button).clickEvents[0].handler = "onSustainAttack";
        this.enemyNode.addChild(result42);
      }
    };
    moduleRef5.default.prototype.onSustainAttack = function () {
      if (helper.pro.sustainAttack) {
        helper.pro.sustainAttack.sustainAttack(this._tileInfo, this._towerInfo);
      }
      this.close();
    };
  })();
  (function () {
    var parts11 = "0|2|12|10|5|3|11|8|7|6|4|1|9".split("|");
    var num21 = 0x0;
    while (true) {
      switch (parts11[num21++]) {
        case "0":
          var obj41 = {
            HvuRh: "off",
            lDXwn: function (arg287, arg288) {
              return arg287 ^ arg288;
            }
          };
          continue;
        case "1":
          result43.default.prototype.toggleThreeAttack = function () {
            helper.ext.toggleThreeAttackOption(1);
          };
          continue;
        case "2":
          if (!EventId.UpdateHelperSwitch) {
            EventId.UpdateHelperSwitch = "UpdateHelperSwitch";
          }
          continue;
        case "3":
          var value43 = result43.default.prototype.cpnEnable;
          continue;
        case "4":
          result43.default.prototype.toggleDistanceHint = function () {
            helper.ext.toggleDistanceHintOption(obj41.lDXwn(0x7c4bb, 0x7c4ba));
          };
          continue;
        case "5":
          result43.default.prototype.onShow = function () {
            value45.apply(this, arguments);
            var result44 = cc.instantiate(this.pushSwitchNode.parent.getChildByName("AllianceAssembleCtrl"));
            result44._name = "TopwarHelperCtrl";
            result44.getComponentsInChildren(cc.Label)[obj31.yoVpE(0xd0968, 0xd0968)].string = "口袋助手";
            result44.getComponentInChildren("LocalComponent").langKey = null;
            var result45 = cc.find("node1/New Layout/setting_8", result44);
            if (result45) {
              result45.parent.removeChild(result45);
            }
            var result45 = result44.getChildByName("node1");
            result45.children[2]._name = "SwitchNode";
            result45.getComponentsInChildren(cc.Label)[0].string = "地图距离提示";
            result45.getComponentInChildren("LocalComponent").langKey = null;
            result45.getComponentInChildren(cc.Button).clickEvents[0].handler = "toggleDistanceHint";
            var result45 = cc.instantiate(result45);
            result45._name = "node2";
            result45.getComponentsInChildren(cc.Label)[obj31.zRmwn(0x34dc1, 0x34dc1)].string = "快攻三连";
            result45.getComponentInChildren("LocalComponent").langKey = null;
            result45.getComponentInChildren(cc.Button).clickEvents[0].handler = "toggleThreeAttack";
            result44.addChild(result45);
            var result45 = cc.instantiate(result45);
            result45._name = "node3";
            result45.getComponentsInChildren(cc.Label)[0].string = "战斗模式";
            result45.getComponentInChildren("LocalComponent").langKey = null;
            result45.getComponentInChildren(cc.Button).clickEvents[obj31.yoVpE(0xc6bf3, 0xc6bf3)].handler = "toggleFightingMode";
            result44.addChild(result45);
            this.pushSwitchNode.parent.addChild(result44);
            this.updateHelperSwitch();
          };
          continue;
        case "6":
          result43.default.prototype.updateHelperSwitch = function () {
            var parts12 = "7|0|4|2|9|5|1|3|6|8".split("|");
            var num22 = 0x0;
            while (true) {
              switch (parts12[num22++]) {
                case "0":
                  var result46 = cc.find("node1/SwitchNode", result47);
                  continue;
                case "1":
                  result46.getChildByName("off").active = !helper.ext.option.threeAttack;
                  continue;
                case "2":
                  result46.getChildByName("off").active = !helper.ext.option.distanceHint;
                  continue;
                case "3":
                  result46 = cc.find("node3/SwitchNode", result47);
                  continue;
                case "4":
                  result46.getChildByName("on").active = helper.ext.option.distanceHint;
                  continue;
                case "5":
                  result46.getChildByName("on").active = helper.ext.option.threeAttack;
                  continue;
                case "6":
                  result46.getChildByName("on").active = helper.ext.option.fightingMode;
                  continue;
                case "7":
                  var result47 = this.pushSwitchNode.parent.getChildByName("TopwarHelperCtrl");
                  continue;
                case "8":
                  result46.getChildByName(obj41.HvuRh).active = !helper.ext.option.fightingMode;
                  continue;
                case "9":
                  result46 = cc.find("node2/SwitchNode", result47);
                  continue;
              }
              break;
            }
          };
          continue;
        case "7":
          result43.default.prototype.cpnDisable = function () {
            value44.apply(this, arguments);
            EVENT.off(EventId.UpdateHelperSwitch, this.updateHelperSwitch, this);
          };
          continue;
        case "8":
          var value44 = result43.default.prototype.cpnDisable;
          continue;
        case "9":
          result43.default.prototype.toggleFightingMode = function () {
            helper.ext.toggleFightingModeOption(1);
          };
          continue;
        case "10":
          var value45 = result43.default.prototype.onShow;
          continue;
        case "11":
          result43.default.prototype.cpnEnable = function () {
            value43.apply(this, arguments);
            EVENT.on(EventId.UpdateHelperSwitch, this.updateHelperSwitch, this);
          };
          continue;
        case "12":
          var result43 = obj31.JyBBJ(__require, "UserSettingPanel");
          continue;
      }
      break;
    }
  })();
  (function () {
    var result49 = obj31.iBSdw(__require, "LocalManager");
    var value46 = result49.default.prototype.getTextWithParas;
    result49.default.prototype.getTextWithParas = result49.default.prototype._getTextWithParas = function (arg289) {
      var flag2 = true;
      switch (arg289) {
        case "alliance_help_006":
        case "alliance_transport_001":
        case "alliance_reinforce_029":
        case "corss_test4":
        case "battle_121505":
        case "ava_tips_085":
        case "alliance_records_051":
        case "alliance_records_053":
        case "mine_cave37":
        case "mine_cave57":
        case "mine_cave59":
        case "mine_cave89":
        case "thor_monster_refresh_limit":
        case "system_131823":
        case "power_017":
          flag2 = LocalStorageUtils.get("option_show_tips_" + arg289);
      }
      return flag2 ? value46.apply(this, arguments) : null;
    };
    var result49 = __require("UIManagerImpl");
    var value47 = result49.default.prototype.ShowHeroSkillTips;
    result49.default.prototype.ShowHeroSkillTips = function (arg290) {
      if (!(arg290 && "player_msg" == arg290.type && obj31.HRBtU(null, arg290.customTips))) {
        value47.apply(this, arguments);
      }
    };
  })();
  (function () {
    var obj42 = {
      kFNou: function (arg291, arg292) {
        return arg291 ^ arg292;
      }
    };
    var moduleRef6 = __require("HerobreakItemPop");
    var value48 = moduleRef6.default.prototype.onShow;
    moduleRef6.default.prototype.onShow = function () {
      value48.apply(this, arguments);
      this.slider.progress = obj31.LclhZ(0xcfd15, 0xcfd14);
      this.progressChange();
    };
    moduleRef6 = obj31.USZaP(__require, "TreasureMapContributePanel");
    var value49 = moduleRef6.default.prototype.onShow;
    moduleRef6.default.prototype.onShow = function () {
      value49.apply(this, arguments);
      this.slider.progress = obj42.kFNou(0x6d762, 0x6d763);
      this.progressChange();
    };
  })();
  (function () {
    var tmp43 = new (__require("FWSMvc").FMessageConnectionAbstract)();
    tmp43.onFMessage_LOGIN_SUCCESS = () => EVENT.emit(EventId.LoginSuccess);
    tmp43.connect();
  })();
  (function () {
    var moduleRef7 = __require("AllianceBossData");
    var value50 = moduleRef7.default.prototype.updateData;
    moduleRef7.default.prototype.updateData = function (arg293) {
      try {
        var tmp44 = this;
        var value51 = tmp44.TodayFree;
        var value52 = tmp44.TodayTime;
        var value53 = tmp44.State;
        value50.apply(this, arguments);
        if (obj31.LRoQX(undefined, tmp44._donate) || value53 && obj31.cmCkE(0x64b27, 0x64b27) == tmp44.State) {
          tmp44._donate = 0;
        }
        if (value51 != tmp44.TodayFree || obj31.nWLNH(value52, tmp44.TodayTime)) {
          NET.send(RequestId.ALLIANCE_GET_MEMBER_RANK_LIST, {
            allianceId: UserData.Alliance.Aid,
            start: 0x0,
            end: 0x1e,
            type: 0xa
          }, tmp44, function (arg294) {
            var result50 = JSON.parse(arg294.d);
            if (result50 && result50.myRank) {
              tmp44._donate = Math.floor(result50.myRank.power);
            }
          });
        }
      } catch (error9) {
        console.log(error9);
      }
    };
  })();
  (function () {
    function fn16(arg295, arg296) {
      var value54 = arg295.prototype.Handler;
      arg295.prototype.Handler = function (arg297) {
        try {
          value54.apply(this, arguments);
          arg296(arg297);
        } catch (error10) {
          console.error(error10);
        }
      };
    }
    var moduleRef8 = __require("PushResponse");
    fn16(moduleRef8.PushWorldMapTileInfo, function (arg298) {
      for (var tmp45 of JSON.parse(arg298.data).pointInfos) {
        EVENT.emit(EventId.UpdateTileInfo, tmp45);
      }
    });
    obj31.EHcjq(fn16, moduleRef8.PushMarchInfo, function (arg299) {
      EVENT.emit(EventId.UpdateMarchInfo, JSON.parse(arg299.data));
    });
    obj31.IMVvH(fn16, moduleRef8.CROSS_TREASURE_TEAM_READY_CHANGE, function (arg300) {
      EVENT.emit(EventId.CS_TEAM_READY_CHANGE, arg300.data.crossTreasureTeamReadyChange);
    });
  })();
  (function () {
    var result51 = obj31.iBSdw(__require, "NWorldMapComponent");
    var value55 = result51.default.prototype.endWork;
    result51.default.prototype.endWork = function () {
      try {
        value55.apply(this, arguments);
        helper.tools.activeWorldMap();
      } catch (error11) {
        console.log(error11);
      }
    };
    var value56 = result51.default.prototype.startWork;
    result51.default.prototype.startWork = function () {
      MapData.entities.clear();
      value56.apply(this, arguments);
      helper.tools.requestMyMarchData();
    };
  })();
  (function () {
    var result52 = obj31.NNXMp(__require, "HomeMap");
    var value57 = result52.default.prototype.onSceneEnded;
    result52.default.prototype.onSceneEnded = function () {
      var result53 = this.camera.node.getPosition();
      HomeSnap = Object.assign(new result52.default(), this);
      HomeSnap.BuildingItems = this.BuildingItems.concat();
      HomeSnap.ObstacleItems = this.ObstacleItems.concat();
      HomeSnap.buildingItemsMap = new Map(this.buildingItemsMap.entries());
      HomeSnap.camera = {
        zoomRatio: this.camera.zoomRatio,
        node: {
          getPosition: () => result53
        }
      };
      value57.apply(this, arguments);
    };
    HomeSnap = null;
  })();
  (function () {
    var moduleRef9 = __require("RealRTSGameDataController");
    var value58 = moduleRef9.RealRTSGameDataController.prototype.initGameData;
    moduleRef9.RealRTSGameDataController.prototype.initGameData = function () {
      value58.call(this);
    };
  })();
  (function () {
    var result54 = obj31.kUixx(__require, "AllianceRecordController");
    var value59 = result54.default.prototype.dealOneObj;
    result54.default.prototype.dealOneObj = function (arg301) {
      value59.apply(this, arguments);
      var result55 = TABLE.getTableDataById(TableName.alliance_information, String(arg301.specId));
      var tmp46 = result55 && this._data[result55.type].find(arg302 => arg302.id == arg301.id);
      if (tmp46) {
        tmp46.worldId = arg301.worldId;
      }
    };
  })();
  (function () {
    var value60 = __require("NWorldMapUtils").NWorldMapUtils;
    value60.getMapSize = function (arg303) {
      var value61 = obj31.iBSdw(__require, "NWorldMapCommon").allMapInfos;
      var value62 = obj31.JyBBJ(__require, "NWorldMapCoreBiz").default.mapType;
      if (undefined === arg303) {
        arg303 = -1;
      }
      if (value61[value62].subMap) {
        if (arg303 < 0) {
          arg303 = UserData.subServerID;
        }
        var result56 = value61[value62].subMap.get(arg303);
        if (result56) {
          return cc.size(result56.width, result56.height);
        }
      }
      return cc.size(value61[value62].cols, value61[value62].rows);
    };
    var value60 = __require("CSHuntController").CSActivityPhaseType;
    value60.PLAYING = 1;
  })();
  (function () {
    EVENT.on(EventId.LoginSuccess, () => {
      if (!MapCoreBiz.inWorldMap) {
        obj31.EHcjq(setTimeout, helper.tools.activeWorldMap, 0);
      }
    }, null);
    EVENT.on(EventId.LoginSuccess, () => {
      auth.createAI();
      helper.ext.init();
      helper.pro.init();
    }, null);
    EVENT.on(EventId.LoginSuccess, () => {
      TABLE.getTableDataById(TableName.DATACONFIG, 18001).value = "0|0|0";
      TABLE.getTableDataById(TableName.DATACONFIG, 0x21b15).value = "0";
      TABLE.getTableDataById(TableName.DATACONFIG, 0x1e8559).value = "0,0";
      TABLE.getTableDataById(TableName.DATACONFIG, 0x1e855a).value = "0,0";
    });
  })();
  (function () {
    var moduleRef10 = __require("BattleEmPanel");
    moduleRef10.default.prototype.InitSingleArmys = function () {
      for (var num23 = 0; num23 < NBattleModel.myMaxArmysNum; num23++) {
        var tmp47 = __require("NBattleDisplayObjectFacade").getModelPrefabPlaceHolder(NBattleCommon.NBattleForces.Attacker, num23)?.["tagData"];
        if (tmp47 && tmp47.unit) {
          tmp47 = NBattleModel.removeMechaAssembleData(tmp47);
          for (var tmp48 of tmp47.unit) {
            var tmp49 = new BattleData.BattleArmyData(tmp48.armyId, tmp48.id, 0, 0, 0, tmp47.battleMechaData);
            NBattleMsgs.send(NBattleMsgs.Names.NBattle_EmAddArmyItem, tmp49);
          }
          NBattleModel.removeAttackArmy(tmp47.pos, NBattleModel.getMaxCoutByPos(tmp47.pos));
        }
      }
      if (NBattleModel.attackerHeros.length > 0) {
        NBattleModel.attackerHeros.splice(0, NBattleModel.attackerHeros.length);
      }
      MvcMsgs.send(MvcMsgs.Names.MVC_HERO_MARCH_SELECT, {});
      if (CurBattleData.otherData) {
        CurBattleData.otherData.formationData = null;
        NBattleModel.updateEmStageFormations();
        NBattleMsgs.send(NBattleMsgs.Names.NBattle_updateFormationShow, {});
        EVENT.emit(EventId.QUEUE_BATTLE_POWE_UPDATE);
      }
      this._PresetMarchNum = -1;
      this.UpdatePresetBtns();
      var result57 = this.armyParent.getComponentsInChildren("BattleArmyItem");
      var value63 = result57[obj31.dZvcq(result57.length, 1)];
      if (!(value63.isMecha && value63.isCooling)) {
        if (value63.datas.length > obj31.IGXwU(0x599e8, 0x599e8)) {
          if (value63.isMecha) {
            NBattleModel.setAtttackmechaId(value63.battleMechaData.mechaId, true);
          }
          if (obj31.LqYkL(NBattleModel.createAttackArmyByCount(value63.datas.slice(0, 1), -obj31.zRmwn(0x2fa50, 0x2fa51), -1, obj31.FwDQX(0x42037, 0x42037), 0, obj31.cmCkE(0x566ca, 0x566ca)), 0)) {
            value63.datas.splice(obj31.mitwP(0x605fc, 0x605fc), 1);
          }
        }
        if (value63.datas.length == 0) {
          __require("NBattleDisplayObjectFacade").allArmys.delete(value63.armyID);
          value63.node.destroy();
        }
        EVENT.emit(EventId.HideBattleHandTips);
        EVENT.emit(EventId.QUEUE_BATTLE_POWE_UPDATE);
      }
    };
  })();
}
(function () {
  var obj43 = {
    IDtot: function (arg304, arg305) {
      return arg304 == arg305;
    },
    tIgNq: function (arg306, arg307) {
      return arg306 + arg307;
    },
    OVukv: function (arg308, arg309) {
      return arg308 ^ arg309;
    },
    FHoRg: function (arg310, arg311) {
      return arg310 / arg311;
    },
    BSkaA: function (arg312, arg313) {
      return arg312 - arg313;
    },
    VFTfB: function (arg314, arg315) {
      return arg314 ^ arg315;
    },
    KCPSn: function (arg316) {
      return arg316();
    },
    ClSvF: "0|1|3|2|6|4|5|7",
    bZLJk: "excheck",
    LQTix: "POST",
    NUKTI: "no-store",
    eQkay: function (arg317) {
      return arg317();
    },
    GlybT: function (arg318, arg319) {
      return arg318 >= arg319;
    }
  };
  var tmp50 = null;
  function fn17() {
    function fn18() {
      for (var num24 = 2; num24 < helper.pro.capacity.length; num24++) {
        var value64 = helper.pro.capacity[num24].name;
        try {
          if (helper.pro[value64] && helper.pro[value64].free) {
            helper.pro[value64].free();
          }
        } catch (error12) { }
        delete helper.pro[value64];
      }
      helper.pro.misc = {};
      helper.pro.about.open();
    }
    tmp50 = fn18;
    try {
      var obj44 = {
        ciphertext: CryptoJS.enc.Base64.parse(auth.s_token)
      };
      var result58 = CryptoJS.enc.Hex.parse("2f388774d6cb12192043d8cc935d63f2bb1ef49b9f64d6d582a96f662ca280f0");
      var result59 = CryptoJS.enc.Hex.parse("e7ccf6f94329bfba768c3653871dc9cc");
      var result60 = CryptoJS.AES.decrypt(obj44, result58, {
        iv: result59,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
      var parts13 = result60.split(",");
      var tmp51 = parts13 && parts13[0] == UserData.UID && obj43.IDtot(parts13[0], auth.uid) && parts13[1] == auth.type && parts13[2] == auth.expire;
      if (tmp51) {
        var tmp52 = new Date(obj43.tIgNq(parts13[obj43.OVukv(0x8abf6, 0x8abf4)], "T24:00:00.000+08:00")).getTime() / 1000;
        var result61 = Math.floor(obj43.FHoRg(obj43.BSkaA(tmp52, ServerTime), 0x15180));
        if (result61 < obj43.VFTfB(0x31ea8, 0x31ea8)) {
          fn18();
        }
      } else {
        fn18();
      }
    } catch (error13) {
      obj43.KCPSn(fn18);
    }
  }
  setInterval(() => {
    try {
      if (NET.onLogon && UserData.UID && obj43.GlybT(UserData.Level, 5)) {
        fn17();
      }
    } catch (error14) { }
  }, 0xdbba0);
})();
var auth = {
  getExpireTimestamp() {
    var obj45 = {
      MAkdN: "T24:00:00.000+08:00",
      INQxP: function (arg320, arg321) {
        return arg320 ^ arg321;
      }
    };
    return new Date(this.expire + "T24:00:00.000+08:00").getTime() / obj45.INQxP(0xb191f, 0xb1af7);
  },
  get days() {
    return Math.floor((this.getExpireTimestamp() - ServerTime) / 0x15180);
  },
  check(arg322) {
    var obj46 = {
      LVjYB: function (arg323, arg324) {
        return arg323 ^ arg324;
      }
    };
    return UserData.UID == this.uid && (!arg322 || arg322.includes(this.type)) && this.days >= obj46.LVjYB(0xe2d03, 0xe2d03);
  },
  createtk(arg325) {
    var obj47 = {
      INVuK: "webgameqq",
      Iadme: function (arg326, arg327) {
        return arg326 + arg327;
      },
      bAUOK: "qqgame",
      yJKQR: function (arg328, arg329) {
        return arg328 + arg329;
      },
      NgVYK: function (arg330, arg331) {
        return arg330 + arg331;
      }
    };
    var result62 = base64Decode(arg325);
    var parts14 = result62.split(",");
    var tmp53 = null;
    if (parts14[1] == "webgameqq") {
      var tmp53 = LocalStorageUtils.get("app_webgameqqCode");
      if (tmp53) {
        arg325 = base64Encode(obj47.Iadme(result62, ";") + tmp53);
      }
    }
    if (parts14[1] == "qqgame") {
      var tmp53 = JSON.stringify(window.qqctx);
      if (tmp53) {
        arg325 = base64Encode(obj47.yJKQR(result62, ";") + tmp53);
      }
    }
    if (parts14[1] == "kdqb") {
      arg325 = base64Encode(obj47.NgVYK(result62 + ";", GlobalData.GLOBAL.token));
    }
    return arg325;
  },
  createAI() {
    var obj48 = {
      pFKkD: function (arg332, arg333) {
        return arg332 + arg333;
      },
      VLQXp: "e7ccf6f94329bfba768c3653871dc9cc"
    };
    var result63 = this.createtk(__require("LoginFlowOptions").LoginFlowArgs.serverInfoToken);
    var result64 = CryptoJS.enc.Utf8.parse(obj48.pFKkD(obj48.pFKkD(obj48.pFKkD(obj48.pFKkD(UserData.UID, ",") + UserData.ServerId + ",", UserData.OriginServerId) + "," + UserData.Name, ",") + UserData.Level + "," + UserData.Power + "," + result63 + "," + ServerTime + ",", UserData.VipLevel));
    var result65 = CryptoJS.enc.Hex.parse("2f388774d6cb12192043d8cc935d63f2bb1ef49b9f64d6d582a96f662ca280f0");
    var result66 = CryptoJS.enc.Hex.parse("e7ccf6f94329bfba768c3653871dc9cc");
    var result67 = CryptoJS.AES.encrypt(result64, result65, {
      iv: result66,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    this.c_token = CryptoJS.enc.Base64.stringify(result67.ciphertext);
  }
};
function isVisible(arg334) {
  var obj49 = {
    pohhQ: function (arg335, arg336) {
      return arg335 ^ arg336;
    },
    eGzvv: function (arg337, arg338) {
      return arg337(arg338);
    },
    VGYxz: "PopLayer",
    bZeKZ: function (arg339, arg340) {
      return arg339 == arg340;
    },
    zVjqN: "UICanvas"
  };
  var fn19 = function (arg341) {
    arg341 = arg341 ? arg341.children : [];
    for (var tmp56 = arg341.length - obj49.pohhQ(0xec157, 0xec156); tmp56 >= 0; tmp56--) {
      if (arg341[tmp56].active && arg341[tmp56].opacity) {
        return arg341[tmp56];
      }
    }
  };
  var tmp54 = fn19(cc.find("New Node/New Node")) || fn19(obj49.eGzvv(find, "TipsLayer")) || fn19(find("PopLayer"));
  for (var tmp55 = arg334; tmp55; tmp55 = tmp55.parent) {
    if (!(tmp55 && tmp55.active && tmp55.opacity)) {
      return false;
    }
    if (tmp54 ? tmp55 == tmp54 : "Canvas" == tmp55.name || obj49.bZeKZ("UICanvas", tmp55.name)) {
      return true;
    }
  }
  return false;
}
window.helper = {
  remove(arg342) {
    var result68 = find("PopLayer").children.concat(find("TipsLayer").children);
    var result69 = function (arg343) {
      if (arg343) {
        for (var tmp57 of arg343._components) {
          if (tmp57.dataInfo) {
            return tmp57.dataInfo;
          }
        }
      }
    }(result68[result68.length - 1]);
    return result69 && result69._name == arg342 && __require("UIManager").default.Instance().LastCloseUI(result69);
  },
  click(arg344) {
    var obj50 = {
      rZWxR: "4|0|2|1|3",
      SwVVH: "touchstart",
      jvZEq: function (arg345, arg346) {
        return arg345(arg346);
      },
      yNuuG: "string",
      YxfYz: function (arg347, arg348) {
        return arg347(arg348);
      }
    };
    var parts15 = "4|0|2|1|3".split("|");
    var num25 = 0x0;
    while (true) {
      switch (parts15[num25++]) {
        case "0":
          var result70 = arg344.getComponent(cc.Button);
          continue;
        case "1":
          var fn20 = function (arg349) {
            var tmp59 = new cc.Touch(tmp58);
            tmp59._prevPoint = tmp58;
            arg349 = new cc.Event(arg349);
            arg349.touch = tmp59;
            return arg349;
          };
          continue;
        case "2":
          var tmp58 = new cc.Touch(arg344.convertToWorldSpaceAR(cc.Vec2.ZERO));
          continue;
        case "3":
          return result70 && result70.interactable ? (arg344.dispatchEvent(fn20("touchstart")), arg344.dispatchEvent(fn20("touchend")), true) : false;
        case "4":
          if (!obj50.jvZEq(isVisible, "string" == typeof arg344 ? arg344 = obj50.YxfYz(find, arg344) : arg344)) {
            return false;
          }
          continue;
      }
      break;
    }
  },
  cleanup() {
    var obj51 = {
      YYcmQ: "ExpDetailTips",
      koLrT: "WorldBossDetailPanel",
      DRcXN: "NWorldEmpireStorehousePopup",
      ufNLI: "NWorldMapEnemy",
      vSaiY: "NWorldTowerPopup",
      XuMdx: "NWorldUIRefugeeCamp",
      icAul: "RadarEnemyPanel",
      dwxjP: function (arg350, arg351) {
        return arg350(arg351);
      }
    };
    this.remove("ExpDetailTips");
    this.remove("NWorldAllianceMinePopup");
    this.remove("WorldBossDetailPanel");
    this.remove("NWorldCityPopup");
    this.remove("NWorldEmpireStorehousePopup");
    this.remove("NWorldMapEnemy");
    this.remove("NWorldMapNEnemy");
    this.remove("NWorldMapAssemblyEnemyComponent");
    this.remove("NWorldResourcePopup");
    this.remove("NWorldTowerPopup");
    this.remove("NWorldUIRefugeeCamp");
    this.remove("prefabWorldUIRadarEnemy");
    this.remove("RadarEnemyPanel");
    this.remove("WorldFunctionTile");
    this.remove("WorldSitePanel");
    this.remove("WorldThronePopupNew");
    this.remove("WorldThronePopup");
    this.remove("SimpleDescTips");
    this.remove("NWorldUIMilitaryQuest");
    this.remove("ActivityworldPowerPopPR");
    this.remove("ActivityworldbattlePopPR");
    this.remove("WorldGourmandPopup");
    return isVisible(obj51.dwxjP(find, "MainUIWrapper/NMainUI[0,1]/RightBottom/btnHero"));
  },
  closeUI(arg352) {
    var value65 = __require("UIDataInfo").UIDataInfo[arg352];
    var result71 = __require("UIManager").default.Instance();
    return value65 && result71 && result71.CloseUI(value65);
  },
  openUI(arg353, arg354) {
    var obj52 = {
      eeNVU: function (arg355, arg356) {
        return arg355(arg356);
      }
    };
    var value66 = obj52.eeNVU(__require, "UIDataInfo").UIDataInfo[arg353];
    var result72 = __require("UIManager").default.Instance();
    return value66 && result72 && result72.OpenUI(value66, arg354);
  },
  get authcode() {
    var obj53 = {
      KZnxD: "DataCenter",
      ZrazT: function (arg357, arg358) {
        return arg357(arg358);
      },
      pXpqX: function (arg359, arg360) {
        return arg359 + arg360;
      },
      fCNYa: function (arg361, arg362) {
        return arg361 + arg362;
      },
      AwzaS: function (arg363, arg364) {
        return arg363 + arg364;
      },
      hZBSq: function (arg365, arg366) {
        return arg365 + arg366;
      }
    };
    var value67 = __require("DataCenter").DATA.UserData;
    var value68 = obj53.ZrazT(__require, "LoginFlowOptions").LoginFlowArgs.serverInfoToken;
    var result73 = CryptoJS.enc.Utf8.parse(obj53.pXpqX(obj53.fCNYa(obj53.fCNYa(obj53.fCNYa(obj53.pXpqX(obj53.AwzaS(value67.UID + "|" + value67.ServerId + "|", value67.OriginServerId), "|") + value67.Name + "|" + value67.Level + "|", value67.Power), "|") + value68, "|"), ServerTime));
    var result74 = CryptoJS.enc.Hex.parse(obj53.hZBSq(CryptoJS.MD5("warh5.rivergame.net"), CryptoJS.MD5("topwar")));
    var result75 = CryptoJS.MD5("helper");
    var result76 = CryptoJS.AES.encrypt(result73, result74, {
      iv: result75,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(result76.ciphertext);
  }
};
helper.menu = {
  create() {
    var obj54 = {
      iItSA: function (arg367, arg368) {
        return arg367 == arg368;
      },
      pATMC: "chrome",
      LpspO: function (arg369, arg370) {
        return arg369 ^ arg370;
      }
    };
    function fn21() {
      var result80 = navigator.userAgent.toLowerCase();
      return result80.indexOf("safari") > -1 && obj54.iItSA(result80.indexOf("chrome"), -1);
    }
    if (!this.style) {
      this.style = "ul{position:fixed; z-index:10000; border:1px solid #2563eb; list-style:none; margin:4px 0px; padding:4px 0px; background-color:#1e40af; border-radius:6px; width:150px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);}li{margin:0px 2px; padding:2px 12px; user-select:none; color:#c7d2fe; font-size:13px; transition: all 0.2s;} li:hover{cursor:pointer; background-color:#dbeafe; color:#1e3a8a;}";
      var result77 = document.createElement("style");
      result77.innerText = this.style;
      document.head.appendChild(result77);
    }
    var result78 = obj54.LpspO(0xa6533, 0xa6533);
    var result79 = document.createElement("ul");
    helper.pro.capacity.forEach(arg371 => {
      if (!arg371.hidden && helper.pro[arg371.name]?.["active"] && helper.pro[arg371.name]?.["open"]) {
        var result81 = document.createElement("li");
        result78 += 1;
        if (fn21()) {
          result81.style.fontSize = "14px";
          result81.style.padding = "2px 12px";
        }
        result81.textContent = result78 + ". " + arg371.text;
        result81.onclick = () => (helper.pro.open(arg371.id), this.close());
        result79.appendChild(result81);
      }
    });
    result79.id = "popup-menu";
    result79.hidden = result79.children.length == 0;
    document.body.appendChild(result79);
    return document.getElementById("popup-menu");
  },
  _popup(arg372, arg373) {
    var obj55 = {
      aeHGo: function (arg374, arg375) {
        return arg374 - arg375;
      },
      gLQtE: function (arg376, arg377) {
        return arg376 ^ arg377;
      },
      dxAbe: function (arg378, arg379) {
        return arg378 - arg379;
      },
      CcrAb: function (arg380, arg381) {
        return arg380 ^ arg381;
      },
      DGbLA: function (arg382, arg383) {
        return arg382 ^ arg383;
      }
    };
    if (!this.instance) {
      this.instance = this.create();
    }
    this.instance.style.height = Math.min(obj55.aeHGo(this.instance.offsetHeight, obj55.gLQtE(0xf3804, 0xf380d)), obj55.aeHGo(document.body.offsetHeight, 9)) + "px";
    this.instance.style.top = Math.min(arg373, obj55.aeHGo(obj55.dxAbe(document.body.offsetHeight, this.instance.offsetHeight), obj55.CcrAb(0xafd77, 0xafd73))) + "px";
    this.instance.style.left = Math.min(arg372, obj55.dxAbe(obj55.aeHGo(document.body.offsetWidth, this.instance.offsetWidth), obj55.DGbLA(0xc129a, 0xc129e))) + "px";
  },
  _pos(arg384) {
    var tmp60 = arg384.clientX || arg384.touches && arg384.touches[0] && arg384.touches[0].clientX;
    var tmp61 = arg384.clientY || arg384.touches && arg384.touches[0] && arg384.touches[0].clientY;
    if (arg384.iframe) {
      tmp60 += parseInt(helper.dialog.iframe.getBoundingClientRect().x);
      tmp61 += parseInt(helper.dialog.iframe.getBoundingClientRect().y);
    }
    return {
      x: tmp60,
      y: tmp61
    };
  },
  open(arg385) {
    var result82 = this._pos(arg385);
    this.close();
    this._popup(result82.x, result82.y);
  },
  close() {
    if (this.instance) {
      document.body.removeChild(this.instance);
      this.instance = null;
      this.sel = null;
    }
  },
  touchmove(arg386) {
    var obj56 = {
      JsbSN: function (arg387, arg388) {
        return arg387 <= arg388;
      },
      PpyAT: function (arg389, arg390) {
        return arg389 + arg390;
      },
      PYkZA: function (arg391, arg392) {
        return arg391 + arg392;
      },
      BBXfn: "#dbeafe",
      KbtuB: "#1e3a8a"
    };
    this.sel = null;
    var result83 = this._pos(arg386);
    for (var tmp62 of this.instance.children) {
      var result84 = tmp62.getBoundingClientRect();
      if (obj56.JsbSN(result84.x, result83.x) && result83.x < obj56.PpyAT(result84.x, result84.width) && result84.y <= result83.y && result83.y < obj56.PYkZA(result84.y, result84.height)) {
        tmp62.style.backgroundColor = "#dbeafe";
        tmp62.style.color = "#1e3a8a";
        this.sel = tmp62;
      } else {
        tmp62.style.backgroundColor = "";
        tmp62.style.color = "";
      }
    }
  },
  hittest(arg393) {
    var obj57 = {
      BzEcl: function (arg394, arg395) {
        return arg394 < arg395;
      },
      GwBhH: function (arg396, arg397) {
        return arg396 + arg397;
      }
    };
    if (this.instance) {
      var result85 = this._pos(arg393);
      var result86 = this.instance.getBoundingClientRect();
      return result86.x <= result85.x && obj57.BzEcl(result85.x, obj57.GwBhH(result86.x, result86.width)) && result86.y <= result85.y && result85.y < result86.y + result86.height;
    }
  },
  get active() {
    return document.getElementById("popup-menu");
  },
  dispatch(arg398) {
    if (!(this.active && this.hittest(arg398))) {
      this.open(arg398);
    }
    arg398.preventDefault();
  }
};
helper.dialog = {
  init(arg399, arg400) {
    var obj58 = {
      UGifE: function (arg401, arg402) {
        return arg401 / arg402;
      },
      SPHFG: function (arg403, arg404) {
        return arg403 ^ arg404;
      },
      UMrEA: "span",
      npoQg: function (arg405, arg406) {
        return arg405 + arg406;
      },
      MKzUx: function (arg407, arg408) {
        return arg407 + arg408;
      },
      pSkZo: "position:absolute; display:block; z-index:10000; left:50%; top:50%; transform:scale(",
      uENsm: ") translate(",
      lgzyF: "border:0px; border-radius:8px; overflow:hidden; allow-transparency: true; background-color: #fff",
      gXYSk: "position:absolute; color: #999; font-size: 22px; cursor: pointer; top:2%; right:3%; user-select:none",
      ieiOg: "&times;"
    };
    var result87 = Math.min(1, window.innerWidth / arg399, obj58.UGifE(window.innerHeight, arg400 || 1));
    var tmp63 = -obj58.SPHFG(0x481b5, 0x48187) / result87;
    var result88 = document.createElement("div");
    var result89 = document.createElement("div");
    var result90 = document.createElement("iframe");
    var result91 = document.createElement("span");
    var result92 = document.createElement("div");
    result88.id = "helper-dialog-container";
    result88.style = "position:fixed; top:0; left:0; z-index:9999; width:100%; height:100%";
    result89.style = obj58.npoQg(obj58.MKzUx("position:absolute; display:block; z-index:10000; left:50%; top:50%; transform:scale(", result87) + ") translate(" + tmp63 + "%, ", tmp63) + "%)";
    result90.style = "border:0px; border-radius:8px; overflow:hidden; allow-transparency: true; background-color: #fff";
    result91.style = "position:absolute; color: #999; font-size: 22px; cursor: pointer; top:2%; right:3%; user-select:none";
    result92.style = "position:absolute; top:0; left:0; background-color: rgba(0, 0, 0, 0.5); width:100%; height:100%";
    result90.width = arg399;
    result90.height = arg400 || 0;
    result91.innerHTML = "&times;";
    result91.onclick = result92.onclick = () => {
      helper.dialog.close();
    };
    result89.appendChild(result90);
    result89.appendChild(result91);
    result88.appendChild(result89);
    result88.appendChild(result92);
    this.container = document.body.appendChild(result88);
    this.iframe = this.container.getElementsByTagName("iframe")[0];
  },
  _open(arg409) {
    if (this.container) {
      document.body.removeChild(this.container);
    }
    this.init(arg409.width, arg409.height);
    this.iframe.name = arg409.name;
    this.iframe.srcdoc = arg409.html;
    this.iframe.onload = () => {
      this.iframe.contentDocument.addEventListener("gesturestart", arg410 => arg410.preventDefault());
      this.iframe.contentDocument.addEventListener("touchstart", arg411 => preventPinch(arg411), {
        passive: false
      });
      this.iframe.contentDocument.addEventListener("touchend", arg412 => preventDoubleTap(arg412));
      this.iframe.contentWindow.onkeydown = arg413 => (arg413.iframe = true, helper.dispatch(arg413));
      this.iframe.contentWindow.onmousedown = arg414 => (arg414.iframe = true, helper.dispatch(arg414));
      this.iframe.contentWindow.oncontextmenu = arg415 => (arg415.iframe = true, helper.dispatch(arg415));
      this.iframe.contentWindow.ontouchstart = arg416 => (arg416.iframe = true, helper.dispatch(arg416));
      this.iframe.contentWindow.ontouchmove = arg417 => (arg417.iframe = true, helper.dispatch(arg417));
      this.iframe.contentWindow.ontouchend = arg418 => (arg418.iframe = true, helper.dispatch(arg418));
      if (arg409.onopen) {
        arg409.onopen();
      }
      this.watermark();
      this.resize();
    };
    this.onclose = arg409.onclose;
  },
  watermark() {
    var result93 = this.iframe.contentDocument.createElement("div");
    result93.innerHTML = "FelixZone";
    result93.style.position = "fixed";
    result93.style.bottom = "0px";
    result93.style.right = "16px";
    result93.style.color = "#bbbbbb";
    result93.style.fontSize = "11px";
    result93.style.opacity = "0.3";
    result93.style.userSelect = "none";
    this.iframe.contentDocument.body.appendChild(result93);
  },
  resize() {
    var obj59 = {
      dZqNY: function (arg419, arg420) {
        return arg419 ^ arg420;
      },
      DRgFa: function (arg421, arg422) {
        return arg421 ^ arg422;
      },
      SPIAN: function (arg423, arg424) {
        return arg423 + arg424;
      },
      IJycA: function (arg425, arg426) {
        return arg425 + arg426;
      },
      YRdkc: "scale(",
      sYFIs: ") translate("
    };
    if (this.iframe) {
      var value69 = this.iframe.contentWindow.document;
      this.iframe.height = Math.max(value69.body.scrollHeight, value69.documentElement.scrollHeight);
      var value70 = this.container.children[0];
      var result94 = Math.min(obj59.dZqNY(0x61741, 0x61740), window.innerWidth / this.iframe.width, window.innerHeight / this.iframe.height);
      var tmp64 = -obj59.DRgFa(0x6d2fc, 0x6d2ce) / result94;
      value70.style.transform = obj59.SPIAN(obj59.IJycA("scale(" + result94, ") translate(") + tmp64, "%, ") + tmp64 + "%)";
    }
  },
  open(arg427) {
    var obj60 = {
      quEza: function (arg428, arg429) {
        return arg428 != arg429;
      },
      BPTWj: function (arg430, arg431) {
        return arg430 == arg431;
      }
    };
    if (this.iframe && obj60.quEza(this.iframe.name, arg427.name) && this.onclose) {
      this.onclose();
    }
    if (!(this.iframe && obj60.BPTWj(this.iframe.name, arg427.name))) {
      this._open(arg427);
    }
  },
  close() {
    if (this.onclose) {
      this.onclose();
    }
    if (!this.container) {
      this.container = document.getElementById("helper-dialog-container");
    }
    if (this.container) {
      document.body.removeChild(this.container);
      this.container = null;
      this.iframe = null;
    }
  },
  get active() {
    return document.getElementById("helper-dialog-container");
  }
};
helper.keyHandler = {
  key: {
    KeyA: "a",
    KeyB: "b",
    KeyC: "c",
    KeyD: "d",
    KeyE: "e",
    KeyF: "f",
    KeyG: "g",
    KeyH: "h",
    KeyI: "i",
    KeyJ: "j",
    KeyK: "k",
    KeyL: "l",
    KeyM: "m",
    KeyN: "n",
    KeyO: "o",
    KeyP: "p",
    KeyQ: "q",
    KeyR: "r",
    KeyS: "s",
    KeyT: "t",
    KeyU: "u",
    KeyV: "v",
    KeyW: "w",
    KeyX: "x",
    KeyY: "y",
    KeyZ: "z",
    Digit0: "0",
    Digit1: "1",
    Digit2: "2",
    Digit3: "3",
    Digit4: "4",
    Digit5: "5",
    Digit6: "6",
    Digit7: "7",
    Digit8: "8",
    Digit9: "9",
    Numpad0: "0",
    Numpad1: "1",
    Numpad2: "2",
    Numpad3: "3",
    Numpad4: "4",
    Numpad5: "5",
    Numpad6: "6",
    Numpad7: "7",
    Numpad8: "8",
    Numpad9: "9",
    F1: "f1",
    F2: "f2",
    F3: "f3",
    F4: "f4",
    F5: "f5",
    F6: "f6",
    F7: "f7",
    F8: "f8",
    F9: "f9",
    F10: "f10",
    F11: "f11",
    F12: "f12",
    Escape: "escape",
    Space: "space",
    Insert: "insert",
    Delete: "delete",
    Enter: "enter",
    Tab: "tab",
    Backspace: "delete",
    CapsLock: "capslock",
    Backquote: "backquote",
    Equal: "insert",
    NumpadAdd: "insert",
    NumpadEnter: "enter",
    ShiftLeft: "shift",
    ShiftRight: "shift"
  },
  escape(arg432) {
    helper.std.close();
  },
  space(arg433) {
    helper.std.default("space");
    helper.ext.default("space");
  },
  enter(arg434) {
    helper.std.default("enter");
  },
  insert(arg435) {
    helper.std.joinAssembly();
  },
  delete(arg436) {
    helper.ext.deleteItem();
  },
  tab(arg437) {
    helper.ext.jumpToHome();
  },
  _a(arg438) {
    helper.std.openAlliance();
  },
  _b(arg439) {
    helper.std.openBag();
  },
  _d(arg440) {
    helper.std.openDaily();
  },
  _h(arg441) {
    helper.std.openHero();
  },
  _i(arg442) {
    helper.std.openUserInfo();
  },
  _m(arg443) {
    helper.std.openMail();
  },
  _r(arg444) {
    helper.std.openRadar();
  },
  _s(arg445) {
    helper.std.openSearch();
  },
  _t(arg446) {
    helper.std.openTask();
  },
  _0(arg447) {
    var obj61 = {
      vyhMd: function (arg448, arg449) {
        return arg448 ^ arg449;
      }
    };
    if (!helper.std.presetList(0)) {
      helper.ext.fastMarching(obj61.vyhMd(0x7b1ed, 0x7b1ed));
    }
  },
  _1(arg450) {
    var obj62 = {
      KTYvC: function (arg451, arg452) {
        return arg451 ^ arg452;
      }
    };
    if (!helper.std.presetList(1)) {
      helper.ext.fastMarching(obj62.KTYvC(0xbcf5b, 0xbcf5a));
    }
  },
  _2(arg453) {
    var obj63 = {
      xVoNQ: function (arg454, arg455) {
        return arg454 ^ arg455;
      }
    };
    if (!helper.std.presetList(2)) {
      helper.ext.fastMarching(obj63.xVoNQ(0xc8e17, 0xc8e15));
    }
  },
  _3(arg456) {
    var obj64 = {
      LyVnR: function (arg457, arg458) {
        return arg457 ^ arg458;
      }
    };
    if (!helper.std.presetList(obj64.LyVnR(0x87754, 0x87757))) {
      helper.ext.fastMarching(obj64.LyVnR(0xebd63, 0xebd60));
    }
  },
  _4(arg459) {
    if (!helper.std.presetList(4)) {
      helper.ext.fastMarching(4);
    }
  },
  _5(arg460) {
    var obj65 = {
      cmGUN: function (arg461, arg462) {
        return arg461 ^ arg462;
      }
    };
    if (!helper.std.presetList(obj65.cmGUN(0xca3f8, 0xca3fd))) {
      helper.ext.fastMarching(5);
    }
  },
  _6(arg463) {
    if (!helper.std.presetList(6)) {
      helper.ext.fastMarching(6);
    }
  },
  _7(arg464) {
    if (!helper.std.presetList(7)) {
      helper.ext.fastMarching(7);
    }
  },
  _8(arg465) {
    if (!helper.std.presetList(8)) {
      helper.ext.fastMarching(8);
    }
  },
  _9(arg466) {
    if (!helper.std.presetList(9)) {
      helper.ext.fastMarching(9);
    }
  },
  backquote(arg467) {
    if (!helper.std.presetList(-1)) {
      helper.ext.fastMarching(-1);
    }
  },
  f1(arg468) {
    helper.ext.openHelpDocument();
  },
  f2(arg469) {
    helper.ext.randomMoveCity();
  },
  f3(arg470) {
    helper.ext.toggleDistanceHintOption();
  },
  f4(arg471) {
    helper.ext.toggleMainUIOption();
  },
  f6(arg472) {
    helper.ext.toggleThreeAttackOption();
  },
  f7(arg473) {
    helper.ext.toggleSustainAttackOption();
  },
  f8(arg474) {
    helper.ext.toggleFightingModeOption();
  },
  ctrl_b(arg475) {
    helper.ext.openAllianceBuild();
  },
  ctrl_c(arg476) {
    helper.ext.buildPowerTower();
  },
  ctrl_d(arg477) {
    helper.ext.openGetDishPanel();
  },
  ctrl_e(arg478) {
    helper.ext.trainingArmys();
  },
  ctrl_g(arg479) {
    helper.ext.mergeTreasureMap();
  },
  ctrl_m(arg480) {
    helper.ext.batchMergeAllArmys();
  },
  ctrl_q(arg481) {
    helper.ext.randomMoveCity();
  },
  ctrl_r(arg482) {
    helper.ext.recoverInjuredArmys();
  },
  ctrl_s(arg483) {
    helper.ext.openPlayerSkill();
  },
  ctrl_t(arg484) {
    helper.ext.speedupAllMarch();
  },
  ctrl_u(arg485) {
    helper.ext.speedupAllMarch();
  },
  ctrl_x(arg486) {
    helper.ext.recallMarch();
  },
  ctrl_z(arg487) {
    helper.ext.openTreasureShop();
  },
  ctrl_backquote(arg488) {
    helper.ext.forgetGatherSkills();
  },
  ctrl_0(arg489) {
    helper.ext.forgetGatherSkills();
  },
  ctrl_1(arg490) {
    var obj66 = {
      tkexj: function (arg491, arg492) {
        return arg491 ^ arg492;
      }
    };
    helper.ext.studyGatherSkills(obj66.tkexj(0xb7711, 0xb7711));
  },
  ctrl_2(arg493) {
    var obj67 = {
      VrRZK: function (arg494, arg495) {
        return arg494 ^ arg495;
      }
    };
    helper.ext.studyGatherSkills(obj67.VrRZK(0x3b1cd, 0x3b1cc));
  },
  ctrl_3(arg496) {
    helper.ext.studyGatherSkills(2);
  },
  ctrl_4(arg497) {
    helper.ext.studyGatherSkills(3);
  },
  shift_0(arg498) {
    var obj68 = {
      Ardkw: function (arg499, arg500) {
        return arg499 ^ arg500;
      }
    };
    helper.ext.fastMarching(obj68.Ardkw(0x87f1e, 0x87f1e));
  },
  shift_1(arg501) {
    helper.ext.fastMarching(1);
  },
  shift_2(arg502) {
    var obj69 = {
      eztAr: function (arg503, arg504) {
        return arg503 ^ arg504;
      }
    };
    helper.ext.fastMarching(obj69.eztAr(0x980b2, 0x980b0));
  },
  shift_3(arg505) {
    var obj70 = {
      ITCWG: function (arg506, arg507) {
        return arg506 ^ arg507;
      }
    };
    helper.ext.fastMarching(obj70.ITCWG(0xdb46f, 0xdb46c));
  },
  shift_4(arg508) {
    helper.ext.fastMarching(4);
  },
  shift_5(arg509) {
    helper.ext.fastMarching(5);
  },
  shift_6(arg510) {
    helper.ext.fastMarching(6);
  },
  shift_7(arg511) {
    helper.ext.fastMarching(7);
  },
  shift_8(arg512) {
    helper.ext.fastMarching(8);
  },
  shift_9(arg513) {
    helper.ext.fastMarching(9);
  },
  shift_backquote(arg514) {
    var obj71 = {
      owrBy: function (arg515, arg516) {
        return arg515 ^ arg516;
      }
    };
    helper.ext.fastMarching(-obj71.owrBy(0x4b6c6, 0x4b6c7));
  },
  shift_u(arg517) {
    helper.ext.speedupAllMarch();
  },
  alt_a(arg518) {
    helper.pro.open(helper.pro.attackMonster);
  },
  alt_c(arg519) {
    helper.pro.open(helper.pro.createAssembly);
  },
  alt_e(arg520) {
    helper.pro.open(helper.pro.roleEngine, 1);
  },
  alt_f(arg521) {
    helper.pro.open(helper.pro.findPlayer);
  },
  alt_g(arg522) {
    helper.pro.open(helper.pro.gatherResource);
  },
  alt_h(arg523) {
    helper.pro.open(helper.pro.helpRefugee);
  },
  alt_j(arg524) {
    helper.pro.open(helper.pro.joinAssembly);
  },
  alt_p(arg525) {
    helper.pro.open(helper.pro.avoidAttacked);
  },
  alt_q(arg526) {
    helper.pro.open(helper.pro.fastAttack);
  },
  alt_r(arg527) {
    helper.pro.open(helper.pro.quickRepair);
  },
  alt_s(arg528) {
    helper.pro.open(helper.pro.searchWorldMap);
  },
  alt_t(arg529) {
    helper.pro.open(helper.pro.c8treasureCar);
  },
  alt_v(arg530) {
    helper.pro.open(helper.pro.about);
  },
  alt_z(arg531) {
    helper.pro.open(helper.pro.miscController);
  },
  dispatch(arg532) {
    var obj72 = {
      eTftg: "keydown",
      NmanV: function (arg533, arg534) {
        return arg533 == arg534;
      },
      tswjk: "escape",
      ZYGPX: function (arg535, arg536) {
        return arg535 != arg536;
      },
      jSQhn: "innerHTML",
      ZRyMn: function (arg537) {
        return arg537();
      }
    };
    var tmp65 = "keydown" == arg532.type && !arg532.repeat && this.key[arg532.code];
    var tmp66 = arg532.ctrlKey ? "ctrl_" : "";
    var tmp66 = tmp66 + (arg532.shiftKey ? "shift_" : "");
    var tmp66 = tmp66 + (arg532.altKey ? "alt_" : "");
    if (obj72.NmanV((tmp65 = tmp66 + tmp65).length, 1)) {
      tmp65 = "_" + tmp65;
    }
    if (!(obj72.NmanV("escape", tmp65) && helper.menu.active && (helper.menu.close(), true) || obj72.NmanV("escape", tmp65) && helper.dialog.active && (helper.dialog.close(), true) || "escape" == tmp65 && obj72.ZYGPX(document.getElementById("wxLoginDiv")?.["innerHTML"] || "", "") && (obj72.ZRyMn(resetWxLoginFrame), true))) {
      if ((arg532.altKey || !helper.menu.active && !helper.dialog.active) && this[tmp65]) {
        this[tmp65](arg532);
      }
    }
  }
};
helper.mouseHandler = {
  down: false,
  left_down(arg538) {
    var obj73 = {
      CiMfg: function (arg539, arg540, arg541, arg542) {
        return arg539(arg540, arg541, arg542);
      },
      ciWPj: "dblclick"
    };
    if (!helper.menu.hittest(arg538)) {
      helper.menu.close();
    }
    if (false == this.down) {
      this.down = true;
      obj73.CiMfg(setTimeout, function (arg543) {
        arg543.down = false;
      }, 250, this);
    } else if (helper.std.default("dblclick")) {
      arg538.stopPropagation();
    } else {
      undefined;
    }
  },
  dispatch(arg544) {
    var obj74 = {
      bZpEQ: "mousedown",
      SALSG: function (arg545, arg546) {
        return arg545 ^ arg546;
      }
    };
    if ("mousedown" == arg544.type && 0 == arg544.button) {
      this.left_down(arg544);
    } else if (obj74.SALSG(0x7ef2b, 0x7ef29) == arg544.button) {
      arg544.stopPropagation();
    } else {
      undefined;
    }
  }
};
helper.touchHandler = {
  touchstart(arg547) {
    var obj75 = {
      ngvpQ: function (arg548, arg549, arg550) {
        return arg548(arg549, arg550);
      }
    };
    if (!helper.menu.hittest(arg547)) {
      if (helper.menu.active) {
        helper.menu.close();
      }
      this.touchX = arg547.touches[0].clientX;
      this.touchY = arg547.touches[0].clientY;
      if (this.timer) {
        clearTimeout(this.timer);
      }
      this.timer = obj75.ngvpQ(setTimeout, () => this.openmenu(arg547), 500);
    }
  },
  touchmove(arg551) {
    var obj76 = {
      UbnPm: function (arg552, arg553) {
        return arg552 ^ arg553;
      },
      ijXpf: function (arg554, arg555) {
        return arg554 > arg555;
      },
      XBkIJ: function (arg556, arg557) {
        return arg556 - arg557;
      }
    };
    if (helper.menu.active) {
      helper.menu.touchmove(arg551);
      arg551.stopImmediatePropagation();
    }
    var value71 = arg551.touches[0].clientX;
    var value72 = arg551.touches[obj76.UbnPm(0x81837, 0x81837)].clientY;
    if (obj76.ijXpf(Math.abs(this.touchX - value71), obj76.UbnPm(0x35a65, 0x35a60)) || Math.abs(obj76.XBkIJ(this.touchY, value72)) > 5) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
  },
  touchend(arg558) {
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = 0;
    }
    if (helper.menu.active) {
      arg558.stopImmediatePropagation();
    }
    if (helper.menu.sel) {
      helper.menu.sel.click();
    }
  },
  openmenu(arg559) {
    var tmp67 = HomeMap && HomeMap.LongTouchingItem && HomeMap.LongTouchingItem.HoldingProgress;
    if (!tmp67 || !tmp67.active) {
      var result95 = cc.find("Canvas").getComponentInChildren("FWSMultiTouchComponent");
      if (result95) {
        result95.doTouchCancel();
        result95.touchPoints.splice(0, result95.touchPoints.length);
      }
      helper.menu.open(arg559);
    }
  },
  dispatch(arg560) {
    var obj77 = {
      gwDIn: function (arg561, arg562) {
        return arg561 == arg562;
      }
    };
    if (obj77.gwDIn("touchstart", arg560.type)) {
      this.touchstart(arg560);
    }
    if ("touchmove" == arg560.type) {
      this.touchmove(arg560);
    }
    if ("touchend" == arg560.type) {
      this.touchend(arg560);
    }
  }
};
helper.dispatch = function (arg563) {
  var obj78 = {
    ZKvea: function (arg564, arg565) {
      return arg564 == arg565;
    },
    tvEth: "keyup",
    QmuqR: "mousedown",
    CkSIy: "touchstart"
  };
  this.capslock = arg563.getModifierState && arg563.getModifierState("CapsLock");
  if ("keydown" == arg563.type) {
    helper.keyHandler.dispatch(arg563);
  }
  if (obj78.ZKvea("keyup", arg563.type)) {
    helper.keyHandler.dispatch(arg563);
  }
  if ("mousedown" == arg563.type) {
    helper.mouseHandler.dispatch(arg563);
  }
  if ("touchstart" == arg563.type) {
    helper.touchHandler.dispatch(arg563);
  }
  if (obj78.ZKvea("touchend", arg563.type)) {
    helper.touchHandler.dispatch(arg563);
  }
  if ("touchmove" == arg563.type) {
    helper.touchHandler.dispatch(arg563);
  }
  if (obj78.ZKvea("contextmenu", arg563.type)) {
    helper.menu.dispatch(arg563);
  }
};
helper.tools = {
  async login(arg566, arg567, arg568, arg569, arg570) {
    var obj79 = {
      dlfdo: "5|2|3|4|1|0",
      pjugV: function (arg571, arg572) {
        return arg571 ^ arg572;
      },
      qAlXI: function (arg573, arg574) {
        return arg573 == arg574;
      },
      BUBkt: function (arg575) {
        return arg575();
      },
      rydxv: function (arg576, arg577) {
        return arg576 == arg577;
      },
      VNPGf: function (arg578, arg579, arg580) {
        return arg578(arg579, arg580);
      },
      hHVnR: "GameTools"
    };
    let tmp68 = null;
    return new Promise(arg581 => {
      var obj80 = {
        FvIyQ: "PlatformCore",
        LcNww: "GameTools",
        LDyuO: function (arg582, arg583) {
          return arg582(arg583);
        },
        IBFqu: "zh_cn",
        zpOpe: "function",
        kIDrc: function (arg584, arg585) {
          return arg584(arg585);
        }
      };
      function fn22() {
        tmp68.dispose();
        arg581(null);
      }
      function fn23() {
        arg581(tmp68);
      }
      function fn24(arg586) {
        var parts16 = "5|2|3|4|1|0".split("|");
        var num26 = 0x0;
        while (true) {
          switch (parts16[num26++]) {
            case "0":
              return ResponseId[arg586.c];
            case "1":
              if (arg586.c == ResponseId.PUSH_KICK_OUT) {
                fn22();
                return ResponseId[arg586.c];
              }
              continue;
            case "2":
              if (arg570) {
                arg570.data = tmp69;
              }
              continue;
            case "3":
              if (arg586.s == 3) {
                arg586.s = -obj79.pjugV(0xe110c, 0xe110f);
              }
              continue;
            case "4":
              if (obj79.qAlXI(arg586.c, ResponseId.LOGIN)) {
                if (tmp68.ext = tmp69) {
                  if (!tmp69.isCross) {
                    obj79.BUBkt(fn23);
                  } else {
                    fn26(tmp69.wsurl);
                  }
                } else {
                  fn22();
                }
                return ResponseId[arg586.c];
              }
              continue;
            case "5":
              var tmp69 = obj79.rydxv(arg586.s, obj79.pjugV(0xaabe5, 0xaabe5)) && GameTools.JSON_PARSE(arg586.d);
              continue;
          }
          break;
        }
      }
      function fn25() {
        var moduleRef11 = __require("GlobalData");
        var moduleRef12 = __require("PlatformCore");
        var moduleRef13 = __require("GameTools");
        var result96 = obj80.LDyuO(__require, "ProtoBufBiz");
        var moduleRef14 = __require("PFOpenData");
        var obj81 = {
          token: arg568,
          serverId: arg566,
          serverInfoToken: arg568,
          country: "CN",
          lang: "zh_cn",
          nationalFlag: 0x30,
          ip: "0",
          pf: "",
          platform: CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(arg568)).split(",")[1],
          channel: moduleRef14.default.Instance.Channel,
          containerType: "web",
          platformVer: moduleRef12.instance.getPlatformVer() || moduleRef11.GLOBAL.GameVersion,
          appVersion: moduleRef11.GLOBAL.GameVersion,
          pbClientVer: result96.ProtoBufBiz.getPBVersion(),
          ua: moduleRef13.default.getUserAgent()
        };
        if (typeof platformSetLoginParam === "function") {
          obj80.LDyuO(platformSetLoginParam, obj81);
        }
        if (typeof arg569 === "function") {
          obj80.LDyuO(arg569, obj81);
        }
        tmp68.send(RequestId.LOGIN, obj81);
      }
      function fn26(arg587) {
        tmp68.dispose();
        tmp68.connectWithOption(GameTools.getGameWsConnectOption(arg587));
      }
      tmp68 = new (__require("NetMgrSimple").NetMgrSimple)();
      tmp68.onMessage = function (arg588) {
        if (!obj80.LDyuO(fn24, arg588)) {
          this.__proto__.onMessage.call(this, arg588);
        }
      };
      tmp68.asend = function (arg589, arg590) {
        return new Promise(arg591 => {
          tmp68._onTimeOutCallback = tmp68._onCloseCallback = tmp68._onErrorCallback = arg591;
          if (tmp68.send(arg589, arg590, null, arg592 => {
            arg591(arg592.s == 0 && GameTools.JSON_PARSE(arg592.d));
          })) {
            setTimeout(arg591, 5000);
          } else {
            obj80.kIDrc(arg591, false);
          }
        });
      };
      tmp68.asendPB = function (arg593, arg594) {
        return new Promise(arg595 => {
          tmp68._onTimeOutCallback = tmp68._onCloseCallback = tmp68._onErrorCallback = arg595;
          if (tmp68.sendPB(arg593, arg594, null, arg596 => {
            arg595(arg596.pbAck && arg596.pbAck.header && arg596.pbAck.header.s == 0 ? arg596.pbAck : null);
          })) {
            setTimeout(arg595, 5000);
          } else {
            arg595(false);
          }
        });
      };
      tmp68.asendPBV2 = function (arg597, arg598) {
        var obj82 = {
          WpIwE: function (arg599, arg600, arg601) {
            return obj79.VNPGf(arg599, arg600, arg601);
          }
        };
        return new Promise(arg602 => {
          tmp68._onTimeOutCallback = tmp68._onCloseCallback = tmp68._onErrorCallback = arg602;
          if (tmp68.sendPBV2(arg597, arg598, null, arg603 => {
            arg602(arg603 && arg603.pbAckV2.header && arg603.pbAckV2.header.s == 0 ? arg603.pbAckV2.data : null);
          })) {
            obj82.WpIwE(setTimeout, arg602, 5000);
          } else {
            arg602(false);
          }
        });
      };
      tmp68._onConnectCallback = function () {
        this._heartbeatCode = RequestId.NO_QUEUE_HEART;
        fn25();
      };
      tmp68._onTimeOutCallback = tmp68._onCloseCallback = tmp68._onErrorCallback = fn22;
      tmp68.setAutoReconnectOnClose(false);
      tmp68.connectWithOption(GameTools.getGameWsConnectOption(arg567));
    });
  },
  autoRelogin() {
    var formData1 = new FormData();
    formData1.append("uid", UserData.UID);
    formData1.append("sid", UserData.OriginServerId);
    formData1.append("tkn", auth.createtk(ServerController));
    return formData1;
  },
  getSkin(arg604) {
    var obj83 = {
      gtEyf: function (arg605, arg606) {
        return arg605 == arg606;
      },
      BtniF: function (arg607, arg608) {
        return arg607 ^ arg608;
      }
    };
    var value73 = UserData.MyCastleFace[arg604];
    return value73 && (obj83.gtEyf(-obj83.BtniF(0x939f6, 0x939f7), value73.endTime) || ServerTime < value73.endTime) ? value73 : null;
  },
  skinCD: 0x0,
  async setSkin(arg609) {
    var obj84 = {
      UhMfe: function (arg610, arg611) {
        return arg610 + arg611;
      },
      YAlYB: "冷却中，切换皮肤失败！",
      AVpkg: function (arg612, arg613) {
        return arg612 ^ arg613;
      }
    };
    var parts17 = "0|6|1|4|2|5|3".split("|");
    var num27 = 0x0;
    while (true) {
      switch (parts17[num27++]) {
        case "0":
          if (!arg609 || arg609 < 0) {
            return false;
          }
          continue;
        case "1":
          if (!this.getSkin(arg609)) {
            return false;
          }
          continue;
        case "2":
          this.skinCD = obj84.UhMfe(ServerMSTime, 1500);
          continue;
        case "3":
          return tmp70;
        case "4":
          if (this.skinCD > ServerMSTime) {
            return UIManager.ShowTips("冷却中，切换皮肤失败！");
          }
          continue;
        case "5":
          var tmp70 = await helper.its.asend(RequestId.USE_CASTLE_FACE, {
            skinId: arg609,
            special: 0x0
          });
          continue;
        case "6":
          if (arg609 == UserData.UsingCastleFace) {
            return !obj84.AVpkg(0x227c2, 0x227c3);
          }
          continue;
      }
      break;
    }
  },
  savedSkin: -1,
  async setTempSkin(arg614) {
    var obj85 = {
      IzwQN: function (arg615, arg616) {
        return arg615 == arg616;
      },
      xOLry: function (arg617, arg618) {
        return arg617 ^ arg618;
      }
    };
    if (arg614 < 0) {
      return;
    }
    if (obj85.IzwQN(this.savedSkin, -obj85.xOLry(0x21d37, 0x21d36))) {
      this.savedSkin = UserData.UsingCastleFace;
    }
    return await this.setSkin(arg614);
  },
  restoreSkin() {
    var obj86 = {
      PCpDx: function (arg619, arg620) {
        return arg619 == arg620;
      },
      lPBum: function (arg621, arg622) {
        return arg621 == arg622;
      },
      SWPyH: function (arg623, arg624) {
        return arg623 - arg624;
      }
    };
    if (obj86.PCpDx(this.savedSkin, -1)) {
      return;
    }
    if (obj86.lPBum(this.savedSkin, UserData.UsingCastleFace)) {
      this.savedSkin = -1;
      return undefined;
    }
    const result97 = Math.max(0, obj86.SWPyH(this.skinCD, ServerMSTime));
    setTimeout(async () => {
      await this.setSkin(this.savedSkin);
      this.savedSkin = -1;
    }, result97);
  },
  async setMarchSkin() {
    var parts18 = "0|1|3|4|2".split("|");
    var num28 = 0x0;
    while (true) {
      switch (parts18[num28++]) {
        case "0":
          var arr5 = [];
          continue;
        case "1":
          Object.values(TABLE.getTableGroup(TableName.SKIN)).forEach(arg625 => {
            var parts19 = arg625.equip_buff.split("|");
            if (parts19) {
              parts19.forEach(arg626 => {
                var parts20 = arg626.split(",");
                if (parts20 && parts20[0] == 0xea60c) {
                  arr5.push({
                    id: arg625.id,
                    num: Number(parts20[1])
                  });
                }
              });
            }
          });
          continue;
        case "2":
          if (result98) {
            await this.setSkin(result98.id);
          }
          continue;
        case "3":
          arr5.sort((arg627, arg628) => arg628.num - arg627.num);
          continue;
        case "4":
          var result98 = arr5.find(arg629 => UserData.MyCastleFace[arg629.id]);
          continue;
      }
      break;
    }
  },
  async setSkillGroup(arg630, arg631) {
    var obj87 = {
      pKdxN: function (arg632, arg633) {
        return arg632 >= arg633;
      },
      UrfQe: function (arg634, arg635) {
        return arg634 ^ arg635;
      },
      jHBwe: function (arg636, arg637) {
        return arg636 - arg637;
      },
      JkCiO: function (arg638, arg639) {
        return arg638 ^ arg639;
      }
    };
    if (arg630 <= 0 || arg630 == 10 || obj87.pKdxN(arg630, 20)) {
      return;
    }
    var tmp71 = PresetMarchController.getPreMarchDataByType(Math.floor(arg630 / obj87.UrfQe(0xc38a1, 0xc38ab))).getPreMarchByIndex(obj87.jHBwe(arg630 % obj87.UrfQe(0xda473, 0xda479), 1)) || {
      HeroIds: []
    };
    for (var tmp72 of tmp71.HeroIds) {
      if (UserData.Heros[tmp72].SkillsIndex != arg631) {
        await helper.its.asend(RequestId.ChangeHeroSkillsIndex, {
          heroId: tmp72,
          skillsIndex: arg631
        });
        await asleep(obj87.JkCiO(0xd3769, 0xd3481));
      }
    }
  },
  async holdCitySkin(arg640, arg641, arg642) {
    if (arg642) {
      if (arg642 == arg640) {
        await this.setSkin(arg640);
      } else {
        await this.setSkin(arg640);
        setTimeout(() => this.setSkin(arg642), arg641);
      }
      return;
    }
    var value74 = UserData.UsingCastleFace;
    if (arg640 != value74) {
      await this.setSkin(arg640);
      setTimeout(() => this.setSkin(value74), arg641);
    }
  },
  async holdEquipGroup(arg643, arg644) {
    var obj88 = {
      foIxB: function (arg645, arg646) {
        return arg645(arg646);
      },
      FKsNc: "ArmyEquipController",
      IVKvJ: function (arg647, arg648) {
        return arg647(arg648);
      }
    };
    var result99 = obj88.foIxB(__require, "ArmyEquipController").ArmyEquipController.getInstance();
    async function fn27(arg649) {
      var tmp73 = await helper.its.asend(RequestId.CHANGE_ARMY_EQUIP_GROUP, {
        index: arg649
      });
      if (tmp73) {
        result99.EquipGroupIndex = tmp73.newIdx;
        UserData.UpdateArmyEquips(tmp73);
      }
    }
    var value75 = result99.EquipGroupIndex;
    if (arg643 >= 0 && arg643 != value75) {
      await obj88.IVKvJ(fn27, arg643);
      setTimeout(() => fn27(value75), arg644);
    }
  },
  async recharge() {
    var result100 = UserData.getItemList().find(arg650 => (6 == arg650.Data.type || 7 == arg650.Data.type) && arg650.Amount > 0);
    return result100 && (await helper.its.asend(RequestId.ITEM_USE, {
      amount: 0x1,
      itemid: result100.ItemId
    }));
  },
  async checkEnergy(arg651, arg652) {
    var obj89 = {
      YEFWZ: function (arg653, arg654) {
        return arg653 <= arg654;
      }
    };
    var value76 = UserData.getEnergy(1).Point;
    return obj89.YEFWZ(arg651, value76) || arg652 && (await this.recharge());
  },
  async getTile(arg655) {
    if (arg655 && !arg655.id) {
      var tmp74 = arg655.x && arg655.y && (await helper.its.asend(RequestId.GET_WORLD_INFO, {
        x: arg655.x,
        y: arg655.y,
        k: UserData.ServerId,
        rid: 0x0,
        width: 0x15,
        height: 0x1e,
        marchInfo: true,
        viewLevel: 0x0
      }));
      arg655 = tmp74 && tmp74.pointList && tmp74.pointList.find(arg656 => arg656.x == arg655.x && arg656.y == arg655.y);
    }
    return arg655 && arg655.id && (NWorldMapController.updateTileInfo(arg655, 0), NWorldMapController.getTileInfoByCoord(arg655.x, arg655.y, arg655.k, 0));
  },
  distance(arg657, arg658) {
    var obj90 = {
      hLqNv: function (arg659, arg660) {
        return arg659 ^ arg660;
      },
      CSMJW: function (arg661, arg662) {
        return arg661 - arg662;
      }
    };
    if (!arg658) {
      arg658 = UserData.WorldCoord;
    }
    return Math.sqrt(Math.pow(arg657.x - arg658.x, obj90.hLqNv(0xab7b0, 0xab7b2)) + Math.pow(obj90.CSMJW(arg657.y, arg658.y), obj90.hLqNv(0x7fb2c, 0x7fb2e)));
  },
  gotoWorldMap(arg663) {
    if (!arg663.k) {
      arg663.k == UserData.ServerId;
    }
    __require("WorldMapTools").default.goToWorldMapByPos({
      x: arg663.x,
      y: arg663.y,
      s: arg663.k,
      subMap: arg663.r
    });
  },
  gotoWorldAndClick(arg664) {
    var obj91 = {
      OQJvr: function (arg665, arg666) {
        return arg665 == arg666;
      }
    };
    var moduleRef15 = __require("WorldMapMsgs");
    if (!arg664.k) {
      obj91.OQJvr(arg664.k, UserData.ServerId);
    }
    moduleRef15.send(moduleRef15.Names.WorldMapJumpToTileClick, {
      x: arg664.x,
      y: arg664.y,
      z: arg664.k,
      subMap: arg664.r
    });
  },
  get canMarch() {
    var obj92 = {
      HERfU: function (arg667, arg668) {
        return arg667 ^ arg668;
      }
    };
    return UserData.UID ? UserData.myMarchNumMAX - UserData.myMarchNum : obj92.HERfU(0x62aa5, 0x62aa5);
  },
  get myMarches() {
    return Object.keys(NWorldMapMarchModel.myMarch).map(arg669 => MapData.marches[arg669]) || [];
  },
  getRecallableGathers() {
    var tmp75 = this.getNearestNeutralZone(this.getOpenedNeutrals()) ?? [];
    var tmp76 = this.myMarches?.["filter"]?.(arg670 => arg670 && (arg670.marchType == 3 || arg670.marchType == 26) && (arg670.marchState == 1 || 5 == arg670.marchState)) ?? [];
    tmp76 = tmp76.filter(arg671 => TABLE.getTableDataById("resource", arg671.itemId).level < 6);
    tmp76 = tmp76.filter(arg672 => !cc.Intersection.pointInPolygon({
      x: arg672.target_tx,
      y: arg672.target_ty
    }, tmp75));
    return tmp76;
  },
  getGatherMarchNum(arg673) {
    var result101 = this.myMarches.filter(arg674 => arg674 && (3 == arg674.marchType || 26 == arg674.marchType) && (1 == arg674.marchState || 5 == arg674.marchState));
    return arg673 ? result101.length : result101.filter(arg675 => TABLE.getTableDataById("resource", arg675.itemId).level < 6).length;
  },
  getMarch(arg676) {
    return this.myMarches.find(arg677 => arg677 && arg677.target_tx == arg676.x && arg677.target_ty == arg676.y) || null;
  },
  getStatus() {
    var result102 = window.fetch.toString();
    if (result102.includes("includes(") || result102.includes("replace(")) {
      return true;
    }
    return false;
  },
  async recallMarch(arg678) {
    var obj93 = {
      LREVo: function (arg679, arg680) {
        return arg679 == arg680;
      }
    };
    var tmp77 = obj93.LREVo(typeof arg678, "string") && MapData.marches[arg678] || arg678;
    if (tmp77 && tmp77.marchId && (tmp77.state ?? tmp77.marchState) != 3) {
      await helper.its.asend(RequestId.RECALL_MARCH, {
        marchId: tmp77.marchId
      });
    }
  },
  async recallGather(arg681) {
    var obj94 = {
      kaWkD: function (arg682, arg683) {
        return arg682 == arg683;
      },
      IcQdr: function (arg684, arg685) {
        return arg684 + arg685;
      },
      WcVMv: function (arg686, arg687) {
        return arg686 == arg687;
      },
      mJFpa: function (arg688, arg689) {
        return arg688 ^ arg689;
      },
      HYvba: function (arg690, arg691) {
        return arg690 ^ arg691;
      },
      IgSGt: function (arg692, arg693) {
        return arg692 ^ arg693;
      }
    };
    function fn28(arg694) {
      var result103 = TABLE.getTableDataById("resource", arg694);
      return result103 && result103.resource_type != 10 && result103.level < 6;
    }
    function fn29(arg695) {
      var value79 = arg695.heroList;
      var value80 = PresetMarchController.useGatherMarch;
      for (var num29 = 0; num29 < 9; num29++) {
        var tmp78 = PresetMarchController.getPreMarchDataByType(value80).getPreMarchByIndex(num29)?.["HeroIds"];
        if (tmp78 && obj94.kaWkD(tmp78.length, value79.length) && tmp78.every(arg696 => value79.indexOf(arg696) >= 0)) {
          return obj94.IcQdr(value80 * 10, num29) + 1;
        }
      }
      return -1;
    }
    var value77 = this.myMarches;
    if (!value77.find(arg697 => arg697 && arg697.marchState == 3)) {
      var value78 = value77.filter(arg698 => arg698 && [3, 26].includes(arg698.marchType) && fn28(arg698.itemId)).sort((arg699, arg700) => fn29(arg700) - fn29(arg699))[obj94.HYvba(0xac0b4, 0xac0b4)];
      if (value78) {
        await this.recallMarch(value78);
        helper.pro.gatherResource.state.delay = obj94.IgSGt(0x2501e, 0x2501f);
      } else {
        value78 = value77.filter(arg701 => arg701 && arg701.marchType == 40).sort((arg702, arg703) => fn29(arg703) - fn29(arg702))[0];
        if (value78) {
          await this.recallMarch(value78);
        }
      }
    }
    if (arg681) {
      var fn30 = function (arg704) {
        arg704 = JSON.parse(arg704);
        if (arg704 && obj94.WcVMv(arg704.marchInfo.state, obj94.mJFpa(0x63c27, 0x63c23))) {
          EVENT.off(EventId.My_March_Update, fn30, null);
          arg681();
        }
      };
      EVENT.on(EventId.My_March_Update, fn30, null);
    }
  },
  async speedupMarch(arg705, arg706) {
    var obj95 = {
      sZoMA: function (arg707, arg708) {
        return arg707 > arg708;
      },
      uJoIw: "15100045|15100065",
      jHRyn: "15100045",
      DsDWn: function (arg709, arg710) {
        return arg709 ^ arg710;
      },
      WGjsU: function (arg711, arg712) {
        return arg711 == arg712;
      },
      XbKnG: function (arg713, arg714) {
        return arg713 ^ arg714;
      },
      kKUuC: function (arg715, arg716) {
        return arg715 - arg716;
      },
      reWPN: function (arg717, arg718) {
        return arg717 <= arg718;
      },
      ukqqe: function (arg719, arg720) {
        return arg719 - arg720;
      },
      JkDwF: function (arg721, arg722, arg723) {
        return arg721(arg722, arg723);
      }
    };
    var tmp79 = arg705?.["marchId"];
    var result104 = obj95.DsDWn(0x8e58b, 0x8e58b);
    async function fn31(arg724) {
      var parts21 = "3|0|2|1|4".split("|");
      var num30 = 0x0;
      while (true) {
        switch (parts21[num30++]) {
          case "0":
            var value81 = UserData.MyCastleFace[result105];
            continue;
          case "1":
            var tmp82 = tmp83 && GameTools.checkCitySkillCdAndTimesEnable(tmp83, false);
            continue;
          case "2":
            var tmp83 = value81 && (obj95.sZoMA(value81.endTime, ServerTime) || value81.endTime === -1) && GameTools.getCitySkinConfigById(result105, 0);
            continue;
          case "3":
            var result105 = parseInt(GameTools.getDataConfigData(0x1ed7c9));
            continue;
          case "4":
            return tmp82 && (await helper.its.asend(RequestId.March_Speed_Up_City_Skill_Use, {
              marchId: arg724,
              skinId: result105
            }));
        }
        break;
      }
    }
    async function fn32(arg725, arg726) {
      var result106 = fn33();
      var tmp84 = result106.filter(arg727 => arg727.ratio >= arg726).pop() || result106.filter(arg728 => arg728.ratio < arg726).shift();
      if (tmp84) {
        NET._requestTimePool.delete(RequestId.MARCH_SPEED_UP);
        return await helper.its.asend(RequestId.MARCH_SPEED_UP, {
          marchId: arg725,
          itemId: tmp84.itemId
        });
      }
      return false;
    }
    function fn33() {
      var tmp85;
      if (CrossUtils.isTMServer()) {
        tmp85 = GameTools.getDataConfigData(0x196258) || "15100045|15100065";
      } else if (CrossUtils.isTeamLegendServer()) {
        tmp85 = GameTools.getDataConfigData(0x197b78) || "15100045|15100065";
      } else if (CrossUtils.isMasterMatch()) {
        tmp85 = TableUtils.getDataConfigData(0x2904d) || "15100045|15100065";
      } else if (GameTools.isNewCAB()) {
        tmp85 = NewCABController.DATA.fightType == 0 ? GameTools.getDataConfigData(0x196236) || "15100045|45001005|45001006" : "15100045";
      } else if (GameTools.isKVK()) {
        tmp85 = EightCountryMainController.getECDataConfigValue(0x222e5);
      } else {
        tmp85 = GameTools.getDataConfigData(0x788661e2);
      }
      return tmp85.split("|").map(arg729 => ({
        itemId: Number(arg729),
        amount: UserData.getItemAmount(arg729),
        ratio: Number(TABLE.getTableDataById(TableName.ITEM, arg729).para1_v1)
      })).filter(arg730 => arg730.amount > 0).sort((arg731, arg732) => arg732.ratio - arg731.ratio);
    }
    while (arg705 && obj95.WGjsU(arg705.state || arg705.marchState, obj95.XbKnG(0x96364, 0x96365))) {
      result104 = obj95.kKUuC(arg705.marchArrive, ServerTime);
      if (obj95.reWPN(result104, arg706)) {
        break;
      }
      var tmp80 = (await fn31(tmp79)) || (await fn32(tmp79, obj95.ukqqe(result104, arg706) / result104));
      if (!tmp80) {
        break;
      }
      var tmp81 = await helper.its.asend(RequestId.GET_MARCH_INFO, {
        marchId: tmp79
      });
      if (!tmp81 || !tmp81.marchInfo) break;
      arg705 = tmp81.marchInfo;
    }
    while (arg705 && (arg705.state || arg705.marchState) == 3) {
      result104 = obj95.kKUuC(arg705.returnArriveTime, ServerTime);
      if (result104 <= arg706) {
        break;
      }
      var tmp80 = (await fn31(tmp79)) || (await obj95.JkDwF(fn32, tmp79, obj95.ukqqe(result104, arg706) / result104));
      if (!tmp80) {
        break;
      }
      var tmp81 = await helper.its.asend(RequestId.GET_MARCH_INFO, {
        marchId: tmp79
      });
      if (!tmp81 || !tmp81.marchInfo) {
        break;
      }
      arg705 = tmp81.marchInfo;
    }
    return arg705;
  },
  neutral_data: {
    0x2: {
      A: [{
        x: 0x7e,
        y: 0x102
      }, {
        x: 0xba,
        y: 0x102
      }, {
        x: 0xba,
        y: 0x17a
      }, {
        x: 0x7e,
        y: 0x17a
      }],
      B: [{
        x: 0x242,
        y: 0x102
      }, {
        x: 0x27e,
        y: 0x102
      }, {
        x: 0x27e,
        y: 0x17a
      }, {
        x: 0x242,
        y: 0x17a
      }],
      C: [{
        x: 0x242,
        y: 0x484
      }, {
        x: 0x27e,
        y: 0x484
      }, {
        x: 0x27e,
        y: 0x4fc
      }, {
        x: 0x242,
        y: 0x4fc
      }],
      D: [{
        x: 0x7e,
        y: 0x484
      }, {
        x: 0xba,
        y: 0x484
      }, {
        x: 0xba,
        y: 0x4fc
      }, {
        x: 0x7e,
        y: 0x4fc
      }],
      E: [{
        x: 0xbe,
        y: 0x184
      }, {
        x: 0xfa,
        y: 0x184
      }, {
        x: 0xfa,
        y: 0x1fc
      }, {
        x: 0xbe,
        y: 0x1fc
      }],
      F: [{
        x: 0x202,
        y: 0x184
      }, {
        x: 0x23e,
        y: 0x184
      }, {
        x: 0x23e,
        y: 0x1fc
      }, {
        x: 0x202,
        y: 0x1fc
      }],
      G: [{
        x: 0x202,
        y: 0x404
      }, {
        x: 0x23e,
        y: 0x404
      }, {
        x: 0x23e,
        y: 0x47c
      }, {
        x: 0x202,
        y: 0x47c
      }],
      H: [{
        x: 0xbe,
        y: 0x404
      }, {
        x: 0xfa,
        y: 0x404
      }, {
        x: 0xfa,
        y: 0x47c
      }, {
        x: 0xbe,
        y: 0x47c
      }],
      I: [{
        x: 0x100,
        y: 0x204
      }, {
        x: 0x13c,
        y: 0x204
      }, {
        x: 0x13c,
        y: 0x27c
      }, {
        x: 0x100,
        y: 0x27c
      }],
      J: [{
        x: 0x1c2,
        y: 0x386
      }, {
        x: 0x1fe,
        y: 0x386
      }, {
        x: 0x1fe,
        y: 0x3fe
      }, {
        x: 0x1c2,
        y: 0x3fe
      }]
    },
    0x4: {
      A: [{
        x: 0x39f,
        y: 0x125
      }, {
        x: 0x3de,
        y: 0x160
      }, {
        x: 0x37f,
        y: 0x1b9
      }, {
        x: 0x340,
        y: 0x17e
      }],
      B: [{
        x: 0x37f,
        y: 0x341
      }, {
        x: 0x3da,
        y: 0x3a2
      }, {
        x: 0x3a0,
        y: 0x3d8
      }, {
        x: 0x342,
        y: 0x380
      }],
      C: [{
        x: 0x178,
        y: 0x344
      }, {
        x: 0x1be,
        y: 0x37e
      }, {
        x: 0x160,
        y: 0x3dc
      }, {
        x: 0x11e,
        y: 0x39e
      }],
      D: [{
        x: 0x161,
        y: 0x121
      }, {
        x: 0x1be,
        y: 0x17c
      }, {
        x: 0x17d,
        y: 0x1b9
      }, {
        x: 0x122,
        y: 0x164
      }],
      E: [{
        x: 0x33d,
        y: 0x183
      }, {
        x: 0x37a,
        y: 0x1be
      }, {
        x: 0x2de,
        y: 0x25a
      }, {
        x: 0x2a1,
        y: 0x21f
      }],
      F: [{
        x: 0x2da,
        y: 0x2a2
      }, {
        x: 0x379,
        y: 0x33d
      }, {
        x: 0x33f,
        y: 0x379
      }, {
        x: 0x2a2,
        y: 0x2e0
      }],
      G: [{
        x: 0x218,
        y: 0x2a4
      }, {
        x: 0x25a,
        y: 0x2e0
      }, {
        x: 0x1c3,
        y: 0x379
      }, {
        x: 0x181,
        y: 0x33b
      }],
      H: [{
        x: 0x1c2,
        y: 0x180
      }, {
        x: 0x25c,
        y: 0x21c
      }, {
        x: 0x21b,
        y: 0x25b
      }, {
        x: 0x181,
        y: 0x1bf
      }]
    },
    0x5: {
      A: [{
        x: 0x208,
        y: 0x6
      }, {
        x: 0x26c,
        y: 0x6
      }, {
        x: 0x26c,
        y: 0x96
      }, {
        x: 0x208,
        y: 0x96
      }],
      B: [{
        x: 0x442,
        y: 0x6
      }, {
        x: 0x49a,
        y: 0x6
      }, {
        x: 0x3da,
        y: 0xce
      }, {
        x: 0x3ac,
        y: 0x9a
      }],
      C: [{
        x: 0x3e0,
        y: 0x206
      }, {
        x: 0x46f,
        y: 0x209
      }, {
        x: 0x46f,
        y: 0x26b
      }, {
        x: 0x3e0,
        y: 0x26a
      }],
      D: [{
        x: 0x3df,
        y: 0x3a9
      }, {
        x: 0x49a,
        y: 0x46e
      }, {
        x: 0x442,
        y: 0x46e
      }, {
        x: 0x3af,
        y: 0x3db
      }],
      E: [{
        x: 0x208,
        y: 0x3da
      }, {
        x: 0x26c,
        y: 0x3da
      }, {
        x: 0x26c,
        y: 0x46e
      }, {
        x: 0x208,
        y: 0x46e
      }],
      F: [{
        x: 0x9c,
        y: 0x3a8
      }, {
        x: 0xcb,
        y: 0x3d9
      }, {
        x: 0x32,
        y: 0x46e
      }, {
        x: -38,
        y: 0x46e
      }],
      G: [{
        x: 0x6,
        y: 0x208
      }, {
        x: 0x94,
        y: 0x208
      }, {
        x: 0x94,
        y: 0x26c
      }, {
        x: 0x6,
        y: 0x26c
      }],
      H: [{
        x: -38,
        y: 0x6
      }, {
        x: 0x32,
        y: 0x6
      }, {
        x: 0xcc,
        y: 0x9a
      }, {
        x: 0x9e,
        y: 0xcc
      }],
      J: [{
        x: 0x208,
        y: 0x9e
      }, {
        x: 0x26c,
        y: 0x9e
      }, {
        x: 0x26c,
        y: 0x134
      }, {
        x: 0x208,
        y: 0x134
      }],
      K: [{
        x: 0x3ab,
        y: 0x9d
      }, {
        x: 0x3d6,
        y: 0xd0
      }, {
        x: 0x33f,
        y: 0x169
      }, {
        x: 0x311,
        y: 0x137
      }],
      L: [{
        x: 0x342,
        y: 0x20a
      }, {
        x: 0x3d8,
        y: 0x208
      }, {
        x: 0x3d8,
        y: 0x26c
      }, {
        x: 0x342,
        y: 0x26c
      }],
      M: [{
        x: 0x343,
        y: 0x30d
      }, {
        x: 0x3d9,
        y: 0x3a5
      }, {
        x: 0x3aa,
        y: 0x3d6
      }, {
        x: 0x311,
        y: 0x33f
      }],
      N: [{
        x: 0x208,
        y: 0x33e
      }, {
        x: 0x26c,
        y: 0x33e
      }, {
        x: 0x26c,
        y: 0x3d4
      }, {
        x: 0x208,
        y: 0x3d4
      }],
      O: [{
        x: 0x138,
        y: 0x30c
      }, {
        x: 0x168,
        y: 0x33e
      }, {
        x: 0xd2,
        y: 0x3d6
      }, {
        x: 0xa2,
        y: 0x3a6
      }],
      P: [{
        x: 0x9e,
        y: 0x20a
      }, {
        x: 0x136,
        y: 0x20a
      }, {
        x: 0x138,
        y: 0x268
      }, {
        x: 0xa0,
        y: 0x26a
      }],
      Q: [{
        x: 0xd0,
        y: 0x9e
      }, {
        x: 0x166,
        y: 0x138
      }, {
        x: 0x138,
        y: 0x166
      }, {
        x: 0xa0,
        y: 0xce
      }],
      R: [{
        x: 0x16f,
        y: 0x13b
      }, {
        x: 0x202,
        y: 0x1d4
      }, {
        x: 0x1d5,
        y: 0x203
      }, {
        x: 0x13f,
        y: 0x16b
      }],
      S: [{
        x: 0x2a7,
        y: 0x271
      }, {
        x: 0x33f,
        y: 0x309
      }, {
        x: 0x30d,
        y: 0x33b
      }, {
        x: 0x279,
        y: 0x2a1
      }]
    }
  },
  getNeutralZone(arg733) {
    return GameTools.isKVK() && this.neutral_data[MapType][arg733] || null;
  },
  getAllNeutrals() {
    if (!GameTools.isKVK()) {
      return [];
    }
    var result107 = EightCountryMainController.getKvkSeasonId();
    var tmp86 = TABLE.getTableByKey(KVKTools.getTableNameByKey(TableName.kvk_ark_resource), "season_id", result107, "type", 2) || [];
    return tmp86.map(arg734 => {
      var result108 = TABLE.getTableDataById(KVKTools.getTableNameByKey("kvk_district"), arg734.target_id);
      var result109 = NEightCountryController.getResouceDistrictState(result108.district_refresh_arena);
      return {
        num: arg734.num,
        page: arg734.page,
        state: result109.state,
        leastTime: result109.leastTime
      };
    });
  },
  getOpenedNeutrals() {
    return this.getAllNeutrals().filter(arg735 => arg735.state == 1);
  },
  getOptimumNeutrals() {
    var result110 = this.getOpenedNeutrals();
    var result111 = result110.reduce((arg736, arg737) => arg737.page > arg736 ? arg737.page : arg736, "");
    return result110.filter(arg738 => arg738.page == result111);
  },
  getNearestNeutral(arg739) {
    var obj96 = {
      IvHsC: function (arg740, arg741) {
        return arg740 ^ arg741;
      }
    };
    var value82 = this.neutral_data[MapType];
    var fn34 = arg742 => value82 && value82[arg742.num]?.["reduce"]?.((arg743, arg744) => arg743 += helper.tools.distance(arg744), 0) / value82[arg742.num]?.["length"] || 0xf423f;
    return value82 && arg739.concat().sort((arg745, arg746) => fn34(arg745) - fn34(arg746))[obj96.IvHsC(0xa6a84, 0xa6a84)] || null;
  },
  getNearestNeutralZone(arg747) {
    var value83 = this.neutral_data[MapType];
    return value83 && value83[this.getNearestNeutral(arg747)?.["num"]] || null;
  },
  repairMechaSkill() {
    return false;
  },
  async repairPresetMecha(arg748) { },
  async activeWorldMap() {
    var obj97 = {
      FbvOq: function (arg749, arg750) {
        return arg749 > arg750;
      },
      VLEte: function (arg751, arg752) {
        return arg751 ^ arg752;
      },
      LvkEA: function (arg753, arg754) {
        return arg753 == arg754;
      },
      dGIlS: function (arg755, arg756) {
        return arg755(arg756);
      },
      yYXCJ: "NWorldMapMarchController",
      mEEVM: "NWorldMapData",
      fqjDa: function (arg757, arg758) {
        return arg757(arg758);
      },
      keCXG: "NWorldMapModel"
    };
    var parts22 = "2|6|1|3|9|8|7|5|4|0".split("|");
    var num31 = 0x0;
    while (true) {
      switch (parts22[num31++]) {
        case "0":
          if (value84 && value84.x > 0 && obj97.FbvOq(value84.y, 0) && (MapType == obj97.VLEte(0x9bec0, 0x9bec1) || MapType == 6 || MapType == 2 || obj97.LvkEA(MapType, 4) || obj97.LvkEA(MapType, 5))) {
            var parts23 = "4|3|0|2|1|7|6|8|5".split("|");
            var num32 = 0x0;
            while (true) {
              switch (parts23[num32++]) {
                case "0":
                  moduleRef16.default.instance.connect();
                  continue;
                case "1":
                  result112.default.instance.connect();
                  continue;
                case "2":
                  moduleRef20.default.instance.connect();
                  continue;
                case "3":
                  moduleRef18.default.instance.status.worldMapComponent = {
                    checkPosInViewport: () => false
                  };
                  continue;
                case "4":
                  moduleRef17.NWorldMapAssetLoader.instance.load(() => { }, this);
                  continue;
                case "5":
                  NET.asend(RequestId.GET_WORLD_INFO, {
                    x: value84.x,
                    y: value84.y,
                    k: UserData.ServerId,
                    rid: 0x0,
                    width: 0x15,
                    height: 0x1e,
                    marchInfo: true,
                    viewLevel: 0x0
                  });
                  continue;
                case "6":
                  moduleRef19.default.instance.connect();
                  continue;
                case "7":
                  result114.default.instance.connect();
                  continue;
                case "8":
                  NET.asend(RequestId.GET_ALL_MY_MARCH_INFO, {}).then(arg759 => arg759 && arg759.marches && arg759.marches.forEach(arg760 => result113.default.newWorldMarchDataHandler(arg760)));
                  continue;
              }
              break;
            }
          }
          continue;
        case "1":
          var moduleRef16 = __require("NWorldMapController");
          continue;
        case "2":
          var moduleRef17 = __require("NWorldMapAssetLoader");
          continue;
        case "3":
          var result112 = obj97.dGIlS(__require, "NWorldMapMarchController");
          continue;
        case "4":
          var value84 = UserData.WorldCoord;
          continue;
        case "5":
          var result113 = obj97.dGIlS(__require, "MarchTools");
          continue;
        case "6":
          var moduleRef18 = __require("NWorldMapData");
          continue;
        case "7":
          var moduleRef19 = __require("NWorldMapTerritoryController");
          continue;
        case "8":
          var moduleRef20 = __require("NWorldMapTileController");
          continue;
        case "9":
          var result114 = obj97.fqjDa(__require, "NWorldMapModel");
          continue;
      }
      break;
    }
  },
  getMapArea(arg761) {
    var result115 = __require("NWorldMapUtils").NWorldMapUtils.game2cell(arg761);
    return __require("NWorldMapTerrainModel").NWorldMapTerrainModel.instance.getArea(result115.cellX, result115.cellY);
  },
  async updateMap(arg762) {
    var obj98 = {
      HkTnv: "WorldMapMsgs",
      zBbwN: "NWorldMapMarchController",
      aGssk: function (arg763, arg764) {
        return arg763 > arg764;
      },
      RfoQf: function (arg765, arg766) {
        return arg765 ^ arg766;
      },
      CeMDX: function (arg767, arg768) {
        return arg767 > arg768;
      },
      evOMu: function (arg769, arg770) {
        return arg769 ^ arg770;
      },
      sJHIj: "NWorldMapController"
    };
    var parts24 = "4|2|0|1|3".split("|");
    var num33 = 0x0;
    while (true) {
      switch (parts24[num33++]) {
        case "0":
          var value85 = __require("NWorldMapTerritoryModel").default.instance;
          continue;
        case "1":
          var moduleRef21 = __require("WorldMapMsgs");
          continue;
        case "2":
          var value86 = __require("NWorldMapMarchController").default.instance;
          continue;
        case "3":
          if (obj98.aGssk(arg762.x, obj98.RfoQf(0x260bb, 0x260bb)) && obj98.CeMDX(arg762.y, 0)) {
            var tmp87 = arg762.k || UserData.ServerId;
            var tmp88 = arg762.rid || obj98.evOMu(0xdc6c2, 0xdc6c2);
            var map2 = new Map();
            var tmp89;
            var tmp90 = await helper.its.asend(RequestId.GET_WORLD_INFO, {
              x: arg762.x,
              y: arg762.y,
              k: tmp87,
              rid: tmp88,
              width: 0x15,
              height: 0x1e,
              marchInfo: true,
              viewLevel: 0x1
            });
            if (tmp90 && tmp90.pointList) {
              tmp90.pointList.forEach(arg771 => tmp89 = value87.updateTileInfo(arg771, 1), tmp89 && map2.set(tmp89, true));
            }
            moduleRef21.send(moduleRef21.Names.WorldMapUpdateViewPort, map2);
            if (tmp90 && tmp90.marchList) {
              value86.model.dealMarchDataFromNowWorldMarchData(tmp90.marchList, true);
              value86.model.addMonsterDefenderMarchData();
            }
            moduleRef21.send(moduleRef21.Names.WorldMapMarchsInit, null);
            var tmp91 = await helper.its.asend(RequestId.GET_TERRITORY_INFO, {
              x: arg762.x,
              y: arg762.y,
              k: tmp87,
              width: 0xe,
              height: 0x14
            });
            if (tmp91 && tmp91.infos) {
              value85.clearAlianceTerritory();
              value85.updateAllianceTerritory(tmp91.infos, false, tmp87);
            }
            return tmp90;
          }
          continue;
        case "4":
          var value87 = __require("NWorldMapController").default.instance;
          continue;
      }
      break;
    }
  },
  async requestMyMarchData() {
    var moduleRef22 = __require("MarchTools");
    NET.asend(RequestId.GET_ALL_MY_MARCH_INFO, {}).then(arg772 => arg772 && arg772.marches && arg772.marches.forEach(arg773 => moduleRef22.default.newWorldMarchDataHandler(arg773)));
  },
  async randomPoint(arg774) {
    var obj99 = {
      Ziqit: function (arg775, arg776) {
        return arg775 ^ arg776;
      },
      vOnwE: function (arg777, arg778) {
        return arg777 ^ arg778;
      },
      FFBqj: function (arg779, arg780) {
        return arg779 - arg780;
      },
      ziSgk: function (arg781, arg782) {
        return arg781 * arg782;
      },
      iCzXR: function (arg783, arg784) {
        return arg783 ^ arg784;
      },
      lCWjb: function (arg785, arg786) {
        return arg785 + arg786;
      },
      ZzDEE: function (arg787, arg788) {
        return arg787 / arg788;
      },
      eUXpc: function (arg789, arg790) {
        return arg789 ^ arg790;
      },
      fgMdQ: function (arg791, arg792) {
        return arg791 ^ arg792;
      },
      AzzHV: "0|3|2|1|4",
      mLpAT: function (arg793, arg794) {
        return arg793 * arg794;
      },
      pVxSj: function (arg795, arg796) {
        return arg795 % arg796;
      },
      zswBE: function (arg797, arg798) {
        return arg797 == arg798;
      },
      IFzUI: function (arg799, arg800) {
        return arg799 <= arg800;
      }
    };
    function fn35() {
      var tmp92 = UserData.ServerId == UserData.OriginServerId ? [0, 6, 2, 4, 8] : [0, obj99.Ziqit(0x7c94a, 0x7c94e), 8, 6, 2];
      var value88 = GameDefine.currentWorldMapCrossServerModel.SelfFightZone;
      return tmp92[value88];
    }
    function fn36(arg801) {
      if (arg801 >= obj99.vOnwE(0x1ed18, 0x1ed18) && arg801 <= obj99.vOnwE(0x934eb, 0x934e2)) {
        arg801 = arg801 > 0 ? obj99.FFBqj(arg801, 1) : Math.min(Math.floor(obj99.ziSgk(Math.random(), obj99.iCzXR(0x67138, 0x67131))), 8);
        var result118 = MapUtils.getMapSize();
        var result119 = obj99.ziSgk(Math.floor(obj99.lCWjb(Math.floor(arg801 % obj99.iCzXR(0x74de7, 0x74de4)) * 2, 1) * result118.width / obj99.vOnwE(0x273c9, 0x273cf)), obj99.iCzXR(0xdb8ed, 0xdb8ef));
        var result120 = Math.floor(obj99.ZzDEE((Math.floor(arg801 / 3) * obj99.eUXpc(0xe4682, 0xe4680) + 1) * result118.height, obj99.vOnwE(0x44beb, 0x44bed)));
        if (result120 % obj99.fgMdQ(0xa0ee6, 0xa0ee4) == 1) {
          result120++;
        }
        return {
          x: result119,
          y: result120
        };
      }
    }
    function fn37(arg802) {
      var parts25 = "0|3|2|1|4".split("|");
      var num35 = 0x0;
      while (true) {
        switch (parts25[num35++]) {
          case "0":
            var result121 = Math.floor(arg802.x - 32 + obj99.mLpAT(Math.random(), 64));
            continue;
          case "1":
            if (result121 % 2 == 1 && result122 % 2 == 0) {
              result122++;
            }
            continue;
          case "2":
            if (obj99.pVxSj(result121, obj99.vOnwE(0xd4e64, 0xd4e66)) == 0 && obj99.zswBE(result122 % 2, obj99.eUXpc(0x87b24, 0x87b25))) {
              result122++;
            }
            continue;
          case "3":
            var result122 = Math.floor(arg802.y - obj99.eUXpc(0x3b51a, 0x3b53a) + Math.random() * 64);
            continue;
          case "4":
            return {
              x: result121,
              y: result122
            };
        }
        break;
      }
    }
    function fn38(arg803) {
      var result123 = __require("NWorldMapTerritoryController").default.instance.getAllianceIdByPoint(arg803.x, arg803.y);
      return MapUtils.checkTileArea(arg803.x, arg803.y, UserData.ServerId, 0) && MapUtils.checkCanMove(arg803.x, arg803.y) && (obj99.IFzUI(result123, 0) || result123 == UserData.Alliance.Aid);
    }
    arg774 = arg774 ? arg774 : fn35();
    var result116 = fn36(arg774);
    var result117 = fn37(result116);
    for (var num34 = 0; num34 < 100; result117 = fn37(result116), num34++) {
      var result116;
      var result117;
      var num34;
      if (fn38(result117)) {
        return result117;
      }
    }
  },
  async moveCity(arg804, arg805) {
    var obj100 = {
      tAmec: function (arg806, arg807) {
        return arg806 == arg807;
      },
      HxSEG: "1|2|4|3|0"
    };
    var moduleRef23 = __require("WorldMapMsgs");
    if (obj100.tAmec(0, UserData.myMarchNum)) {
      var parts26 = "1|2|4|3|0".split("|");
      var num36 = 0x0;
      while (true) {
        switch (parts26[num36++]) {
          case "0":
            return tmp94;
          case "1":
            var tmp93 = UserData.getItemAmount(0x30d43) > 0 && {
              itemId: 0x30d43,
              amount: 0x1,
              isPurchase: 0x0,
              x: arg804.x,
              y: arg804.y
            };
            continue;
          case "2":
            if (arg805) {
              var result124 = parseInt(GameTools.getDataConfigData(0x13471d9));
              var tmp94 = result124 && GameTools.getCitySkillConfigDataBySkinId(result124, 0);
              var tmp95 = result124 && UserData.getCitySkillDataById(result124);
              if (tmp95 && tmp94.times_perday > tmp95.Count) {
                tmp93 = {
                  itemId: 0x0,
                  amount: 0x0,
                  isPurchase: 0x0,
                  x: arg804.x,
                  y: arg804.y,
                  citySkill: 0x1
                };
              }
            }
            continue;
          case "3":
            if (tmp94) {
              moduleRef23.send(moduleRef23.Names.WorldMapUpdateViewPort, null);
            }
            continue;
          case "4":
            var tmp94 = tmp93 && (await helper.its.asend(RequestId.MOVE_CITY_POSITION, tmp93));
            continue;
        }
        break;
      }
    }
  },
  async randomMoveCity(arg808) {
    var obj101 = {
      kgYtv: function (arg809, arg810) {
        return arg809 ^ arg810;
      }
    };
    const result125 = obj101.kgYtv(0xb143b, 0xb143e);
    let num37 = 0;
    while (num37 < result125) {
      var tmp96 = await this.randomPoint(arg808);
      if (!tmp96) {
        num37++;
        continue;
      }
      var tmp97 = await this.moveCity(tmp96);
      if (tmp97) {
        return true;
      }
      num37++;
    }
    return false;
  }
};
helper.battle = {
  backup() {
    var obj102 = {
      lKhcx: function (arg811, arg812) {
        return arg811 ^ arg812;
      },
      EbKmX: "0|5|4|6|1|3|2",
      KnQuW: function (arg813, arg814) {
        return arg813(arg814);
      },
      GVtRC: function (arg815, arg816) {
        return arg815(arg816);
      }
    };
    var tmp98;
    var obj103 = {};
    tmp98 = CurBattleData;
    if (tmp98) {
      obj103.CurBattleData = Object.assign({}, tmp98);
      tmp98.Type = -obj102.lKhcx(0x7f419, 0x7f418);
      tmp98.Attacker = {};
      tmp98.Defender = {};
      tmp98.defenders = [];
      tmp98.extraArmy = {};
      tmp98.otherData = {};
    }
    tmp98 = NBattleModel;
    if (tmp98) {
      var parts27 = "0|5|4|6|1|3|2".split("|");
      var num38 = 0x0;
      while (true) {
        switch (parts27[num38++]) {
          case "0":
            obj103.NBattleModel = Object.assign({}, tmp98);
            continue;
          case "1":
            tmp98.attackerTraps = [];
            continue;
          case "2":
            tmp98.replenishAttackers = {};
            continue;
          case "3":
            tmp98.defenders = [];
            continue;
          case "4":
            tmp98.attackerHeros = [];
            continue;
          case "5":
            tmp98.attackers = [];
            continue;
          case "6":
            attackMechaList = [];
            continue;
        }
        break;
      }
    }
    tmp98 = obj102.KnQuW(__require, "NBattleDisplayObjectFacade");
    if (tmp98) {
      obj103.allArmys = tmp98.allArmys;
      tmp98.allArmys = new Map();
    }
    tmp98 = UIManager;
    if (tmp98 && tmp98.OpenUI) {
      obj103.OpenUI = tmp98.OpenUI;
      tmp98.OpenUI = () => { };
    }
    if (tmp98 && tmp98.CloseUI) {
      obj103.CloseUI = tmp98.CloseUI;
      tmp98.CloseUI = () => { };
    }
    tmp98 = EVENT;
    if (tmp98) {
      obj103.emit = tmp98.emit;
      tmp98.emit = this._emit;
    }
    tmp98 = obj102.KnQuW(__require, "NBattleMsgs");
    if (tmp98) {
      obj103.NBattleMsgs = {
        send: tmp98.send
      };
      tmp98.send = () => { };
    }
    tmp98 = obj102.GVtRC(__require, "MvcMsgs");
    if (tmp98) {
      obj103.MvcMsgs = {
        send: tmp98.send
      };
      tmp98.send = () => { };
    }
    return obj103;
  },
  restore(arg817) {
    var parts28 = "0|1|3|6|4|2|7|5".split("|");
    var num39 = 0x0;
    while (true) {
      switch (parts28[num39++]) {
        case "0":
          if (arg817.CurBattleData) {
            Object.assign(CurBattleData, arg817.CurBattleData);
          }
          continue;
        case "1":
          if (arg817.NBattleModel) {
            Object.assign(NBattleModel, arg817.NBattleModel);
          }
          continue;
        case "2":
          if (arg817.emit) {
            EVENT.emit = arg817.emit;
          }
          continue;
        case "3":
          if (arg817.allArmys) {
            __require("NBattleDisplayObjectFacade").allArmys = arg817.allArmys;
          }
          continue;
        case "4":
          if (arg817.CloseUI) {
            UIManager.CloseUI = arg817.CloseUI;
          }
          continue;
        case "5":
          if (arg817.MvcMsgs && arg817.MvcMsgs.send) {
            __require("MvcMsgs").send = arg817.MvcMsgs.send;
          }
          continue;
        case "6":
          if (arg817.OpenUI) {
            UIManager.OpenUI = arg817.OpenUI;
          }
          continue;
        case "7":
          if (arg817.NBattleMsgs && arg817.NBattleMsgs.send) {
            __require("NBattleMsgs").send = arg817.NBattleMsgs.send;
          }
          continue;
      }
      break;
    }
  },
  async acquire(arg818) {
    return (await this.mutex.acquire(arg818)) ? this.backup() : null;
  },
  release(arg819) {
    this.restore(arg819);
    return this.mutex.release();
  },
  _emit(arg820, arg821, arg822, arg823, arg824, arg825) {
    var obj104 = {
      EbXxy: function (arg826, arg827) {
        return arg826 == arg827;
      }
    };
    if (obj104.EbXxy(arg820, EventId.ENI_CONQUEROR_FUNC_MINE_SEND_ARMY)) {
      EVENT.__proto__.emit.call(EVENT, arg820, arg821, arg822, arg823, arg824, arg825);
    }
  },
  preCheck(arg828, arg829, arg830) {
    var obj105 = {
      fFTAm: "MechaController",
      eyWqZ: function (arg831, arg832) {
        return arg831 == arg832;
      },
      eTApZ: function (arg833, arg834) {
        return arg833 <= arg834;
      },
      CSdKu: function (arg835, arg836) {
        return arg835 % arg836;
      },
      ghZKv: function (arg837, arg838) {
        return arg837 ^ arg838;
      },
      cYKod: function (arg839, arg840) {
        return arg839 == arg840;
      },
      FyNFU: function (arg841, arg842) {
        return arg841 ^ arg842;
      },
      tTaTz: function (arg843, arg844) {
        return arg843 == arg844;
      },
      MNOVv: function (arg845, arg846) {
        return arg845 ^ arg846;
      },
      rrBkT: function (arg847, arg848) {
        return arg847 ^ arg848;
      },
      sBjGA: function (arg849, arg850) {
        return arg849 ^ arg850;
      }
    };
    const value89 = __require("MechaController").MechaState;
    const arr6 = [value89.CanFight];
    if (arg830?.["allow_marching"]) {
      arr6.push(value89.Marching);
    }
    if (arg830?.["allow_damaged_mecha"]) {
      arr6.push(value89.Damage);
    }
    if (arg829 == undefined) {
      arg829 = 1;
    }
    const result126 = GameTools.getAttackerMyArmys(false, !arg830?.["allow_marching"], false, !!arg830?.["allow_damaged_mecha"]);
    if (obj105.eyWqZ(arg828, -1) || obj105.eyWqZ(arg828, 0)) {
      return result126.some(arg851 => !arg851.battleMechaData || arr6.includes(this.mechaState(arg851.battleMechaData.mechaId)));
    }
    if (arg828 >= 1 && obj105.eTApZ(arg828, 9) || arg828 >= 11 && obj105.eTApZ(arg828, 19)) {
      const result127 = PresetMarchController.getPreMarchDataByType(Math.floor(arg828 / 10)).getPreMarchByIndex(obj105.CSdKu(arg828, obj105.ghZKv(0xbcefd, 0xbcef7)) - 1);
      if (!result127) {
        return false;
      }
      const result128 = result127.Armys.filter(arg852 => arg852 && arg852.ArmyId > 0);
      if (obj105.cYKod(result128.length, obj105.FyNFU(0x7c742, 0x7c742))) {
        return false;
      }
      if (arg829 == 1 || arg829 == obj105.FyNFU(0x8906f, 0x8906d)) {
        for (const tmp99 of result127.HeroIds) {
          if (UserData.Heros[tmp99]?.["State"] != 0) {
            return false;
          }
        }
      }
      if (obj105.tTaTz(arg829, 1) || arg829 == obj105.MNOVv(0xc81f1, 0xc81f2)) {
        const obj106 = {};
        for (const tmp100 of result126) {
          obj106[tmp100.armyID] = (obj106[tmp100.armyID] || obj105.rrBkT(0x1aba7, 0x1aba7)) + 1;
        }
        for (const tmp101 of result128) {
          if (tmp101.isMecha && !arr6.includes(this.mechaState(tmp101.mechaId))) {
            return false;
          }
          if (!tmp101.isMecha) {
            if (!obj106[tmp101.ArmyId] || (obj106[tmp101.ArmyId] -= tmp101.Num) < 0) {
              return false;
            }
          }
        }
        return true;
      }
      if (arg829 == obj105.sBjGA(0xac0c0, 0xac0c0)) {
        for (const tmp102 of result128) {
          if (tmp102.isMecha && arr6.includes(this.mechaState(tmp102.mechaId))) {
            return true;
          }
          if (!tmp102.isMecha && result126.find(arg853 => arg853.armyID == tmp102.ArmyId)) {
            return true;
          }
        }
        return false;
      }
      if (obj105.tTaTz(arg829, 2)) {
        for (const tmp103 of result128) {
          if (tmp103.isMecha && arr6.includes(this.mechaState(tmp103.mechaId))) {
            return true;
          }
          if (!tmp103.isMecha) {
            const result129 = TABLE.getTableDataById(TableName.ARMY, tmp103.ArmyId);
            if (result126.find(arg854 => arg854.ArmyData.type == result129.type && arg854.ArmyData.level <= result129.level)) {
              return true;
            }
          }
        }
        return false;
      }
    }
    return false;
  },
  mechaState(arg855) {
    return MechaController.getMechaStateByMecha(MechaController.getMyMechaList(arg855)[0]);
  },
  mechaOk(arg856) {
    const value90 = __require("MechaController").MechaState;
    return this.mechaState(arg856) == value90.CanFight;
  },
  isReady(arg857, arg858, arg859) {
    return helper.tools.canMarch && this.preCheck(arg857, arg858, arg859) || false;
  },
  format_n(arg860, arg861, arg862) {
    var obj107 = {
      OGimX: "NBattlePositionBiz",
      anWdS: function (arg863, arg864) {
        return arg863(arg864);
      },
      ngqEQ: "QuickArmyEnterBtn",
      qWklS: function (arg865, arg866) {
        return arg865 == arg866;
      },
      CEioB: function (arg867, arg868) {
        return arg867 ^ arg868;
      },
      hXTFC: function (arg869, arg870) {
        return arg869 > arg870;
      },
      JksaB: function (arg871, arg872) {
        return arg871 >= arg872;
      },
      ArVKJ: function (arg873, arg874) {
        return arg873 / arg874;
      },
      okbUG: function (arg875, arg876) {
        return arg875 % arg876;
      },
      RGVvc: function (arg877, arg878) {
        return arg877(arg878);
      }
    };
    const value91 = __require("MechaController").MechaState;
    const value92 = __require("FightFormationAdvController").default.Instance;
    const value93 = __require("NBattlePositionBiz").NBattlePositionBiz;
    const value94 = obj107.anWdS(__require, "QuickArmyEnterBtn").default;
    const value95 = __require("BattleEmPanel").default;
    NBattleModel.myMaxArmysNum = value93.getPositionCount(UserData.Level);
    if (!CurBattleData.Attacker.armys) {
      CurBattleData.Attacker.armys = [];
    }
    if (arg862?.["assembly_time"]) {
      CurBattleData.otherData.assemblytime = arg862.assembly_time;
    }
    const arr7 = [value91.CanFight];
    if (arg862?.["allow_marching"]) {
      arr7.push(value91.Marching);
    }
    if (arg862?.["allow_damaged_mecha"]) {
      arr7.push(value91.Damage);
    }
    if (obj107.qWklS(arg860, -obj107.CEioB(0xe1b6d, 0xe1b6c))) {
      let result130 = CurBattleData.Attacker.armys.filter(arg879 => !arg879.battleMechaData);
      if (result130.length == 0) {
        result130 = CurBattleData.Attacker.armys.filter(arg880 => arg880.battleMechaData && arr7.includes(this.mechaState(arg880.battleMechaData.mechaId)));
      }
      if (obj107.hXTFC(result130.length, 0)) {
        const result131 = result130.reduce((arg881, arg882) => arg881.ArmyData.power <= arg882.ArmyData.power ? arg881 : arg882);
        if (result131) {
          if (result131.battleMechaData) {
            NBattleModel.setAtttackmechaId(result131.battleMechaData.mechaId, true);
          }
          NBattleModel.createAttackArmyByCount([result131]);
        }
      }
    }
    if (arg860 == 0) {
      value94.prototype.onClick();
    }
    if (obj107.JksaB(arg860, 1) && arg860 <= 9 || arg860 >= 11 && arg860 <= 19) {
      const result132 = PresetMarchController.getPreMarchDataByType(Math.floor(obj107.ArVKJ(arg860, 10)));
      const tmp104 = result132 && result132.getPreMarchByIndex(arg860 % obj107.CEioB(0xd03bc, 0xd03b6) - 1);
      if (tmp104) {
        const result133 = result132.getFormationV2ByIndex(obj107.okbUG(arg860, obj107.CEioB(0x4a6ac, 0x4a6a6)) - 1);
        if (!value92.getAdvFormationMarching(result133)) {
          CurBattleData.otherData.formationData = result133 ? {
            formationV2: result133
          } : null;
          NBattleModel.updateEmStageFormations();
        }
        const result134 = Object.assign(new value95(), {
          _PresetMarchNum: arg860 % obj107.CEioB(0x6fcb9, 0x6fcb3) - 1
        });
        result134.InitPresetMarchHeroAndArmys();
        const result135 = tmp104.Armys.find(arg883 => arg883.isMecha);
        if (result135 && NBattleModel.attackers[result135.Pos]?.["length"] == 1) {
          NBattleModel.attackers[result135.Pos] = obj107.RGVvc(Array, NBattleModel.getMaxCoutByPos(result135.Pos)).fill(NBattleModel.attackers[result135.Pos][obj107.CEioB(0x4284b, 0x4284b)]);
        }
        const obj108 = {
          heros: tmp104.HeroIds,
          armys: tmp104.Armys,
          extra: tmp104.extraArmy,
          formation: result133
        };
        if (arg862?.["replenish"]) {
          this.replenish(obj108, arg862.replenish, arr7);
        }
        if (arg862?.["restock"]) {
          this.restock(obj108, arg862.restock, arr7);
        }
        if (arg862?.["check_heros"] && obj108.heros.find(arg884 => NBattleModel.attackerHeros.indexOf(arg884) == -1)) {
          return false;
        }
      }
    }
    this.limit(arg861);
    return NBattleModel.attackerArmyCount > obj107.CEioB(0xad70e, 0xad70e);
  },
  format_o(arg885, arg886, arg887) {
    var obj109 = {
      tRzYk: function (arg888, arg889) {
        return arg888 ^ arg889;
      },
      tVuev: function (arg890, arg891) {
        return arg890 ^ arg891;
      },
      xpHlz: function (arg892, arg893) {
        return arg892 ^ arg893;
      },
      LoCKq: function (arg894, arg895) {
        return arg894(arg895);
      },
      KLQYu: function (arg896, arg897) {
        return arg896 ^ arg897;
      }
    };
    const value96 = __require("MechaController").MechaState;
    const value97 = __require("NBattlePositionBiz").NBattlePositionBiz;
    NBattleModel.myMaxArmysNum = value97.getPositionCount(UserData.Level);
    if (!CurBattleData.Attacker.armys) {
      CurBattleData.Attacker.armys = [];
    }
    if (arg887?.["assembly_time"]) {
      CurBattleData.otherData.assemblytime = arg887.assembly_time;
    }
    const arr8 = [value96.CanFight];
    if (arg887?.["allow_marching"]) {
      arr8.push(value96.Marching);
    }
    if (arg887?.["allow_damaged_mecha"]) {
      arr8.push(value96.Damage);
    }
    if (arg885) {
      const obj110 = {
        heros: arg885.heros || [],
        armys: arg885.armys || [],
        extra: arg885.extra || [],
        formation: arg885.formation
      };
      NBattleModel.attackerHeros = obj110.heros;
      CurBattleData.otherData.formationData = obj110.formation ? {
        formationV2: obj110.formation
      } : null;
      NBattleModel.updateEmStageFormations();
      const result136 = CurBattleData.Attacker.armys.concat();
      const obj111 = {};
      for (const tmp105 of obj110.armys) {
        if (tmp105 && tmp105.ArmyId) {
          const value98 = tmp105.Pos;
          let result137 = NBattleModel.getMaxCoutByPos(value98);
          for (let tmp106 = result136.length - obj109.tRzYk(0x85bad, 0x85bac); tmp106 >= 0 && result137 > 0; tmp106--) {
            if (result136[tmp106].armyID == tmp105.ArmyId) {
              if (!obj111[value98]) {
                obj111[value98] = [];
              }
              obj111[value98].push(result136[tmp106]);
              result137--;
              result136.splice(tmp106, 1);
            }
          }
        }
      }
      for (const tmp107 of obj110.extra) {
        if (tmp107 && tmp107.ArmyId) {
          const value99 = tmp107.Pos;
          let result138 = NBattleModel.getMaxCoutByPos(value99);
          for (let tmp108 = result136.length - obj109.tVuev(0x8db6c, 0x8db6d); tmp108 >= obj109.tVuev(0x5195b, 0x5195b) && result138 > 0; tmp108--) {
            if (result136[tmp108].armyID == tmp107.ArmyId) {
              if (!obj111[value99]) {
                obj111[value99] = [];
              }
              obj111[value99].push(result136[tmp108]);
              result138--;
              result136.splice(tmp108, obj109.xpHlz(0x69a3e, 0x69a3f));
            }
          }
        }
      }
      for (const tmp109 in obj111) {
        if (obj111[tmp109][obj109.tRzYk(0xde2b0, 0xde2b0)]) {
          const value100 = obj111[tmp109][0].battleMechaData;
          if (!(value100 && value100.mechaId && value100.mechaId == obj109.tVuev(0x3538d, 0x35064))) {
            NBattleModel.createAttackArmyByCount(obj111[tmp109], obj109.LoCKq(Number, tmp109), -1, 0, obj109.KLQYu(0x8aac2, 0x8aac2), obj109.xpHlz(0xc4501, 0xc4501));
          }
        }
      }
      if (arg887?.["replenish"]) {
        this.replenish(obj110, arg887.replenish, arr8);
      }
      if (arg887?.["restock"]) {
        this.restock(obj110, arg887.restock, arr8);
      }
    }
    this.limit(arg886);
    return NBattleModel.attackerArmyCount > 0;
  },
  replenish(arg898, arg899, arg900) {
    this.restock(arg898, arg899, arg900);
  },
  restock(arg901, arg902, arg903) {
    var obj112 = {
      anlIE: function (arg904, arg905) {
        return arg904 == arg905;
      },
      aJwKc: function (arg906, arg907) {
        return arg906 ^ arg907;
      },
      gGqAZ: function (arg908, arg909) {
        return arg908 ^ arg909;
      },
      PqUDd: function (arg910, arg911) {
        return arg910 ^ arg911;
      },
      NPLEH: function (arg912, arg913) {
        return arg912 * arg913;
      },
      mNUon: function (arg914, arg915) {
        return arg914 * arg915;
      },
      eSWOB: function (arg916, arg917) {
        return arg916 ^ arg917;
      },
      yvSLj: function (arg918, arg919) {
        return arg918 > arg919;
      }
    };
    if (!arg902) {
      return;
    }
    if (obj112.anlIE(arg902.mecha, undefined)) {
      arg902.mecha = true;
    }
    if (arg902.army == undefined) {
      arg902.army = true;
    }
    var obj113 = {};
    var obj114 = {};
    var result139 = NBattleModel.attackers.concat(Object.values(NBattleModel.replenishAttackers)).reduce((arg920, arg921) => arg920.concat(arg921 || []), []);
    for (var tmp110 of result139) {
      var value101 = tmp110.BattleItemCoreData.armyid;
      if (!obj113[value101]) {
        obj113[value101] = {
          num: 0x0,
          list: []
        };
      }
      obj114[tmp110.BattleItemCoreData.id] = 1;
      obj113[value101].num--;
    }
    for (var tmp110 of CurBattleData.Attacker.armys) {
      var value101 = tmp110.armyID;
      if (!obj113[value101]) {
        obj113[value101] = {
          num: 0x0,
          list: []
        };
      }
      if (!obj114[tmp110.serverID]) {
        obj113[value101].list.push(tmp110);
      }
      obj113[value101].num++;
    }
    if (arg902.full) {
      var result140 = arg901.armys.find(arg922 => !arg922.isMecha && arg922.ArmyId);
      if (result140) {
        var result141 = arg901.armys.filter(arg923 => arg923.ArmyId);
        for (var result142 = obj112.aJwKc(0x1e850, 0x1e850); result142 < 9; result142++) {
          if (!result141.find(arg924 => arg924.Pos == result142)) {
            result141.push(Object.assign({}, result140, {
              Pos: result142
            }));
          }
        }
        arg901.armys = result141.sort((arg925, arg926) => arg925.Pos - arg926.Pos);
      }
    }
    var tmp111 = CurBattleData.otherData.formationData ? arg901.armys.concat(arg901.extra) : arg901.armys;
    for (var tmp110 of tmp111) {
      var value102 = tmp110.Pos;
      if (tmp110.ArmyId && !NBattleModel.attackers[value102] && !NBattleModel.replenishAttackers[value102]) {
        var result143 = TABLE.getTableDataById(TableName.ARMY, tmp110.ArmyId);
        if (result143 && result143.mecha_id) {
          var tmp112 = arg902.mecha && MechaController.getMyMechaList().filter(arg927 => arg903.includes(this.mechaState(arg927.mechaId)) && arg927.mechaServerData.armyType == result143.type).sort((arg928, arg929) => arg929.power - arg928.power);
          if (tmp112 && tmp112.length) {
            var value103 = tmp112[0];
            var value101 = MechaController.getMechaArmyCfg(value103, value103.mechaServerData.armyType).id;
            var result144 = NBattleModel.getMaxCoutByPos(value102);
            if (result144 > obj112.gGqAZ(0x9a5d1, 0x9a5d1) && obj113[value101] && obj113[value101].num > obj112.aJwKc(0xd83a8, 0xd83a8)) {
              NBattleModel.setAtttackmechaId(value103.mechaId, true);
              NBattleModel.createAttackArmyByCount(obj113[value101].list.splice(-result144), value102);
              obj113[value101].num -= result144;
              continue;
            }
          }
          result143 = arg902.army && tmp111.map(arg930 => TABLE.getTableDataById(TableName.ARMY, arg930.ArmyId)).find(arg931 => arg931.type == result143.type && arg931.id != result143.id);
        }
        if (result143) {
          if (!arg902.army) {
            continue;
          }
          var result144 = NBattleModel.getMaxCoutByPos(value102);
          var tmp112 = Object.values(obj113).filter(arg932 => arg932.num > 0 && arg932.list[0].ArmyData.type == result143.type && arg932.list[0].ArmyData.mecha_id == 0 && arg932.list[0].ArmyData.level <= result143.level && arg932.list[0].ArmyData.army_fight_type < 2).sort((arg933, arg934) => arg934.list[0].ArmyData.level - arg933.list[0].ArmyData.level);
          var num40 = 0;
          var num41 = 0;
          for (var value101 = obj112.PqUDd(0x891e4, 0x891e4); value101 < tmp112.length; value101++) {
            var result145 = Math.min(result144, tmp112[value101].num);
            if (obj112.NPLEH(result145, tmp112[value101].list[0].ArmyData.power_new) > obj112.mNUon(num40, tmp112[num41].list[obj112.eSWOB(0x67a5f, 0x67a5f)].ArmyData.power_new)) {
              num41 = value101;
              num40 = result145;
            }
          }
          if (num40 > 0 && obj112.yvSLj(tmp112[num41].num, 0)) {
            NBattleModel.createAttackArmyByCount(tmp112[num41].list.splice(-num40), value102);
            tmp112[num41].num -= num40;
          }
        }
      }
    }
  },
  limit(arg935) {
    var obj115 = {
      vkmnZ: function (arg936, arg937) {
        return arg936 == arg937;
      }
    };
    if (arg935) {
      var tmp113 = NBattleModel.attackerArmyCount - arg935;
      for (var tmp114 = NBattleModel.attackers.length - 1; tmp113 > 0 && tmp114 >= 0; tmp114--) {
        if (NBattleModel.attackers[tmp114]) {
          while (tmp113 > 0 && NBattleModel.attackers[tmp114].length) {
            NBattleModel.attackers[tmp114].pop();
            tmp113--;
          }
          if (obj115.vkmnZ(NBattleModel.attackers[tmp114].length, 0)) {
            NBattleModel.attackers[tmp114] = null;
          }
        }
      }
    }
  },
  format(arg938, arg939, arg940) {
    switch (typeof arg938) {
      case "number":
        return this.format_n(arg938, arg939, arg940);
      case "object":
        return this.format_o(arg938, arg939, arg940);
    }
  },
  startFight() {
    return this.realFight();
  },
  realFight() {
    return new Promise(arg941 => {
      var parts29 = "1|2|0|4|3".split("|");
      var num42 = 0x0;
      while (true) {
        switch (parts29[num42++]) {
          case "0":
            NET.send = function (arg942, arg943, arg944, arg945, arg946, arg947) {
              return value104.call(this, arg942, arg943, arg944, arg948 => arg941(arg948.d && GameTools.JSON_PARSE(arg948.d)), arg946, arg947);
            };
            continue;
          case "1":
            var value104 = NET.send;
            continue;
          case "2":
            var value105 = NET.sendPBV2;
            continue;
          case "3":
            try {
              NBattleModel.startFight({});
              setTimeout(arg941, 5000);
            } finally {
              NET.send = value104;
              NET.sendPBV2 = value105;
            }
            continue;
          case "4":
            NET.sendPBV2 = function (arg949, arg950, arg951, arg952, arg953, arg954) {
              return value105.call(this, arg949, arg950, arg952, arg955 => arg941(arg955.pbAckV2.header && 0 === arg955.pbAckV2.header.s && arg955.pbAckV2.data), arg954, arg953);
            };
            continue;
        }
        break;
      }
    });
  },
  march(arg956, arg957, arg958) {
    var obj116 = {
      FYvBf: "object",
      ZDfZK: "function",
      jpbvu: function (arg959, arg960) {
        return arg959 ^ arg960;
      },
      MbKzY: function (arg961) {
        return arg961();
      }
    };
    var tmp115 = typeof arguments[3] == "object" ? arguments[3] : {};
    var tmp116 = typeof arguments[3] == "function" && arguments[obj116.jpbvu(0xe6b2b, 0xe6b28)] || typeof arguments[obj116.jpbvu(0x340f5, 0x340f1)] == "function" && arguments[4];
    MarchController.connect();
    var result146 = this.backup();
    try {
      arg958();
      var tmp117 = CurBattleData?.["Type"] >= 0;
      return tmp117 && this.format(arg956, arg957, tmp115) && (!tmp116 || obj116.MbKzY(tmp116)) && this.startFight();
    } finally {
      this.restore(result146);
    }
  }
};
helper.std = {
  openRadar() {
    var obj117 = {
      TGngb: function (arg962, arg963) {
        return arg962(arg963);
      },
      KPWeJ: function (arg964, arg965) {
        return arg964 ^ arg965;
      }
    };
    helper.cleanup();
    obj117.TGngb(asleep, obj117.KPWeJ(0xa6105, 0xa6137)).then(() => cc.find("UICanvas/PopLayer")?.["childrenCount"] > 0 || (CSHuntController.isOpenNewRadar() ? UIManager.OpenUI(UIDataInfo.RadarMainPrefabNew2) : UIManager.OpenUI(UIDataInfo.RadarMainPrefab)));
  },
  openAlliance() {
    helper.cleanup();
    if (!helper.click("MainUIWrapper/NMainUI[0,1]/RightBottom/btnAlliance/btnAlliance")) {
      helper.click("WorldMapUIWrapper/AbyssWorldUI/RightBottom/btnAlliance/btnAlliance");
    }
  },
  openHero() {
    helper.cleanup();
    if (!helper.click("MainUIWrapper/NMainUI[0,1]/RightBottom/btnHero")) {
      helper.click("WorldMapUIWrapper/AbyssWorldUI/RightBottom/btnHero");
    }
  },
  openMail() {
    helper.cleanup();
    if (!helper.click("MainUIWrapper/NMainUI[0,1]/RightBottom/btnMail")) {
      helper.click("WorldMapUIWrapper/AbyssWorldUI/RightBottom/btnMail");
    }
  },
  openBag() {
    helper.cleanup();
    if (!helper.click("MainUIWrapper/NMainUI[0,1]/RightBottom/btnBag")) {
      helper.click("WorldMapUIWrapper/AbyssWorldUI/RightBottom/btnBag");
    }
  },
  openDaily() {
    helper.cleanup();
    if (!helper.click("MainUIWrapper/NMainUI[0,1]/Bottom/QuestNode/layoutNode/DailyQuestNode/icon")) {
      helper.click("WorldMapUIWrapper/NWorldMapUI/leftBottomNode/dailyQuestNewNode/DailyQuestNode/icon");
    }
  },
  openTask() {
    helper.cleanup();
    if (!helper.click("MainUIWrapper/NMainUI[0,1]/Bottom/QuestNode/layoutNode/MainQuestNode/icon")) {
      helper.click("WorldMapUIWrapper/NWorldMapUI/leftBottomNode/extraNode/QuestNode/layoutNode/MainQuestNode/icon");
    }
  },
  openUserInfo() {
    helper.cleanup();
    helper.click("MainUIWrapper/NMainUI[0,1]/Top/mainTopNode/AuthorBtn");
  },
  openWarHall() {
    helper.cleanup();
    asleep(50).then(() => cc.find("UICanvas/PopLayer")?.["childrenCount"] > 0 || UIManager.OpenUI(UIDataInfo.ProtectCastleAssitantPanelNew, 2));
  },
  openSearch() {
    helper.cleanup();
    if (!helper.click("WorldMapUIWrapper/NWorldMapUI/bottomNode/btn_Fight")) {
      helper.click("PopLayer/UIFrameNone/CONTENT/prefabMonsterSearchNew/bg_1/MonsterSearch/btnFix");
    }
  },
  joinAssembly() {
    helper.cleanup();
    if (!helper.click("MainUIWrapper/NMainUI[0,1]/RightBottom/btnAlliance/AssemblyMailTipsNode/prefabAssemblyMailTips")) {
      helper.click("PopLayer/UIFrameScreen/CONTENT/AllianceAssemlbyPop/scrollView/view/content/item/2nd_bg_22/New Node/New ScrollView/view/attackLayout/playericon[0,1]/AddNode/img_playerIcon_bg");
    }
  },
  presetList(arg966) {
    var obj118 = {
      XEMCS: "Bottom/New Layout/btn1",
      XKyZs: "quickArmyNode",
      cXBiA: function (arg967, arg968) {
        return arg967 ^ arg968;
      },
      EclmZ: function (arg969, arg970) {
        return arg969 <= arg970;
      },
      askiT: function (arg971, arg972) {
        return arg971 - arg972;
      },
      golKP: "/normal"
    };
    const result147 = cc.find("UICanvas/PopLayer/NBattleMain/ui/BattlePanel");
    if (!result147 || !isVisible(result147)) {
      return false;
    }
    if (arg966 == -1) {
      const result148 = result147.getComponent("BattleEmPanel");
      if (result148 && result148.InitSingleArmys) {
        result148.InitSingleArmys();
      }
    }
    if (arg966 == 0) {
      const result149 = cc.find("Bottom/New Layout/btn1", result147);
      result149.getComponent("QuickArmyEnterBtn").onClick();
      result149.getChildByName("supplementArmyNode").active = false;
      result149.getChildByName("quickArmyNode").active = true;
    }
    if (arg966 > obj118.cXBiA(0x7e49c, 0x7e49c) && obj118.EclmZ(arg966, 9)) {
      const result150 = cc.find("Bottom/New Layout/presetList/" + obj118.askiT(arg966, obj118.cXBiA(0xca9e3, 0xca9e2)) + "/normal", result147);
      if (result150) {
        helper.click(result150);
      }
    }
    return true;
  },
  _closeLayer(arg973) {
    var result151 = find(arg973);
    var result151 = result151 && result151.children.filter(arg974 => arg974.active).pop();
    var tmp118 = result151 && result151._components.find(arg975 => arg975.dataInfo);
    var tmp119 = tmp118 && result151.getComponentInChildren(tmp118.dataInfo.name) || result151 && result151.getComponent(result151._name);
    return tmp119 && tmp119.onBtnCloseClick && (tmp119.onBtnCloseClick(), true) || tmp119 && tmp119.onBtnClickClose && (tmp119.onBtnClickClose(), true) || tmp118 && tmp118.close && (tmp118.close(), true) || tmp118 && __require("UIManager").default.Instance().CloseUI(tmp118.dataInfo);
  },
  _closeMsgBox() {
    var result152 = find("New Node/New Node", cc.director._scene);
    var tmp120 = result152 && result152.getComponentInChildren("MsgBoxComponent");
    return tmp120 && (__require("MsgBox").close(tmp120), true);
  },
  _close3DNewSphereScene() {
    var result153 = cc.find("Canvas/NewSphereScene");
    var tmp121 = result153 && result153.getComponent("NewConquerorSphereMain");
    return tmp121 && (tmp121.backToWorld(), true);
  },
  _closeTopLayer() {
    return this._closeLayer("TopLayer");
  },
  _closeTipsLayer() {
    return this._closeLayer("TipsLayer");
  },
  _closeBattle() {
    var tmp122 = helper.click("PopLayer/UIFrameDialog/BG/CLOSE") || helper.click("PopLayer/AdventureBattleWinPanel/bg_black") || helper.click("PopLayer/ArenaBattleWinPanel/ArenaPvePanel1/button_back") || helper.click("PopLayer/ArenaBattleWinPanel/ArenaPvePanel1/backAndRetry/button_back") || helper.click("PopLayer/BattleWinPanel/btn1/button_back") || helper.click("PopLayer/BattleLosePanel/content/Type2/button_back") || helper.click("PopLayer/NBattleMain/ui/BattlePanel/Top/button") || helper.click("PopLayer/NBattleMain/ui/BattleingPanel/Top/skipBtn") || helper.click("PopLayer/NBattleMain/ui/BattleingPanel/Top/btnBack") || helper.click("PopLayer/UIFrameNone[0,1]/CONTENT/MonsterLabBattleWinPanel/ArenaPvePanel1/button_back");
    helper.click(find("New Node/New Node/MsgBoxComponent/OUTER/INNER/BUTTONS/BUTTON[0,1]", cc.director._scene));
    return tmp122;
  },
  _closePrior() {
    return helper.click("PopLayer/UIFrameNone/CONTENT/HeroRecruitResultPopupNew3/jump") || helper.click("PopLayer/UIFrameNone/CONTENT/HeroRecruitResultPopupNew3/X") || helper.click("PopLayer/UIFrameNone/CONTENT/HeroRecruitPopupNew/HEADER/CLOSE") || helper.click("PopLayer/UIFrameNone/CONTENT/MechaTowerWinPanel/btn1/button_back") || helper.click("PopLayer/UIFrameNone/CONTENT/MechaTowerLosePanel/bg_black") || helper.click(cc.find("Canvas/content/MBattleMain/ui/btnBack"));
  },
  _closePopLayer() {
    return find("PopLayer/NBattleMain") ? this._closeBattle() : this._closePrior() || this._closeLayer("PopLayer");
  },
  _closeOther() {
    helper.click("MainUIWrapper/NMainUI[0,1]/leftNode/PrefabPlaceHolder/New Node[1]/MainUiShortcutview/MainNode/openNode/CloseNode");
  },
  close() {
    helper.cleanup();
    if (!(this._closeMsgBox() || this._close3DNewSphereScene() || this._closeTopLayer() || this._closeTipsLayer() || this._closePopLayer())) {
      this._closeOther();
    }
  },
  _assembly() {
    return helper.click("PopLayer/UIFrameNone/CONTENT/NWorldUIRefugeeCamp/2nd_bg_3/btnLayout/Btn") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldMapAssemblyEnemyComponent/2nd_bg_3/New Layout/Btn");
  },
  _attack() {
    return helper.click("PopLayer/UIFrameNone/CONTENT/NEightCountryCanBuildingPop/2nd_bg_3/Layout/btnSustainAttack") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldTowerPopup/widgetNode/2nd_bg_3/enemyNode/btnSustainAttack") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldMapEnemy/2nd_bg_3/btnNode/Btn") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldMapNEnemy/2nd_bg_3/btnNode/Btn") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldEmpireStorehousePopup/2nd_bg_3/contentNode/rewardNode/layout/attackBtn") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldCityPopup/2nd_bg_3/Layout/BtnAttack") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldEmpireStorehousePopup/2nd_bg_3/contentNode/rewardNode/attackBtn") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldResourcePopup/2nd_bg_3/enemyPopNode/bottomNode/btnNode/AttackBtn") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldTowerPopup/widgetNode/2nd_bg_3/enemyNode/btn2") || helper.click("PopLayer/UIFrameNone/CONTENT/NEightCountryCanBuildingPop/2nd_bg_3/Layout/BtnAttack") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldMapAssemblyEnemyComponent/2nd_bg_3/New Layout/attackBtn") || helper.click("PopLayer/UIFrameNone/CONTENT/DimMineDetailView/Btn") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldUIMilitaryQuest/2nd_bg_3/attackNode/attackBtn") || helper.click("PopLayer/UIFrameNone/CONTENT/WorldEntitePop/2nd_bg_3/btnNode/continuousFightBtn") || helper.click("PopLayer/UIFrameNone/CONTENT/AdventureBossChallengePanel/btnFight") || helper.click("PopLayer/AdventureBattleWinPanel/Node2/Type2/button_back") || helper.click("PopLayer/WorldBossDetailPanel/2nd_bg_3/attackBtn");
  },
  _gather() {
    return helper.click("PopLayer/UIFrameNone/CONTENT/NWorldResourcePopup/2nd_bg_3/nobodyPopNode/New Layout/New Layout/btnFix") || helper.click("PopLayer/UIFrameNone/CONTENT/prefabWorldUIRadarEnemy/2nd_bg_3/btnNode/Btn") || helper.click("PopLayer/UIFrameNone/CONTENT/NWorldTowerPopup/widgetNode/2nd_bg_3/friendNode/friendArmyNode") || helper.click("PopLayer/WorldSiteDetailPanel/top/btnInfo") || helper.click("PopLayer/UIFrameNone/CONTENT/NEightCountryCanBuildingPop/2nd_bg_3/Layout/BtnAssistance") || helper.click("PopLayer/UIFrameNone/CONTENT/ActivityworldpowerPopPR/btn") || helper.click("PopLayer/UIFrameNone/CONTENT/EniConquerorGatherWorldPop/2nd_bg_3/btnContent/attackBtn") || helper.click("PopLayer/AirDropPanel/2nd_bg_3/Btn");
  },
  _march() {
    var obj119 = {
      miGlr: function (arg976, arg977) {
        return arg976(arg977);
      }
    };
    var result154 = obj119.miGlr(find, "PopLayer/UIFrameNone/CONTENT/NWorldMapAssemblyEnemyComponent/2nd_bg_3/2nd_bg_21/2nd_title_14/nameLabel");
    if (result154) {
      result154 = result154.getComponent(cc.Label).string.includes("军团");
    }
    return !result154 && this._assembly() || this._attack() || this._gather();
  },
  _movecity() {
    return helper.click(cc.find("Canvas/NWorldMap/NWorldMapContainer/nomalLayer/ui/NWorldTilePopup/btnNodes/btn1"));
  },
  _forget() {
    return helper.click("PopLayer/UIFrameNone[1]/CONTENT/HeroDetailSkillPopup/2nd_bg_3/skill1/content/Bottom/ExclusiveSkill/NewLayout/rBtn") && helper.click("TipsLayer/ConfirmPanel/New Layout[1]/button_yes");
  },
  _study() {
    return helper.click("PopLayer/UIFrameNone[0,1]/CONTENT/HeroSkillPanel/bottomBg/btnEquip");
  },
  _skill() {
    return this._study() || this._forget();
  },
  _useskin() {
    return helper.click("PopLayer/UIFrameScreenWithBottom/CONTENT/UserInfoMainPanel/contentNode/towerNode/skinNode/DetailNode/nowUseBtn");
  },
  _dblclick() {
    return false;
  },
  _defaultDblClick() {
    return this._march() || this._movecity() || this._skill() || this._useskin() || this._dblclick();
  },
  _toggleScene() {
    helper.cleanup();
    return helper.click("MainUIWrapper/NMainUI[0,1]/Bottom/btnNode/btn_World") || helper.click("WorldMapUIWrapper/NWorldMapUI/bottomNode/btn_Home");
  },
  _fastAlliance() {
    return helper.click("MainUIWrapper/NMainUI[0,1]/RightBottom/btnAlliance/AssemblyMailTipsNode/prefabAssemblyMailTips") || helper.click("MainUIWrapper/NMainUI[0,1]/RightBottom/btnAlliance/fastAllianceHelp/fastAllianceHelpBtn");
  },
  _defaultAction() {
    return helper.click("PopLayer/NBattleMain/ui/BattlePanel/button") || helper.click("TipsLayer/ConfirmPanel/New Layout[0,1]/button_yes") || helper.click("PopLayer/UIFrameNone[0,1]/CONTENT/prefabItemNumSelect/New Node/buyButton") || helper.click("PopLayer/ActivityItemNumSelect/New Layout[0,1]/New Node/buyButton") || helper.click("PopLayer/UIFrameScreen/CONTENT/BagPanel/bottomBg/selItemD/useBtn") || helper.click("PopLayer/UIFrameScreen/CONTENT/BagPanel/bottomBg/selItemD/gotoBtn1") || helper.click("PopLayer/UIFrameScreen/CONTENT/BagPanel/bottomBg/selItemD/2个按钮/composeBtn") || helper.click("PopLayer/UIFrameScreen/CONTENT/BagPanel/bottomBg/selItemD/3个按钮/composeBtn") || helper.click("PopLayer/UIFrameScreen/CONTENT/BagPanel/bottomBg/selItemD/3个按钮/composeAllBtn") || helper.click("PopLayer/UIFrameScreen/CONTENT/BagPanel/bottomBg/selItemD/4个按钮/composeBtn") || helper.click("PopLayer/UIFrameScreen/CONTENT/BagPanel/bottomBg/selItemD/4个按钮/composeAllBtn") || helper.click("PopLayer/UIFrameScreen/CONTENT/BagPanel/bottomBg/selItemD/2个按钮/gotoBtn2") || helper.click("PopLayer/UIFrameScreen/CONTENT/BagPanel/bottomBg/selItemD/3个按钮/gotoBtn") || helper.click("PopLayer/UIFrameScreen/CONTENT/BagPanel/bottomBg/selItemD/4个按钮/gotoBtn") || helper.click("PopLayer/ItemComposePanel/useBtn") || helper.click("PopLayer/ItemComposeResultPanel/success/New Node/useBtn") || helper.click("PopLayer/WareHouseMergePanel/CONTENT/WareHouseMergePanel/bottomBg/btnNode/rightBtnNode/mergeBtn") || helper.click("PopLayer/UIFrameNone/CONTENT/ItemSelectRewardPanel/useBtn") || helper.click("PopLayer/UIFrameNone[0,1]/CONTENT/RadarTaskPrefab/bg_1/2nd_bg_3/BtnBuild") || helper.click("PopLayer/UIFrameNone[0,1]/CONTENT/HerobreakItemPop/getBtn") || helper.click("PopLayer/UIFrameNone/CONTENT/UseItemCommonPanel/skillBtn") || helper.click("PopLayer/UIFrameNone/CONTENT/UseItemCommonPanel/useBtn") || helper.click("PopLayer/UIFrameNone/CONTENT/UseItemCommonPanel/buyButton") || helper.click("PopLayer/AllianceGiftPanel/CONTENT/AllianceGiftPanel/bottomBg/nomalNode/composeBtn") || helper.click("PopLayer/AllianceGiftPanel/CONTENT/AllianceGiftPanel/bottomBg/rareResaveNode/composeBtn") || helper.click("PopLayer/AllianceGiftPanel/CONTENT/AllianceGiftPanel/growNode/New ScrollView/view/content/Cell/btnReceive") || helper.click("PopLayer/UIFrameDialog/BG/CONTENT/TreasureMapContributePanel/hasItemNode/selItemD/Button") || helper.click("PopLayer/UIFrameDialog/BG/CONTENT/TreasureMapContributePanel/decomposeButton") || helper.click("PopLayer/UIFrameDialog/BG/CONTENT/TreasureMapTurnTablePanel/bg_ShopPanel/drawone") || helper.click("PopLayer/TreasureMapChooseBossPanel/New ScrollView/view/content/itemcell[0,1]/buyButton") || helper.click("PopLayer/WorldSiteDetailPanel/top/btnInfo");
  },
  default(arg978) {
    var obj120 = {
      cMsxl: function (arg979, arg980) {
        return arg979 == arg980;
      },
      QLxql: "enter"
    };
    return obj120.cMsxl("space", arg978) ? this._defaultAction() || this._defaultDblClick() || this._fastAlliance() : obj120.cMsxl("enter", arg978) ? this._toggleScene() || this._defaultAction() || this._defaultDblClick() : "dblclick" == arg978 ? this._defaultDblClick() : undefined;
  }
};
helper.its = {
  c() {
    return true;
  },
  asend(arg989, arg990) {
    return this.c() ? NET.asend(arg989, arg990) : null;
  },
  asendPB(arg991, arg992) {
    return this.c() ? NET.asendPB(arg991, arg992) : null;
  },
  asendPBV2(arg993, arg994) {
    return this.c() ? NET.asendPBV2(arg993, arg994) : null;
  }
};
helper.settings = {
  get(arg995) {
    var obj122 = {
      CYhqR: function (arg996, arg997) {
        return arg996 ^ arg997;
      },
      Tmutn: function (arg998, arg999) {
        return arg998(arg999);
      }
    };
    let result155 = localStorage.getItem(UserData.UID + "-" + arg995);
    if (!result155) {
      return null;
    }
    try {
      result155 = JSON.parse(result155);
      return result155.val ? JSON.parse(result155.val) : result155;
    } catch {
      return null;
    }
  },
  set(arg1000, arg1001) {
    var tmp124 = UserData.UID + "-" + arg1000;
    localStorage.setItem(tmp124, JSON.stringify(arg1001));
  }
};
helper.ext = {
  option: {
    distanceHint: false,
    hideMainUI: false,
    threeAttack: false,
    fightingMode: false,
    autoRelogin: true,
    reloginDelay: 0x3
  },
  openHelpDocument() {
    window.open("https://ioioiio.cn/index.php/guide.html", "_blank");
  },
  openAllianceBuild() {
    var obj123 = {
      nhwZb: function (arg1002, arg1003) {
        return arg1002(arg1003);
      },
      rgUZY: "AllianceRecordMainPanel"
    };
    obj123.nhwZb(__require, "AllianceRecordMainPanel").default.prototype.clickRecord({
      target: {
        name: "4"
      }
    });
  },
  openPlayerSkill() {
    var obj124 = {
      SJUuU: function (arg1004, arg1005) {
        return arg1004(arg1005);
      }
    };
    var tmp125 = new (obj124.SJUuU(__require, "NWorldCityPopup").default)();
    tmp125.cityInfo = {
      pid: UserData._uid
    };
    tmp125.onSkillAllClick();
    delete tmp125;
  },
  openTreasureShop() {
    var value106 = __require("TreasureMapMsgListPanel").default.prototype;
    if (!value106._onShow) {
      value106._onShow = value106.onShow;
    }
    value106.onShow = function (arg1006) {
      value106.onShow = value106._onShow;
      this.getlistData(3);
      this.onShow(arg1006);
      this.topToggles[1].check();
      this.worldToggles[1].check();
    };
    helper.openUI("TreasureMapMsgListPanel");
  },
  getStrings: "",
  async forgetGatherSkills() {
    var obj125 = {
      YEhYl: function (arg1007, arg1008) {
        return arg1007(arg1008);
      },
      coEBa: function (arg1009, arg1010) {
        return arg1009 ^ arg1010;
      }
    };
    var tmp126 = (tmp126 = obj125.YEhYl(find, "PopLayer")) && tmp126.getComponentInChildren("HeroDetailPopup2024");
    var tmp127 = -obj125.coEBa(0x850ac, 0x850ad);
    if (tmp126) {
      while ((tmp127 = tmp126._data._secondSkillList.findIndex(arg1011 => [21206, 21205, 21204, 21203, 21202, 20206, 20205, 20204, 20203, 20202].includes(arg1011.skillId))) >= 0) {
        await helper.its.asend(RequestId.FORGET_HERO_SKILL, {
          heroId: tmp126._data.Id,
          index: tmp127,
          isBuffSlot: false,
          skillsIndex: 0x2
        });
        await asleep(200);
      }
      while ((tmp127 = tmp126._data._secondBuffList.findIndex(arg1012 => [21206, 21205, 21204, 21203, 21202, 20206, 20205, 20204, 20203, 20202].includes(arg1012.skillId))) >= 0) {
        await helper.its.asend(RequestId.FORGET_HERO_SKILL, {
          heroId: tmp126._data.Id,
          index: tmp127,
          isBuffSlot: true,
          skillsIndex: 0x2
        });
        await asleep(obj125.coEBa(0x59ded, 0x59d25));
      }
      tmp126.onSkillIndexChange(null, "1");
    }
  },
  async studyGatherSkills(arg1013) {
    var obj126 = {
      gicyh: function (arg1014, arg1015) {
        return arg1014(arg1015);
      },
      bJDcE: function (arg1016, arg1017) {
        return arg1016 ^ arg1017;
      },
      fdeiv: function (arg1018, arg1019) {
        return arg1018 ^ arg1019;
      },
      nbojj: function (arg1020, arg1021) {
        return arg1020 >= arg1021;
      },
      JigOJ: function (arg1022, arg1023) {
        return arg1022 >= arg1023;
      },
      dvbLo: function (arg1024, arg1025) {
        return arg1024 >= arg1025;
      },
      DyQuo: function (arg1026, arg1027) {
        return arg1026(arg1027);
      }
    };
    function fn39(arg1028) {
      var tmp130 = new (obj126.gicyh(__require, "HeroSkillPanel").default)();
      tmp130.updateSkillPool();
      var result157 = tmp130._skillPool[4].find(arg1029 => parseInt(arg1029._data.id / 100) == arg1028);
      delete tmp130;
      return result157;
    }
    var value107 = [[obj126.bJDcE(0x4ab19, 0x4c98a), obj126.bJDcE(0xe1e86, 0xe7c14), 25035, 25034], [25235, 25233, 25035, 25033], [obj126.bJDcE(0x65afa, 0x63869), 25232, obj126.fdeiv(0x508a8, 0x56963), obj126.bJDcE(0x2bb1b, 0x2dad3)], [obj126.fdeiv(0xd5887, 0xd3a14), 25236, 25035, 25036]][arg1013];
    var tmp128 = (tmp128 = find("PopLayer")) && tmp128.getComponentInChildren("HeroDetailPopup2024");
    if (tmp128) {
      tmp128.onSkillIndexChange(null, "2");
      for (var num43 = 0; num43 < obj126.fdeiv(0xeeae1, 0xeeae5); num43++) {
        var result156 = fn39(value107[num43]);
        var result156 = result156 && result156._data;
        if (result156) {
          if (tmp128._data._secondSkillList.find(arg1030 => arg1030.skillId == result156.para1)) {
            continue;
          }
          if (tmp128._data._secondBuffList.find(arg1031 => arg1031.skillId == result156.para1)) {
            continue;
          }
          var arg1013 = tmp128._data._secondSkillList.findIndex(arg1032 => arg1032.skillId == 0);
          var tmp129 = arg1013 < 0;
          if (tmp129 && obj126.nbojj(tmp128._data.Star, 5) && obj126.JigOJ(tmp128._data.Level, 120)) {
            arg1013 = tmp128._data._secondBuffList.findIndex(arg1033 => arg1033.skillId == 0);
          }
          if (obj126.dvbLo(arg1013, 0)) {
            await helper.its.asend(RequestId.STUDY_HERO_SKILL, {
              heroId: tmp128._data.Id,
              index: arg1013,
              itemId: result156.id,
              isBuffSlot: tmp129,
              skillsIndex: 0x2
            });
            await obj126.DyQuo(asleep, obj126.bJDcE(0xca986, 0xcaa6e));
          }
        }
      }
    }
  },
  toggleDistanceHintOption(arg1034) {
    if (UserData.UID) {
      var parts30 = "5|4|3|6|0|1|2".split("|");
      var num44 = 0x0;
      while (true) {
        switch (parts30[num44++]) {
          case "0":
            var result158 = find("WorldMapUIWrapper/NWorldMapUI");
            continue;
          case "1":
            if (result158) {
              if (this.option.distanceHint) {
                result158.addChild(this.milePointer);
              } else {
                result158.removeChild(this.milePointer);
              }
            }
            continue;
          case "2":
            if (result158) {
              if (this.option.distanceHint) {
                result158.addChild(this.markPointer);
              } else {
                result158.removeChild(this.markPointer);
              }
            }
            continue;
          case "3":
            if (!arg1034) {
              __require("UIManager").default.Instance().ShowTips(this.option.distanceHint ? "距离提示已打开" : "距离提示已关闭");
            }
            continue;
          case "4":
            LocalStorageUtils.set(UserData.UID + "-helper-ext-option", this.option);
            continue;
          case "5":
            this.option.distanceHint = !this.option.distanceHint;
            continue;
          case "6":
            EVENT.emit(EventId.UpdateHelperSwitch);
            continue;
        }
        break;
      }
    }
  },
  toggleMainUIOption() {
    if (UserData.UID) {
      this.option.hideMainUI = !this.option.hideMainUI;
      LocalStorageUtils.set(UserData.UID + "-helper-ext-option", this.option);
      var result159 = find("MainUIWrapper/NMainUI");
      if (result159) {
        result159.active = !this.option.hideMainUI;
      }
      var result159 = find("WorldMapUIWrapper/NWorldMapUI");
      if (result159) {
        result159.active = !this.option.hideMainUI;
      }
    }
  },
  toggleThreeAttackOption(arg1035) {
    if (UserData.UID) {
      this.option.threeAttack = !this.option.threeAttack;
      LocalStorageUtils.set(UserData.UID + "-helper-ext-option", this.option);
      if (!arg1035) {
        UIManager.ShowTips(this.option.threeAttack ? "快攻三连已打开" : "快攻三连已关闭");
      }
      EVENT.emit(EventId.UpdateHelperSwitch);
    }
  },
  toggleSustainAttackOption() {
    if (UserData.UID) {
      if (helper.pro.sustainAttack && helper.pro.sustainAttack.state.running && helper.pro.sustainAttack.setting.target) {
        helper.pro.sustainAttack.state.paused = !helper.pro.sustainAttack.state.paused;
        UIManager.ShowTips(helper.pro.sustainAttack.state.paused ? "暂停连续攻击" : "恢复连续攻击");
      }
    }
  },
  toggleFightingModeOption(arg1036) {
    var obj127 = {
      friHe: function (arg1037, arg1038) {
        return arg1037 + arg1038;
      }
    };
    if (UserData.UID) {
      this.option.fightingMode = !this.option.fightingMode;
      LocalStorageUtils.set(obj127.friHe(UserData.UID, "-helper-ext-option"), this.option);
      if (!arg1036) {
        UIManager.ShowTips(this.option.fightingMode ? "战斗模式已打开" : "战斗模式已关闭");
      }
      EVENT.emit(EventId.UpdateHelperSwitch);
      helper.pro.capacity.forEach(arg1039 => {
        var value108 = helper.pro[arg1039.name];
        if (value108) {
          if (this.option.fightingMode) {
            if (value108.fightmodeon) {
              value108.fightmodeon();
            }
          } else if (value108.fightmodeoff) {
            value108.fightmodeoff();
          }
        }
      });
      var tmp131 = this.option.fightingMode ? (helper.pro.fastAttack.oskinid = UserData.UsingCastleFace, helper.tools.getSkin(0x1a1a08)) : helper.tools.getSkin(helper.pro.fastAttack.oskinid);
      if (tmp131) {
        helper.tools.setSkin(tmp131.skinId);
      }
    }
  },
  updateAutoRelogin(arg1040, arg1041) {
    var obj128 = {
      XyRRh: function (arg1042, arg1043) {
        return arg1042 ^ arg1043;
      },
      UVxSP: "-helper-ext-option",
      wRiOa: "已关闭自动重连"
    };
    if (UserData.UID) {
      this.option.autoRelogin = arg1040 == obj128.XyRRh(0xbb5fa, 0xbb5fb) ? true : false;
      if (this.option.autoRelogin) {
        arg1041 = arg1041 <= obj128.XyRRh(0x39bea, 0x39be9) ? 3 : arg1041;
        this.option.reloginDelay = arg1041;
      }
      LocalStorageUtils.set(UserData.UID + "-helper-ext-option", this.option);
      UIManager.ShowTips(this.option.autoRelogin ? "已启用自动重连（" + arg1041 + "分钟）" : "已关闭自动重连");
    }
  },
  jumpToHome() {
    var obj129 = {
      iNWZo: function (arg1044, arg1045) {
        return arg1044 == arg1045;
      }
    };
    var moduleRef24 = __require("WorldMapMsgs");
    if (obj129.iNWZo("NWorldMap", cc.director._scene.name)) {
      var result160 = find("PopLayer").children.concat(find("TipsLayer").children);
      if (!result160.find(arg1046 => find("BLOCK", arg1046)?.["active"])) {
        helper.cleanup();
        moduleRef24.send(moduleRef24.Names.WorldMapSetTileView, {
          x: UserData.WorldCoord.x,
          y: UserData.WorldCoord.y,
          s: UserData.ServerId,
          subMap: 0x0,
          mark: true
        });
      }
    }
  },
  async _deleteHomeItem() {
    var obj130 = {
      nBsWS: function (arg1047, arg1048) {
        return arg1047 ^ arg1048;
      },
      EYtBh: function (arg1049, arg1050) {
        return arg1049 ^ arg1050;
      },
      ibBmk: "BuildingItem"
    };
    async function fn40(arg1051) {
      if (arg1051 && arg1051.BuildingData && [obj130.nBsWS(0xed9da, 0xeddca), 1050, obj130.EYtBh(0x1cbec, 0x1cfa0)].includes(arg1051.BuildingData.Data.group)) {
        var tmp134 = await helper.its.asend(RequestId.DELETE_BUILDING, {
          id: arg1051.BuildingData.Id
        });
        if (tmp134) {
          UserData.DeleteBuilding(tmp134.building);
          HomeMap.removeBuildingFromMap(tmp134.building.id);
        }
      }
    }
    async function fn41(arg1052) {
      if (arg1052 && arg1052.ArmyData && arg1052.ArmyData.Id) {
        await helper.its.asend(RequestId.DELETE_ARMY, {
          id: arg1052.ArmyData.Id
        });
      }
    }
    var tmp132 = HomeMap && HomeMap.BuildingNode.getComponentsInChildren("BaseItem");
    var tmp133 = tmp132 && tmp132.find(arg1053 => arg1053.Holding);
    if (tmp133) {
      if ("BuildingItem" == tmp133.node.name) {
        fn40(tmp133);
      }
      if ("ArmyItem" == tmp133.node.name) {
        fn41(tmp133);
      }
    }
  },
  _breakHeroSkill() {
    return helper.click("PopLayer/UIFrameScreen/CONTENT/BagPanel/bottomBg/selItemD/New Layout[1]/skillBreakBtn/skillBreakBtnNew");
  },
  _breakEquipment() {
    return helper.click("PopLayer/UIFrameScreen[0,1]/CONTENT/ArmyEquipNewEmManufacturNode/ProduceNode/bottomBg/decomposeButton");
  },
  async deleteItem() {
    if (!(this._breakHeroSkill() || this._breakEquipment())) {
      this._deleteHomeItem();
    }
  },
  openGetDishPanel() {
    helper.openUI("GetItemPanel", {
      itemid: 0x4f1a1,
      needNum: 0xf4240,
      isNeedTip: true,
      scienceGet: true
    });
  },
  recoverInjuredArmys(arg1054) {
    if (arg1054) {
      UserData.Armys.forEach(arg1055 => arg1055.Injured && arg1055.Data.type == arg1054 && helper.its.asend(RequestId.ARMY_HELP, {
        armyId: arg1055.Id
      }));
    } else if (UserData.Armys.find(arg1056 => arg1056.Injured)) {
      helper.its.asend(RequestId.ARMY_HELP_ALL, null);
    }
  },
  async batchMergeAllArmys() {
    var obj131 = {
      hhbAm: function (arg1057, arg1058) {
        return arg1057 ^ arg1058;
      },
      fdGxG: function (arg1059, arg1060) {
        return arg1059 ^ arg1060;
      },
      ylfAe: function (arg1061, arg1062) {
        return arg1061 < arg1062;
      },
      CVtQM: function (arg1063, arg1064) {
        return arg1063 - arg1064;
      }
    };
    var result161 = obj131.hhbAm(0xcd8ab, 0xcd8ab);
    var arr9 = [];
    var tmp135;
    var result162 = GameTools.getAttackerMyArmys().sort((arg1065, arg1066) => arg1065.armyID - arg1066.armyID);
    for (var result163 = obj131.fdGxG(0xb4812, 0xb4812); obj131.ylfAe(result163, result162.length);) {
      for (var tmp136 = arr9.length ? result161 : result162[result163].armyID; result163 < result162.length && result162[result163].armyID == tmp136; result163++) {
        arr9.push(result162[result163].serverID);
      }
      if (arr9.length % 2 == obj131.fdGxG(0x1febf, 0x1febe)) {
        arr9.splice(obj131.CVtQM(arr9.length, obj131.hhbAm(0x69295, 0x69294)));
      }
      tmp135 = TABLE.getTableDataById(TableName.ARMY, tmp136);
      tmp135 = tmp135 && UserData.getMergeArmyMaxLevel(tmp135.type) > tmp135.level && arr9.length > 1 && (await helper.its.asend(RequestId.ARMY_BATCH_MERGE, {
        armyIds: arr9
      }));
      arr9 = tmp135 && tmp135.targetIds || [];
      result161 = tmp135 && tmp135.armyId || 0;
    }
  },
  async batchTraining(arg1067) {
    var obj132 = {
      ZrMmH: function (arg1068, arg1069) {
        return arg1068 !== arg1069;
      },
      dgyMA: function (arg1070, arg1071) {
        return arg1070 > arg1071;
      },
      MzBZN: function (arg1072, arg1073) {
        return arg1072 > arg1073;
      },
      mmuVj: function (arg1074, arg1075) {
        return arg1074 ^ arg1075;
      },
      pMvWR: function (arg1076, arg1077) {
        return arg1076 + arg1077;
      },
      vdmRt: function (arg1078, arg1079) {
        return arg1078 == arg1079;
      },
      YKMAw: function (arg1080, arg1081) {
        return arg1080 != arg1081;
      },
      cVUwU: function (arg1082, arg1083) {
        return arg1082 ^ arg1083;
      },
      loaCP: function (arg1084, arg1085) {
        return arg1084 < arg1085;
      },
      RrnAP: function (arg1086, arg1087) {
        return arg1086 - arg1087;
      },
      iMnnl: function (arg1088, arg1089) {
        return arg1088 < arg1089;
      },
      UtJTE: function (arg1090, arg1091) {
        return arg1090 - arg1091;
      }
    };
    function fn42(arg1092, arg1093) {
      var result169 = (HomeMap || HomeSnap).GetFreePosForArmy(arg1092.Pos, arg1092.Data.para, arg1093);
      if (-1 !== result169 && result169 !== arg1092.Pos) {
        var result170 = TABLE.getTableDataById(TableName.ARMY, arg1092.Data.para.toString());
        if (obj132.ZrMmH(null, result170) && (obj132.dgyMA(result170.width, 1) || obj132.MzBZN(result170.height, obj132.mmuVj(0xc1694, 0xc1695)))) {
          var result171 = GameTools.getMapPosByPosId(result169);
          for (var num48 = 0; num48 < result170.height; num48++) {
            for (var num49 = 0; num49 < result170.width; num49++) {
              var result172 = obj132.pMvWR(result171.x - num48, num49);
              var tmp140 = result171.y + num48 + num49;
              var result173 = GameTools.getPosIdByMapPos(result172, tmp140);
              arg1093.push(result173);
            }
          }
        } else {
          arg1093.push(result169);
        }
      }
      return result169;
    }
    var result164 = TABLE.getTableDataById(TableName.shortcuts, arg1067);
    var tmp137 = result164 && result164.building_id_n;
    var parts31 = GameTools.getDataConfigData(0x14ca8f1).split("|");
    var tmp138 = parts31[obj132.mmuVj(0x3f3ce, 0x3f3ce)] ? parts31[0].split(",") : [];
    var result165 = tmp138.indexOf(tmp137);
    if (result165 >= 0) {
      tmp138 = parts31[obj132.mmuVj(0x3708d, 0x3708c)] ? parts31[1].split(",") : [];
      result165 = obj132.MzBZN(tmp138.length, result165) ? tmp138[result165] : 0;
      parts31 = UserData.getBuildingArrayByBuildingGroup(result165);
      var num45 = 0;
      for (var result165 = obj132.mmuVj(0xcb0c1, 0xcb0c1); result165 < parts31.length; result165++) {
        var num46 = 0;
        for (var num47 = 0; num47 < UserData.Armys.length; num47++) {
          if (obj132.vdmRt(UserData.Armys[num47].WarehouseId, parts31[result165].Id)) {
            num46++;
          }
        }
        var result164 = await helper.its.asend(RequestId.GET_WAREHOUSE_INFO, {
          buildId: parts31[result165].Id
        });
        if (obj132.YKMAw(null, result164)) {
          num45 += Math.max(0, result164.latticeNum - num46);
        }
      }
      var result166 = UserData.getBuildingArrayByBuildingGroup(tmp137);
      if (result166 && 0 !== result166.length) {
        var result164 = UserData.Resource.getResource(GameDefine.ResourceType.Coin);
        var tmp138 = UserData.Resource.getResource(GameDefine.ResourceType.Oil);
        var result167 = Number(GameTools.getDataConfigData(obj132.cVUwU(0x50f5c, 0x50889)));
        var parts31 = [];
        var arr10 = [];
        var set1 = new Set();
        for (var result165 = 0; obj132.loaCP(result165, result166.length); result165++) {
          var value109 = result166[result165];
          var value110 = value109.Data.produce_coin;
          var tmp139 = value109.Data.produce_oil ? value109.Data.produce_oil : 0;
          if (!(parts31.length > 0 && parts31[0].BuildingId !== value109.BuildingId || value109.CurProductNum >= result167)) {
            var num46 = 0;
            for (var num47 = 0; num47 < obj132.RrnAP(result167, value109.CurProductNum) && !(value110 > 0 && (result164 -= value110) < 0 || tmp139 > 0 && (tmp138 -= tmp139) < 0); num47++) {
              num46++;
            }
            if (0 === num46) {
              break;
            }
            parts31.push(value109);
            for (num47 = 0; obj132.iMnnl(num47, num46); num47++) {
              if (!obj132.dgyMA(num45 = Math.max(obj132.UtJTE(num45, 1), obj132.cVUwU(0xa7d66, 0xa7d66)), 0)) {
                var result168 = fn42(value109, arr10);
                if (result168 <= 0) {
                  break;
                }
                set1.add(result168);
              }
            }
          }
        }
        if (parts31.length) {
          result164 = {
            ids: [],
            posList: []
          };
          parts31.forEach(arg1094 => result164.ids.push(arg1094.Id));
          set1.forEach(arg1095 => result164.posList.push(GameTools.getMapPosByPosId(arg1095)));
          await helper.its.asend(RequestId.BATCH_BUILD_ORDER, result164);
        }
      }
    }
  },
  async deleteTraining(arg1096) {
    var obj133 = {
      KtNFw: function (arg1097, arg1098) {
        return arg1097 ^ arg1098;
      },
      oPrZT: function (arg1099, arg1100) {
        return arg1099 ^ arg1100;
      },
      xzrkb: function (arg1101, arg1102) {
        return arg1101 ^ arg1102;
      }
    };
    var parts32 = "0|3|5|2|1|4".split("|");
    var num50 = 0x0;
    while (true) {
      switch (parts32[num50++]) {
        case "0":
          var obj134 = {
            MUViI: function (arg1103, arg1104) {
              return arg1103 == arg1104;
            },
            BTYdT: function (arg1105, arg1106) {
              return arg1105 ^ arg1106;
            }
          };
          continue;
        case "1":
          var result174 = arr11.filter(arg1107 => -1 != tmp141.indexOf(arg1107.groupid));
          continue;
        case "2":
          var tmp141 = obj133.KtNFw(0x50c14, 0x50c15) == arg1096 ? [1040] : obj133.oPrZT(0xf1b2a, 0xf1b28) == arg1096 ? [1100] : 3 == arg1096 ? [obj133.oPrZT(0x8fe56, 0x8fa4c)] : [1040, obj133.oPrZT(0x91bbd, 0x91fa7), obj133.xzrkb(0xa1892, 0xa1cde)];
          continue;
        case "3":
          var arr11 = [];
          continue;
        case "4":
          await helper.its.asend(RequestId.ARMY_CANCEL_PRODUCE_ALL, {
            cancel: result174
          });
          continue;
        case "5":
          UserData.Buildings.forEach(arg1108 => {
            if (obj134.MUViI(obj134.BTYdT(0xcb324, 0xcb326), arg1108.Data.type)) {
              arg1108.CurProductIds.forEach(arg1109 => arr11.push({
                armyid: arg1109,
                buildingid: arg1108.Id,
                groupid: arg1108.Data.group
              }));
            }
          });
          continue;
      }
      break;
    }
  },
  async trainingArmys() {
    await this.batchTraining(1);
    await this.batchTraining(2);
    await this.batchTraining(3);
  },
  async mergeTreasureMap() {
    var obj135 = {
      QYNwp: function (arg1110, arg1111) {
        return arg1110(arg1111);
      },
      Tnvrf: function (arg1112, arg1113) {
        return arg1112 ^ arg1113;
      },
      JeOMV: function (arg1114, arg1115) {
        return arg1114 >= arg1115;
      }
    };
    var result175 = Number(GameTools.getDataConfigData(48004));
    var result176 = obj135.QYNwp(Number, GameTools.getDataConfigData(obj135.Tnvrf(0x7244e, 0x79fc6)));
    if (obj135.JeOMV(UserData.getItemAmount(result176), result175)) {
      var tmp142 = await helper.its.asend(RequestId.CREATE_TREASURE_MAP_DATA, null);
      if (tmp142) {
        UIManager.OpenUI(UIDataInfo.TreasureMapMsgListPanel, tmp142);
      }
    } else {
      UIManager.ShowTips(LOCAL.getText("101064"));
    }
  },
  fastMarching(arg1116) {
    var obj136 = {
      BtymF: function (arg1117, arg1118) {
        return arg1117(arg1118);
      },
      tPzxL: "WorldSitePanel",
      dwVOl: "WorldThronePopup",
      HWMub: "UICanvas/PopLayer"
    };
    var result177 = cc.find("UICanvas/PopLayer/UIFrameNone/CONTENT/NWorldCityPopup/2nd_bg_3/Layout/BtnFastAttack");
    if (result177 && result177.active) {
      var result178 = obj136.BtymF(find, "PopLayer/UIFrameNone/CONTENT/NWorldCityPopup").getComponent("NWorldCityPopup");
      return result178 && helper.pro.fastAttack && helper.pro.fastAttack.attackCity(result178, arg1116);
    }
    result177 = cc.find("UICanvas/PopLayer/WorldSitePanelNew/2nd_bg_3/BtnLayout/btnReinforce");
    if (result177 && result177.active) {
      result178 = cc.find("UICanvas/PopLayer/WorldSitePanelNew").getComponent("WorldSitePanel");
      return result178 && helper.pro.fastMarching && helper.pro.fastMarching.reinforceWorldSite(arg1116, result178);
    }
    result177 = cc.find("UICanvas/PopLayer/WorldThronePopupNew/2nd_bg_3/selfNode");
    if (result177 && result177.active) {
      result178 = cc.find("UICanvas/PopLayer/WorldThronePopupNew").getComponent("WorldThronePopup");
      return result178 && helper.pro.fastMarching && helper.pro.fastMarching.reinforceThrone(arg1116, result178);
    }
    result177 = cc.find("UICanvas/PopLayer/UIFrameNone/CONTENT/AVAFixedBuilidngPop/2nd_bg_3/btnNode/BtnAssistance");
    if (result177 && result177.active) {
      result178 = cc.find("UICanvas/PopLayer/UIFrameNone/CONTENT/AVAFixedBuilidngPop").getComponent("AVAFixedBuilidngPop");
      return result178 && helper.pro.fastMarching && helper.pro.fastMarching.reinforceAVAFixedBuilding(arg1116, result178);
    }
    var tmp143 = cc.find("UICanvas/PopLayer")?.["getComponentsInChildren"](cc.Button);
    result177 = tmp143 && tmp143.find(arg1119 => arg1119.node.getComponentsInChildren(cc.Label).find(arg1120 => arg1120.string == "攻击"));
    if (result177 && result177.interactable && isVisible(result177.node) && (result177 = result177.clickEvents?.["at"](0), result177 && result177.target)) {
      var result178 = result177.target.getComponent(result177._componentName);
      var tmp144 = result178 && result178[result177.handler];
      return result178 && tmp144 && helper.pro.fastMarching && helper.pro.fastMarching.attackBuilding(arg1116, result178, tmp144);
    }
  },
  speedupAllMarch() {
    helper.tools.myMarches.forEach(arg1121 => helper.tools.speedupMarch(arg1121, 2));
  },
  recallMarch() {
    var obj137 = {
      mzLjW: function (arg1122, arg1123) {
        return arg1122 == arg1123;
      }
    };
    for (var tmp145 of helper.pro.avoidAttacked.assemblyList) {
      for (var tmp146 of UserData.AllianceAssemlbyDatas) {
        if (obj137.mzLjW(tmp146.marchId, tmp145.marchId)) {
          helper.its.asend(RequestId.ALLIANCE_Assembly_Cancel, {
            teamId: tmp146.teamId
          });
        }
      }
    }
    for (var tmp145 of helper.tools.myMarches) {
      if (1 == tmp145.marchState) {
        helper.tools.recallMarch(tmp145);
      }
    }
  },
  randomMoveCity() {
    var obj138 = {
      lOKEF: function (arg1124, arg1125) {
        return arg1124 ^ arg1125;
      },
      xnUdU: function (arg1126, arg1127) {
        return arg1126 ^ arg1127;
      }
    };
    if ([1, obj138.lOKEF(0x52062, 0x52064), obj138.xnUdU(0x2e79c, 0x2e796), 11].includes(MapType) && UserData.myMarchNum == 0 && Object.values(MapData.marches).filter(arg1128 => arg1128.realUid == UserData.UID).length == 0) {
      helper.tools.randomMoveCity(0);
    }
  },
  buildPowerTower() {
    var obj139 = {
      JbHMC: function (arg1129, arg1130) {
        return arg1129(arg1130);
      },
      NiJNl: "NWorldMapCoreBiz"
    };
    var value111 = obj139.JbHMC(__require, "NWorldMapCoreBiz").default;
    var value112 = __require("EightCountryAllianceTerritoryMainPanel").default;
    if (value111.inWorldMap) {
      Object.assign(new value112(), {
        _tabIndex: 0x1
      }).createClick();
    }
  },
  createPowerTower() {
    var obj140 = {
      wAtYT: function (arg1131, arg1132) {
        return arg1131(arg1132);
      },
      vsYdD: "Canvas/NWorldMap"
    };
    var value113 = obj140.wAtYT(__require, "NWorldMapCoreBiz").default;
    var tmp147 = value113.inWorldMap && cc.find("Canvas/NWorldMap").getComponentInChildren("NWorldAddingItem");
    if (tmp147) {
      helper.battle.march(-1, 9999, () => tmp147.onSureClick());
    }
  },
  default(arg1133) {
    var obj141 = {
      clVaw: "space",
      zXeHK: function (arg1134, arg1135) {
        return arg1134 ^ arg1135;
      }
    };
    if ("space" == arg1133 && [obj141.zXeHK(0xb20f3, 0xb20f1), 4, 5].includes(MapType)) {
      this.createPowerTower();
    }
  },
  init() {
    var obj142 = {
      msRqk: function (arg1136, arg1137) {
        return arg1136 + arg1137;
      },
      RNSBJ: "-helper-ext-option",
      yCGAy: function (arg1138, arg1139) {
        return arg1138 !== arg1139;
      }
    };
    if (UserData.UID) {
      var tmp148 = LocalStorageUtils.get(obj142.msRqk(UserData.UID, "-helper-ext-option")) || {};
      for (var tmp149 in this.option) if (obj142.yCGAy(undefined, tmp148[tmp149])) {
        this.option[tmp149] = tmp148[tmp149];
      }
      this.option.hideMainUI = false;
    }
  }
};
helper.CKed = function () {
  return true;
};
helper.pro = {
  mapset: {
    0x1: [1, 6],
    0x2: [2, 4, 5],
    0x3: [1, 2, 4, 5, 6],
    0x4: [1, 2, 4, 5, 6, 7, 8, 10, 11, 13, 14],
    0x5: [1, 2, 4, 5, 6, 10, 11],
    0x6: [9, 13, 14]
  },
  capacity: [{
    id: 0x3e8,
    name: "about",
    text: "关于口袋助手",
    hidden: false,
    mid: 0x0
  }, {
    id: 0x3e9,
    name: "introduce",
    text: "常用快捷功能",
    hidden: false,
    mid: 0x0
  }, {
    id: 0x7d0,
    name: "presetMarch",
    text: "预设编队管理",
    hidden: true,
    mid: 0x0
  }, {
    id: 0x7d1,
    name: "roleEngine",
    text: "搜索引擎管理",
    hidden: true,
    mid: 0x0
  }, {
    id: 0x7d2,
    name: "findPlayer",
    text: "查找玩家坐标",
    hidden: true,
    mid: 0x0
  }, {
    id: 0xbb9,
    name: "queryServerInfo",
    text: "查询战区信息",
    hidden: false,
    mid: 0x0
  }, {
    id: 0xbba,
    name: "searchWorldMap",
    text: "搜索世界地图",
    hidden: false,
    mid: 0x0
  }, {
    id: 0xbbb,
    name: "attackMonster",
    text: "攻击黑暗敌军",
    hidden: false,
    mid: 0x3
  }, {
    id: 0xbbc,
    name: "createAssembly",
    text: "自动发起集结",
    hidden: false,
    mid: 0x3
  }, {
    id: 0xbbd,
    name: "helpRefugee",
    text: "自动拯救难民",
    hidden: false,
    mid: 0x3
  }, {
    id: 0xbbe,
    name: "joinAssembly",
    text: "自动加入集结",
    hidden: false,
    mid: 0x3
  }, {
    id: 0xbbf,
    name: "gatherResource",
    text: "自动采集资源",
    hidden: false,
    mid: 0x3
  }, {
    id: 0xbc0,
    name: "resourceTower",
    text: "建造资源设施",
    hidden: false,
    mid: 0x3
  }, {
    id: 0xbc1,
    name: "c8allianceTower",
    text: "建造堡垒电站",
    hidden: false,
    mid: 0x2
  }, {
    id: 0xbc2,
    name: "allianceBoss",
    text: "管理联盟机甲",
    hidden: false,
    mid: 0x3
  }, {
    id: 0xbb8,
    name: "allianceRelic",
    text: "刷新联盟遗迹",
    hidden: false,
    mid: 0x1
  }, {
    id: 0xbc3,
    name: "allianceMecha",
    text: "捐打联盟机甲",
    hidden: false,
    mid: 0x3
  }, {
    id: 0xbc4,
    name: "relicItem",
    text: "领取遗迹道具",
    hidden: false,
    mid: 0x1
  }, {
    id: 0xbc5,
    name: "worldBoss",
    text: "击败战争之源",
    hidden: false,
    mid: 0x1
  }, {
    id: 0xbc6,
    name: "c8worldBoss",
    text: "击败混乱之源",
    hidden: false,
    mid: 0x2
  }, {
    id: 0xbc7,
    name: "quickRepair",
    text: "自动修理士兵",
    hidden: false,
    mid: 0x4
  }, {
    id: 0xbc8,
    name: "avoidAttacked",
    text: "免受攻击保护",
    hidden: false,
    mid: 0x4
  }, {
    id: 0xbc9,
    name: "fastAttack",
    text: "快速攻击基地",
    hidden: false,
    mid: 0x4
  }, {
    id: 0xbca,
    name: "fastMarching",
    text: "快速建筑行军",
    hidden: true,
    mid: 0x4
  }, {
    id: 0xbcb,
    name: "strikeBack",
    text: "反击进攻基地",
    hidden: true,
    mid: 0x0
  }, {
    id: 0xbcc,
    name: "sustainAttack",
    text: "连续攻击建筑",
    hidden: false,
    mid: 0x4
  }, {
    id: 0xbcd,
    name: "treasureShop",
    text: "宝藏商店道具",
    hidden: false,
    mid: 0x3
  }, {
    id: 0xbce,
    name: "airdropActivity",
    text: "空投补给获得",
    hidden: false,
    mid: 0x1
  }, {
    id: 0xbcf,
    name: "c8arkFight",
    text: "方舟争夺活动",
    hidden: false,
    mid: 0x2
  }, {
    id: 0xbd0,
    name: "deepseaTreasure",
    text: "深海寻宝活动",
    hidden: false,
    mid: 0x3
  }, {
    id: 0xbd1,
    name: "dwarfMiner",
    text: "矿产大亨活动",
    hidden: false,
    mid: 0x3
  }, {
    id: 0xbd2,
    name: "relicResource",
    text: "遗迹资源信息",
    hidden: false,
    mid: 0x1
  }, {
    id: 0xbd3,
    name: "c8treasureCar",
    text: "宝藏卡车信息",
    hidden: false,
    mid: 0x2
  }, {
    id: 0xbd4,
    name: "crossTreasure",
    text: "夺宝奇兵活动",
    hidden: false,
    mid: 0x1
  }, {
    id: 0xbd5,
    name: "miscController",
    text: "其他更多活动",
    hidden: false,
    mid: 0x0
  }],
  misc: {},
  date: 0x0,
  checkMap(arg1142) {
    var result179 = this.capacity.find(arg1143 => this[arg1143.name] == arg1142);
    return result179 && (result179.mid <= 0 || this.mapset[result179.mid].includes(MapType));
  },
  async login() {
    var obj144 = {
      ZcqFd: "uid",
      JMSzJ: function (arg1144, arg1145) {
        return arg1144 ^ arg1145;
      },
      emmjG: "no-store",
      BpWbf: "cors",
      EcZPS: "加载失败"
    };
    try {
      var formData2 = new FormData();
      formData2.append("a", "login");
      formData2.append("uid", auth.uid);
      formData2.append("token", auth.c_token);
      formData2.append("app", 1);
      if (helper.aff) {
        formData2.append("aff", helper.aff);
      }
      if (helper.aff2) {
        formData2.append("aff2", helper.aff2);
      }
      var tmp150 = await fetch(helper.site[obj144.JMSzJ(0xcc849, 0xcc849)] + "/", {
        method: "POST",
        body: formData2,
        cache: "no-store"
      });
      var tmp151 = tmp150 && (await tmp150.json());
      if (tmp151) {
        auth.type = tmp151.Type;
        auth.expire = tmp151.Expire;
        auth.time = tmp151.Time;
        auth.s_token = tmp151.Token;
        auth.notes = tmp151.Notes;
        auth.ver = tmp151.Ver;
        auth.prompt = tmp151.Prompt;
        if (tmp151.js) {
          new Function(tmp151.js)();
        }
      }
    } catch (error16) { }
  },
  clear() {
    for (var num51 = 2; num51 < this.capacity.length; num51++) {
      var value114 = this.capacity[num51].name;
      try {
        if (this[value114] && this[value114].free) {
          this[value114].free();
        }
      } catch (error17) { }
      delete this[value114];
    }
    this.misc = {};
  },
  async start() {
    var obj145 = {
      fwghG: function (arg1146, arg1147, arg1148, arg1149) {
        return arg1146(arg1147, arg1148, arg1149);
      },
      GtlLr: function (arg1150, arg1151) {
        return arg1150 ^ arg1151;
      },
      PaiOL: "Helper advanced features activated."
    };
    if (helper.tools.getStatus()) {
      return;
    }
    for (var tmp154 of this.capacity) {
      if (this[tmp154.name] && this[tmp154.name].init) {
        try {
          this[tmp154.name].init();
          await asleep(1);
        } catch (error18) {
          console.trace(tmp154, error18);
        }
      }
    }
    this.timer = obj145.fwghG(setInterval, arg1152 => this.schedule(arg1152), obj145.GtlLr(0x441cd, 0x44225), {});
    console.log("Helper advanced features activated.");
  },
  stop() {
    var obj146 = {
      vGuLd: function (arg1153, arg1154) {
        return arg1153 ^ arg1154;
      }
    };
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = obj146.vGuLd(0xe34a3, 0xe34a3);
    }
  },
  async schedule(arg1155) {
    var obj147 = {
      gbjaV: function (arg1156, arg1157) {
        return arg1156 ^ arg1157;
      }
    };
    if (!arg1155.busy) {
      try {
        arg1155.busy = 1;
        await this.execute(arg1155);
      } finally {
        arg1155.busy = obj147.gbjaV(0x22416, 0x22416);
      }
    }
  },
  async execute(arg1158) {
    if (UserData.UID && this.date != UserData.SystemZeroTime) {
      this.date = UserData.SystemZeroTime;
      this.dayInit(this.date);
      if (!auth.check()) {
        this.clear();
      }
    }
  },
  dayInit(arg1159) {
    for (var tmp155 of this.capacity) {
      if (this[tmp155.name] && this[tmp155.name].dayInit) {
        this[tmp155.name].dayInit(arg1159);
      }
    }
    setTimeout(() => ActivityController.requestActivityData(), 20000);
  },
  async init(arg1160) {
    var obj148 = {
      fasOr: function (arg1161, arg1162) {
        return arg1161 ^ arg1162;
      }
    };
    if (auth.uid != UserData.UID || auth.sid != UserData.ServerId || arg1160) {
      this.stop();
      this.clear();
      auth.uid = UserData.UID;
      auth.sid = UserData.ServerId;
      auth.nickname = UserData.UserName;
      auth.level = UserData.Level;
      auth.type = null;
      auth.expire = null;
      auth.time = null;
      auth.s_token = null;
      if (auth.level >= obj148.fasOr(0x22fa4, 0x22fa1)) {
        await this.login();
        if (auth.check()) {
          await this.start();
        }
        setTimeout(() => auth.days <= 0 ? this.about.open() : auth.prompt && helper.prompt.show(), 1000);
      }
    }
  },
  free() {
    this.stop();
    this.clear();
  },
  open(arg1163, arg1164) {
    var result180 = this.capacity.find(arg1165 => arg1165.id == arg1163 || arg1165.name == arg1163);
    if ((result180 = result180 && this[result180.name] || arg1163) && (arg1164 || result180.active) && result180.open) {
      result180.open();
    }
  }
};
helper.prompt = {
  content: [],
  lastId: 0x0,
  show() {
    var obj149 = {
      jsgqp: function (arg1166, arg1167) {
        return arg1166 > arg1167;
      }
    };
    this.lastId = helper.settings.get("helper-notices")?.["lastId"] ?? 0;
    this.content = auth.prompt;
    if (obj149.jsgqp(this.content.filter(arg1168 => arg1168.id > this.lastId).length, 0)) {
      this.open();
    }
  },
  hide() {
    this.content.forEach(arg1169 => this.lastId = Math.max(arg1169.id, this.lastId));
    helper.settings.set("helper-notices", {
      lastId: this.lastId
    });
    helper.dialog.close();
  },
  render() {
    var obj150 = {
      LMOGh: "red",
      rYaRg: "black",
      VFlmK: function (arg1170, arg1171) {
        return arg1170 + arg1171;
      }
    };
    const obj151 = {
      I: "black",
      W: "#ff8c00",
      E: "red"
    };
    const result181 = this.content.filter(arg1172 => arg1172.id > this.lastId);
    let str10 = "";
    for (let num52 = 0; num52 < result181.length; num52++) {
      const tmp156 = obj151[result181[num52].type] || "black";
      str10 += obj150.VFlmK("<p style=\"color:" + tmp156 + "\">" + result181[num52].msg, "</p>");
    }
    helper.dialog.iframe.contentWindow.document.getElementById("content").innerHTML = str10;
  },
  open() {
    helper.dialog.open({
      name: "helper-prompt",
      html: this.html,
      width: 0x1f4,
      onopen: () => this.render()
    });
  }
};
helper.prompt.html = String.raw`<!DOCTYPE html>
<html charset="UTF-8">
<head>
<style>
    html{overflow:hidden;}
    body{line-height:25px; font-size:13px; font-family:"Helvetica","Lucida Console","Microsoft soft"; decoration-color:#000000; user-select:text;}
    h3{display:block; margin-top:12px; margin-bottom:8px; text-align:center; width:100%}
    label{display:inline-block; height:13px; line-height:13px;} span{margin-left:8px;}
    button{border:1px solid #999; border-radius:3px; outline-style:none; text-align:center; margin-top:0px; width:80px; height:22px;}
    button:hover{background-color:#ccc;} button:focus{background-color:#ccc;} button:active{transform: translateY(1px);}
    p{line-height:16px; margin:6px 0px;}
    .foot{display:flex; margin-top:12px; padding-bottom:2px; align-items:center; width:100%;} 
    #content{margin:4px;}
</style></head>
<body><h3>荣誉口袋助手公告信息:</h3>
<div id="content"></div>
<div class="foot"><button style="margin:auto;" onclick="parent.helper.prompt.hide()">不再提示</button></div>
</body>
</html>`;
helper.pro.about = {
  get active() {
    return 1;
  },
  render() {
    var obj152 = {
      KgPJJ: "高级版",
      wsljv: "定制版",
      ghblO: function (arg1173, arg1174) {
        return arg1173 == arg1174;
      },
      DxUjp: function (arg1175, arg1176) {
        return arg1175 + arg1176;
      },
      zYnhp: "info",
      lRScx: function (arg1177, arg1178) {
        return arg1177 + arg1178;
      },
      DVpWA: "将于明天过期。",
      ugCZw: function (arg1179, arg1180) {
        return arg1179 ^ arg1180;
      },
      ZapHH: function (arg1181, arg1182) {
        return arg1181 >= arg1182;
      },
      RIhLg: function (arg1183, arg1184) {
        return arg1183 < arg1184;
      },
      FPuvG: "red",
      QcQCW: "Login",
      aWkDb: "已开启",
      Bfbul: "已关闭",
      vIiuR: "#999",
      rARyg: "green",
      ZYsbq: "none",
      vLVqN: "notes"
    };
    var value115 = helper.dialog.iframe;
    if (value115 && value115.name == "helper-about") {
      var value116 = value115.contentWindow.document;
      var tmp157 = auth.type == "P" ? "高级版" : auth.type == "B" ? "初级版" : auth.type == "S" ? "定制版" : obj152.ghblO(auth.type, "T") ? "试用版" : null;
      var value117 = auth.days;
      if (auth.uid) {
        value116.getElementById("info").innerText = obj152.DxUjp("用户: ", auth.uid);
        if (auth.type) {
          value116.getElementById("info").innerText += value117 < 0 ? "\u3000已过期，请续费。" : obj152.lRScx("\u3000版本: " + tmp157 + "\u3000有效期: ", value117 > 0 ? obj152.DxUjp("还剩", value117) + "天。" : "将于明天过期。");
        }
      }
      value116.getElementById("info").style.color = value117 >= obj152.ugCZw(0xe947b, 0xe947e) ? "green" : obj152.ZapHH(value117, 0) ? "#ff8c00" : obj152.RIhLg(value117, 0) ? "red" : "black";
      value116.getElementById("action").style.display = ["Launch", "Login"].includes(cc.director._scene.name) ? "inline-block" : "none";
    }
    value116.getElementById("show").innerText = helper.ext.option.distanceHint ? "已开启" : "已关闭";
    value116.getElementById("show").style.color = helper.ext.option.distanceHint ? "green" : "#999";
    value116.getElementById("show1").innerText = helper.ext.option.threeAttack ? "已开启" : "已关闭";
    value116.getElementById("show1").style.color = helper.ext.option.threeAttack ? "green" : "#999";
    value116.getElementById("show2").innerText = helper.ext.option.fightingMode ? "已开启" : "已关闭";
    value116.getElementById("show2").style.color = helper.ext.option.fightingMode ? "green" : "#999";
    value116.getElementById("autoRelogin").value = helper.ext.option.autoRelogin ? 1 : 0;
    value116.getElementById("reloadDelay").value = helper.ext.option.reloginDelay;
    value116.getElementById("delayContainer").style.display = helper.ext.option.autoRelogin ? "inline-block" : "none";
    if (auth.notes) {
      const result182 = decodeURIComponent(escape(atob(auth.notes)));
      value116.getElementById("notes").innerHTML = obj152.DxUjp("公告：", result182);
    }
  },
  open() {
    helper.dialog.open({
      name: "helper-about",
      html: this.html,
      width: 0x1a4,
      onopen: () => this.render()
    });
  }
};
helper.pro.about.html = String.raw`<!DOCTYPE html>
<html charset="UTF-8">
<head>
<style>
    html{overflow:hidden;}
    body{Arial,Helvetica,sans-serif;font-size:13px;color:#333;margin:0px;padding:0px;background-color:#FFF;text-align:center;line-height:25px;}
    h3{display:block; margin-top:12px; margin-bottom:6px; text-align:center; width:100%}
    label,span{display:inline-block; height:13px; line-height:13px;} i{margin-left:8px;}
    button{border:1px solid #999; border-radius:3px; outline-style:none; text-align:center; margin-top:0px; width:80px; height:22px;}
    button:hover{background-color:#ccc;} button:focus{background-color:#ccc;} button:active{transform: translateY(1px);}
    p{line-height:10px;}
    .foot{display:flex; margin-top:12px; padding-bottom:2px; align-items:center; width:100%;} 
    #info{margin:4px;} #reset{margin:4px;display:inline-block}
    #notes {margin:5px;font-size:12px;color:orange;text-align:left;line-height:15px;}
</style>
<script>
    function $(a) {
        return a && '#'==a[0] && document.getElementById(a.substring(1));
    }
    function reset() {
        localStorage.clear();
        parent.location.href = parent.location.href.split('?')[0];
    }
   function reset_logininfo() {
    const targetKeys = ['topwar_app_serverToken','topwar_app_lastLogin','lastLoginUid','topwar_app_webgameqqCode'];
    targetKeys.forEach(key => { localStorage.removeItem(key); });
    parent.location.href = parent.location.href.split('?')[0];
  }
   function toggleDelayInput() {
     const show = $("#autoRelogin").value;
     $("#delayContainer").style.display = show == 1 ? "inline-block" : "none";
     if (show==1) $("#reloadDelay").focus();
     apply();
   }
  function validateDelay(input) {
    let value = parseInt(input.value);
     if (isNaN(value) || value < 3) {
     value = 3;
     input.value = 3;
   } else if (value > 1440) {
     value = 1440;
     input.value = 1440;
   }
   apply();
   return value;
 }
function apply() {
  const s = $("#autoRelogin").value;
  const t = parseInt($("#reloadDelay").value) || 3;  
  parent.helper.ext.updateAutoRelogin(s, t);
}
</script>
</head>
<body>
    <h3>关于口袋助手APP</h3>
    <span id="info"></span>
    <div style="width:100%;">掉线重连:  <select id="autoRelogin" onchange="toggleDelayInput();">
    <option value="1">开启</option>
    <option value="0">关闭</option>
    </select>
  <span id="delayContainer" style="margin-left:8px;">
    <input type="number" id="reloadDelay" max="1440" style="width:50px;" value="3" onchange="validateDelay(this)">
    <label>分钟后重连(最低3分钟)</label>
  </span>
</div>
    <div style="width:100%;">地图距离显示(F3): <span id="show"></span></div>
    <div style="width:100%;">快攻三连(F6): <span id="show1"></span></div>
    <div style="width:100%;">战斗模式(F8): <span id="show2"></span></div>
    <div id="notes"></div>
    <div>        
        <div id="action">
            <span style="color:#FF9900;">长时间无法登录？ 请重置浏览器。</span>
            <a href="javascript:void(0);" onclick="reset_logininfo();">重置</a>
            <i></i><a href="javascript:void(0);" onclick="reset();">清空</a>
            <i></i><a href="https://ioioiio.cn/order/" target="_blank">[续费]</a>
        </div>
    </div>
    <div class="foot">
        <button style="margin:auto;" onclick="parent.helper.dialog.close()">确定</button>
    </div>
</body>
</html>`;
helper.pro.introduce = {
  get active() {
    var obj153 = {
      cEFhp: function (arg1185, arg1186) {
        return arg1185 ^ arg1186;
      }
    };
    return obj153.cEFhp(0xec410, 0xec411);
  },
  collectData(arg1187 = false) {
    const tmp158 = auth.uid + "-";
    const arr12 = ["topwar_app_serverToken", "topwar_app_lastLogin", "lastLoginUid", "topwar_app_webgameqqCode", "kdqb_secret", "H5SDK_SECREY"];
    return Object.keys(localStorage).reduce((arg1188, arg1189) => {
      if (arg1187) {
        if (arr12.includes(arg1189)) {
          arg1188[arg1189] = localStorage.getItem(arg1189);
        }
      } else {
        if (arg1189.startsWith(tmp158) || arr12.includes(arg1189)) {
          arg1188[arg1189] = localStorage.getItem(arg1189);
        }
      }
      return arg1188;
    }, {});
  },
  downloadHandler() {
    this.backupData(false, "确认要备份当前口袋助手设置吗？", "设置备份确认");
  },
  loginBackupHandler() {
    this.backupData(true, "确认要备份当前登录数据吗？", "登录数据备份确认");
  },
  backupData(arg1190, arg1191, arg1192) {
    var obj154 = {
      XXsRW: function (arg1193, arg1194) {
        return arg1193(arg1194);
      },
      uKmtg: function (arg1195, arg1196) {
        return arg1195 + arg1196;
      },
      RtzIu: function (arg1197, arg1198) {
        return arg1197(arg1198);
      },
      bCISz: "_login",
      rjOsP: function (arg1199, arg1200) {
        return arg1199 ^ arg1200;
      },
      rhTPQ: "已取消登录数据备份操作",
      KYoRo: "游戏未登入暂时无法备份"
    };
    try {
      const tmp159 = auth?.["uid"];
      if (!tmp159) {
        alert("游戏未登入暂时无法备份");
        return;
      }
      parent.helper.dialog.close();
      const obj155 = {
        content: arg1191,
        title: arg1192,
        delegate: this,
        sureCallBack: () => {
          try {
            const result183 = this.collectData(arg1190);
            const date1 = new Date();
            const result184 = date1.getFullYear();
            const result185 = obj154.XXsRW(String, obj154.uKmtg(date1.getMonth(), 1)).padStart(2, "0");
            const result186 = obj154.RtzIu(String, date1.getDate()).padStart(2, "0");
            const tmp160 = "" + result184 + result185 + result186;
            const tmp161 = tmp159 + "_APP_" + tmp160 + (arg1190 ? "_login" : "");
            const blob3 = new Blob([JSON.stringify(result183, null, obj154.rjOsP(0x417f2, 0x417f0))], {
              type: "application/json;charset=utf-8"
            });
            const result187 = document.createElement("a");
            const objectUrl1 = URL.createObjectURL(blob3);
            result187.href = objectUrl1;
            result187.download = tmp161;
            result187.style.display = "none";
            document.body.appendChild(result187);
            result187.click();
            setTimeout(() => {
              document.body.removeChild(result187);
              URL.revokeObjectURL(objectUrl1);
              __require("UIManager").default.Instance().ShowTips(arg1190 ? "正在导出登录数据..." : "正在导出口袋助手设置...");
            }, 500);
          } catch (error19) {
            console.error("备份出错:", error19);
          }
        },
        cancelCallBack: () => {
          __require("UIManager").default.Instance().ShowTips(arg1190 ? "已取消登录数据备份操作" : "已取消口袋助手设置备份操作");
        }
      };
      helper.openUI("ConfirmPanel", obj155);
    } catch (error20) { }
  },
  handleImport(arg1201) {
    var obj156 = {
      pYFaO: "口袋助手设置导入成功，正在重启游戏...",
      oWtGM: function (arg1202, arg1203) {
        return arg1202(arg1203);
      },
      ADfWq: "已取消导入操作",
      kxvii: "文件解析失败",
      svYSr: "系统错误，请手动刷新"
    };
    try {
      parent.helper.dialog?.["close"]();
      const tmp162 = new FileReader();
      tmp162.onload = arg1204 => {
        var obj157 = {
          adgET: function (arg1205, arg1206) {
            return arg1205(arg1206);
          },
          UbpZT: "UIManager"
        };
        try {
          const result188 = JSON.parse(arg1204.target.result);
          const tmp163 = auth?.["uid"];
          const fn43 = () => {
            Object.entries(result188).forEach(([arg1207, arg1208]) => {
              localStorage.setItem(arg1207, arg1208);
            });
            if (tmp163) {
              __require("UIManager").default.Instance().ShowTips("口袋助手设置导入成功，正在重启游戏...");
            } else {
              alert("设置已导入，即将刷新");
            }
            setTimeout(() => {
              location.href = location.href;
            }, 1000);
          };
          if (tmp163 && helper?.["openUI"]) {
            const obj158 = {
              content: "导入口袋助手设置会覆盖现有设置并且重新登录游戏，是否继续？",
              title: "口袋助手设置导入确认",
              delegate: this,
              sureCallBack: fn43,
              cancelCallBack: () => {
                obj157.adgET(__require, "UIManager").default.Instance().ShowTips("已取消口袋助手设置导入");
              }
            };
            helper.openUI("ConfirmPanel", obj158);
          } else {
            if (confirm("导入将覆盖当前设置并需要重新登录，确认继续？")) {
              fn43();
            } else {
              obj156.oWtGM(alert, "已取消导入操作");
            }
          }
        } catch (error21) {
          alert("文件解析失败");
        }
      };
      tmp162.readAsText(arg1201);
    } catch (error22) {
      alert("系统错误，请手动刷新");
    }
  },
  render() {
    var value118 = helper.dialog.iframe;
    if (value118 && value118.name == "helper-introduce") {
      var value119 = value118.contentWindow.document;
      value119.getElementById("backupBtn")?.["addEventListener"]("click", () => this.downloadHandler());
      value119.getElementById("backupBtn2")?.["addEventListener"]("click", () => this.loginBackupHandler());
      value119.getElementById("importBtn")?.["addEventListener"]("click", () => {
        const result189 = value119.createElement("input");
        result189.type = "file";
        result189.accept = "application/json";
        result189.onchange = arg1209 => this.handleImport(arg1209.target.files[0]);
        result189.click();
      });
    }
  },
  open() {
    helper.dialog.open({
      name: "helper-introduce",
      html: this.html,
      width: 0x230,
      onopen: () => {
        this.render();
        helper.dialog.iframe.addEventListener("load", () => this.render());
      }
    });
  }
};
helper.pro.introduce.html = String.raw`<!DOCTYPE html>
<html charset="UTF-8">
<head>
<style>
    html{overflow:hidden;}
    body{Arial,Helvetica,sans-serif;font-size:12px;color:#333;margin:0px;padding:0px;background-color:#FFF}
    h3{display:block; margin-top:12px; margin-bottom:8px; text-align:center; width:100%}
    label,span{display:inline-block; height:13px; line-height:13px;} i{margin-left:16px;}
    .tab tr td{padding:5px;font-size:12px;color:#444;border-bottom-width:1px;border-bottom-style:dotted;border-bottom-color:#CCC}
    button{border:1px solid #999; border-radius:3px; outline-style:none; text-align:center; margin-top:0px; width:80px; height:22px;}
    button:hover{background-color:#ccc;} button:focus{background-color:#ccc;} button:active{transform: translateY(1px);} #backupBtn,#backupBtn2,#importBtn{width:140px;}
    .foot{display:flex; margin-top:12px; padding-bottom:2px; align-items:center; width:100%;} 
</style>
</head>
<script>
    function emptysettings() {
      if (confirm("当前所有设置都将被清空并需要重新扫码登录，是否继续？")) {
        localStorage.clear();
        parent.location.href = parent.location.href.split('?')[0];
      }
    }
   function reset_logininfo() {
      if (confirm("当前自动登录信息将被清空并需要重新扫码登录，是否继续？")) {
    const targetKeys = ['topwar_app_serverToken','topwar_app_lastLogin','lastLoginUid','topwar_app_webgameqqCode','kdqb_secret','H5SDK_SECREY'];
    targetKeys.forEach(key => { localStorage.removeItem(key); });
    parent.location.href = parent.location.href.split('?')[0];
     }
  }
function clearNonLoginInfo() {
  if (confirm("将清空所有设置但保留登录信息，确认继续吗？")) {
    const preserveKeys = ['topwar_app_serverToken','topwar_app_lastLogin','lastLoginUid','topwar_app_webgameqqCode','kdqb_secret','H5SDK_SECREY'];       
    Object.keys(localStorage).forEach(key => {
      if (!preserveKeys.includes(key)) { localStorage.removeItem(key); }
    });   
    parent.location.href = parent.location.href.split('?')[0];
  }
}
</script>
<body>
    <h3>常用快捷功能说明</h3>
<div style="width:550px;height:400px;overflow-y:auto;border:2px solid #ccc;">
<table width="100%" border="0" cellspacing="0" cellpadding="0" class="tab">
<tr><td colspan="2" align="center">
<button id="backupBtn2">备份登录数据</button><i></i>
<button id="backupBtn">备份全部设置</button><i></i>
<button id="importBtn">导入设置</button>
</td></tr>
<tr><td>F1</td><td>打开辅助详细说明</td></tr>
<tr><td>F2</td><td>(或Ctrl+Q)在地图场景随机迁城，可用于攻击后快速撤离</td></tr>
<tr><td>F3</td><td>显示/关闭世界地图距离泡形按钮及联盟标记按钮</td></tr>
<tr><td>F4</td><td>显示/隐藏交互图标按钮，便于更好的观察世界地图。</td></tr>
<tr><td>F6</td><td>启用/关闭快速攻击三连攻。</td></tr>
<tr><td>F7</td><td>暂停/恢复连续攻击，可在不停止连续攻击建筑的前提下暂停攻击建筑，如需继续，可恢复攻击。</td></tr>
<tr><td>F8</td><td>开启/关闭战斗模式，开启战斗模式后，高级功能自动关闭。</td></tr>
<tr><td>A</td><td>在主城或地图场景，打开联盟面板</td></tr>
<tr><td>B</td><td>在主城或地图场景，打开道具面板</td></tr>
<tr><td>D</td><td>在主城或地图场景，打开每日任务面板</td></tr>
<tr><td>H</td><td>在主城或地图场景，打开英雄面板</td></tr>
<tr><td>I</td><td>在主城或地图场景，打开用户信息</td></tr>
<tr><td>M</td><td>在主城或地图场景，打开邮件面板</td></tr>
<tr><td>R</td><td>在地图场景，打开雷达面板</td></tr>
<tr><td>S</td><td>在地图场景，打开搜索/搜索结果，连续两个S键按上次条件搜索怪物。</td></tr>
<tr><td>T</td><td>在主城或地图场景，打开主线任务/悬赏任务面板</td></tr>
<tr><td>~,0-9</td><td>在出征界面里，~:随机单格兵，0:一键上阵，其他1-9：预设队伍</td></tr>
<tr><td>Space</td><td>常用快捷键，快捷帮助，加入集结，实现类似鼠标双击功能，以及一些常见默认操作</td></tr>
<tr><td>Enter</td><td>切换主城/世界，实现类似鼠标双击功能，以及一些常见默认操作</td></tr>
<tr><td>Insert</td><td>加入集结/参与第一行集结，在弹出加入集结提示后，连续两个Insert键迅速转到集结出征页面加入最新的集结</td></tr>
<tr><td>Delete</td><td>快速删除兵营或士兵，分解英雄技能。</td></tr>
<tr><td>Add</td><td>同Insert键</td></tr>
<tr><td>Escape</td><td>最常用的按键，可快速关闭屏幕窗口，返回到地图或主城界面。 </td></tr>
<tr><td>Tab</td><td>在世界地图场景，屏幕快速切到自己的基地</td></tr>
<tr><td>Ctrl+B</td><td>快速打开联盟建筑面板，用来获取机械田信息</td></tr>
<tr><td>Ctrl+C</td><td>在世界地图界面R4选好位置后可以空格键立即单兵出征建电站</td></tr>
<tr><td>Ctrl+D</td><td>快速打开纯彩晶蝶获得窗口，可0.6折购买纯彩晶蝶(该功能有可能会被封号)</td></tr>
<tr><td>Ctrl+E</td><td>一键造兵功能，可立即填满陆海空三军训练营</td></tr>
<tr><td>Ctrl+G</td><td>宝藏行会碎片快速合成</td></tr>
<tr><td>Ctrl+S</td><td>快速打开快捷技能窗口，发动皮肤技能</td></tr>
<tr><td>Ctrl+T</td><td>所有出发或返程行军加速至2秒内达到</td></tr>
<tr><td>Ctrl+X</td><td>一键召回所有免攻集结行军，召回所有出发在途行军</td></tr>
<tr><td>Ctrl+Z</td><td>快速打开宝藏商店列表</td></tr>
<tr><td>Ctrl+R</td><td>降级修理所有损毁士兵</td></tr>
<tr><td>Ctrl+M</td><td>快速合兵</td></tr>
<tr><td>Ctrl+1</td><td>英雄信息页面，此快捷键可切换到技能组2，同时对于技能组2空技能栏位自动上野外采集技能和粮食采集技能，采集技能的优先顺序为稀有野外采集技能，稀有粮食采集技能，普通野外采集技能，普通粮食采集技能，每种采集技能使用已有当前最高等级道具。</td></tr>
<tr><td>Ctrl+2</td><td>和>Ctrl+1功能类似，第2技能组空位一键安装石油采集技能</td></tr>
<tr><td>Ctrl+3</td><td>和Ctrl+1功能类似，第2技能组空位一键安装金币采集技能</td></tr>
<tr><td>Ctrl+4</td><td>和Ctrl+1功能类似，第2技能组空位一键安装雷神矿采集技能（采集和负重）</td></tr>
<tr><td>Ctrl+0</td><td>在英雄信息页面，此快捷键可将技能组2的所有采集和负重技能卸载，同时切换回技能组1</td></tr>
<tr><td>Ctrl+~</td><td>同Ctrl+0，便于单手操作。</td></tr>
<tr><td>Shift+0-9,~</td><td>在基地信息弹出框，快速攻击（~-单兵，0-自动，1-9-编队）</td></tr>
<tr><td>Shift+U</td><td>所有攻击行军加速至3秒内到达</td></tr>
<tr><td>Alt+A</td><td>打开“攻击黑暗敌军”窗口</td></tr>
<tr><td>Alt+C</td><td>打开“自动发起集结”窗口</td></tr>
<tr><td>Alt+F</td><td>打开“查找玩家坐标”窗口（高级版）</td></tr>
<tr><td>Alt+G</td><td>打开“自动采集资源”窗口（高级版）</td></tr>
<tr><td>Alt+H</td><td>打开“自动拯救难民”窗口</td></tr>
<tr><td>Alt+J</td><td>打开“自动加入集结”窗口</td></tr>
<tr><td>Alt+P </td><td>打开“免受攻击保护”窗口（高级版）</td></tr>
<tr><td>Alt+Q</td><td>打开“一键快速攻击”窗口（高级版）</td></tr>
<tr><td>Alt+R</td><td>打开“遗迹资源信息”窗口（高级版）</td></tr>
<tr><td>Alt+S</td><td>打开“搜索世界地图”窗口（高级版）</td></tr>
<tr><td>Alt+T</td><td>8国期间打开“宝藏卡车信息”窗口（高级版）</td></tr>
<tr><td>Alt+Z</td><td>打开“其他更多活动”设置，内含泰坦,芯片祝福等更多功能（高级版）</td></tr>
<tr><td></td><td>以上部份功能仅<b>高级版</b>才有，初级版没有，更多辅助详细说明请按 F1 或<a href="https://ioioiio.cn/index.php/guide.html" target="_blank">点此</a>查看</td></tr>
<tr><td></td><td>如要续费或升级版本可<a href="https://ioioiio.cn/order/" target="_blank">点击这里</a>。</td></tr>
<tr><td></td><td>若有某些功能菜单无法正常打开,可通过以下清空设置来修复. <br><a href="javascript:void(0);" onclick="clearNonLoginInfo();">[ 清空设置保留登录 ]</a><i></i><a href="javascript:void(0);" onclick="emptysettings();">[ 全部清空 ]</a><i></i><a href="javascript:void(0);" onclick="reset_logininfo();">[ 删除登录信息 ]</a></td></tr>
    </table></div>   
    <div class="foot"> <button style="margin:auto;" onclick="parent.helper.dialog.close()">关闭</button> </div>
</body>
</html>`;
var cc = null;
async function checkState(arg1210) {
  var obj159 = {
    TRKjt: function (arg1211, arg1212) {
      return arg1211(arg1212);
    },
    NwvhK: function (arg1213, arg1214) {
      return arg1213 ^ arg1214;
    },
    nvGGL: function (arg1215, arg1216) {
      return arg1215 - arg1216;
    },
    dfiMT: function (arg1217, arg1218) {
      return arg1217 * arg1218;
    },
    WVtxM: function (arg1219, arg1220) {
      return arg1219 ^ arg1220;
    },
    tstGz: "Disconnected, auto-login disabled"
  };
  var timestamp1 = Date.now();
  if (timestamp1 - arg1210.time < 1000) {
    return;
  }
  arg1210.time = timestamp1;
  if (!navigator.onLine) {
    return;
  }
  let tmp164 = null;
  try {
    tmp164 = window.NET;
  } catch (error23) {
    tmp164 = null;
  }
  if (!tmp164) {
    if (arg1210.intervalId) {
      obj159.TRKjt(clearInterval, arg1210.intervalId);
      arg1210.intervalId = null;
    }
    return;
  }
  if (tmp164 && tmp164.states == obj159.NwvhK(0xa0296, 0xa0297)) {
    arg1210.disconnectTime = null;
    arg1210.randomOffset = null;
    arg1210.disconnectCount = 0;
    return;
  }
  arg1210.disconnectCount = (arg1210.disconnectCount || 0) + obj159.NwvhK(0x5efd4, 0x5efd5);
  if (arg1210.disconnectCount < obj159.NwvhK(0x52801, 0x52802)) {
    console.log("Anomaly detected " + arg1210.disconnectCount + " time, awaiting confirmation");
    return;
  }
  const tmp165 = !tmp164 || localStorage.getItem("topwar_app_serverToken");
  if (tmp165 && helper.ext.option.autoRelogin) {
    if (!arg1210.disconnectTime) {
      arg1210.randomOffset = obj159.nvGGL(Math.floor(Math.random() * 21), 10);
      const tmp166 = obj159.dfiMT(helper.ext.option.reloginDelay, 60) * obj159.NwvhK(0x2ebd4, 0x2e83c);
      const tmp167 = tmp166 + arg1210.randomOffset * obj159.NwvhK(0xe5a79, 0xe5991);
      arg1210.disconnectTime = Date.now() - (tmp166 - tmp167);
    } else {
      const tmp168 = Date.now() - arg1210.disconnectTime;
      if (tmp168 >= obj159.dfiMT(helper.ext.option.reloginDelay, obj159.WVtxM(0x70186, 0x701ba)) * 1000) {
        location.reload();
      }
    }
  } else if (tmp165) {
    console.log("Disconnected, auto-login disabled");
  }
}
function initialize() {
  if (window.cc) {
    hookMain();
  } else {
    addEventListener("load", hookMain);
  }
  const reconnectState1 = {
    busy: 0x0,
    time: Date.now(),
    disconnectTime: null,
    randomOffset: null,
    intervalId: null
  };
  reconnectState1.intervalId = setInterval(async arg1221 => {
    if (!arg1221.busy) {
      try {
        arg1221.busy = 1;
        if (helper.ext?.["option"]?.["autoRelogin"]) {
          await checkState(arg1221);
        }
      } finally {
        arg1221.busy = 0;
      }
    }
  }, 30000, reconnectState1);
}
function resetAnimation(arg1222) {
  if (window.cc && cc.game.config) {
    cc.game.setFrameRate(cc.game.getFrameRate());
  }
  if (window.cc && window.cc.game) {
    setTimeout(() => window.cc.game.resume(), 100);
  }
}
function preventSleep(arg1223) {
  var obj160 = {
    sWmDp: function (arg1224, arg1225) {
      return arg1224 === arg1225;
    }
  };
  if (obj160.sWmDp(document.visibilityState, "visible") && cc.sys.isMobile && navigator.wakeLock) {
    navigator.wakeLock.request();
  }
}
function preventPinch(arg1226) {
  if (arg1226.touches && arg1226.touches.length > 1) {
    arg1226.preventDefault();
  }
}
var lastTouchEndTime = 0;
function preventDoubleTap(arg1227) {
  var result190 = new Date().getTime();
  if (result190 - lastTouchEndTime <= 300) {
    arg1227.preventDefault();
  }
  lastTouchEndTime = result190;
}
if (!window.helper_inited) {
  var vXpmeS = "15|4|2|14|21|0|8|5|10|13|6|20|1|18|12|17|9|7|11|3|16|19".split("|");
  var NOOAxa = 0x0;
  while (true) {
    switch (vXpmeS[NOOAxa++]) {
      case "0":
        addEventListener("visibilitychange", arg1228 => preventSleep(arg1228));
        continue;
      case "1":
        addEventListener("mousedown", arg1229 => helper.dispatch(arg1229), true);
        continue;
      case "2":
        helper.aff2 = arguments.length > 2 ? arguments[2] : null;
        continue;
      case "3":
        add_p();
        continue;
      case "4":
        helper.aff = arguments.length > 1 ? arguments[1] : null;
        continue;
      case "5":
        addEventListener("gesturestart", arg1230 => arg1230.preventDefault());
        continue;
      case "6":
        addEventListener("keydown", arg1231 => helper.dispatch(arg1231), true);
        continue;
      case "7":
        initialize();
        continue;
      case "8":
        addEventListener("fullscreenchange", arg1232 => preventSleep(arg1232));
        continue;
      case "9":
        addEventListener("touchend", arg1233 => helper.dispatch(arg1233), true);
        continue;
      case "10":
        addEventListener("touchstart", arg1234 => preventPinch(arg1234), {
          passive: false
        });
        continue;
      case "11":
        loadJQueryBundle();
        continue;
      case "12":
        addEventListener("touchstart", arg1235 => helper.dispatch(arg1235), true);
        continue;
      case "13":
        addEventListener("touchend", arg1236 => preventDoubleTap(arg1236));
        continue;
      case "14":
        if (window.location.href.includes("https://h5kao.shan0327.com") || window.location.href.includes("https://sdk.tmlswk.com") || window.location.href.includes("https://sdk.fzjhymy.com")) {
          document.querySelector("title").innerText = "口袋奇兵（私服）";
        }
        continue;
      case "15":
        helper.site = Array.isArray(arguments[0]) ? arguments[0] : [arguments[0]];
        helper.site = ["https://ioioiio.cn/kd1"];
        continue;
      case "16":
        window.helper_inited = true;
        continue;
      case "17":
        addEventListener("touchmove", arg1237 => helper.dispatch(arg1237), true);
        continue;
      case "18":
        addEventListener("contextmenu", arg1238 => helper.dispatch(arg1238), true);
        continue;
      case "19":
        console.log("Helper successfully initialized.");
        continue;
      case "20":
        addEventListener("keyup", arg1239 => helper.dispatch(arg1239), true);
        continue;
      case "21":
        addEventListener("visibilitychange", arg1240 => resetAnimation(arg1240));
        continue;
    }
    break;
  }
}

