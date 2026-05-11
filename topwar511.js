(function (arg1, arg2) {
  var result1 = arg1();
  do {
    try {
      var tmp1 = parseInt("682642MCUQUQ") / 0x1 + -parseInt("1794266tHCRbe") / 0x2 + -parseInt("1612995afavSN") / 0x3 + parseInt("4Rfksmb") / 0x4 * (parseInt("2669315tVzpHn") / 0x5) + -parseInt("66mzdsIr") / 0x6 * (parseInt("171619gTtMYD") / 0x7) + -parseInt("320AeDwgg") / 0x8 * (-parseInt("182214VVMVjI") / 0x9) + -parseInt("2008010lucWIP") / 0xa * (-parseInt("11QKLzjI") / 0xb);
      if (tmp1 === arg2) {
        break;
      } else {
        result1.push(result1.shift());
      }
    } catch (error1) {
      result1.push(result1.shift());
    }
  } while (true);
})(fn3, 0x7f9a5);
(function (arg3) {
  var obj1 = {
    SIKpG: "return (function() {}.constructor(\"return this\")( ));",
    zOKNp: "log",
    OecHs: function (arg4, arg5) {
      return arg4 == arg5;
    },
    IrgLO: function (arg6) {
      return arg6();
    },
    QcsER: function (arg7, arg8) {
      return arg7 ^ arg8;
    },
    CKnnC: "clearTimeout",
    psGYz: "HackTimer.js by turuslan: Error parsing callback code string: ",
    QQXZP: function (arg9, arg10) {
      return arg9 === arg10;
    },
    fjiBa: "MSIE 10",
    vNKPd: function (arg11, arg12) {
      return arg11 ^ arg12;
    },
    FmElZ: "undefined",
    GqVGQ: "HackTimer.js by turuslan: Initialisation failed"
  };
  var result2 = function () {
    var flag1 = true;
    return function (arg13, arg14) {
      var tmp3 = flag1 ? function () {
        if (arg14) {
          var result5 = arg14.apply(arg13, arguments);
          arg14 = null;
          return result5;
        }
      } : function () { };
      flag1 = false;
      return tmp3;
    };
  }();
  var result3 = result2(this, function () {
    var parts1 = "1|5|2|0|3|4".split("|");
    var num1 = 0x0;
    while (true) {
      switch (parts1[num1++]) {
        case "0":
          var tmp4 = result6.console = result6.console || {};
          continue;
        case "1":
          var obj3 = {
            euXqx: "return (function() {}.constructor(\"return this\")( ));"
          };
          continue;
        case "2":
          var result6 = fn4();
          continue;
        case "3":
          var consoleMethods1 = ["log", "warn", "info", "error", "exception", "table", "trace"];
          continue;
        case "4":
          for (var num2 = 0; num2 < consoleMethods1.length; num2++) {
            var result7 = result2.constructor.prototype.bind(result2);
            var value1 = consoleMethods1[num2];
            var tmp5 = tmp4[value1] || result7;
            result7.__proto__ = result2.bind(result2);
            result7.toString = tmp5.toString.bind(tmp5);
            tmp4[value1] = result7;
          }
          continue;
        case "5":
          var fn4 = function () {
            var tmp6;
            try {
              tmp6 = Function(obj3.euXqx)();
            } catch (error2) {
              tmp6 = window;
            }
            return tmp6;
          };
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
  var result4 = obj1.vNKPd(0x32689, 0x32689);
  if (typeof Worker !== "undefined") {
    function fn5() {
      do {
        if (obj1.OecHs(result4, 0x7fffffff)) {
          result4 = 0;
        } else {
          result4++;
        }
      } while (obj2.hasOwnProperty(result4));
      return result4;
    }
    try {
      tmp2 = new Worker(arg3);
      window.setInterval = function (arg15, arg16) {
        var result8 = obj1.IrgLO(fn5);
        obj2[result8] = {
          callback: arg15,
          parameters: Array.prototype.slice.call(arguments, obj1.QcsER(0x2311f, 0x2311d))
        };
        tmp2.postMessage({
          name: "setInterval",
          fakeId: result8,
          time: arg16
        });
        return result8;
      };
      window.clearInterval = function (arg17) {
        if (obj2.hasOwnProperty(arg17)) {
          delete obj2[arg17];
          tmp2.postMessage({
            name: "clearInterval",
            fakeId: arg17
          });
        }
      };
      window.setTimeout = function (arg18, arg19) {
        var result9 = fn5();
        obj2[result9] = {
          callback: arg18,
          parameters: Array.prototype.slice.call(arguments, 2),
          isTimeout: true
        };
        tmp2.postMessage({
          name: "setTimeout",
          fakeId: result9,
          time: arg19
        });
        return result9;
      };
      window.clearTimeout = function (arg20) {
        if (obj2.hasOwnProperty(arg20)) {
          delete obj2[arg20];
          tmp2.postMessage({
            name: "clearTimeout",
            fakeId: arg20
          });
        }
      };
      tmp2.onmessage = function (arg21) {
        var messageData1 = arg21.data;
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
        if (obj1.QQXZP(typeof tmp9, "function")) {
          tmp9.apply(window, tmp8);
        }
      };
      tmp2.onerror = function (arg22) {
        console.log(arg22);
      };
    } catch (error5) {
      console.log("HackTimer.js by turuslan: Initialisation failed");
      console.error(error5);
    }
  } else {
    console.log("HackTimer.js by turuslan: Initialisation failed - HTML5 Web Worker is not supported");
  }
})("HackTimerWorker.js");
(function () {
  var obj4 = {
    SgrQk: function (arg23, arg24, arg25) {
      return arg23(arg24, arg25);
    }
  };
  obj4.SgrQk(setInterval, function () { }.constructor("debugger"), Math.random() * 500 + 100);
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
    var obj5 = {
      eNfBc: function (arg26, arg27) {
        return arg26(arg27);
      }
    };
    return obj5.eNfBc(__require, "DataCenter").DATA.UserData;
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
    var obj6 = {
      ChTaY: function (arg28, arg29) {
        return arg28(arg29);
      }
    };
    return obj6.ChTaY(__require, "DataCenter").DATA.ClientTime;
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
    return __require("RequestId").RequestId;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NRequestId", {
  get: function () {
    return __require("NRequestId").NRequestId;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NRequestIdV2", {
  get: function () {
    return __require("NRequestIdV2").NRequestIdV2;
  },
  enumerable: false,
  configurable: true
});
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
    var obj7 = {
      pDKBQ: function (arg30, arg31) {
        return arg30(arg31);
      }
    };
    return obj7.pDKBQ(__require, "TableName").TableName;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "TableUtils", {
  get: function () {
    var obj8 = {
      YbhDD: function (arg32, arg33) {
        return arg32(arg33);
      }
    };
    return obj8.YbhDD(__require, "TableUtils").default;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "EVENT", {
  get: function () {
    return __require("EventCenter").EVENT;
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
    var obj9 = {
      mPUpj: function (arg34, arg35) {
        return arg34(arg35);
      },
      ozIfj: "MvcMsgs"
    };
    return obj9.mPUpj(__require, "MvcMsgs");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NBattleMsgs", {
  get: function () {
    var obj10 = {
      RmrEt: function (arg36, arg37) {
        return arg36(arg37);
      }
    };
    return obj10.RmrEt(__require, "NBattleMsgs");
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
    var obj11 = {
      ILWmj: function (arg38, arg39) {
        return arg38(arg39);
      },
      LVTvx: "MsgBox"
    };
    return obj11.ILWmj(__require, "MsgBox");
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
    var obj12 = {
      djdPd: function (arg40, arg41) {
        return arg40(arg41);
      }
    };
    return obj12.djdPd(__require, "UIDataInfo").UIDataInfo;
  },
  enumerable: false,
  configurable: true
});
function fn1(arg42, arg43) {
  var result10 = fn3();
  fn1 = function (arg44, arg45) {
    arg44 = arg44 - 0x0;
    var value3 = result10[arg44];
    if (fn1.NHLStb === undefined) {
      var fn6 = function (arg46) {
        var str1 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        var str2 = "";
        var str3 = "";
        for (var num3 = 0x0, tmp11, tmp12, num4 = 0x0; tmp12 = arg46.charAt(num4++); ~tmp12 && (tmp11 = num3 % 0x4 ? tmp11 * 0x40 + tmp12 : tmp12, num3++ % 0x4) ? str2 += String.fromCharCode(0xff & tmp11 >> (-2 * num3 & 0x6)) : 0x0) {
          tmp12 = str1.indexOf(tmp12);
        }
        for (var num5 = 0x0, length1 = str2.length; num5 < length1; num5++) {
          str3 += "%" + ("00" + str2.charCodeAt(num5).toString(0x10)).slice(-2);
        }
        return decodeURIComponent(str3);
      };
      fn1.OMQdOb = fn6;
      arg42 = arguments;
      fn1.NHLStb = true;
    }
    var value4 = result10[0x0];
    var tmp10 = arg44 + value4;
    var value5 = arg42[tmp10];
    if (!value5) {
      value3 = fn1.OMQdOb(value3);
      arg42[tmp10] = value3;
    } else {
      value3 = value5;
    }
    return value3;
  };
  return fn1(arg42, arg43);
}
Object.defineProperty(window, "FWSTool", {
  get: function () {
    var obj13 = {
      VZHSW: function (arg47, arg48) {
        return arg47(arg48);
      }
    };
    return obj13.VZHSW(__require, "FWSTool");
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "GameTools", {
  get: function () {
    var obj14 = {
      OKJNn: function (arg49, arg50) {
        return arg49(arg50);
      }
    };
    return obj14.OKJNn(__require, "GameTools").default;
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
    var obj15 = {
      CbOaj: function (arg51, arg52) {
        return arg51(arg52);
      },
      FRlQd: "PlayerInfo"
    };
    return obj15.CbOaj(__require, "PlayerInfo").default;
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
    var obj16 = {
      RigRS: function (arg53, arg54) {
        return arg53(arg54);
      }
    };
    return obj16.RigRS(__require, "KVKTools").default;
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
function fn2(arg55, arg56) {
  var result11 = fn3();
  fn2 = function (arg57, arg58) {
    arg57 = arg57 - 0x0;
    var value6 = result11[arg57];
    if (fn2.oxGlkw === undefined) {
      var fn7 = function (arg59) {
        var str4 = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789+/=";
        var str5 = "";
        var str6 = "";
        for (var num6 = 0x0, tmp14, tmp15, num7 = 0x0; tmp15 = arg59.charAt(num7++); ~tmp15 && (tmp14 = num6 % 0x4 ? tmp14 * 0x40 + tmp15 : tmp15, num6++ % 0x4) ? str5 += String.fromCharCode(0xff & tmp14 >> (-2 * num6 & 0x6)) : 0x0) {
          tmp15 = str4.indexOf(tmp15);
        }
        for (var num8 = 0x0, length2 = str5.length; num8 < length2; num8++) {
          str6 += "%" + ("00" + str5.charCodeAt(num8).toString(0x10)).slice(-2);
        }
        return decodeURIComponent(str6);
      };
      var fn8 = function (arg60, arg61) {
        var arr1 = [],
          num9 = 0x0,
          tmp16,
          str7 = "";
        arg60 = fn7(arg60);
        var tmp17;
        for (tmp17 = 0x0; tmp17 < 0x100; tmp17++) {
          arr1[tmp17] = tmp17;
        }
        for (tmp17 = 0x0; tmp17 < 0x100; tmp17++) {
          num9 = (num9 + arr1[tmp17] + arg61.charCodeAt(tmp17 % arg61.length)) % 0x100;
          tmp16 = arr1[tmp17];
          arr1[tmp17] = arr1[num9];
          arr1[num9] = tmp16;
        }
        tmp17 = 0x0;
        num9 = 0x0;
        for (var num10 = 0x0; num10 < arg60.length; num10++) {
          tmp17 = (tmp17 + 0x1) % 0x100;
          num9 = (num9 + arr1[tmp17]) % 0x100;
          tmp16 = arr1[tmp17];
          arr1[tmp17] = arr1[num9];
          arr1[num9] = tmp16;
          str7 += String.fromCharCode(arg60.charCodeAt(num10) ^ arr1[(arr1[tmp17] + arr1[num9]) % 0x100]);
        }
        return str7;
      };
      fn2.mSZHUf = fn8;
      arg55 = arguments;
      fn2.oxGlkw = true;
    }
    var value7 = result11[0x0];
    var tmp13 = arg57 + value7;
    var value8 = arg55[tmp13];
    if (!value8) {
      if (fn2.eKAIaR === undefined) {
        fn2.eKAIaR = true;
      }
      value6 = fn2.mSZHUf(value6, arg58);
      arg55[tmp13] = value6;
    } else {
      value6 = value8;
    }
    return value6;
  };
  return fn2(arg55, arg56);
}
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
    var obj17 = {
      SMqFc: function (arg62, arg63) {
        return arg62(arg63);
      }
    };
    return obj17.SMqFc(__require, "NWorldMapCoreBiz").default;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MapData", {
  get: function () {
    var obj18 = {
      nADLL: function (arg64, arg65) {
        return arg64(arg65);
      }
    };
    return obj18.nADLL(__require, "NWorldMapData").default.instance;
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
    return __require("NWorldMapController").default.instance;
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
    var obj19 = {
      GHtKU: function (arg66, arg67) {
        return arg66(arg67);
      },
      fAjUt: "NWorldMapTileController"
    };
    return obj19.GHtKU(__require, "NWorldMapTileController").default.instance;
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
    return __require("PresetMarchController").default.instance;
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
    var obj20 = {
      gPtoM: function (arg68, arg69) {
        return arg68(arg69);
      },
      TiGjH: "AllianceWorldSiteController"
    };
    return obj20.gPtoM(__require, "AllianceWorldSiteController").AllianceWorldSiteController.instance;
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
    return __require("ConquerorController").ConquerorController.getInstance();
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "EniConquerorController", {
  get: function () {
    var obj21 = {
      gxCUg: function (arg70, arg71) {
        return arg70(arg71);
      }
    };
    return obj21.gxCUg(__require, "EniConquerorController").EniConquerorController.getInstance();
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
  var result12 = document.createElement("meta");
  result12.httpEquiv = "Content-Security-Policy";
  result12.content = "upgrade-insecure-requests";
  document.head.appendChild(result12);
}
Object.defineProperty(window, "EnigmaBeastController", {
  get: function () {
    return __require("EnigmaBeastController").default.getInstance();
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
    var obj22 = {
      CHWYj: function (arg72, arg73) {
        return arg72(arg73);
      }
    };
    return obj22.CHWYj(__require, "CSHuntController").CSHuntController.getInstance();
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
    var obj23 = {
      vbjyP: function (arg74, arg75) {
        return arg74(arg75);
      }
    };
    return obj23.vbjyP(__require, "PabController").default.getInstance();
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
    var obj24 = {
      Qrcmg: function (arg76, arg77) {
        return arg76(arg77);
      }
    };
    return obj24.Qrcmg(__require, "TruckController").TruckController.getInstance();
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
    var obj25 = {
      EEDkz: function (arg78, arg79) {
        return arg78(arg79);
      },
      NPuTI: "NWorldMapMarchModel"
    };
    return obj25.EEDkz(__require, "NWorldMapMarchModel").default.instance;
  },
  enumerable: false,
  configurable: true
});
function fn3() {
  var arr2 = ["iCkpW6ddGXTCW53cPCo4WRD/vK/dIxnBW6pdQeNdNrBcHSkL", "6isC5yUn6yA36zU76lAp5RIt", "W5dcPuxcNCkEWOFcLeBdNMabucW", "Dg91y2Hy", "WOhdUdbkneWiW4mLWPC", "WPmzDCkQte8", "hSo7e8oX", "5y+J6kkl5Awh5yw177Yi56Eb5PYn77Yj", "cvFdKCo6WOK", "uCkgWQxdGa", "Cg93", "wqenzgNdN8oCDt1o", "DMjQEva", "WPRdOCkiW7FcP8kKW6jGW57dJ8o9jYO3", "bv7dHSon", "6iEQ5yQO5y+r6lw36zUg57Ut", "Aw50zxjHy3rHyMXL", "DfLWDNy", "EeZcVWZdNWe", "vmoVWRW/W68UnSkpWR4nW50", "D3HmB2DPBKrPDG", "W6nQW6tdI8k7W6iFWRJcHmoyW5BcUYC", "uHBcHvyAWP5BWQFcGSkfcmoNWQZdHCofW7NcTa", "WOxdP8kMW5dcUa", "aSkAW7FcKHNdKKm", "rNPkzhG", "tK1HCMnOvhLWzq", "6lED56A75O+q56s65BEY5ywZ6zET", "f8oXa8oxzCkVh07cUG5cfSoZAeRcUbRdTMaKp8o6W5y", "zZftlmoQWRFcIa", "mXZdHmowW40MxSoDf0ubWPNcMmomqa", "vdi0oJaWkZa4oJaW", "C2XPy2u", "kxSoW4dcGa", "CxPODeW", "ktZdLmoeW5maqSohkLm", "wSkPW6dcVCkHWPn2", "B1hcPG", "WO93WOiQjXNdKq", "z2f0AgvYuMvZB3vYy2u", "A2TAzMq", "hCoXfmo8A8krg0dcOa4", "DgFcOa", "z2fTztjJzwXS", "CZJcUNq", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9izxjVuMvJCNvPDfjLC3vSDfbVChvWtMv3mY9QDw1W", "B3nRAw5Pza", "B3bLBKDLDerPC2Hqyw5LBa", "WQJdLmk6W4FcOW", "qvrktwq", "Bmo5W4ZdIcaSW4PCW7O+W7xcN8o3W7VdP8oXy8k2zq", "uSo4W4RdLISfW55pW4W", "D29YBgrnyxbdB21WB25LBNq", "AZfEc8oQWQ3cLNrByHpdQq", "faFdHCoq", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VuMLNAhrcB3r0B20VyNrUqwXSAwfUy2uVyNrUqwXSAwfUy2u", "umoIWRWIW5W", "CMfUzg9T", "wSo0WPS4W5i8", "jmkEWOCMDa/dPmkNqvfOgNa9tW", "BxLnyxjJAgvZ", "qCkpWQldH8kc", "WPRdNbi6jCoG", "zNvSBa", "ug9Wtgf5zxiVvuLgCMfTzurPywXVzY9crY9dte9trq", "FsRcHhKWWR1fWOpcQ8k+jSowWPZdQ8oeW5dcLfq", "ywjVDxq", "WQxdOYnsnxW", "bXFdS8oyWOiAbmo7WOBcT8kUALvtW40FDJHgW63cSa", "uezpCgvUrgf0yq", "WQy2WOddT8kLySoNWR4", "nmonaxJdRefUWQO", "WRFdPZjkkq", "zddcISkXWPq6FCkiWO4FWOznCCoIAGCRWO8Bd8kbW4u", "DmoqW5JdTWW", "WPepySkoue/dKr9xz1mnW6VcQa", "bNuJW4RcN8kRe8krfh3dMuFcPG", "B3bLBLvj", "W5VdQvBdMG", "EeZcOXBdJbFdOCkLWOH7vCk5W7CMBqG", "WQekaLhcR8ooW6PcFmkwwmkIWORdJ8orW47cRWJcR8kiW7NdNhFdKSoCp2pcNvr8W4v8za57W6yOW6qaWO4CC8k9o8oZDSkNpmonea", "vuhcQmkZWRxdIY4xWOXBWR4", "vCoZW4NdSYStW4DiW6q6W7pcQmo2W5pdO8otA8kBCZjDEKy7", "W4NcS33cN8koWO7cH0xdG38QvW", "W4RcNq/cOCoOnmoi", "yNvPBgrPBMC", "W7ipg00BW6C2WPRcSKe+", "WQ3dPehcSG", "ue9tva", "AK13WPXG", "q29TBw9UvgLWCW", "lqRdUCogWRuppCoZWPS", "tCk8W6RcTCkG", "afVdGmo3WOVdJL8d", "ruFcL8kOWQpdGd8XWQvbWRvd", "ug9Wtgf5zxiVvuLgCMfTzu5VBMvBmcWXxs9dt05uru5ul3bYzwzHyKL0zw1oDw1tzwXLy3qVtMv3ie5VzguVyNv5qNv0Dg9U", "5ysf5y+X5lUq77Yp5yIS5O2n55Qe6ik85As36lA577Y5", "omofW6BdMCoQwGhdQsRcNujqka", "x2LMCMfTzq", "fCorW7NdVG", "WPafzmkMxv7dLrvxv3aaW4m", "W5CNjM0F", "W47cQqBdM8ol", "D2fYAduUCML2zxjNyw1LlM5LDa", "W5hdT8kyyL9kAxrVW79t", "W5/cQwhcKmkcWQ/cIeZdRMCQsdlcUmoiCq", "z2v0qwXSAwfUy2vjzej5ug9PBNq", "x2nVBxbVBMvUDhm", "5BU66ycG5AcH5z6s55s156Uz", "jx0/W4VcNq", "reZcPJhdJbxdH8kbWPz9sSkl", "wmoLWOhdLSkc", "W6ldPutdHLTLiG", "CtdcNCkDWO0YF8kUWO4qWP1lxCoOAb0VWPOm", "WPJdGWW1pq", "EM5cWR90g8kHWRG", "C2HVD1bHBMvS", "DMfYigzHA2vjzfrVswqGpsb7FtTVBM1LC3nHz2uGpsbMDw5JDgLVBIaOzxzLBNqPihSjDMfYigrHDgeGpsbLDMvUDc5KyxrHlaKjBMfTzsa9igrHDgeUBMfTzsWjcwzHA2vjzca9igrHDgeUzMfRzuLKlaKjDgLTztSjAwyOzgf0ys5OyxnpD25qCM9Wzxj0EsGNDgLTzsCPksb7cqL0Aw1Lid0Gzgf0ys50Aw1LoWL9cxn3AxrJAcaOBMfTzsKGEWKjy2fZzsaNC2v0sw50zxj2ywWNoGKjcwzHA2vjzfrVswrBzMfRzuLKxsa9ihnLDeLUDgvYDMfSkgz1BMn0Aw9UicGPihSjcqKjCg9ZDe1LC3nHz2uOE2zHA2vjzdOGzMfRzuLKFsK7cqKjFsWGDgLTzsK7cqKjyNjLywS7cqLJyxnLicDJBgvHCKLUDgvYDMfSjZOjcqLPzIaOzMfRzuLKvg9jzc5OyxnpD25qCM9Wzxj0EsaOzMfRzuLKksKGEWKjcqLJBgvHCKLUDgvYDMfSkgzHA2vjzfrVswrBzMfRzuLKxsK7cqKjcwrLBgv0zsbMywTLswruB0LKw2zHA2vjzf07cqKjFqKjcwjYzwfRoWKjy2fZzsaNC2v0vgLTzw91DcC6cqKjzMfRzuLKvg9jzfTMywTLswrDid0GC2v0vgLTzw91DcHMDw5JDgLVBIaOksb7cqKjcxbVC3rnzxnZywDLkhTMywTLswq6igzHA2vjzh0PoWKjcqLPzIaOzMfRzuLKvg9jzc5OyxnpD25qCM9Wzxj0EsaOzMfRzuLKksKGEWKjcqKjzgvSzxrLigzHA2vjzfrVswrBzMfRzuLKxtSjcqKjFqKjcx0SihrPBwuPoWKjcwjYzwfRoWKjy2fZzsaNy2XLyxjuAw1LB3v0jZOjcqLPzIaOzMfRzuLKvg9jzc5OyxnpD25qCM9Wzxj0EsaOzMfRzuLKksKGEWKjcqLJBgvHCLrPBwvVDxqOzMfRzuLKvg9jzfTMywTLswrDktSjcqKjzgvSzxrLigzHA2vjzfrVswrBzMfRzuLKxtSjcqL9cqKjyNjLywS7cx19", "wqKqDa", "oSoXWR/dIa", "A2z2tNK", "W6jQW67dHG", "WQqoi0FcQG", "W7tcJWldQq", "shLDWRbvcmkCWP0", "BwvJAge", "CLbPBKK", "v29YBgrnyxbuB29SCW", "kG/dG8owW44mx8ou", "WR5BWQKQpbtdGMVcNG", "BSoMW5RdHtaeW6njW4uRW6tcUConW6ddQ8otACk7", "W7WbWQ4QhW", "W6fJW6ZcJq", "y3jVC3nuCMvHC3vYzq", "AsXE", "WPddSCkiW5hcTW", "fCkEW7hcTrK", "qxjTEurHDge", "WO/dKHa", "W7ddV0JdRmodW6FcPq", "nNWYFdv8mxWWFdn8na", "FGWsEuNdHColCrXkWQ0IsrJdIai", "D1zUENm", "ASo3WQCMW5GOm8kuWQa", "5y+J6kkl5yQP5OMl", "yxjTEuLe", "EMnpru8", "qNv0Dg9U", "W7pdOKVdKwT7mb8", "nee2aHJdP8kcW6e", "b8k7oxHgkG", "iZK5oq", "tg9NAw5xzwjby2nVDw50ugfUzwW", "BgLTAxq", "zuFcGqVdHHm", "WPGqhq", "zJeW", "WQmVWOpdQ8k9", "5REX5Rw35A+75A6D5Rs75yQO", "BKZcVG", "AdfmiCoRWQxcTMLADXJdRY9p", "a8kEW7dcSJhdI0xdOxxdJ3VdTW", "WOFdLSktW6hcQa", "y3jVC3nuCMvHC3vYzvrLyw1szwfKEunOyw5Nzq", "yNPyrLC", "WQ9DWRmf", "C3rLywXPBMDFy29Kzv9PC19ZAgfTzwz1Ba", "ChjV", "BMv3q2HHDfn5C01ZzW", "gmkGla", "W5/dPmkpyen8xNLYW7K", "W5BcG8kUitu", "mCkxW6BdLHf0W6dcO8oVWQa", "ywLYzhjVCefJDgL2Axr5", "iMqmW4FcIW", "v8kQW7tcVCk5WPO", "C2fMyxjP", "W6XGW6tdMmkQW6q", "leOxW7dcOG", "ALzAtgq", "z2v0tw9KzwXqCMvMywjqBgfJzuHVBgrLCG", "WRrmW7DvwCosW7z4caWlrZFcHHGYW4y", "z1b0B00", "jxa8W4VcPG", "BwzgyvG", "WPtdQSkpW4dcRSkJW61H", "oqddOCoOWO8ppCokWOhcP8kU", "WPOpEmkSsei", "WOm/xmkAva", "6lED56A75O+q56s65BEY5OMt5BYa", "B25tzxj2zxjmAxn0u3vJy2vZCW", "umoximo8fa", "WQ0fWRdcKchdISozWOhdNCkEt20jW4ldVxpdSSkqxSkl", "u8kPW6xcTmk1WQbRnq", "Fmo4WPddUCkgvCkyF8ogtv7cT8kUW6zJW7tcL8o6WQO7dmkvb8otWOhdVZL7pG7cICo5W5KLjCkwktxcNcn5gSonBxpdT1pdV8kTW5m", "iWRdTSoKW4C", "x2nSB3nLvgLWC0XHEwvY", "D2XlAva", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBLSWldfDl0nptLrftLqVqxjTEuvXDwLWtMv3rw1nyw51zMfJDhvYtM9Kzs9qCM9KDwnLtM9Kzs9IB3r0B21czY9KzwnVBxbVC2vcDxr0B24", "nmogaxJdVKX4WPOJWOabBmoPeCoyrCozc0O", "s1v1EMu", "WR7dOZzwiZviWOmGWPlcNdDchuLRW5NdQ8oYW7JdTZlcIsxdPwrmWPy", "DwrNyNa", "gfC1mHZdVCkaW60umJddK1e", "svrftq", "bfGuW6BcV2KnsCkP", "zvj1rxq", "5yYH6kou5yMA5OUm6k2657245A245yAZ5OMR5yMW772Z5Q2S5z2p6ywf5zoa5RUK5OUkWPRdV8oR", "W74tlvKDW6CWWPRcVK8WW5BdVq", "vJjYjmog", "uSkLW7xcQa", "w8o2WPShW64", "BmkHWQRdKmkDaCkiW60oFmk1W4ZdS2FcGvpcVmkzWPBdVwm0W7BdPmomxW", "W7xdRKRdM1rWfrJcL8kXjq", "W5xdOmkjqercwNDOW7LwWQW", "t2HTuu8", "x2nSB3nLug9Wtgf5zxi", "zgvS", "wc1Alq", "F34U", "BKZcVGBdNqe", "WQFcJ2bJzCosW7q", "WOyfWQX5WP0oqSk0jCkrsri", "seD1ru8", "WQxdSJz1ogaqW6G2WOFcJW", "eSk6W6BcKbm", "m3WXFdj8mhW0", "wgv3Dvy", "W5VdOKFdKCoyW67cVCofWQq", "Dg9Nz2XLrMLNAhrPBMDnB2rL", "WRtdSKtcPhSeW4RcVs4", "zxHMBhm", "W6yvWQ8gaG", "wmo7WRGeW4q7pW", "WOJcM3LBEmolW7/dMeJdK8oSza", "WRSWWOPwWPaUCCkqbCkTAt/dUCoXW4/dRbq", "W4lcLq/cPColkmokW6aMgaGl", "WRJdRKlcVNKo", "mqZdUmop", "W47dOKVdHSoy", "e8kQp0vjl8kndCk2W7VdHmk+W4i", "h8ovW7ldUSo+qGe", "EwCMW7GAbW", "WQRdQvu", "WRxdUcXinwWt", "zg93BMXVywq", "AgvSCgvY", "W5NcVsFdUCoYWQzKjCk0wCofiWpcPhPK", "sgv4", "WR97WPq4hHtdNgVcNG", "xaWry00", "C3fYDa", "W7ZdKSksCuDlA3rQW7vzWRytW4VcGSoRlZHEW54ggSkZ", "dmoQWR3cLq", "W6OileWb", "W6VdSvldNSoOW63cVmodWQZdUq", "twfWvg9VBhm", "WPSpEmk+", "WO8mWRRdGSoKj8k0", "WOWiWPZdTCkOCSojWRClWROlzGVdUW", "W4FcUgdcQCkT", "xa8qzeNdGSogCsW", "WO3dMHa8dCo6W51r", "kSo7WRxdIq", "W4pdTuJdMmoFW6a", "y0FcOrFdIaRdTSkb", "W4BdQfpdNvr8iGNcVCkYl8kIWRFcHCoVW4bDla", "DmoOWQuPW7q/p8kn", "rw5Pq29UCxvLCM9Yq29UDhjVBgXLCG", "Fcfzia", "BMv1DhjHBf9KyxrH", "B2ZcHCkOWRBdGJKxWOjfWRzyW6m", "C3LZ", "W4VdTuddLSofW63cGSofWQBdUWfcWPTQ", "tMv3q0fcq29UDhjVBgXLCG", "qMf0DgXLrgf0yq", "gSo2WRRdG8kyuIy", "WRCVWOfmWRaRC8kCfG", "a8kEW7dcSJ3dNKpdO37dJq", "q2DxEgW", "qCkmWQxdKmkma8kzW60iBmkWW43dT3dcUG", "x3jLCxvLC3ruAw1Lug9VBa", "fmoaW6ddSSoKqa", "BZdcKmkvWO8/", "D8o/mCoeoYvGvIj8WRz5fuC", "W5dcVer0WPBcJtlcTSo1C8kk", "CMfUzg9Tt2zMC2v0", "rCoXWPldLmkksq", "W7NcGGBdR8o3WPDrl8k0wCoe", "jmkzW4xdHWm", "emkwW6ldIGm", "i8oaeNNdGuL4", "aeeFW6/cP0e", "W57cHHpcTSo1iSoEW7O", "CMv0DxjUicHMDw5JDgLVBIGPihT9lMnVBNn0CNvJDg9YkcjYzxr1CM4GDgHPCYiPkcaPktS", "WO3dR1tcTM0vW5FcRW12gGL3jh/cGCkNWQWxW5FdP8kVWOdcGbjf", "eSkqW7hcQHJdVLJdPxRdINddOW", "bSkQoMrnpSkv", "W6tdPeNdGeD7iIFcL8kZjCk5WRi", "EMPzzxO", "WQekaLhcR8oeW6rhw8kYBSk+WO/dR8ooW5VcQfC", "sCoVmCot", "WOJdOmkBW5BcVW", "WQqab1ZcUCoNW4HDr8kRFCk/WOFdK8oeW5K", "yxbWBhK", "qvjnwq", "sKTqzuK", "x8o+WPtdKa", "ChjVDg90ExbL", "WOapza", "zgf5sw5PDa", "CgfYzw50", "qMz0DNO", "WQNdR14", "v8o2lSozkG", "W4HGW7i", "e0hdGq", "W5xdPmkqzG", "FNJcOaxdPG", "uCo/WQqXW4qinCkoWQ0fW5PYWQ8i", "WRGHWPXmWPGM", "W5ZcVKb4WOG", "EMHFy24", "D29YBgrcB3nZ", "y2HYB21L", "BMv3v29YBgrnyxjJAerHDgfiyw5KBgvY", "gmo9e8oWB8kS", "oKOXnrhdOmknW6a6hXFdGK/cGW", "kSoxdw/dGuK", "C2L6zq", "WRG3fuZcVSoMW7Hgymk7wCoI", "CYXW", "DMLZAwjPBgL0Evn0yxrL", "W7tdV0m", "nhWXFdv8mNWWFdn8nG", "e8oeW7NdTW", "WPmDba", "W60algSDW6mhWOi", "zSoYlmoXkJXBudS", "W6ddRLpdVuXMiHhcKmk+ja", "WQa5WP9D", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9fBMLdB25XDwvYB3jhyxrOzxjxB3jSzfbVCc8YBMrFyMDFmY9IDg5dB250zw50l2f0DgfJA0j0BG", "zw5KvgLTzq", "EwHbWODedSk0WRPO", "vWVcMeimWPvqWR3cGSkwfmoTWQ3dI8otW6hcVwuxtCkEuqT6bCkjW67dIsFdL8kWaW", "WQu6WOC", "aXFdO8oiWOWTjSo0WOdcPSkPrvzyW4S", "ug9Wtgf5zxiVsxrLBunVBxbVC2vqyw5LBc91C2vcDg4", "5BIg55EK5B2T5O6R5yMl6icc", "y29Kzq", "pmoMWQ8", "fee2aHJdP8kcW6e", "zeJcVWy", "y29UDgfPBMvY", "WOBdOJfob2avW4aZWR7cJY8JwLDNW6BdOmoMW7a", "5BEm5yYA5Rso55QN5B6b5PAp5O2S5Aww5lUd5Po35l61", "DgfYz2v0", "x8k/W6pcSSkWWQ9a", "amkEWOWRCZ7dSmkcuf0", "WPZdIWG", "DvzACMG", "WPldQSk6W5xcVmk5W49WW6JdL8oqlquMbJNcKSofFIve", "omond2hdNer7WQS", "WOVdSrmxia", "ytfepq", "uMv3yxjKq29UDhjVBgXLCG", "mwuKW6hcUSkJdCkwpK3dUudcPmoF", "zgLZy29UBMvJDenVDw50", "5ygC5Q2I6lEF6lIQ", "cmojd2xdRq", "t3jPz2LUu2vYDMvYswq", "AMDgBw4", "yH3cRmocWPGFqmorWQWdW5fowCoBhaeNWQSycmk9WPKuWRL3dSorWOvxW4JdGauZW4rRW5rqW7dcIgm", "amkMjNq", "WQSXWOddS8kLEmoNWRm", "yL3cVW8", "WR8zWRdcKdq", "5P6b6k+q5OQQ5y6O5lYj5Oov", "C2TPBKne", "auddLSocWOe", "buddN8oRWRZdG0au", "6k+055sg54QS", "W7b3W6xdI8kXW7GsWP/cIa", "WOidE8kUtG", "W6/dUuldKG", "WOxdMqLSfa", "y2HLy2Tdyw5nB3zL", "cvy1eW", "BwvYz2vuCMvHC3vYzu1HCa", "Cw5QqLq", "W5ZdOeRdLSoF", "tM90zxm", "hmoXgCoZFSkQ", "W4NdQKRdKve", "rKVcKmkEWRFdHZaWWOrgWRX2W78BWR54iSokW55gfSo7AmkEW7ddS8o3W68cg3W", "qd5ViSou", "z2v0sxrLBq", "WPNdQ8kUW5hcVmkOW7PdW73dM8ow", "pwuPW4BcVCk9dW", "zwC+W7Gwda", "5A6D6jEp5y2H6l2M5l+H5OgV", "t0zMu0G", "vWRcN2qXWR5hWOdcQCkJnCoxWPpdOSoPW4C", "vmoQWRG8W4q", "pmkDWOO2EW7dSCkACff9dq", "W7/cQwhcKmkcWQ/cIeZdQxWRqa", "WRpdPtbjiG", "z2Xwr2m", "r0LZu3u", "vg91y2G", "Au/cH8k3WPBdHZeXWP8gWRfeWQ0lWQyHfmogW65gdmo7BCkzWQtcTmo5W7megMvdWP4Qu0jqjvZdQ8owr8oZASkCWQbBaCkUtSk1ACk/hrBcS8kuWOVcTmkAnSkLW7GwW4zVW68Nmx/dOanIo8oZrxrSiCofCmorW7m", "WP7dRmkvW5JcQ8k/W6TQ", "5BEY5y+w5RAi5y+J6kkl5yQP5OMl6k6+572U5Ash5lU95Pon5l2C", "BwLZyW", "W67dVeRdLSokW6BcSCosWOJdUbDvWOj/k8oLouC", "maddOG", "WQO6WPldO8kHza", "d8kEWPKXBJ7dT8ksqeO7", "W64nivWmW7a", "CLRcHCkUWRBdUJ0NWOzVWQ5EW6Km", "W7CCWQSkh8kh", "W6NcMH3dPCoYWRu", "W6iyWQSa", "C1bRu3e", "EvDdCMO", "r0HgrMS", "tSo2WOpdNSksxmk5BmkDBG", "WPCrbfZcQmoOW4HBxCkM", "CNH3Duy", "CenivM0", "kLyVW7xcSq", "uMvZB3vYy2vuExbL", "v3PrC2W", "F8k+W6VcPCkDWPS", "W6eqWRuvbCkdWRS", "WQNdQelcVW", "WRpdRZy", "c0ldHSo7WOFdLa", "m8kjW6ddJanTW7dcVCoV", "sgvYB3m", "B3NcI8kUWQ7dIH89WPLrWOTyW70CWQ8", "WPldTmkDW5FcPSk5W7C", "tMv3ie5VzguVtMv3ie5VzguVtxnNqM94q29TCg9Uzw50l09vvevsl0LotKvsl0jvvfrptLmVqLvuve9owZaSmv0", "W7hcHX/cTmoPiG", "C3bSAwnL", "W77cHXZdVmo9WQzeiG", "WQyWWRddQ8kRzCoHWOyAWOerAGVdMSkkWR/cQSoAWR/cOmo8sG", "DxbKyxrLsgvSCgvYu3DPDgnO", "WO/dKSkuW47cVq", "W7yjdMGh", "vGymCuxdJG", "W6RcMW3dOmo1WRetE8oQ", "fSozW7RdVSoutrtdSYRdOrO", "oSkzW6ZcTbVdJ0m", "suzTBgS", "jSkSW5ZcKJNdQ3RdNu/dO1tdLapdHCkEWRJdKCo4E8kj", "Bvzmzwi", "yxbWx3nLCNzLCLrVA2vU", "W7pdQ8ksBKPduZHIW7LmWR0tW5RcQSoMyq", "WP/dNa4CjCo3W5m", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrszxnVDxjJzvbVChvWlZjUzf9Iz18Zl2vUzw15ug9WtM9Kzs9IB3r0B21oB2rLl2j0BK5VzguVqxr0ywnRqNrU", "te9hsu5Fu1vdq0vtuW", "svrftv9vu0u", "uCk6W57cRSke", "b8oadNhdVeu", "WO3dQ8klW5hcVCksWR41WQS", "ku43erZdVCk+W7aa", "yvpdU8orWOmDamoO", "WRuUfvK", "rKJcSaBdHq", "WRtdTJzspgO4WP1LW4ldM29c", "vmo4W63dGtyxW45EW6uYW7lcV8onW6ldOCoeB8kGyq", "Cg9PBNrjBLbVBhLNB24", "tSoCWOxdV8k+", "WQupzmk9wvJdTr4", "tKjHDhrSzu1Zz3m", "cmkEW7hcPrtdVK7dSNG", "p24JW5BcS8kKfCkBhuddKG", "kCo/WR8", "WOPGWOKYgZe", "W4ldTuxdL8okW4hcTG", "smoYWOBdNmkjsCkTF8kgF1RcSCkUW7m", "yMfJA1rVv29YBgq", "W5BcVe1+WPVcSte", "umkPWQNdQ8kp", "W7/cLHS", "WOn3WPyKiq", "xaeqrvVdJSoAwdfcWReKEq", "B25tAg93", "zNGT", "o1RdK8o8WOZdLLud", "twvJAgfdB250CM9SBgvY", "f8ovW7RdVmo/rG", "CZtcI8kbWP4Z", "W7dcLmk3fsFdOdJcMSoQhr/cLmkKoNu", "ofC1hWVdRa", "ECoWWOhdLSkJ", "s8oKW5hdKcSvW5jCW4W", "p8orW6ddUG", "W4JdTvldVSozW63cSW", "hCkAWPi6EW", "DZRcJSkMWPqWASklWOuj", "x8k4W7ldR8kN", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9orwLNAhrdB3vUDhj5q2fUqNvPBgrPBMDqB3aVmM5Kx2jNxZmVtgf5B3v0l0j0BKf0DgfJAW", "zZhcVNCR", "WO0GWPpcMai", "EmkdW5tcM8krWQTDgxTOWQBcUt9+WR1pWQe", "eSo1a8o3ySkwhudcVqvfdmoN", "dLioW6JcNwy", "B2pcHCkUWQhdHG8GWOXCWR4", "x14o", "5y+n5yE76l+B5Ps75z+65zYW", "WQqmWRdcIsxdLSkxWPtdSmkythSs", "r2fTzvzLCNnPB24", "tKTAreS", "W6JcQWddPsDzWPdcQYz2hbLw", "y3vZDg9TuMvWB3j0", "rGeTx0O", "DhjHy2TLCG", "jGldNCoCW4CluSowmvinWPRcHSonF2lcMdhdIa1gW6am", "W5L0W5DZAKlcKJRcImkDpwnzcreqjWJcKambW7tcNCkhuNixw8k0yf/cKbzCmg/dK3LOW77dQCkffuVcUgPKhcW2ke5AW53cHd9gAIxdMSouW6ddVKi", "rvzftLq", "BgvUz3rO", "zHNcO8oxW5usECoMW4FcQmoY", "y1ftuNa", "zrq1xKK", "ug9Wtgf5zxiVtKjHDhrSzu1HAw4", "WRJdTI9d", "Afbet1e", "ydvzpmomWQq", "WR7dUexcG3evW4BcOGjUmHm", "ug9Wtgf5zxiVvuLgCMfTzu5VBMvBmcWXxs9dt05uru5ul01VBNn0zxjmywjcyxr0BgvxAw5qyw5LBc9bCMvUyvb2zvbHBMvSms9IDxr0B25FyMfJAW", "oSo3WQVdHCktrt4oCMG", "WQqZWPZdQmk2", "c8kLWPOUzq", "zxjNrhq", "W5lcQ2r6WPhcNt/cT8oP", "AxnozxDdqui", "s2uNW6Gk", "s3fvqxe", "u8o3W43dQZmpW7TEW4yRW6tcUCoQW64", "WQmzWRNcLWhdImowWO3dO8kzqM4", "WRtdUflcV38ZW5hcQZrY", "iCk/l3bCkmkScCkgW6hdP8ksW5xdNK4", "pCkbW6NdGbTCW7S", "W6mhWRpcIY3dHCow", "r8o/WQq/W5WV", "z2v0q2L0EvnRAwXSq29UzMLNrgf0yuj5u2TPBKLK", "rhi9WRe3dwTKqCk5espdQmkIW5lcNvS", "BfrZtKu", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZtKUkRMJiNPKQ4Vz290B0j0BG", "tvzdx0HfuK9Ftufsq0HFu0vmrunu", "tKjHDhrSzunVBw1VBG", "sf3cVc/dIb3dUSkrWPi", "iMK9W4FcOa", "B2nKDMi", "CZZcO0iRWRHTWOhcOmkK", "CMTjy1K", "sgLKzujHDhrSzuHHBMruAxbZ", "vxnLCKrHDge", "WQBcH2nd", "DgfYz2v0swrZ", "mNWXFdr8mhWZ", "vxbKyxrLsgvSCgvYu3DPDgnO", "W4BdQSkAzeDkBNf1W6HzWRytW4VcH8oRlYLbW4ecbSkSWOK", "o8oxbwxdRvLgWRK+WPyhs8oVeColzCotbflcH2i", "WPOcWO5mWQuUEmk0f8kKEq", "E8oIj8owpZ1wrXfWWPz5f0W", "tg9NAw5gBg93tM9Kzq", "h8oCehm", "ydRcKmkgWP45ECkWWOKuWOXwtW", "WRiPWOfC", "Au/cISk4WQ7dIY4", "q3vYuhjVzhvJDeLKCW", "W7NcGGBdR8o3", "WQGrWQmjgCkhWRbGeuvkw2JdHLXTWPZcTa", "AuxcUWddGG", "yxzHx3rPChnFmdG1", "s8oKW5VdKIepW59OW4W9W6dcVSoYW6m", "WPNdOCkAW5xcUSkHW7O", "zw5LBxLoB2rL", "q0HjterFqureruq", "WOeFWR/cTdpdG8oj", "WPCbfhJcVCoMW6vgzCk2FmkKWO7dKCoeW5K", "zuTirxy", "W7ZdL8kyCL5kwwXpW7G", "DqVcU38z", "p3mtW43cVCkMcmkCgW", "jWRdPCocWPmhjSo0W47cTCkKwLvrW4WzFg8kW6ZcQ2VcTMNcTmoGW4Wka8ogmmkjW7TMkSkvs3H0lCkLk8k4WOHNWRtdTmkGywWgW5ZcOWKedSk1FmoWernzW7hcNSozW7jiWR90C8ojgvFcLSkZW4bFj0xcP8ojC8kypG", "CeLXqKG", "C3rYAw5NAwz5", "BxLnyxjJAe51Bu1bwa", "yxbWzw5K", "hCkBWQixFa", "DJtcU8kLWPm", "tKLSB2m", "FZZcRMi", "WR3dTelcO38oW4BcRWH+bd4", "fmoEW5ldUSo4wJtdStVcUebpc8kzW7/dU8k9F0tcSW", "uMvZzxrhyw1L", "DsVcUMGS", "WQNdVepcPhS", "WPujfvZcPCo2W7S", "nfS2", "q8oJnSoZnIfwvXjQWQXXfuC", "W5FdVCkj", "q29UzMLYBvbHBMvS", "BgvMDf9KB3DU", "WOKFWRNcLZtdSmodWPtdPW", "s8o3W4ZdGsOv", "W43cS2hcKSksWO/cIe3dIga", "W5JcJXZdQCkQW6y", "zgLZCgf0y2G", "wCoIW5ddQISfW44", "zg9JDw1LBNrfBgvTzw50", "wmkLW6JcUa", "WPFdLGSAlmo1W49TW4PVW5xdJ8kK", "y2HLy2S", "5y+J6kkl5yQP5OMl6k6+572U5A+85ywL56gU6k6K", "BuZcPIRdHXFdOCkfWOHXxq", "y3bUrw5HyMXL", "Emo6W5hdLYe0W6i", "zMLUze5Vzgu", "qrdcMNaXWQTJWORcTq", "tKjHDhrSzurPC3bSyxLpyMPLy3rgywnHzgu", "W5VdTCkFsK0", "W6fNW6xdISkQ", "y29UBMvJDfDPDgHpChrPB24", "faVdN8or", "AerNDwC", "mKe+W6xcKq", "jhizW5NcUq", "B25Jzq", "fmoaW7hdTCoEzW", "zgf0yq", "wM1wC2fyAdzImJvStg1oDMjrpt0", "kmkiWR0vEq", "W65KW6FdMG", "CMvZ", "Efnyuu8", "C2TPBKLK", "ChjLC2v0twfYy2G", "WQe2WOFdVSknEmoIWRK", "AZfEbCo8WO3cG3HDzJhdTcHc", "y0FcSq/dNaddSmkx", "BeJcOrFdQbddOCkfWOv5", "W4RdUeddTK1T", "DIxcMSktWO8YxSkmWOKwWOrPv8oJrq", "c8kdWOq3BqJdPW", "m3G1W4hcP8k+ba", "wJ1AbmoGWRBcG3C", "WQ3dGqK6l8oxW5rqW4DUW7FdKmkVtmkk", "s3Pct3i", "WPGnrmkZwq", "ENHivuq", "cemFW6tcNa", "y01oWP9r", "qCkmWQxdKmkma8kz", "twfYy2HtDgf0zq", "v8oJlmou", "zZZcJCkgWPO5BSkcWQGtWOzn", "W4BdVmknzG", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VuMLNAhrcB3r0B20VyNrUsgvYBW", "nCocmSoAxSkDlMFcGc5+pCotyMhcTtFdGeabgmorW7Tg", "vCoZW4NdPYWaW59VW4y1W7xcUCoXW7VdRSocEa", "bSkqW63cSHNdHepdLxtdIhhdVY0", "yZHHBgXPyw5JzvrVD2vY", "h1apW7lcL2W", "y3jLyxrLt25Lu3LZtxnN", "C2v0DgLUzW", "B8oLW7BdSIe", "WOqSWO5mWRCTB8kuj8kSEd8", "lvO2hG", "5Bcg5lQo5PIo5AsP6l+h5PYF44cc", "WQJcJ2rdCmohW5ZdMM/dMSo5qr5IfW", "WPxdMJTnfG", "b13dNmoMWO3dLeqMW5DkwhDV", "DhjHy2u", "yCkOW7XQWO17CCoqW6fEWOmS", "W7VcNH/dQCoYWRzKiSkZqCot", "nXZdNSoyW5yr", "5BYP5PwK5lU66l2z5Bs25ywL6zwP", "Bgf1BMnOt3jszwnVBM5Ly3rszxbVCNq", "wqenzgxdISoADZzmWRa2", "FCkVWPSuW7yucCkLWPO2W7zf", "mhWYFdf8nhW1Fdm", "W5RcQL0", "amoHbmo8", "r0FcISk4", "jCksW6JdKbHnW7dcVCoV", "WPilB8k4", "B25nzxnZywDL", "hSovbhFdVeHdWR0GWOukESotcmowy8oFaa", "ChjVzhvJzv9VAwW", "AxrZ", "zcFcKCkhWOS", "WOuECG", "z0nJz1q", "dKuoWRlcGq", "EwDxyM4", "WOj8WPa5prhdKg3cIq", "q8ktWRVdImkq", "WQFcNgHbAW", "BwfYA1bVAw50zxjoB2rL", "s8orcxVdRqeRWRK7WPqgFmoPeCoyn8oFb1dcHhLxW5GpguBcR8kP", "BxLnyxjJAe51Bq", "W5JcSMZcQ8kjWRtcJq", "B3b0Aw9Ux3nOB3DFDgLWC18", "k8k8lNjhi8kfo8kFW6VdO8k3W7FdKviI", "t8kgWQJdJmkipSkzW4GtAG", "q0D3r2e", "BLjtq0q", "CuxcH8kVW7u", "wbiBDuy", "e8kUjNq", "wHGk", "uLRcHCkOWQC", "ubakEuFdHq", "W4VcPw/cQmkP", "BwLK", "B0FcSq", "WPOahLRcV8oR", "WOP+WOGKjsRdIg/cNSoinMGgxa", "aL3dGmo/WONdJM8E", "nfjMA3nTyG", "F2CTW6mybMOSb8kzbZhcQ8kzW4/cNbpcT8oyW6qZxq/cPxS", "CmkJW6lcUq", "xGWsuvRdHSorzW", "W691W6/dKCkZW6KfWPO", "ngeZW4NcTCk4dSkheLddTe7cPCovuW", "CMvSB2DPBKrLBgf5", "wSo2WOZdGmkcxW", "x8kQW6a", "rxjYB3jszxbVCNq", "yCoQf8ozlW", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0Vvg9Wl21HAw5uB3boB2rLl0f1DgHVCKj0BG", "Bw91C2vKB3DU", "twfYy2HFu3bLzwrFvxbFq2L0Ev9tA2LSBf9vC2u", "B3bLBG", "WONdQ8kBW5pcO8kOW4PTW6/dGSoskcq3ibpcKmoyuJ4cWQVcN8oC", "mMuXW47cNCkKbmk9hL4", "lSoeW5hdV8ot", "qHf9f8ogWOJcP09QvYJdJHm", "W7nSW77dMG", "umo2WQihW5C", "WRFdPdfdpw0lW5uiWOFcHZis", "W7yAWRqkbCkoWOOOhvPwaG", "WRGYh0/cP8oNW4ztwCklzSk8WO7dVmooW4xcQvxcGCkgW6ZdINy", "WOCFF8kOv3JdMqPyEMm", "W6NcS2pcMCki", "WP0UWOzmWOiRC8kEcmkMsYJdLSo9W5u", "Bw91C2v1Ca", "WPOHWOjDWQi", "vCkPW7/cLmk1WPfMpvTi", "W7jGW6FdKmkOW6K", "sfLdvM8", "a8oedNldPeH5", "W44jj089W6SfWOu", "zMVcSmkdWOpdOHalWQbXWOr6W4W7WPXjp8o6W5j1ma", "zMfZDe1HCMnOAw5N", "nmkqW7BcLZq", "h8oKfSo3y8k2fG", "x2rHDge", "W5NdR8kouNi", "D1LKvwS", "W4FcNSkW", "W5ZcOeX6WPFcMW", "nSkUohqEEq", "jSo4d8oExG", "rCo5WPpdGCkgqSkEAa", "FKRcI8kYWQpdMJK", "txzJtxnNCW", "WQSmWQJcVshdKmoBWQFdRCkzr2ibW7tdSwBdPW", "z2v0BgLZDerHDge", "5A6D6jEp5zwg5BQx6ygt5yw3", "xhLBWO9EcCkHWRHTWOtcTG", "y2HLy2TdAxr5u2TPBgXdzefUzfrPBwvZrw5HyMXL", "yMf0y2HnzxjNzufSBefYBxLZ", "5B+R5Ps75lIj6l+E", "W6BdP0S", "WRRcGNfdESonW6pdKG", "W5VdQ8kxzKHBAxrVW7LwWQW5W4dcQCoT", "rCo5WOpdMCkssmkyFG", "W5aWWOSeb8kdWQuObG", "5BEj5yEL6zwt", "W5RdOmkuzenB", "p8o3WRxdICkMwYSsB24", "5yE76lsL5OIy5lQj5lMl5RQq", "aSkAW7FcGH3dNLBdGxldIhpdUt3dNSk8WOtdSq", "y3K5W6uydgXK", "WOSFWP9kWR42CSkMoW", "jxa1W4FcTSk/eCkZefJdUKdcU8ozsq", "x1bYzxnLDe1HCMnOtNvT", "W5molf0", "rSkkWRJdLmkigCkoW4e", "B1DPvuq", "tCk4W7tcTCk6WPG", "t8o2WOZdMq", "x3rPBgvjBMzV", "W5BcVfPVWOlcKdtcTW", "WQPGWOKYfWtdKgFcNmoOmw8Csu9fEv3dLG", "xqeDE13dM8oQyda", "f1FdHSoMWOhdLfCc", "W44jj08HW6ChWPNcIeK8W5tdPvdcNZhdQW", "WPVdOsfRi2Gu", "z2v0qxr0ywnRzxjnEufYBxLZ", "jSkqW6VdJqm", "WRpdRZzumq", "W5JcT11zWPBcLZVcTSoZASkdwhBdR03cT8kcx3FdMXGhzrBcRmkNW4augKZdTa", "aCkAW6xcPWNdHKm", "WRVdGWqqpq", "zMfZDef0DgfJAW", "qNrUqxr0ywnR", "Aw1WB3j0qNrU", "ydBcONi3WPm", "WPWgWQZcTshdNCoFWPBcRCkIAe0uW5hdVxFdImkwx8kaWR7dN2pdHHBcS8o+W5NcKcPEbfmkWRG3W7WjCmonWRpcVSoIWP/dOmk0WO/cJISSr8oVW5/cK8oOWOBcMstdJwJcTqXDssfMjvKKt3i2WPFdG8o4tSoWqmkTW5rRWO0SggRcVCoQeZK", "zY3cSW", "k0ldL8o8WR3dSW", "v29YBgrnyxbfBNrPDhLuExbL", "q3PisMS", "B25tzxj2zxjmAxn0rMfPBa", "AM9PBG", "WPldQSkFW5e", "W5FcLvJcI8kW", "umo3WQeK", "s8o1kCozmcfE", "zttcJCkgWROJECkgWOmr", "wr/cImkWWRi", "ASorlCocmIX7vZr6WOX3mvBdRYm", "sgfJA1rPBwvYv29YA2vYlMPZ", "WQRdQ8koW5JcQ8kaW690W5hdHCounq", "zZdcO3q", "W6lcR3ZcICkcWR8", "ELVcVq", "yIBcM8kCWP8", "fWFdLq", "u2DYuwS", "WPukhfhcRSoGW792smkRBG", "WONcRHXNW5pcGMtcRSkUEmovzty", "D2vIz2fTzxfX", "bmkUoxrgoq", "y2XPzw50wa", "DgfYz2v0x2LK", "wSo1W53dGtqv", "AJVcJCkgWPO5BSkc", "WPJdLXGCmSoXW5vkW791W6VdImkMr8kDW7q", "bSktW6RcPrC", "W6nTW6pdK8k6W74oWOe", "W5pcVwxcMq", "WPRdMXu1imoMW55qW7bZW63dKSk3", "W43dMLBdSKS", "DCkmWRNdImknlSkcW4yvAW", "cmorW6ldVSoVFr7dRce", "vZBcUwaQWQ92WOdcTCkukmowWOVdVmoJW5NcLeeO", "v29YBgrnyxbnyxjJAhnjBML0", "C2HVDZnZ", "z2v0tMvHCMvZDe5LDxrYywXAB25L", "lua2", "WP8le1hcVSoNW65b", "BMv4DfnLCq", "DgvHBuLK", "WQ3dVepcShSu", "d8oFW6tdRmoQxcRdPd/cQxXtlmkpW7BdMCk8C1BcQCojemofzW", "WOuEy8kVrw3dNq5rDMmNW4NcPCkJqxe", "sedcL8kOWQpdGcG9WOXCWR4", "fW/dG8ogW4m", "WPRdUcvppKKlW4mGWRlcNdGe", "AvvRywG", "zg93BG", "aqFdN8or", "WO8TWQJcVYG", "Cs0FyKVdG8o8Bs5a", "WOVdUedcONStW5hcGYq", "EKPhuNa", "W5xdOmkjtKrbxNa", "d8kDWOiHDJpdPSkuxeXR", "WQxdOZbppMG", "l2v4y2HLy2SV", "z2v0vgv4Da", "WRFdVfZcSG", "W6qlWQSCgG", "W4hdTCkrAL8", "BW8n", "x29UrxjYB3jdywXSyMfJAW", "AxSJW7is", "pCogW5hdJSoJ", "Bh4KW7u", "q3rQwhq", "ChjLC2v0mG", "vuLe", "C3bSAxq", "5yQG57M754Ma", "jL8jW7xcK2yCrW", "yd3cL8kEWP8LAmkj", "z2v0u2TPBG", "W6Gila", "AgfUzgXLvg91y2HLC01VDMu", "WQ1fWRCgjXNdKwFcUmoek2iaEe9ezvFdILulWRG", "omoXdW", "W69RW4ZdNSkTW7GQWPVcMCoxW5hcVXjzW6KnWRzkrSobW4O", "W6mwWRqGcmkbWQO", "vxbKyxrLtwfYy2HjBMzV", "WQxdPY5pja", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9izxjVuMvJCNvPDfjLC3vSDfbVChvWtMv3mY9y", "afFdLmo7WOBdN2adW5fuwwPSWQC", "tK1HCMnOu3rHDgu", "W77dPmkFzKC", "CMvZDg9JAW", "CdZcTN0sWQT2WOZcR8ktjSomWP7dImo+W5RcLwO1zCkBEZHsomkBW4ZdSWxdSCkZj1PS", "W6iCWRiShCkhWQ8mgvjlghm", "rfr6uLy", "rxzLBNq", "qwXSAwfUy2vdB250CM9SBgvY", "iCkqWOiUwqddT8kw", "kSotiCo9BSkvc0/cJJnLxW", "y13cTW7dOaa", "zhG+W7qk", "W5dcVgP3WORcNtW", "BwvJAgftzxj2zxjeyxrH", "x13cTfS", "WRJdQ17cVNOHW5hcVIf0as98", "Cg9PBNrmAxn0", "W7rKW6JdK8k7", "z2v0runeyxrHq29UzMLNvMfSDwu", "W7pdPfldL0PWjq", "W4NdUuRdI8ooW7O", "rCo0l8ojcJfkvG", "BwTutKC", "qNvPBgrPBMDjDgvTCW", "Bw91C2viyw5KBgvY", "rMLNAhrgB3jTyxrPB25bzhzdB250CM9SBgvY", "ug9Wtgf5zxiVqxjLBMfcyxr0BgvxAw5qyw5LBc9bCMvUyvb2zvbHBMvSms9IDxr0B25FyMfJAW", "tmkmWQ/dGq", "uW0usMa", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VuMLNAhrcB3r0B20VyNrUqMfN", "C3rK", "sw5ZDgfUy2u", "ef3dLCo1WOtdN3yyW5Lmshf2WRL0WRVcHYyTWRJcLG7cNh4", "C2vUzfbc", "W43cVxRcMCkiWRi", "CMvTB3zLqNvPBgrPBMDgCM9TtwfW", "W6qBWQKqhq", "tLDVCMXKtwfWq29TBw9U", "qKfuq0HFqLvjterFt1jervi", "nuOSerhdVq", "BwfYy2G", "A2v5zg93BG", "W7pdO8k6zwu", "qKlcJCk/WQK", "tKnTwKu", "AhjLzG", "W4ZdVepdNSoz", "WOJcM2rdC8om", "5BAE5zoE55Ed6iAO5yQ16yAS6l2D77+/", "qSoFWQFdOCko", "WP8ezCk/xutdNX8", "AgvSCgvYx2LUAxrLza", "f0BdI8o+WO0", "W5VcVxVcImkRWQFcLeJdJ3OHqG", "BLb0zgO", "qMf3vfa", "hSo/WRBdImkYuIWczhK", "xhLBWOvFf8kLWRzTWOlcVCo7W5nZAJyypCkfzCkxDSo+", "EwmZW70C", "W6/cGaJcSmoKlmoiW7S", "W4pcIHJdHmon", "W7ynWQKv", "Eh7cSdVdIG", "sw5QDxjLza", "WRVdTJbfoeyd", "y2vSBfG", "x8o3W4RdHq0pW41d", "shncWQm", "fLFdGSo+WONdMvvz", "ywXSqxjTExm", "Cu5nCxK", "wg5kWQDeh8kAWRDMWRtcQSo8W61jyW", "W7GeiMGe", "5yAI6lA75RsS5lUC5lQ95RQN", "W4RcNq/cPCoMkCooW6Waja8B", "emkmW6BcGr3dNL/dP2/dQ3tdOJNdSG", "WPuFzCk/u0FdQbnjya", "tLDVCMXKvuLszwz1z2vLq2fTCa", "n8kpW6pdNq", "phaGC3r5Bgu9iMnVBg9YoG", "jGldNCoCW4CluSowiKqDWPdcMCofuhRcSJddTHHAW6OmcMhdSa", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0fSBgLHBMnLqxnZzw1SyNLqB3aVC2nYB2XSvMLLDY92Awv3l2nVBNrLBNqVAxrLBs8YBMrFyMDFmJiVtMv3ie5VzguVtMv3ifnJCM9SBfzPzxCVDMLLDY9HDhrHy2TmyxLVDxqVCgXHEwvYAwnVBLSWldfDl0fKze5VzguVAw1Nx3bSyxLLCKLJB25FyMC", "gmoIW5RdK8oK", "dCkcWO4SEq", "wfvXAxq", "yddcUNqT", "W6zKW7NdI8kFW7GFWO7cJSoD", "tfrdAfe", "sGSou0C", "xGWkw03dKG", "smoJlmoxkIa", "kCoXWQJdMq", "W73cGGFdOCoF", "W7xcNGRdOG", "ydNcL8krWPa", "vg9Wtgf5zxi", "W7RdMwi", "AdfmkCoWWQZcKG", "BwfYy2HuExbL", "x8k+W6VcPq", "Ah4KW7u", "cSkEWPKVFbxdQSkyxq", "W6OxWPuoamkoWQ4egLLBdKtdNKLQWPtcVW", "qmoNnSorfYzCxa", "yNrVD2vY", "W73cIXVdNmoUWRDQk8kOtSoFca7cVh5uW7qKbmkqhW", "CfLtD1K", "zgLZDgfUy2u", "dmoaffpdPeHMWR0IWOeTCCojgW", "W4hdSCkz", "WRZdPuu", "AM9PBKfZC2vTyMX5", "CMvZB3vYy2u", "hmk6W4JcSIu", "eSk1W6hdKXi", "WO93WOiIpbddTxZcG8oBo3mCqG", "WQtdQuxdLKb3na", "WP7dLGGyimoIW71rW4fXW7NdImkQrSkwW4VcISkCW7/cTSk8w8o+", "W4NcKqJcLmoPiSoFW64X", "yxnLBMq", "W4NcKqJcGCoOnmoKW60kncWoW5ZcR8oKW4a", "AwuVW7anb05YhCksgtBcPmkv", "p8oRWRxdJSkcxIuf", "kSoQWQNdHmkyua", "yM90Dg9T", "tKjHDhrSzu1VzgvS", "nu42oq7dP8kXW7yxfJZdKvBcNW", "ihOWW4/cNa", "s01Nwhy", "WQOaWRdcJsxdLG", "tMv0twDY", "twfWvhLWzq", "n8oFW7pdSSoLAbNdQJJcMffdoG", "zM9UDfnPEMu", "ywX0s2v5", "b1qwW7hcL3O", "DgLTzxnFCgvYzgf5", "W4hcMJRcSmo0m8oSW708laieW67cI8oLW7abvCk+iq4", "tMvAr24", "5B+R5Ps7mUMyNW", "v29YBgrnyxbvsvDYyxbWzxiVtLDVCMXKtwfWvuKVBgvMDejVDhrVBu5VzguVzxH0CMfoB2rLl1f1zxn0tM9Kzs9SyxLVDxroB2rLl01HAw5rDwvZDe5VzguVAwnVBG", "WRRdSJrdpa", "rxzLBNrjza", "W5JcPhW", "mey2fq", "W4LRW7NdI8k/W6iiWOO", "v1/cPCk6WOC", "zKZcVatdNqW", "C1PMCfq", "qNvPBgrPBMDZ", "u8oVjSoenG", "r8o/WQq/W5OInmkKWRWiW5jL", "Aw5UzxjxAwr0Aa", "yMfJA3vWqNrUmG", "a8oXgCoW", "fSo9gCoW", "AJVcL8kgWRW2ymkcWQqBWPXy", "xM7cNI/dNq", "W6JcOY/cHCoOkmob", "ubO3DKi", "u05TtNy", "ydNcM8ktWPuIFq", "DZ3cJmkxWP4wECktWOezWOm", "gSoaW6tdT8oY", "EwCMW7Gn", "y2HPBgrYzw4", "W6NcMG7dUmo5", "mJaWodaXmgX1y1Djua", "lCo3WRBdIa", "6iEl5yQg5lYk55oA5AcP5yEB", "mCodW4FdR8o8", "brVdHCobW4Kl", "W5ZcR23cKSkc", "qMfZzty0", "fSkLrq", "W6ldPvpdKvbxnXpcLCk6m8k5WRdcHmoN", "natdUSoh", "emk1cLj9", "x2HLyxj0yMvHDenVzgu", "B2zMC2v0sgvPz2H0", "uKvvq2W", "W7qpo0WiW6WwWPm", "vgPsrfa", "WOPIWPqUpbe", "tbunzeNdGSogvsPrWR8YzG", "zg9JDw1LBNq", "W6JdRue", "BIZcS8ktWOK0zCkPWPux", "W4NcS0vUWOy", "yt1e", "W5ZcOeX6WPFcMYpcUq", "cvFdNmoN", "W5tcNCkQpsJdRc/cNmoYda", "ANnVBG", "Afz5z08", "uCk8W7lcTCk7WPe", "WR0VWRHZWP0", "WOBdUdjQmxycW554WRlcGJmEuLvHW4RdICoPW7NdOG/cJwxdRM0xW7PpmmoFp0ddMCoyW6Pgpt0WxcBdQCoUWP4nWOpdVYVdIKRcO3PEWO9BW4hdJSoiW7ZcRNqiWPO7WRBcOr8DwmoeFmkegmkBjSkOySo5fmoCW7e", "reZcPI7dJHBdHSknWOTIvmkA", "CeDwvg4", "ix4LW5dcP00Qz8k1tLOVi0S", "Dg91y2HTB3zL", "ELVcVrFdHHddRmkuWOm", "daKBW7pcMu4wrCkcCG", "xmoZW4RdPISuW4viW4a1W6BcImoYW77dP8ojFSkbDZ9n", "AxnbCNjHEq", "WOD3WPiUpG", "yxbWBgLJyxrPB24VANnVBG", "cSkpW7FcRXpdHa", "xHukF3RdJSoeEZLmWRa", "CMfUzg9Ttw92zunPDhK", "sJVcJCkgWPO5BSkc", "ug9Wtgf5zxi", "vxbKyxrLqxjTEuvXDwLWCW", "ySoOWOC2W7q", "z2v0sw5ZDgfUy2u", "5yMB5Pwb6ik/55QD6ygk6l6y", "tfbytM4", "afpdHSoZ", "WP8eqCkKtKBdMdDyyW", "tLDVCMXKtwfWvgvYCMfPBK1VzgvS", "CdZcUW", "uYdcJCkAWQKYFSkxWO8uWPTC", "bSkiW6JdKYnqW7NcVG", "W6DGW77dR8kXW78cWPVcHmozW5W", "AgvSCgvYlwfIB3v0", "W4NcKqJcHCoUkSoi", "xCo7WQy0W5eUdSkpWQWhW5T5WRK/uuG", "6k6+572U5BEY5A+85ywL77Ym5y2Z5Bcg5yI35PAW", "AYFcM8ku", "W6/dV1pdHfeVEv/cMCkVimkMWQ3dHmoYW50wpCkUmIxdUSkvi8koW7FdRIxdImkiCCkIq3ldRvrJnCk0EW", "W5xdOmkjv0PnrN1cW71mWRKYW5FcHSoM", "zgLZDgfUy2viAw50", "ua4DFehdImod", "WRFdSSkiW5xcQa", "u8kPW6JcQq", "WPtdQSkpW4dcRSkJW7PTW73dGSow", "AgvYB3m", "rmkrWQ7dGq", "rCo5WOBdMSku", "pKmSeXFdVCk5", "ywzM", "6yo46l2P6lwI5RIV5l2k5OoN", "m8kjW6NdGa", "WORdHX0Tiq", "W5/dQSkFAKDkDwHUW7nwWR0VW5ZcQSoDkJH3WOfc", "ug9Wtgf5zxiVvuLgCMfTzu5VBMvBmcWXxs9dt05uru5ul0HLCM9tA2LSBfbHBMvSl2jVDhrVBujNl2j0BKvXDwLW", "CYFcKCkgWPqJDmkxWOu", "BwfYy2HLCW", "oguNW6hcUSkRfCkXe1RdG1pcPSowtx3cHW", "W7/dV1BdS8okW7hcT8of", "W5tdHLBdSKe", "W6RcNaddOCoSWQy", "WPmeDq", "kSoQWRRdMCkt", "u2TPBgXZsw5KzxG", "yqfIo8ov", "W5ZcR3VcMCklWQtcILldUgCMscq", "tqlcKCkaWPCZqmkgWPa5WODuvCoJrW", "WR3dPWSOjq", "sSoNl8ov", "WP7dQmkzW5xcOCk4W74", "W5nGW7JdICk7W74NWOBcNSocW6BcTsng", "u0TjtG", "DgfYz2v0x3r4", "meOMhHG", "WOyxh0NcPmo3W7jcta", "kSo7WQ/dMCkFws0", "nweGW4pcSCkJfCkl", "WQu6WOFdISkLzSoxWR8bWOO", "Ev3cVrpdOaNdUmkbWOj7wCklW6axCGldJCorCmoQWP/cGqzi", "nxJdPSoNWQm", "l8oVWPRdI8kZ", "cmkwW7dcPt/dHvNdTM/dIxNdVd/dQa", "wx8LW6yTc39Y", "WRCLWOnuWOG", "a8oGdSo4BW", "W6ywWQia", "A1VcVXRdMG", "W61KW7JdLmkoW6mcWOhcMCotW4a", "uCoZWRSGW5W/oCki", "CMf3", "bCoCfLddPW", "z2v0twvJAgftDgf0zuj5twvJAge", "pSo/WRBdIa", "lCkaWOyGrW", "sSoPjSov", "ug9Wtgf5zxiVvuLgCMfTzurPywXVzY9crY9dt05uru5ul1rYzwfZDxjLtwfWq29UDhjPyNv0zvbHBMvSl2HHC0L0zw1oB2rLl3nLBeL0zw1el0j1DhrVBG", "maddOSoIWOKDpCo7WPRcT8kJ", "WRSpDCkJxxNdIbTnDG", "W64rjfeD", "D2fRzuXVy2S", "sg9Tzu1HCa", "C2v0sw50zxj2ywW", "W67dPvtdGen7nru", "r2v1ufy", "u8o7WRSKW7aQkmkdWRenW517", "C2vHCMnOv29YBgrnyxa", "wKP2qKK", "qf3cL8k5WQ/dJdaTWPLbWRzs", "WOejWQS", "BNbJwLq", "eb3dHmohW4O", "Ahr0CevXDwL2", "vuhcKCk/WQRdGZmIWOG", "DLfeq1K", "oSkGW7pcTbpdNLJdNui", "hCooo8o9tW", "WQycECkDsa", "k8k9W6lcSGJdHLldJ3ldGNddVa", "t8oVW47dGq", "xhLBWOvye8k5WR1bWP7cNCoUW41F", "t2jZDgfJBgvjDgvTCW", "WPSahKG", "hmovW6ddJ8oQtbNdOaVcUfDfc8kuW5JdNa", "WOpdMYP/nW", "WOVdLHe2mSoX", "WOimhvJcUq", "x2nSB3nLm0rozxDtCgHLCMvty2vUzq", "mKycdXW", "sw5PDfnPBMDSzufYBxLZ", "zw1PDa", "WQ7cH3fBC8of", "fmoXeCo1F8kUgW", "vefcteu", "WPukhflcUq", "q29UCxvLCM9Yq29UDhjVBgXLCG", "z1Dgz3K", "z2v0rgf0zq", "n8oFW7pdSSoLFqddPIZcVfbx", "rLjSuwq", "WOzRWQKQkJtdL2pcLCoyehqf", "A05SEfa", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VuMLNAhrcB3r0B20VyNrUqwXSAwfUy2uVzMfZDefSBgLHBMnLsgvSCc9Myxn0qwXSAwfUy2vizwXWqNrU", "feddNCoMWOFdJKKbW5S", "dmkrW7dcSH3dHftdPW", "W7VcMmkWla", "k8o7WRBdGSkauGKdy3bC", "W5pcSYxcJ8ksWQNcLe4", "55wy5OQJtCk0", "s25a", "z3jVDxa", "rCo9nYaCmCoqwmkiWRBdS8oQWOpdHbiQvCkFFSoeDKpcS8oWWPRcOKhcISkAWPvyqcJcLmkItCoyB8o7xe3dRmkqemk6W4NdImkpzCkPlayivCkFlSkYbhRdTSogW4dcM1ZdUNHh", "W53cGbG", "56gU6k6K6kAb5Ash5lU95B2t5yMn5y+J6kkl5yQP5OMl6k6+572U5zcx77YF", "WRKvfvpcNSok", "W60dcvScW5rh", "EJJcUNq", "dmoxWP8", "z2v0sxrLBuXPC3q", "sLfUDK8", "xCkGW6/cV8k/", "ug9Wtgf5zxiVvuLgCMfTzurPywXVzY9crY9dt05uru5ul1rYzwfZDxjLtwfWvhvYBLrHyMXLugfUzwWVyMDFu2HVCfbHBMvSl2rYyxDVBMu", "sSkJW7pcV8k8WPPX", "jaJdUCoXWQi", "sgvYB1nRAwXSugfUzwW", "Dv5oWRjefSkWWPrSWOpcTSoJ", "W43cRMC", "C8oMW7tdGrW", "sCoPn8odoYXvrd4", "zNjLzq", "CgfK", "te9hsu4", "CM9SzuvUz2LUzq", "bLpdHSoMWOtdN30uW51mxvX5WQPy", "nSohW6ldTSom", "gcRdLmosWPy", "q29PBG", "W7pcGbZdUmo9WRXelW", "WQ7cI3zwACooW6u", "xtFcPgu+WQrNWOO", "qdHJiSoW", "fCofW7K", "wCkPW7lcN8k7WPjYpLbFWOFcKIvBWRDRWOtdPSoGW6aYWOy", "W69RW77dKmkRW68dWORcG8os", "bWRdOCooWPu", "W7dcLmk3gYNdTqVcMSoXddpcMq", "WPRdGrK4mmoXW7PnW4b5W7xdNSkVua", "zgvMyxvSDa", "rSkgWQFdGCkDca", "m8kpW7xdOrzAW6e", "BIbebmoKWRNcIw5b", "t0LMBuS", "WQmPWPZdRSkGv8oWWQiAWOWuAGm", "pGpdPmokWOOl", "FKRcHCkOWQm", "u0/cISk4WQ3dGXmYWOTBWR5d", "yNv0Dg9U", "yxr0ywnRqNvPBgrPBMC", "wefIsNi", "aCkwW6lcQHpdJq", "WQuhWR/cLtxdGmoFWPC", "sdvtreTFqvvut0Xpr0Lo", "fgeKW5BcVSkVjmkFlfxdMutcPq", "xmoZW4RdTdyeW6znW5S4W6NcICoNW57dRmodB8kR", "W73cLIZdMCo7", "WPaPWP1DWRi2CSkl", "lCoXWRZdISkAuGCky3jTDgbOW5mdeam", "BM93", "zKXpCNe", "s8kqWP/dJCkecmkcW5Wt", "BJdcNCkAWPOeAmkvWPyFWPP9wCo4sa", "W5JcT11iWPFcNYpcP8oP", "W7ajWQiehCkhWO4SdvjlaG", "q2XVC2vvsq", "W47dPfldNSoiW6pcKCoEWR3dSG", "sf3cVdFdMWxdTSkpWO98xW", "W5pdVK7dSuq", "tSk+W6K", "eCoKb8olFCkNduBcTqzje8oXyKVcNXC", "tLDVCMXKtwfWvgLSzunVBNrYB2XSzxi", "W6JcLuVcNCkiWRdcH1G", "qfRcKmoVWRe", "W6lcSwFcICkvWQpcTLNdGMa8qcu", "mNW0Fdf8nxWWFdn8nNW3", "WRqPw8kFwG", "suutW6ZcL3Te", "C3jJzg9J", "uNjbWQncmSkbWPrp", "WPadCCkJsepdKH10Fhur", "shLbWQi", "u2vYDMvYvgLTzq", "zxf1AxbFyNvMzG", "CNbwy3a", "WPRdNXu6lW", "gmkEWP4HDqtdRCkt", "eCkHka", "B0FcPGRdNq3dSmkx", "W41KW7RdQ8k3W6aoWRRcMCoFW57cPW", "z2v0t3bLBMvKtMv1DhjHBhm", "mCoMgSoTEq", "yxLfEvq", "nxWWFdf8nhWYFdm", "q3vYqMf0DgXLrgf0yq", "vhjLyxn1CMvnyxbnC2DmAxn0ugfUzwW", "WPJdKaGWmSoX", "zMLNAhrTB2rLB24", "zMBcLCkwWOa", "WOJdHHKRpCohW55mW4v5W6RdTCkTt8kx", "shDgWQPCm8kX", "W4ZcIX0", "z2v0rgf0yunVBMzPz0rHDge", "x3bVCW", "sf3cVdddNbFdOCkfWO98ECklW7eMyWy", "rSo/WQy0", "sCk8W6pcTCkA", "sgHwWQPv", "W7lcICk3", "BM9Uzq", "tKvPz2H0q291BNrYEunHBKj1AwXKAw5Nug9W", "bHRdHCouW4uoFmoCduqAWPdcHG", "j1qwW7hcL3PFq8koCh4aeNPgW5CbpCkuW79rFCo0WQhdIL3dSIvlW7JdUei6WR4i", "wdBcThaZWOLRWOlcT8k4kCoDWPhdUG", "wWuyCv3dH8oC", "gw4rnW", "l8oefhFdI0HLWQWPWOC", "tu9wrv9dsvrzx1bpu0Lusu9o", "zKBcTqRdHW", "y2XPy2TfDMvUDhm", "ASkgWRm", "kKyHaHe", "quvt", "mSoGgCocy8kXbLu", "Bwf4", "W5ZdPftdLSofW68", "qvjnwv9dqu5druXFufjprfvdrv9bteW", "tLDVCMXKvuLnAwXPDgfYEvf1zxn0", "l0OPgrJdRq", "Aw5MB3m", "DmkDW6JcQSkB", "W6nPW6xdJmk7", "gmorgxRdRq", "s8knWRJdKmkia8koW4W", "C2HVDZe", "BfrSqxy", "BKZcOrFdMWVdRa", "DuPKthC", "vSkrWQRdJCkhbmkdW44MFCkOW5NdOq", "rvzrzvq", "yxr0ywnRzxjbCM15q291BNq", "B25cDg5dBg9ZzunSAwnR", "W4BdVKddKa", "veDmthq", "o8okefRdQvrUWQO", "mmoQWQG", "C3rHCNrZv2L0Aa", "CMvZDg9Yzq", "ug9Wtgf5zxiVqwXSAwfUy2vhAwz0ugfUzwWVq09ovevovc9bBgXPyw5JzuDPzNrqyw5LBc9NCM93tM9Kzs9ozxCGu2nYB2XSvMLLDY92Awv3l2nVBNrLBNqVq2vSBc9IDg5szwnLAxzL", "WRSWWOPwWOuWEmkyf8k2Ed/dQmoSW4NdSa", "c8kuWP8bCGZdS8kyxvTHha", "bSo/WQ/dMCkxvce", "mHRdL8kn", "ef3dH8oXWOddIuqqW4Xq", "pSo7WQ/dRSkExIypsgv2xej9", "AgvHza", "v8oJlmoudGPSaq", "x3nLy29Uzej1zMzmAxn0", "W7tcG8kMotldVt7cMCo6bdJcG8ka", "W4lcVchdLCon", "rKBcNCkZWPq", "dmkQWRxdPmoSW4G1zvOmWORcHf0hW4u6W5/cUSkWWQeZW5dcUSoMeYvDd8oVW4yFvCoYjCoQWPxcU2SOEvVdTLNcI8k0W5ldUdS0l8o1WPpcTNhcOmo3FCkjW6JcPSk1ACo9rW", "hmkQj2fnp8ombSkBW7BdPSk4W57dIW", "u3DPDgnOtM9Kzq", "v8oJnSo5kI1x", "z2vZDhvYzxn0yxj0", "bCkcWQqYEa/dJCksrgXUdhq8", "ywrK", "ESoIW4RdHsCkW45E", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZpKUkRMJiNPKQ4Vy29TCg9ZzufSBej0BG", "W4BdO2VdKmojW6hcVSos", "WPGXWQhdGCkc", "nw8+W5BcS8kJd8kxdG", "WOhdTHf1gW", "WPepySkcuLNdIbTxChq", "qSoPmmo1pYTs", "W5BcTmkq", "W6tcKmk1psldIXdcNmoX", "C2v0sxrLBq", "sSoPjSovBgDPrdLNWOf4nK3dRIS", "rSoYWQe2W4K", "6k+J572b5Awc5lQl56cx6kYT", "W5OFWQCwhCkJWQ4HhvXqfwi", "dCkAW6lcOG", "WP8lbfJcUCo1W6PEymk7", "5BEY5ywZ6zET", "z2v0twvJAgfbCM15q2zN", "rw5Pz21HqMvHC3rdB250CM9SBgvY", "F8oxW6RdPq", "W77cIWNdPCoYWRD3omk1xCospHVcSq", "mCo4g8o9A8kSdetcGWrEdSoKCK3cJXFdNgmUoCoTW5DIW7NdThu", "W57cSv1YWPxcMW", "mCkFh2zy", "C2v0tg9NAw5qyxjHBq", "BxLsyw5R", "n3i9W5VcJCkScmkvfeddQfxcSmokra", "AgLKzu1HAw5vsq", "WPJdVmki", "W4VcVvX4WOVcJspcS8oOCa", "WRe6WOFdLmkVF8oQ", "vgLWC0XHEwvYl0nVBMzPCM1qyw5LBc9ozxCGtgf5B3v0wZaSmv0VyNv0Dg9Ux3LLCW", "CMvHzefZvgv4Da", "x3bVC0rHDge", "WP7dLCkVW6BcVW", "yxjTEq", "WPRdUcfhpeWiW4eNWPZcGdOzrW", "WRCMwSkcFwtdVZ9MvfqGW73cGCkkyedcHCk0W5FcTSo4DJxdT8oJWPrAhG", "ygq/", "A1RcTW3dJq", "g8oxdW", "W4pcNrlcTmoyjmomW78TEfy", "vMZcKmkFWQy", "oKOXmWhdUCkiW7yDmJddJKFcLCkxWRddGSk7", "WQmVWOpdMmk3C8o2WQaEWP0RyaZdRCkb", "v2fYzwHVDxnLswq", "WQxcGfzwB8owW5ddI3JdK8o7BJ1IgmoknCkQjSkMexm", "xHmBFKW", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZtKUkRMJiNPKQ4Vy29TCg9Zzuj0BG", "btRdLmoYW4m", "W7pdRLtdGa", "W4ldT8ks", "zMLNAhrTB2rLB2zM", "wSoYW5RdOtieW4vyW6uYW7lcV8o7W7NdP8ov", "W5hdRCkuB09Dt3y", "zhPMCLO", "z2v0q2L0EvnRAw5dB25MAwDcEuLK", "x25HBwu", "maddOSoQWOScb8o/WOhcOmk0sfzo", "W7ZdKSksCuDlz3L2W5LwWR0DW5C", "qfRcKmk9WQhdHtKMWP4", "W6eRWOWrkW", "wr1U", "WP8la0NcQSoTW6Hx", "oapdNSoaW5uayCobbKqDWPdcKa", "WP3dMG8PjCoGW5HwW7zQW73dKSk3", "CYdcJCkA", "WQ7cH2y", "W43cQh1TWRi", "vg9KyxLuAw1L", "C2vUzfbcvJi", "C3bLzwr1CefSBe1HCMnO", "bSo8WQNdImkxxa8AF3viueP2W5m", "W7tcNCkMosJdRqS", "o13dNmoxWPRdIf8dW71fuhr6WR9AWR8", "mCoQWQ/dNCkfdwveBhLuvfDIW4GegKmxoCkGdSoLWQldSSkDuCk3W70BbmkDeJtcHMpcILFdVhpcT8oF", "rvNcTW3dVc0", "tZXljSoIWQxcRN5hAc7dTJjAcdXYW43cTLddKa", "h8kuWP82Da/dPa", "vLPiu1C", "6Akg5y+w6ygx6l+56ygt5yw3", "txnNqM94", "vuHfyKi", "mqtdPCoFWQyApCo7WPFcVW", "vuLnyw5Hz2vY", "WPecv8kgEa", "A2v5sgfUzgXLCG", "WPKvfvpcNSok", "pfKvW7BcPMepuq", "pCoWeeddMG", "W6ZdVe/dMSofW7ZcHSoEWQtdRG", "tg9JywXtDg9YywDLvxrPBhm", "yw1AtLq", "iwyvW7pcNMWYq8kAs3akfhm", "WQVdUehcU3SoW4ZcUsG", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VuMLNAhrcB3r0B20VyNrUqwXSAwfUy2uVqxnZzw1IBhLnywLSvgLWC05VzguVChjLzMfIqxnZzw1IBhLnywLSvgLWCW", "DZBcUwu6WQrW", "C1LyD2G", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9vC2vjDgvTq29TBw9UugfUzwWVyNv5qNv0Dg9U", "zZdcMmktWO47Eq", "uhvZAfjLC3bVBNnL", "xeBcKcZdSa", "xh1cWQm", "n0RdHmolWPG", "ASo+WQKKW5W", "WOH9WOGKia", "W4iYWPa5mXVdLMlcJCoFoYK", "Aw5SAw5LlwjSB2nR", "tg9JywXdB21WB25LBNq", "AZfEhmoGWRJcKKXCCXxdJtPebtW", "chSWW6dcNW", "W7nXW7pdK8k7", "W4BdVLxdI8okW6BcSCos", "smoie8oahq", "oSoSWR7dJmkcuG8hB3fDu1S", "AgvHzgvY", "y29UDgvUDa", "vZJcUwC+WRK", "vuLdyw52yxmVug9Wtgf5zxiVv29YBgrtAxrLugfUzwXozxCVmM5Kx2jNxZmVqNrUtgf5B3v0l2j0BLjLAw5MB3jJzq", "gHZdLCokWPqAjCo/WRlcTCkLta", "W5pcQej8WPK", "ymo2WOldKmkl", "W6JcR2hcKSkbWOxcH1JdK38QyYdcLSom", "5ywS5zgk77YA", "AKLqD1y", "tbasEvW", "WQJdTfJcLLW", "ytvyk8oTWQxcLq", "CMDFz2v0u2HHCMvuExbL", "W6BdQ3zAyNnwW5bK", "t8oKW5VdHtCuW5LjW7OZW67cUW", "jHddV8oiWOWVo8o3WO3cMSkPtv8", "mCkEW6hcQHNdV0pdQ3hdLq", "nqVdGSofW4KlqSowkLm", "WRVdTJjvnxS", "W4JcMaZdHmoB", "oSoYWRldJSkDCJWozgHl", "zMLSzq", "WR7dUexcKNifW4JcRY5JkdnrlG", "wM9CWQnDgmk5WQbCWPpcUSoIW4u", "fmovWQBdNSknhSkKW5S", "W6FcHmkWma", "vmo0lq", "DZBcUxi+WR4", "E8kLW6hcTmkGWRXTjfboWPVcNYfuWP1TWQ7dPCoQW6yLWOFcTCoPt2q", "WQ3dTf3cSKC", "z2v0tMvHCMvZDe5LDxrYywW", "e20KaG3dPCkeW4ixfdRdHLe", "cCovW6tdT8oUqbZdTIC", "WRJdVKxcVMGf", "z2v0uhjLtwfYy2HcEuLUzgv4", "r8oHWOVdQSkdrCkoECkBzLZcTW", "WRVdVexcO3ifW6JcRYn/cW55pMO", "lmoGneNdN2jzWPqiWQOMrSogma", "vwytpCoMW7pcTgjrudpcRtKflxi", "t2HdCxy", "Dg9Rzw4", "eWBdLmoB", "WPRdKGW4j8o9W49h", "r2fTzvrVB2XZ", "W6ZcT1TTWOBcJb7cTG", "z2v0sxrLBufTB3vUDa", "zgvMAw5LuhjVCgvYDhK", "ug9Z", "tMfTzxm", "6l6757Is5PA45ys95BQg56+7", "txLdyxn0BgvgywnL", "Cg9ZDe1LC3nHz2u", "vgLAzxK", "y2fUvxnLCKXVz291Da", "uKDtAgfYzvv0AwXZ", "zJeX", "CshcOW", "we9cEMW", "y29UDgvUDfDPBMrVDW", "rgrhuwe", "a3a0W4pcPSkVlmktdLFdN2JcP8oCtG", "W53dQ8kEBevBt2bYW7fDWRyf", "D8k+W6hcKmkB", "EYeQuq", "W53cKq7cP8oInCoKW6CUiJuaW4FcMSoL", "y2fUDMfZ", "BhnDWQPupmkGWRDGWPpcUSoGW45UBrKv", "B25LCNjVCG", "y190B2TLBG", "WQJdJCk/W5xcOCk7W693WRpdPSoCnGSZer/cJmkdsaCWWRdcKCoFWQG2x8kHwSk6W5fyrCk/zXhcL8k/ASkdWR/dKx7dPmkgWRJdSh5Qv8kXcCoeeSkqW5nGFIKcW4nznYdcR2dcVCo7WR3cR1yeW4qEwSofiCoJW70ogd5dtSkfE3tdTa", "tM9Kzq", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZpKUkRMJiNPKQ4Vy29TCg9Zzuj0BG", "aSowlxpdQ0vQ", "o1ayW63cL0yEt8kp", "zudcICkuWPe", "m3GK", "5yw15lQd5PIk5AEO5REa5yU/", "W7irpfegW6W", "W5hdQSkrBfK", "x2jYzwfRsgvYB1nRAwXS", "55+/5lQN5AsN5lQO5Rs75yQO", "WQZdSCkvW5FcPmkmW7XPW6xdS8oDmIiGkG7cKa", "jwhdPsnUW75sWRNcISkblCoX", "W7qBh1W8", "jxuJW5BcS8kJd8kZceddLKlcOG", "ELZcOqVdUHpdVmkqWOv6DSkqW6eI", "ChjVzhvJzv9JB2LU", "y2XLyw51Ca", "WRLZWOaQidJdHgFcGSo7lgqowKjNCe/cLG", "ChnhwxO", "nf3dGq", "WR0UWOTDWQKnEW", "gSodW7hdTCoV", "yxjTEwLK", "mMu2W4FcVmkUbmkadW", "W4RcVxRcKG", "WPRdUcvppG", "u2vYDMvYtgLZDfrHC2S", "B25uCMfJA2LUz2TcDg5dBgLJAW", "WRhdSJzVpNWtW405WPdcIW", "5OIy5PAx5QIH5BYp5BEY5OMt5BYa", "dCoee2ldHuX5WRSKWPWbBW", "c8kEW67cOW", "B28+", "W5FdQmkuDW", "WQmRWOFdPSkNFCoHWQq6WP0sDItdP8kAWRlcSq", "vuhcKCk/WQRdPJ06WOLeWR5f", "W57dILFdJxm", "m3W4FdD8mhWXFdr8oxWYFdz8nq", "Dg9Nz2XLvgHYzwvbDhrHy2S", "W6SwWQia", "vwPrzwu", "W6eCWQamb8khWPi/g01BbhpdJW", "WOhdUdbknfSpW544WP3cIW8yq05Y", "A0xcVGZdNJVdSCkfWOTZx8kAW6eyBqJdNSoyDG", "DZBcUx86WQLW", "WQCUWPBdTmkv", "CMvJAgfYz2u", "W5pdSCkjyKHet2P1", "W73cIXVdMmo9WRbll8kEtmodls3cSvzY", "DK5lugq", "nJGYnJqYtunvuvvr", "WRRdOd06mmo9W41xW4DLW4JdLmkIwSkDW5lcKSkEW7K", "C3vItwfW", "y2fTzxjH", "Dgv4DenVBNrLBNq", "uCoZWQK8W5iS", "twfYy2HPBMC", "uKzMzg8", "W4ZcT11VWORcKddcOq", "W4BcKr3cTCoInq", "WRJdSv3cVN8oW4BcRXjYbIn7", "yxjTExm", "WR/dVelcO18uW5hcQYn8", "gCkpW6tdHrTQW73cOSo4WRn9CM7dIxTuW7S", "kLpdN8o3WPS", "lL8PhXRdRa", "bKi3W6tcKwaE", "baldMmowW40", "x19WCM90B19F", "WOBcGxnwCmoXW6xdKh7dK8o/ycPIh8oLkG", "WPJdNXaynSo5W4jn", "wZBcKCk6WQe", "WQefzmkNwgFdNqPSwKygW4pcVmk/shddR8kNW6RcNCoksYNdH8oDWRfTh8oZwSo5bCo8gfCdWOddHqunpCkDW4hdVSk6nW8Y", "WOxdTmkwW7JcOa", "C2nHBguO", "W44eoK4mW7a8WPi", "W4VcU0v+WRS", "smo+WPldKmkewmksFW", "CNDwyMq", "y29UC29Szq", "sSohbSo8eG", "jCk1WQeqxG", "kNddK8oMWPZdLLuUW7TjFxX8WP9lWRNcMGOwWQ3cJW", "aWFdG8oqW4urxSob", "AJVcNCkEWO4ZAmku", "y2XLyxi", "qwXSAwfUy2vxB3jSzfnPDgvdB250CM9SBgvY", "zI3cIG", "WQy6WPxdPSkXESoW", "WRxdUYTfoW", "WR4mWRhcLJBdGq", "s8oYkSovlaXBrZe", "A3nFWOPra8kWWQSSWRlcMSojW5jBAra+o8khzmokumoFW7z0t8kDWRxdUdtcSmobkSk2W63cKSooWRLbWPKBFSoVW5LOoCkHrCoYEbRdHCo4WP47WQnVfCo6xgxcNSkmWOm", "gmorW6tdUSoOrWhdVa", "pCkCW6ZcJIy", "CxfJDhG", "ugXHDgzVCM1dB21TB24", "ef3dNCo+WPS", "W7lcNmkQla", "vgLWC0XHEwvY", "umkgWQBdI8kFcmkUW4eoy8kH", "Dg91y2HqB2LUDhm", "W5hcT1XVWPhcNZVcJCo+zCkqEa", "WONdKt06l8ocWOK", "q29UCxvLCM9Yvg9VBhm", "C2v0qxr0DgfJA21Ly2HHswq", "WRhdSJzJpgOkW4K5WOFcRcy+vW", "W6tdUuldLvzWiHS", "W45sW6xdJCkYW6GMWO7cNCo1W53cPJvVW640", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VuMLNAhrcB3r0B20VyNrUtwfPBa", "lvSQarZdUW", "W5RdOeldNSoFW63cLSowWR3dQG", "vuLdyw52yxmVug9Wtgf5zxiVv29YBgruAhjVBMvqB3b1Ce5LDY8YBMrFyMDFmY9ZzwXMtM9Kzq", "y29UDgv4Dg1LBNu", "ywXSAwfUy2vizwXW", "C2v0rNjHBwvsyxrL", "W7pcMmk1", "fSkAW7FcIHpdJv7dRe3dH2FdStC", "qLHjwK8", "WPlcGevVBW", "WQqPWPRdJSkQ", "b8kfW7tdIWjlW6RcQa", "vwqVW7iwdgTsbCkEgdJcHmkfW47cJq", "WR7dLdiqeq", "xCo/W5ldGtC", "W57cTghcKmkcWRtcG0u", "W64DWRChnSkrWQCUbLHk", "p8o/WQJdMCk3qZ4kAxC", "mWhdLCouW58XwmoEbG", "y3jLyxrLqxr0ywnRqxjTEuj5q291BNq", "a8oUhCo1zW", "rCkgWR/dP8kgamkDW4yjASkRW5q", "ugXHDgzVCM1dB3jL", "W43cS3/cMCku", "WOX3WPaiprJdLwhcGSoomhuHvwnbFftdGeiaWQi", "ydBcONi3WRLWWO7cTCkJ", "f1FdHSobWOpdK14", "o8oviCo6xG", "u2vYDMvYswq", "sqKnEuRdGSoeFsPCWO0LBa3dMq", "jCkpW7C", "W6BcHmkMkJ/dIX7cMCo6cINcGSkg", "C8kPW6xcTmk1WQX2mePF", "6AU657Me54Qd", "m24ZW5dcQ8k6fq", "W6hdTvldSSomW7RcGCoEWQtdUWHv", "bmkSW7LIWOrYB8kbWR8fW4vpWOq", "m240W7xcVCk4cG", "WPOdzCk/", "WQ8gWRlcIJtdLSopWOFdTSkyuW", "naNdV8oiWOW", "W5m2j0OfW6y4WPFcQ2mMW4VdRgNcLc3dOCk/yCoxWPPwW5zbW5xcNrJdQsaqWOy", "oMKJW5y", "m8kpW6NdKcrqW7pcQa", "z2v0uMvZB3vYy2u", "A2v5Dxa", "iCkgdW", "5RI45OIp5PYQ55M75ywL5PQc5PE25PEG5Rov5Ash5lU9", "W7Snj1CB", "xCo/WQe3W5u/", "mhW1Fdz8mNWZFdr8mq", "W4/cOezVWOZcII7cOSo/", "yxnLBMrqqLyY", "Dg91y2Hiyw5KBgvY", "W6NcMXZdUmo9WRTjc8kUwCowlWq", "d8k7W63cRIy", "B29Vuee", "CgfJA0HHBMrSzxjuAw1L", "zNvUy3rPB24", "j1pdNmouWOhdNvGf", "y8krWQBdNCkGcq", "WOKMWOVdHmki", "WQ82WP0", "5yAB5y2a5Pw55yED5l6n5OQR", "z0XosLu", "lWhdNCorW48lvG", "vuhcG8k7WQ7dIW8HWP5CWRPEW6mOWQT1aCoqW7D8d8oJzCkyW7a", "CCopbG", "DxrMofrVqMfZzty0", "CNvUBMLUzW", "W6tdP07dL0K", "WQzZWPyOoIhdIMhcGmoy", "dmoafeldQu9NWR0cWPqcBCocbSo0CSof", "dSolfhpdUG", "r2XVyMfSrgf0yq", "v29YBgrcB3nZrgv0ywLSugfUzwW", "tCktWQ7dIG", "z2v0r2fTzvDZq29UBMvJDe9WDgLVBG", "FczfpmoQWRtcN2Tq", "WPtdT8kXW5hcRmkLW68", "eXFdGCoq", "DttcKSkhWP4", "Cgjby2S", "qCoOiq", "W7BcHCk3osxdSX7cH8oEgZdcLmk3oNm3pq", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VBgvMDe5VzguVuhjLzMfIugXHy2viB2XKzxiVtMv3ie5VzgvBmv0VtwfPBLvPu2HVCNrJDxr2Awv3l01HAw5oB2rLl29Wzw5oB2rLl0nSB3nLtM9Kzq", "jtZdH8oIW48", "W6xdG2NdSCo0W5JcK8oLWPRdJG", "WOyEWQFdHG", "ow4wW4pcOCk+imkgcfxdLeRcI8oot1VcMCoXySk9smkA", "A8kjWOtdLmkg", "44ca5BEY6l+h5PYF77Ym6k+357UT6ls544cc", "WPufEmk/wutdIa", "y2fWywnPDhK", "A2rXyG", "CgfYyq", "te9dquW", "WPGiWQ/cKGFdKCotWOddP8kKvgK", "WQNdNX0GiCoMW7jqW5vZ", "hSovbhFdVeHoWRuFWOeoB8oLoCoqzCorcuRcI39lW4y", "vvjqBK8", "W4VcHG7cVSo1", "WO/dUfldPq", "W5lcT0PZWOlcOt7cTG", "wSo0WOOKW5minSkjWROpW7bWWQujwG", "5B+R5Ps7m+MyNW", "n3aGW4FcVmkUiSkAfvJdKW", "BgvHC3ruAw1L", "t0TxDNy", "WQhdNhpcNwW", "W5ZdPf/dK8oo", "lCkYW7pcQcy", "h8okc3pdPG", "WPmwe1ZcU8oM", "W7BcUgb3WOS", "x3rVz2DSzvnJzw5L", "W6CmWRuC", "aSkMohHkjmknaCkaW7S", "q2fUDMfZl2nVBNrLBNqVtujHDhrSzu1HAw4VDwKVyNrUqMfJAW", "W7nXW7JdLSkWW6S", "WOlcQMbqsG", "W6FdJmk5yL9oy3zGW7m", "nmokdKldOubUWPC5WOeSACoSe8oDDSoFaW", "umkTW6VcUq", "WPStrmkQuKe", "zgPKugq", "W7/cMmkNpqVdUrlcM8okia", "v8ktWQ/dHCkDcmk5W4alASkmW47dThe", "6l+s57Q55Psr5yAZ", "kh01W4pcS0q", "W47dPvtdGen7nru", "xCo8WO0CW7W", "uhjVzMvZC2LVBKnVBNrYB2XSzxi", "a1FdHSoqWOFdJ14vW5Dkw1T0WRDCWRRcLXehWQVcLG", "W4VcN2FcImkC", "W7BcIWhdQ8oOWRO", "ChjLDMvUDerLzMf1Bhq", "W7Wrof0hW6y", "WPBdOq4FlW", "WPHMWPyIpbi", "zMLUzeLUzgv4", "W67cGrRdR8o0WRDu", "cmkgW47cPW7dIv8", "y1VcJCkWWQBdHZiZWQrm", "swrVAhy", "dCoqdhRdU055WR0PWPSmymoHeCoyCG", "r8oQj8ormd1k", "c1aoW6a", "zSkoWOJdLSkJ", "d8kDWOiHDG", "C3r1zhLhyxrOzxjtA2LSBhm", "BKZcTaldNaJdOq", "CqetDq", "WQykahhcQSo6W65abSkkrSkwWPNdNSomW47cK0JcGmkpW5VcNYJcTmoUyKZcTK9HWQ9GwuzBW7CyW6qwWOGwF8o5emoZFCkccCoqd8obtWTWgmorW7y", "twfPBLvjv3jHChbLCI9otwfPBLvj", "v0Hzs2K", "W7VcJrVdPCoQWRC", "EcGpwMO", "WPakaLdcQSo3W6jDr8kBBSkKWOO", "W5LTW6ZdUCkU", "yxr0ywnRq2L0Eq", "Aw5ZDgfUy2u", "zZxcVNi6", "nuyXaHZdUSkv", "W4JdTvldVmoeW6xcOSoyWQFdRGPeWQz9lmoSjeRcKmo/jCkj", "xmo0WRSKW5WLoCkf", "c1qCW6dcH2ql", "W41KW7JdNmk2W5GsWP/cIa", "WPSeaL7cO8oMW7G", "pSodgmoMzSkMiKdcPd9jemoYqe3cLt/dSgGLiq", "Dg91y2HLCW", "B3bLBKHLBhbeB2n1BwvUDa", "cCkcWOGJBqq", "y1VcKmkOWQ3dGa", "W7RcRftdPh9yW4q", "B25mAw5L", "y3Dhuhu", "C3vWCgXLBwvUDefYBxLoB2rL", "qmoJjmorkYro", "aSo9m13dNq", "uMHkWQT5hG", "W7WnjfeiW6WwWPpcHfaWW5hdP2lcMtpdU8kFumkcW4uw", "EhLLAKi", "W4ddVKxdK8oeW7VcTW", "eq/dNq", "nCoNW7VdQCoNsJJdPd/cMfbxlmkzW53dL8kWCKlcQG", "heFdUCoCWPW", "qtvyk8oTWPpcKNrhzHRdUbHzcJTjW4ZcVLNdJCk6", "WQSmWQJcRshdHSowWOhdHSkwvwOKW4NdMxy", "yxbWx2XHC3rmB2DPBG", "evtdQSo3WQW", "mtC5ndi2nNriq1jIzq", "W6pdRKhdNuXWbGlcKCkTjmkKWRhcKW", "BmkHWQRdKmkDaCkiW7ysF8kHW4hdPNVcIf7cPmkrWPtdVuW6W7VdLSoavx4", "Aw5Zzxj0", "eSoEW6FdR8oQqbBdOa", "z0Tvv1K", "WOuAWQFdMmktv8owWPmZWQaQxcldL8kMWPlcG8o7", "W7hdRMtdPxS", "tgfIzwW", "W7/dKLtdKCoe", "hCoXfmo8A8klcW", "t2zNse4", "xNjlWPjzf8kW", "Dg9Nz2XLrgLZDgfUy2viAw50", "rLDttxzJ", "W6mdWR4eoq", "zxHJAgvJAW", "mxW1Fdn8mhWYFdq", "Bw91C2vTB3zL", "56cf6kYb6kEH5Asr5lM15B2+5yMg55QJ5BYz5PAf5OYb5zcF776F", "W7aaoLSbW6Cg", "W5dcJWxdQCoi", "kCoSWRq", "W4hcMIJcO8oMjmogW6aMkGOTW5JcKCoiW58ex8k2", "tgXjANu", "jM85W4ZcPSkgcmkbca", "WQmZWP/dRSkLEmoNWRmZWOOtFW", "oZpcPd41WRTXWORcTCkUAmosWO7dU8oPW4FcGqLPpmo7oNGqmCk/W4pcRWZdQG", "5QY15zYO5A6S5ywy55QP5B6F5Psr5O6CuHRcMq", "yMXHy2S", "qmoJjmozmc1Qqt9JWODIdfS", "wg5kWQDeh8kuWQ13WOBcSmoKW6fiAqWYlCkQBSkqFCoK", "W6NcJXNdQCo4WOfmi8k0", "EunzqK4", "v3zNvhq", "WO1tWO4EjG", "Dhvrtwm", "W45sW6xdJCkYW6GMWO7cNCoYW5pcOde", "ucZcJCkgWP46v8kcWPivWRXqvCoP", "zgvMzw5KzxjZ", "wvfQtvq", "wxfysxC", "BKJcPGldMG", "j0hcTW/dMqhdP8ojWOnQtmosW6O3DatdKSoE", "mSo1bmoXpmo2", "EYrpiCol", "WRaPWPXmWQmRFSkno8kXBZZdICoHW5xdQc/dPKBdLCoYWOC", "b8o9e8oGyG", "bWRdPSoNWOyxlmoOW5VcGCkpB0HCW5qivZTeW63dRvVcIuVcGCoCWRG8qmoNbmknWRiQnmo7s2jPgmkYyCo8W4G", "z2v0tw91C2vfDMvUDa", "W4VdTuRdNSos", "bmkyWO8MEa8", "C2f2zvnLCNzLCLrVA2vU", "gCo6fmo4F8kMcLi", "yMf0y2HuCMfPBMLUzW", "W4SUWQKxbCkgWOCGbfrme1tdGKD2WPBcSNJcRSo2WPeCfCkjyXW", "vuLdyw52yxmVug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9bvKfgAxHLzej1AwXPzg5Nug9W", "naZdKmoCWQO", "vWuxD0ddNW", "rKVcKmkFWQ3dGYW7WOnnWRvdW4qhWPXPcCoFW7HbgSo5", "W5tcIXJcRmosWR1dl8o1y8oso0/cHNbYW6G", "nhW2Fdf8nxWWFdL8ohWXmhW3Fdn8mG", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VqM90Dg9Tl1f1zxn0tM9Kzs9SyxLVDxroB2rLl0rHAwX5uxvLC3roB2rLl2LJB24", "ruveA3O", "W5xcHCkTfcFdOrtcGmoR", "y3jLyxrLquK", "pf0OdWO", "pWddV8omWO8A", "W6hcMmkWmstdSrFcNmoRed7cHCkvo2e8", "W6jKW77dI8kYW6KMWORcJSoEW5pcKdfzW6y", "WQSXWPddQ8kXCSoHWQu", "Dg9Nz2XLrMLNAhrPBMDnB2rLt3b0Aw9U", "W6axWQmiemkSWQ0Peq", "zMLUza", "W5VcLmk1psO", "W6LRW67dMSkMW4mn", "gSkGl3q", "r2v0rNjLzvbVC0zVCKfYBxK", "ENLZsfy", "nSo/W4ldNG", "amkuWOuLAqK", "Dg91y2HZDgfYDa", "txnNqM94q29TCg9Uzw50", "qvjnwv9cqvrdsf9nrvjhrq", "WO7dOCksW5dcJmk4W71WW7pdMW", "hJtdPCoxW6e", "W58apeWfW6C0WOtcTLSrW5NdVwu", "W4tdPmkrDK5C", "z2v0q29TCg9Uzw50sw5dAgLSzhjLBG", "yMnZy0i", "W6ddTuxdT8oy", "WR4HafRcNq", "AxnlvKS", "oSkqW6ldIIjW", "g8kyWO82Dq", "whfivKC", "rSodimowdG", "EKJcOaBdHXa", "EefcsNi", "BN45W6ewewO", "pCo4nSoAFq", "zK9Wuhi", "efRdGmo3WO3dU0qfW59hvW", "WQvZWOKUiq", "Eh1bWRbrcq", "m8kvWOO2Fa", "DG4nzeNdHColCq", "d04HfWVdHmkaW60wnIVdHKtcH8kb", "a8oHbmoGA8kRawdcOb9naCoR", "f8kAW7dcQqNdMftdP0ldKMZdOd8", "B25tDxn0ywLUqxr0ywnR", "W5hcM3NcVSkR", "W6mqWQGb", "rSkgWQ3dJCkhcmk9W5SiF8kGW5ldPMC", "zMXVB3i", "C2TPBgXjza", "dGddKSozW5mbvmoa", "t8kAWOBdHCkBdSkfW4Wu", "uZRcJSk+WPOUAmkvW487WOflFmo+rH8sWOirgmkiWOqFWQnFpmo9WPDeW4JcPsSKW60", "DZRcI8krWPmp", "DZxcVNi0", "xdTAbmoKWRNcG2KAuJtdMYLxcsP1W4ZcVfdcH8klW7NcUmoYvCkoghFcPCoeWPZcLI/cV8oRW7eNqSkCd0n2W77dPfD2aCoRW6BcGmodW6xcI8oYW7ZcPSk4i8kxWR/dPdFcVSo6W7PpW5fWWR3cOxCSCttcPSkIlCo5W7a", "yJvhlq", "s09mEMW", "A1r1B0W", "AZfEgmohWPBcG2LgBHldSW", "ydRcKmkCWP40ECkWWOKoWOb2smo4qaaS", "yxnLBMrqqG", "hSk2W4ZdSbHwW6xcVG", "feddNq", "lhZdN8o5WRi", "q2HuyvK", "W7ZcP1TlWPhcKtpcP8o5CmkQBgK", "5yIg6zkF77Yj", "WQqYWOa", "sSo2WPpdGCkMwmkjBmkkza", "WQamWRlcNJtdJa", "B21sweu", "WQpcGhLd", "b17dM8oXWOm", "W64jiv4DW4KqWO8", "BdVcUmktWOGJtmktWPqBWOTsESo4rYWUWOOCfG", "amkEWOGJAqJdRmkz", "DZRcI8krWPmYy8kd", "jSklW67dIbTWW60", "zxH0CMe", "u2HVD1rPChm", "tg9NAw5tDwnJzxnZ", "gmokeMi", "F0dcTG", "oSozW7a", "s8knWRJdKmkia8kzW4agE8kG", "WQtcI2vdBSodW73dOgJdK8oSza", "WPamf1xcV8oQW6vvzmkWA8k1", "WQHAWRmsoa", "vxrMoa", "W6fPW6BdVSkSW6esWPW", "c8ocW7hdQmoUwG", "EJBcS3q", "rCo7WR0JW5GV", "W6xcLmkZncpdTHlcHSo3kcNcMCkvnM08o8o5", "A2v5", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9vC2vjDgvTq29TBw9UugfUzwWVC2TPBgXcDg4", "C2vUzejLywnVBG", "aCoxW5pdUSoB", "5Ps75yE76BUr5PQx5Pwm5yAB", "z3GUW7q", "BwfYy2HjBMzV", "nw8+W4hcS8k+", "Cfvjz3m", "zMfRzuLK", "WOikh1hcUa", "shLBWPvBe8k7", "zddcISkXWPq6FCkiWO4FWOzn", "FsRcMNaSWR5HWP3cISk2m8oBWPC", "WO4DWRlcVYhdL8ooWQxdTSkdqgGnWOi", "gmoXhSoZySk2", "z2v0vxnLCKfNzw50", "AgfUzgXLCG", "cCoee3pcVHLFWRCzWOejma", "W4RcGrJdQCoU", "cSofW73dUmoGFbddTs7cSfe", "W4ddVNxdL8oeW78", "W77cHXZdVmo9WQzeiSkFw8osiHS", "WPidzCk7xv7dNXj8zxqAW5y", "WORcRHPNW5lcGMFcRSkOEmoq", "tLjLCxvLC3rjzfyY", "r0H0s1u", "z2v0q29TCg9Uzw50C0LUq2HPBgrYzw4", "W6v9W74", "WQldUbfsiMyjW4S", "WRldUeJcN38oW4hcPIvL", "CgfNzq", "x2DHDgHLCG", "C2v0vgLTzw91Da", "AmoZW4ZdKIetW6DfW5OVW5xcQSoTW7W", "zw50CMLLCW", "WRqqbeNcPmoT", "BgfUz0TLEq", "W6pcNSkOpsG", "W4BdVKxdK8oEW6ZcT8oeW6e", "e3eLW4VcOSkne8kDcutdVK/cRCoFwq", "ruVcGSk9WRFdGIG", "WP8daLZcPSoM", "WR8bWRpcJNm", "bCokbhpcUq", "EHxcTNW+", "r0vux01buKnix0LorK8", "vSo3W4ZdJXqoW4jcW50+W7m", "hvqEW7tcKw0", "W4JcHcVdNmo0", "AJpcJmktWPyY", "5yQ06lYK5AEM6ls0", "WQBdTIz1jg4vW5G", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9nzwnOyvrVD2vYtg9ZzvbHBMvSl2jNx2jSywnR", "vZJcP2itWQvNWOq", "WRJdRuhcIhibW5BcVGX4dsn2", "yMDmyxLVDxq", "mtuXmdaWndv8nduWmdeWmdv8nduWmdeWmdy", "y2fUu2HHCMu", "smoZW5ddGbqJ", "W7FdVCknALLk", "fSo9g8oGB8kW", "W6tdVLtdGe14", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrfBxbPCMvtDg9YzwHVDxnLug9WDxaVmM5Kx2jNxZmVy29UDgvUDe5VzguVCMv3yxjKtM9Kzs9HDhrHy2TcDg4", "A8o5W47dQcuyW45EWOyAW7pcRSoWW7BdGmogFSkNFJLUF00zWPpcP8k3bSkNsCoVe2jds8oTW5BdGCk5lmowdw3dNg7dTCokv8kHvGBcS0v8cq3cO8o3WPLQWORdRX53W63dV00O", "tCoOmCoepYzzvG", "WRCSWOzBWRO", "mhW1Fdn8mxW2Fdj8na", "WO17WOOVaHNdHhFcICoz", "sdvtreTFu0vduKvz", "uvfQs0S", "neeJgq", "WPpdGGK8nSoTW6rlW4fW", "uSo/WRWaW5iInmkuWPSDW7zQWQ8usW", "WPFdNaS", "u8oGWOuIW4S", "rCoYnSorpsnFqrH2WPb/cW", "qvjnwv9iruXq", "CMvWBgvUAxnO", "E8onWQCIW5eVf8kbWQKPW5jUWQKsFemfW6/cGCorfmoWrCox", "bCkFWP8NBW/dOSkB", "z2v0rNjHBwvsyxrL", "AZCKE1e", "WORdQ8koW5JcQ8keW6O", "uSo4W47dKta", "wKrnsMC", "Aw5PDeDHBwveyxrH", "rLvdruK", "W43cT0P6WO/cKHRcS8oOz8km", "v3nmWQDee8k6WRC", "W6RcJc7dR8o3WOqv", "W6rKW77dNSkxW6inWOa", "tgfZDenSB3nLvuK", "qNr1yxa", "W6lcMXVcUmoPaCobW6y/aHeBW4xcKmoLW4a", "a8oedNldPeHFWRC5WPyhBCoZpCoACmovbG", "tuVcISk7WRBdHG", "cvGuW6u", "Bxv0zxG", "c8ocW7S", "WPxdLGO8ka", "W5RdOeldNSoFW63cMSosWQxdUWfcWRXKbSoWlK4", "yxbWx3DLyMDHBwvXCunVzgu", "tSkTW7tcR8kX", "aSoXgSo7FmkN", "DxbKyxrLrw1tDgfNzuzVCM1HDgLVBNm", "u8o7WRSKW7W/lSkbWROp", "z2v0twvYz2vbCM15twf4tgv2zwW", "yxr0ywnRzxjZ", "W5ldUeldHMz0iHe", "W4LtFajzWRjpW4BdQWXLWOJcUs/dHNNcOSokpW", "AxnnzwnOyq", "mfioW5xcM2uA", "W4JcNrlcTq", "WQu6WOFdK8kTE8oH", "tKzfy1e", "tLDVCMXKtwfWvgvYCML0B3j5tw9KzwW", "WOulymkUB0/dJGXCyuuBW4NcQCkH", "FSoJW4JdPW0", "DujrAwm", "WPRcGwb7FCoBW7tdJspdS8o8CXP4aSo8k8kMb8kSvLraWQNcHSowomoel8oJbg8uW54kW77dOqaWtmoc", "yCk/W6pcV8k7WPfMaLvtWOxcIIbCWOD3", "WORdLG4ViCoMW7jqW5vZW4ZdK8kOtmkw", "v29YBgruAhjVBMvqB3b1Ca", "WQVcINr0DmolW73dMW", "W4/cPYS", "ug9PBNq", "z2v0ugXHDgzVCM1wzxi", "q1eYnunVBNrYB2XSzxi", "wfvAEuS", "W4hdOmktzW", "W6dcOujYWO/cKGFcVCo1Aa", "sWKkFe0", "EwmLW6ePegbXd8kqfsdcOCkdW5m", "AgLKzgvU", "W7DtW6tdHCkT", "uMvXDwvZDeLK", "v0TZvhu", "WPKAySkIu0q", "CwjMvhG", "sqj7lCor", "WR/dUsfkjwScW58", "f8oyWPpdUCkA", "oSkCW6/cQq/dJ3xdO2NdKNNdTq", "BgLZDa", "yw1VDw50", "ywXSB3DFBwfYy2HPBMC", "BMrUy24", "k8kOW6ZcTbddJNRdO23dQ3RdTd/dTG", "Aw5xB3jSze1HCa", "WOOQWO/cSYS", "nwe9W4FcOmkR", "W41ZW6NdSSkTW6Sy", "m8kmW6JdIWu", "WRu5xSk+uL7dVXvxz2mBW47cOmkQxW", "W6C7a1mA", "WRpdH8k9W7RcUG", "W5ZcVuDTWOBcJcpcHSo1u8klA2JdUx/cVSkHrvddRYm", "bmknW67cVZxdRG", "jCoYd2tdPeLgWRK8", "xx1CWRj9g8kNWRPRWO7cVCoO", "reZcPsddQcBdLSklWOHMsSkqW6KRzr8", "WPeabh7cOSo3W7jHqSk2y8k8WQ/dNSovW4RcN17cP8ko", "W6RcNaa", "yxr0ywnRzxjizxjVCW", "B2zMC2v0v2LKDgG", "WPxdKHi+d8oXW4i", "qxr0ywnRzxi", "W5xcNGRdOSojWPS", "q3vYuhjVzhvJDe51Bq", "gHpdTCoMWPqjoG", "y2LWAgvYDgv4Da", "CMvSB2fK", "W5NcJaJdNSoU", "WPxcNN9ewmodW6xdNG", "suVcImkSWQFdNheWWOrjWRDyW6PeWRXUdSohW71AeCoYFG", "revmrvrfx0fstvK", "W6JcVvT3WOFcSZBcOSoptCkZA2xdRvZcQ8kY", "nSoUWR7dGW", "jSkfW7xdKHjlW4xcPmo5WQy", "mhWYFdn8mxW0", "q0jd", "k8k6W5C", "W7/cHCkUna", "W4RcKrRcUmoPiSo9W7SNpqqDW5JcHG", "vfPlvKC", "aGpdMmob", "Aw5WDxrnyw5Hz2vY", "uLRcI8kSWPldNdmKWOXpWRPdW6qgWRe", "BJnMkCo8WQ/cK28", "Dg91y2Hz", "natdPSokWOqhpCoJ", "n3qKW4pcSCkHbmkanfhdHu7cUG", "Aw5UzxjuzxH0", "WRKHWP1BWRKlC8kFcW", "zxH0CMfbCM15", "W43cMepcVSk3", "W6RcS3RcKmkcWOxcIutdLxC", "rxzLBNruExbL", "iCkpW6JdIaq", "ChjVBxb0", "z2v0twfWu2L6zq", "B25tA2LSBeLUzgv4q2HHBMDL", "bLCiW6dcN20", "AxGKW6uyc2fKha", "BtGxvwu", "m8oOW4xdQSo+", "Bg9JyxrPB24", "W77cIWNdRCoPWR5t", "WO7dQ8koW4a", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgruB3DLCLbVChvWl3DPzgDLDe5VzguVmM5Kx2jNxZmVzw5LBxLoB2rLl2j0BJi", "mWddSmokWPicpq", "hLO3nbJdVCkvW6GDiJJdL0m", "wCkPW7lcMmk1WOTJeLfuWO/cJWTXWPv3WOW", "ChvZAfn3AxrJAe5Vzgu", "me43frhdGmkf", "WPNdVW5ubq", "fSkJkNjd", "lLO2aHJdOmkpW4umeJJdGeK", "W6eCWQaehmkoWRy", "emkQlxbDiCkv", "j8kbW6NdGbHuW4BcQ8oSWQf/yW", "q2jpywO", "z2v0rNvSBfLLyxi", "A2LUz01HCMTd", "xaWxC0m", "wmo3W5ldIa", "vSoJlmouoZO", "C2nYB2XSsgvPz2H0", "cqVdHSo2W44erCoWdfKAWOFcM8ofxMBcGW", "rKLXyNG", "W6pdOLtdHenHnrG", "oKOXnrBdPmkrW6SwaZFdLW", "qCoijmoYpq", "v29YBgrdB29Yza", "x8o/WO/dGG", "Bvb1D0S", "dKqoW67cOg0ttCknB3e", "aKWPgqRdRmkTW6ubaYS", "waukqeFdM8o9zaTSWO4+FG", "buldGSo+WPe", "C190B2TLBG", "qNvPBgrPBMDeyxrH", "C2vS", "mSkfW7pdOrTCW6tcQmoKWQzyBNldMq", "CgXorxy", "EvPuyKC", "C2HVDW", "zxHWAxjL", "AxnutvnLCNzLCG", "sgn2DgO", "twfWtxnNCW", "W7ddTepdI8okW6hcVSoZWQJdVWu", "mZiWqwveD2DN", "W5pcS2ZcMCk2WQFcKKm", "tSk5W7xcTa", "ybmDDuBdJG", "rCoLm8ofnZPF", "x2nSB3nLuhjPB3i", "WPZcHatdSCk2DCoDW7e", "BM8TC3rVCMu", "W7KelLehW6CLWOtcTfiWW4RdVx0", "WPRdOCkiW7FcOmkGW75RW7ldK8oDmG", "qxnZzw1IBhLnywLSvgLWC0nVBxbVBMvUDa", "WPFdIL7cPxieW6JcQZbdaYz9cwtcNCk6WRWnW4/dRSkAWPm", "zxH0", "5PcC57sI5lIw55wm5zYW5zU+", "nmoNWPBdJmkevcioEq", "DsVcUMGwWO4", "y2XPzw50wq", "meyPeYNdPSkiW6OmaYVdRu3cGSkg", "C2v0u2HVD0rHDge", "pmokeNRdRgbQWQGzWOulACo0gSoPFSozh27cJwjr", "WR8DWR3cIZtdS8ovWPBdQq", "sxLcWQLgh8kwWRfQWOVcTW", "WOZdVrm8ea", "BSoIWPtdGCkiqG", "amoMgmoGzCk2fLhcSq", "WOqaa1lcVSoXW6HxFCkWEmk1WPK", "o8kfW7ddPX9yW73cJSoLWRXUzvtdKx5DW7O", "vxrfzfG", "eCoFW73dTCokxqBdOclcU09D", "tLDVCMXKvg93zxjqB3b1Ca", "WOvNWOK", "dvajW6tdHdW7r8kjAxSl", "v29YBgrnyxbvsvDYyxbWzxiVtLDVCMXKtwfWvuKVyM90Dg9TtM9Kzs9IDg5Fsg9Tzq", "WRxdUcXsmwyjW58", "su5ou3O", "WPpdQ8orW4FcU8kIW7XH", "wmoUWPddKa", "x3n0vgLTzq", "vuLeyxrHsw5MBW", "v29YBgrnyxbvsvDYyxbWzxiVtLDVCMXKtwfWvuKVyM90Dg9TtM9Kzs9IDg5FrMLNAhq", "WPugF8kUuL7dPq", "zgf0zq", "wSo0WO4DW5G4kCkbWR4bW6XqWOu9DMi0W4JcPSo9o8ozC8o2", "EuvlDfK", "W5ddPmkjD0Dk", "rCo7WROXWOWulmor", "WPtdQSkFW5JcUSkPW6T3", "euWFW6dcK8kg", "44ca54Mi5PYSoIa", "wKBcOI/dIb3dSmkwW4LqwCklW7eRztRdLmoEr8oQWOxcJqujWR7dTSkBWRyKW4WvBhX8D8kyzmolD1W", "fmoaW7hdTq", "eCo3a8o9FmkN", "gmkEWRG2BWJdRCkq", "mMu2W4pcP8kMfq", "D8o7WRWKW5eUhSkbWQ0f", "6iAf5yQz5OQv5PEq6zMm5Rcz", "B25cDg5dBgLJA0nSB3nL", "W6zSW6tdMW", "W59OW6xdISkTW6K7WP3cImofW4hcStq", "BCoOmCoepYzzvG", "W6pcNSkKpYRdVt/cNmoShtZcG8kxme4Wj8o+", "CMvZDw1L", "yNvPBgrqB3DLCLrVD2vY", "WPBdSSkxW6VcRSk/W6vBW67dK8oaktiGcX8", "DgHYzwvbDhrHy2S", "uNLZC0m", "lSoXWQNdGCksFI4", "jmo6e8oLAa", "gCoaaxRdJKrSWRa4", "nNWWFdf8nhWYFdv8mW", "WOqpzSkNwutdLqLr", "W43cS3VcLCksWQ/cIuu", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZtKUkRMJiNPKQ4Vy29TCg9ZzufSBej0BG", "sCoZW5/dIbeiW48", "eSoEW73dRW", "xX1k", "bCoqdq", "emkQlxHgkmkXgSkBW7ldQSkPW4/dGq", "qW1momob", "mCkbaK5RaSkVoCkHW4FdNCkuW6NdP2CdkSkGe8k8qZtcISkDW7VcMZ3dVCk5W6y7Cuy", "duBdGq", "rLzqA1K", "BwfYy2HmAxn0", "WQxcOeDDuq", "uhjVDg9cDwzcAxO", "yZzalCoMWRq", "ydBcShyZWQ9qWOFcTCkYiSo5WOVdUSoTW5BcK2SQzSkLEYq", "tuq1", "W67dOKVdHSoVW6NcPSow", "55Ix5B6K5PAB5OYS5AsA5lQC56oT6k2t", "tKvxx0niqvrFufvtsa", "W5tcUqddVSoWWRzQk8kQEmodjqpcUW", "amoMga", "AgvYB0XPC3q", "WQv3WPmiprVdLhVcICozmxm7s0Hmz13dQvemWQi", "kmo5W63dISof", "BwvJAgftDgf0zq", "W64vmvqm", "g8kHghPbiCknkCkyW67dJmk3W5ldM0O", "kCoSWRtdMCkzqZmBBW", "W5tcUqddVSoWWRzQk8kQACowoa4", "y3jLyxrLug93zxjuB3DLCG", "CLjNvKm", "b1SoobG", "C2HPzNq", "W5BcOwjnWQG", "W5NcVvTEWOlcNt8", "v1LKzu4", "EtpcVf4S", "mMu8W4FcPSkV", "B3K+W7qljh1UamkdeYBcP8kzW5pcNq", "cfFdNmo1WPZdKG", "f8kJiNjd", "cua1arJdU8kPW6eufJZdKwhcKSkrWR0", "ad/dGmomW5u", "oSkqW63cHrddHutdP17dH3NdVdJdU8k+WPS", "Aw5MBW", "DuTaWRrChSkyWRHZWQlcVCo7W4LoFsejjmkm", "WRO1WOi", "vG4qDvRdVmobCcPn", "smoYWOBdLmksqmkj", "ywXStwfWsw5MB3m", "Aw5KzxHpzG", "fhGJW6tcNa", "tgv2zwW", "eCk3pW", "W7uejeG7W6CtWOpcVeCW", "W43dUmomW4JdVW", "C3rHDhvZ", "z2v0", "W5BcHCk3osxdSX7cHW", "ywXSB3DFzgfTywDLzf9TzwnOyq", "u1fwweO", "oSkqW63cGW7dMfJdSf7dH3NdVdJdU8k+WPS", "W4PwW4xdSCkbW5WQWR3cVSoZ", "WRWBWRNcIIxdKmo2WO3dSCkd", "cCoefgldPeG", "AgvSCgvYlwrPywXVzY1JB250ywLUzxi", "DgHLBG", "W6ZcGJVcN8on", "BcxcM8kC", "nh7dUmoWWQa", "Cg9WDxaTBwvUDq", "WPGlE8kU", "W7NcNSkNpq", "ug9Wtgf5zxiVv2fYzuHVDxnLtwvYz2vqyw5LBc9dt05uru5ul1DHCMviB3vZzu1LCMDLugfUzwWVyM90Dg9TqMCVyNrUtM9Kzs9YAwDODej0BK5VzguVBwvYz2vcDg4", "zez5ruC", "emkmW6BcTd3dJvldRgK", "W5JcMGhdGmo9WQTip8kU", "5Bwn5yAH6zEe", "z2v0uMvZB3vJzurPC3rYAwn0u3rHDgu", "u2LcyMO", "W6ldQSknt0Pwt2OPW4LXWP4cW4/cOSoNdZjGW5rzlmkmWQKOy27cR3FcO2Xjj8k7qSkiWOFcJSkktcbsW4qVWQdcM8kPi8oODSkCDtHAxaddNSk+W4FcO2JcKu3cKSoaW53dPIGvWOtcRIVdMmkQW4bHWOnXWODLnJhdUG8", "tbqmEuBdJmobCIC", "fCknW6ZcSHpdNK7dSNG", "WPelE8kU", "ofCX", "AfzvwKq", "Bwv0Ag9KCW", "CMvJDa", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9bzhzLBNr1CMvcB3nZq2HHBgXLBMDLugfUzwWVyNrUrMLNAhq", "mSoHhSo4BSkRauBcNq8", "v29YBgrnyxbvsvDYyxbWzxiVtLDVCMXKtwfWvuKVBgvMDejVDhrVBu5VzguVzgfPBhLrDwvZDe5LD05VzguVrgfPBhLrDwvZDe5VzguVAwnVBG", "C3rHCNq", "W5lcS1T4WOVcQI7cOSo/", "rNzfvwG", "vdi0oJaWoJaWlJaWmcSWodOWma", "WOyka1tcV8oQW6rCe8k+BCkJWOtdK8ouW5/cUbZdJSkjW6/dG2VdT8kjBsZdGdGmW5eoAWz9W6zhW7GDWOawjmkYA8k1AmkxySkFhmkBwH1RkmkFWRHUoqKexxVdVSoldt44W5pdM8kgWPldPtvkA8o3W6JcOYThWOnUzIfNgL/dOmoElmk6deJdUcCNW6OOW6K", "rJVcL8kXWPq5FmksWOuiWODlE8oJrXSWWOWteCkbW5K", "D1r4uuO", "dfFdM8o1WOddJG", "quXmsufoq0vFqxnZzw1IBhLFq2fUy2vS", "WRddS1lcU2SeW4dcUq", "y8oDWQFdPmkD", "Fczf", "W6rSW7NdI8k/W6iiWORcPCoFW5ZcOa", "W5RcH8kGftxdVWG", "W4ZdUmoiW4JdUSkXWR54WQ7dISka", "AJVcISkaWPqZEmkeWOu", "WOtdMcXHbq", "rMVcSSk4WPS", "WQCLWPTmWRGSEG", "ugfIq29UDhjVBgXLCG", "zxjYB3i", "n8oRWRBdJ8ktrq", "z0VcPq", "pCkJW6ddIc4", "yZH0CMvHC3vYzunHCG", "A1PwzMi", "yMfJA3f1B3rL", "gSoqnSoIrG", "W4KWWR8reW", "W4XGW7ZdMSkY", "zKBcSqldNq3dUSkk", "teVcISkP", "v29YBgrnyxbvsvDYyxbWzxiVtLDVCMXKtwfWvuK", "mMeKW4pcOq", "W6KaoL8mW7yQWOlcOG", "BgfZDeXVz2LUvwLK", "WQuaaKVcRSoXW4zHFCk2ySk1", "q8kaWR/dJCkFca", "W7uwWRy", "uuPiBeq", "ANn1", "yYrEiCoQWQ4", "sgvYB0LKCW", "5OUo5Psa5QMJ5BYP5BAI5yw86zAk", "W7FdJexdShm", "faxdMmozW4OSvq", "WQ0BWRhcGdm", "W4dcNSkXncldLrRcHCokiaRcN8kvjxy8o8kLs8khWOtdI8oKW79qsCoXWP3dRG", "vmoNmmodoW", "jbhdT8oFWOi", "WQ0XWQddR8kRyq", "B3bLBLvZzxjjBMzV", "W7/dV1BdS8okW7hcT8ofW6BdNI12WP1YaSoHa0NcMSoOB8kKW4hcGYVcMmo4WPRdRmkmW4jfWQTCWOGaWRJdGWDCrffXAmkDDCoaWPa7WQ9qwSkeW4iTDmoVWQBdKCkLWRSzcwNdNSowWOaXzb4v", "mmo4WQNdJmkBuG", "CxnJDMe", "e8oRlN3dPq", "jNi1W6hcUSkVaSkz", "tSkGW6FcQmkYWPbWpa", "nCocmSoAxSkDkgdcMs5Zk8ooAhdcVJy", "ECoKWONdM8kaB8kCFSkDy1RcHCk7W6LJ", "W43cNmkvkYFdGbpdG8o9w2JcGCk4oeGVk8oBomoT", "yxr0ywnRzxjuCMfWCW", "qCkpWQtdL8km", "AxndCM9ZCW", "DgfNrgf0yq", "pCo7WRFdImkcuG", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBI9dt05uru5ul0jHz1bHBMvSl2jVDhrVBujNl3nLBeL0zw1elZlKUkRMJiNPKQ4Vy29TCg9Zzuj0BG", "W7ZcSgtcLCkhWQJcHu7dTxySsJpcKCoQBSkkWOPuhdmKB8oC", "WP3dVexcTL0fW4VcVIvL", "xSo8nmoLba", "vuhcI8kWWRe", "ug9Wtgf5zxiVvuLgCMfTzvnJCMvLBLDPDgHcB3r0B20Vq09ovevovc9vC2vYsw5MB01HAw5qyw5LBc9JB250zw50tM9Kzs90B3DLCK5VzguVC2TPBK5VzguVrgv0ywLStM9Kzs9UB3DvC2vcDg4", "r0FcImkOWQFdNa", "x21VDxnLuhjLC3nLza", "rKVcKmkzWQ7dIZeXWOnCWPLoW4qn", "tKjHDhrSzvbVC2L0Aw9UqML6", "suveseO", "C2nOzwr1Bgu", "qMfZzuL0zw0", "t2vFWQm", "W7FdQwBdL0K", "yM9YzgvYoJbWEdSGyM9YzgvYlxjHzgL1CZO4ChG7ig92zxjMBg93oMHPzgrLBJSGywXSB3CTDhjHBNnWyxjLBMn5oIb0CNvLoYbIywnRz3jVDw5KlwnVBg9YoIaJzMzM", "xe1lWRhcJJLnxSoBp2nyds4uWOTvASkjWRLypSkIWQ7dMWVdRwzEWRZcQePNWQyxWQyPWOpdN8kxWRezBXqVbgygW5ZdIHRdRmosymoZCNVcTW", "taukzehdHCop", "lu43brW", "x3LjWQDffSkH", "qtvdjmobWQhcKNO", "gCoYbCo1z8kN", "W7pcGaZdOmoPWRzcoq", "bmovfh/dP0m", "ic/dVmoAW6q", "e8oMeSo1FSkNkK3cSqzjdmo0", "DxbKyxrLrgf0yq", "nSorW6BdUmoJFqhdPdVcVa", "euldLSoZWPZdN3WqW4DlswW", "muOReq3dOq", "WQKrWQG", "jXFdUq", "W6tdPfxdHW", "WQ8iWQZcMcpdJCooWP0", "mNWWFdf8m3W0", "x2nSB3nLvg9Wtgf5zxi", "W5eakL0f", "EvNcVGRdNq", "W6tcLmkXlIpdQJlcM8o5bGNcGSkFmgG", "WR8la0NcQSoTW6Hx", "uKVcKa", "W7n1W6BdLSkQ", "rCoVWRS4W648m8kuWROmW71ZWQ4F", "WQ/dMxnuESkuW7FcHJJcGCkQpb1WfmoOBSo1FCkUeryzW7/dQCkiz8oWlCk0aMa", "vmobW5FdSqa", "Aw5ZDgfUDgLHDgu", "bwG1W43cTa", "44oz5P6u5Pw55P+ijea", "hmkqWPKJCatdT8ksqu0", "y0zOwKS", "WP/dMHi9", "6l+E57UT5Ps75yE7", "zgLZy29UBMvJDfrPBwu", "AhrTBa", "sM1hy3q", "WPadEmkV", "6iEF5yIY5yMO5ys16zM757Qy", "W4NcKqJcKmoZm8omW6OJkbmIW5xcVSo5W54utW", "FdTDlCo3", "FKBcPWddGqhdPG", "CMf0Aw8", "buFdPmoFWQq", "CLe6W6q8", "d8kDWOiHDItdTCksxuP8", "zddcISk/WPONxCkiWPm4WPfPv8o/yaS", "Aw5PDa", "WR/dSCkiW4dcOmkJ", "WPalzCk/CuVdJHLrEN8t", "sw5PDfbYzxnLDe1HCMnOsgvYB0fUzefYBxLZ", "W7irlvy5W64uWO/cVLagW5pdOgJcMG", "zhPbq1u", "zNjrtNO", "fSkkW7dcSH3dG1NdG2NdKNtdSZe", "u2vYDMvYq29UDhjVBgXLCG", "WRxdTI5k", "meJdQmo2WQC", "jSkuW7ldGa5+W6JcUCoIWRDOrfddLh5uW7S", "waiFCKq", "Bxi+W5iwd39UamksgIa", "WOeiWQZcUI/dLSoFWQBdQ8kn", "q8oNWOxdMW", "qwrervK", "WRaLWOLzWQqUAq", "jupcOuZdGXxdOmkbWPrRf8kvW7qYzr/dHmkEySoIW4xcNaztWR/dQSoyW7D+W4adCcz+CmkPkmoazW", "CJdcP8kWWOi", "kSo7WQ8", "AIhcJq", "hCorW6FdR8ogtWFdPIFcSe1d", "v29YBgrtAxrLugfUzwW", "BM90zxm", "af88W6dcGxW+vSkEz3Wfm2TmWRqlmCkwW6aw", "WR/dTfBcV2OjW4VcRq14dI8", "W5NdQuhdQ8oK", "CMvTB3zLsxrLBq", "Ahr0Chm6lY9ZzgSUzNPQAhLTEs5JB20", "W6RdQLxdL0PujalcL8kRja", "sCo3W5ddGcSm", "FJfdjSoJWQ/cLhHqrIVdNb1FhcPFW6hcP1ZdHmkSW5/cMmob", "W7xcNHVdPCoZWRW", "zv3cUGBdMYddTmkqWOC", "s2HQuhe", "f8k9lNbCkmkGhmkaW6pdRmkWW7RdIKWVjSkAd8kEFXtcUW", "WRmLWPT7WR4VBCkwcSkMzc7dImonW4JdGXJdRLJdLmoUWOm2", "AJ1gpmoGWRi", "aSkAW7FcJWJdJ1O", "refuqq", "nCknW6ZcObNdMutdQ3ldIfBdVZtdRSkVWP/dVmoAwCk+", "gCkEWROPua", "W5dcVhPZWOZcIq", "v29YBgrnyxbnC2DZ", "WPRdH8kFW5pcMW", "tx1dWRnv", "fYNdP8oHW4G", "W6ldPvpdKva", "Bg9Hza", "r8oPlmoeoYzo", "W5VcNSkKmsJdIW7cLSo8dc7cNG", "W7RdOeldNSoFW63cMSosWQxdUWfcWRXKbSoWlK4", "W6ilWQmabW", "W5ZdTvldVCoEW7ZcPSoyWQC", "WONdSKhcM38zW4dcUg9wbIzXk2xcKmkRWOKlW4xdTSkVWOdcGbjfW5tdIraxW5bppSkGW57dRwC7zvOxW5TIW50TW4RdVvmofsVcUdTpFI8HWQZcT8oSm8oweSkqDgRdGYxdNCouW6xcUmkYlXJcSqCcW6WEgCo1avTHW6DD", "W4XQW63dLSkWW4OhWOdcMSo5W4lcOdLcW6K9", "WO7dSmkDW4BcU8kAW6f2W7C", "WPKli0JcUmo3W6PBr8kEE8kKWORdNmok", "nwW5W4hcUq", "WQhcVujcAG", "ia/dNmoqW6iav8oAdvi", "z2v0vgfIBgvoyw1LqNLlzxK", "aSkEWPW", "iSkfW6xdGXzuW6ZcVmo7", "WP8raW", "wejUsgu", "uGuqzq", "WPCrbfZcQmoOW65awG", "yxjTEuLK", "vuhcKCk/WQRdIZiW", "keeSaG", "W6/cVvLxWOlcHZlcOmk1u8klA2JdUx/cP8k0q3hdIWukAbpcKSkHW6KdgrBdSmo8eansqmouWRhcH2W1", "lwHLBhbLCI1LEhqTB3b0Aw9U", "W53dMvBdJ8ob", "5PA56iIF5lQj5As65Rs75yQO", "wN9BWQ9ghW", "EtdcU3qpWQvTWOhcS8kYnq", "ueXbwuLorW", "AgfUzgXLvg91y2HLC0vUza", "C3rYAw5N", "qtvdjSoqWONcSwLuDW3dUcKzkGjAW4RcVgddOCktWOBdMSkxtCoVdJFcN8oNWPZcIwZcISolW50zx8k+cvnYWQpdSwD6c8oTW6BdOCkEW6/cISkcW5pcOmkoFSoPWQVdTtdcQ8oxW75LW5S7WRhdRxK2", "rxzLBNrdzw50zxi", "j2pcGmkNWQVdLv4fW4Xluhr9WQW", "FGWsEuNdHColCr9wWQ00ybxdNHRcN8kLWQO+ha", "W53dSuJdM8oeW6xcN8oyWR/dRIDzWPTQ", "lua1", "BM9Kztm", "C8kiWRm", "W5VdQ8kEB15lt2S", "C3rHDgu", "W4ZdUepdNmoaW5ZcU8oBWQZdIHzvWO4", "lSoaW7ddUSo/sZ3dOcpcQuzwgSkAW7JdJmkYFG", "revmrvrfx0jvsuXesu5h", "u31CWOLhfmkfWQTSWPFcTSo9W5rd", "cCkEW7BcQb/dGMxdP23dIwFdPa", "qxjTEuLK", "fgObpJm", "bCkmW6BdKbfwW7VcOmojWR13ELtdKW", "nCkqW7pcIH3dK1ldSdldS1ZdLIJdU8kWWPxdNSozuSkPWRGeWPVcVmkOpIpdUmofWQ3dKfpcPmocevxcS1VdGSkXi0TNWQJcP8ohW7BdTuVcJ1zlW6KHW7afW55XWRDBWPSUgSoIW6fGWOZcPSkPxw/dS8oTpGxcTCkwq8kDymk7mCo7a1Xua8o1WOlcJSkL", "qelcImkZWRxdSte1WP9lWRnEW6mo", "tmkPW7BcSmkXWPfRiLy", "WPpdVCkkW7lcOa", "wmoIW7VdPGy", "WPH3WOOVaJFdSZW", "W4ZcVvTV", "mcWW", "buBdHSoZWOVdKvudW7zbtNDR", "y0LAA24", "WOyyECk/u17dHqPC", "W5dcOL1YWOZcKa", "y2XLyxjuAw1LB3v0", "oxaKW4VcVCkK", "AxnuzwfTtgvNzw5Ku2vYDMvY", "vvjm", "WQZcJ2nduCodW6pdNgtdM8o2yG", "iWVdNCoqW5iaC8ogcLSkWPZcMSoo", "Eq07Fhi", "AxSLW6iC", "B3bHy2L0Eq", "yxv0B1jLBg9NAw4", "pSoeaSoaqW", "ugTJCZC", "WPRdShxcUfK", "rgVcSXFdNqJdSmkGWO9HsmktW6q+tW/dL8ovDmo/WQ3cIqPhWRJdPW", "tg9NAw5gBg93qxjNCW", "BCofWQ3dRa", "W5VdUftdMSooW4NcPSodWQJdQa8", "i2rIzwfMzq", "rgf0yunLBNrLCG", "zI3cJG", "uCkxWRNdJCkhcSkeW48E", "ug9Wtgf5zxiVqwr2zw50DxjLqMf0DgXLv2LUugfUzwWVtM9KztiVvhLWztiVyNv0Dg9Ux2jHy2S", "bmk9ja", "y3K5W6uydhTOd8kdeq", "l8oNWRZdUCk5", "wM5cWR8", "vCosWQVdGCk+", "W7tdTvtcU24fW5FdPYvVhMD3oN/cMSkHWQa", "vhVcJ8k/WOa", "BKdcOrpdHqxdRa", "x3LjWQ9Eh8kfWQTSWPFcTSo9W5rd", "g8oxd2ldP1LYWQGP", "mMu2W4VcVmkVmCkae0tdKLpcVCod", "vmo5WRW5W4SU", "ANLiELG", "vvzotLi", "WQaWWPFdVG", "twFcJ8k3WRa", "nxi1W4pcPSkVjmkEgvNdKK/cVq", "5ywZ5lQo5y+J6kkl5yQP5OMl", "WQq6WOFdPmkS", "DgLSzuLUzM8", "tLDVCMXKtwfWvgLSzunVBMzPz1v0AwXZ", "tSoMW5RdHtaeW79fW4u+W4JcPCo4W7G", "BNvT", "twvJAgftDgf0zq", "W5JcT11pWORcKZi", "W7FdPftdNvz8or4", "uNPDWQDDhW", "W5udfGxcQmkZWRS", "t8kkWRJdHW", "vSoJmW", "u2vSzKzPz2H0wM9Uzq", "a1FdHG", "W67cQKZcTSk2", "vg9WD2fYsgvSCgvYq3rYBa", "C2HVCNrJDxrZ", "W47cQgNcImkd", "Fdvo", "W5VdO8kpyKzk", "twyCW5yO", "rb1Ao8oD", "WPO5WPDsWOa", "wLzvvMu", "jbZdPCoFWOidfSkRW4FdPCo+gWK", "xSoYWPddMCkcqSkuFSkbtKVcT8k7W6LTW53cISo6", "qCo1WR0ZW5uUkq", "WPldQSkVW5ZcOmk6", "W6xcM0rHWPy", "q1niDw50q29UDhjVBgXLCG", "W5yaWRurdmkpWPGObLjQh2RdKW", "ud3cKCkfWRmYF8kiWRmrWOfvvmoyqb8X", "psVdO8o6", "jSkuW77dIbi", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9izxjVuMvJCNvPDfbVChvWtMv3l0HfqurfuI9dte9trq", "kSojdh/dQunOWR0", "aWVdL8oCW4GayCobdeClWOFcGmoq", "s1zlvg9VBhm", "BwLUzv9JyxzLmZC", "W5ZcN1W", "WPJcI3fBtSo2W4ldUg3dN8o9qr5If8oknSkTmCk/tuXaWQNcOW", "WOCXWPRdOmkPD8ogWRmAWPWltaJdPSkBWQ7cQSoyWR3cOmoT", "W7uwWRu", "z3y4W7irk2S", "W57cSghcN8kn", "vvnfx0nbu1rmrv9gqunf", "x2vTAxq", "WQVdLH01fSoaW6H5W5jXW73dUmkIxCkzW4xcHmkaW6JcRmk6wCo1aCkv", "jbhdSG", "CMfUzg9Tug9PBNq", "nSo4WR3dNSktqX0cBMHq", "DMfLs2m", "uMLNuLm", "AwzYyw1L", "ywrKtw9UC3rLCKrLzMvUzgvYtwfYy2HeyxrH", "fSoQW7VdS8oD", "CMvKDwnL", "uCotbCoEgq", "WPfEWOO7pa", "WPJdGc1upgSQW40NWR7cJY0uw3HTW4ldO8oVW7e", "sSk1W7BcUq", "rr7cRmk+WQi", "WRZdGGKWnmotW4LrW4zSW5hdKSkNtmka", "WPKHWP1BWRKbCSkxemkXztBdL8oHW5q", "a1quW6BcHMa", "WPGaWQZcIGZdHCodWOhdSa", "DxbKyxrLtgf5B3v0", "W6VdQLtdGgTX", "WPZdTmkmW5hcOCkPW41SW7xdMSox", "W6DGW77dVmk2W6uhWOVcR8opW7ZcTt1i", "WPuSWQDAWRS", "WPtdGbS", "lua2hW3dOmkoW6O", "W5hdQCksCe4", "W57cLq7cOSoI", "WRRdSIrs", "tLDVCMXKtwfWtwfYy2HdB250CM9SBgvY", "W6ZdVeNdJmooW53cMW", "qvzbrML4zwrcDwLSAwrUz1bVCa", "q2fUDMfZl05xB3jSze1HCc9ov29YBgrnyxbdB250ywLUzxiVBM9TywXmyxLLCI91As9ov29YBgruAwXLug9WDxaVyNrUtM9KzxmVyNrUmq", "B2zM", "y3jLyxrLrwXLBwvUDa", "AuzeuuS", "v8o1WQWP", "qwLK", "fSorW6q", "q1nFvevbtv9srufewv9dsefor0u", "WRNcMMLBEq", "eWhdGCocW4Cx", "DvvhBKC", "wSoMW47dGsOfW6HeW4a3W6u", "d8ojW6tdVG", "WO4+WPhdOSkO", "CMvTB3zLqxr0ywnRqxjTEq", "WQRdLG4ViCoMW7DxW4bOW4ZdNCkWqG", "5BEY5ywZ6zET6iEQ5yQO6yEn6l+E", "tCoLWO3dJmku", "WPWLWP1xWQi", "WO4DWRlcVYhdL8ooWQxdTSkdqgGn", "W5RcNbpcO8oykSocW6C7oqqDW7pcJCoUW5uFwCkUiMibWRJdGtVcQq", "W4VdPetdLu5ynX7cN8k6jmkK", "r2v0sxrLBvbHBMvS", "B25dBgLJAW", "W6NdPepdKrm6bqFcL8kPiSk+WOVcHCoNW4K", "mxWYFdb8nhW1Fdm", "WPRcGwb7FCoBW7tdJspdP8orqW13g8oSf8kSk8kOdwnJWOlcHCo6gmoayCodnMXjW5ajW6ldQHGOF8ogW7tcPmoNW7dcNmkQsx/dJSk2j0dcKtpcQSomW47dI2nsrgHQFSoQW6VcKHRdRW", "C3vIC3rY", "mgeJW5BcK8k+fCkth18", "WQVdUelcO3edW44", "DZZcK8kxWOK", "yuHsmgnittzmEtLWyJjSDMfxBhzmBu51tdj0A2zbpt0", "Ahr0Chm6lY9OnwTHBY5ZAgfUmdmYnY5JB20", "u3rHCNreywLSEvrHC2ThDwLKzq", "W5lcRg3cKG", "s8o5WO7dHCkZ", "u0LlCeC", "WR0fWPXCWP0", "WPBdGWGWk8o6", "uCkIW6VcUCkNWOXJnLS", "tLbwCvG", "y29UDgvUDerVy3vTzw50", "DhLWzq", "f8oXa8oezCkXbLxcVqrciCoVveRcJW", "h24JW5BcS8kKaSkx", "pSodgmoMzSkMiKdcPcHddmo0u0VcLX7dUN4", "W6RdPepdKq", "C8kTW7tcV8k8WQX2pKXBWO7cGY9AWPP3WP/dPCoOW74YWPO", "W5RdRmkzz05b", "rSoVWQODW5W7", "B3rOzxjeyxrH", "WRNdUrfti3SgW4u5WRlcMISwufa", "5Bsl5y2L5RE05A6L5ysH5Pgz5l+N", "aCoAW7lcNq", "eCkjW7tdHXHxW6FcQmoPWQz/CXFcNxnnW7ZdIbtdHrdcJSkIW78JW7pcKMHLdgtcTI4", "imo7b8oyA8k7cLpdUYvUa8o0vuJcNJ/dVMuUySoQW5eHW5FdShnUW5JcTahdLCoUW4RcK8ktWP0BiMhdJeiplwq+WRr4Fmkl", "bCkpW7FdQbzaW6ZcV8kLWODtuuNdNh9DW5VdHeVdJbRcH8oKW5jmW5NcR15koIFcKsTBa2ivWOtcKW3cNCkSW7bSDmosW7xcSSoktcP0vJnouXlcUCog5lIO5O606zcfvSohemoIgaGzcSkE", "BwLU", "z2v0tw9KAwzPzxjtDgf0zq", "v29YBgrnyxbvsvDYyxbWzxiVqwj5C3nxB3jSzfvjl1jPz2H0qM90Dg9Tl2j0BK1HAwW", "WQ3dQ8kmW7JcRSk0W6T2WRpdO8o6aduZbr/cRCopBYStWQZdN8oXWOi2zmkkCCobWR1vASkmCJ7cRCo1r8o6WPZdUgpdQmkmWRhdSgWSsmk9aCoJaCkLW5fuFIJKUyBMJQ7PKQH6imkFj8o9W5VcVCkV", "avaxW6q", "uSo/WRWvW5eUn8kfWRCqW4bEWRmUxKSLW7RcNSoB", "WRT9WPqhmWZdGhZdG8o+f0CAwK1mw1FdILvkWO/cSCkQpWrSA8kThw7dJqzszvJdKd4+W6NcOSkarI/cSYX1wtS2jXmZW5NdLvzhjIRcH8koWR/dVaTaWPqwW7aIWO7cJqddPqJcUu/dP1auExyrkWhcNSkYWRJdQqVcLKBdISkjWQRdJmo3WQRcR8k3WPi", "WQSmWQJcUIJdJCowWOddGmkoB2OlW5u", "5A6P5yAf5y2K6kcV5yUE5OMY6kY3576J5l6q6kwu55Um546N5PYY6kYd57285BMo5lQC6ywQ5PAj55Us5BYQ5RUr5OUe776D5PIS5zkX57IC57U277YB", "W5ZdTuJdMW", "CCo/WQ41W5mVp8ks", "ywXSAwfUy2vcB3nZ", "W4hdPuS", "5A2S5yMC54ME", "y2XPy2S", "BSkJW7BcKmk1WOzNiXfVWQdcOb5uWPLMWQpdPCoQW7D4WQVcLSolFLmMp8o2WRWnaSo9fmk+WPZcUdXLsqFdPW7dJCk0WRtdVwbPCCk7W5/dS3ldLmk1iq", "z2v0q29TCg9Uzw50", "W7ddV0JdVmohW6FcOCosWORdQGHCWO1YdmoV", "cCkwW7dcSG", "sw50zxjZzwn0Aw9U", "e8o4hSo3yq", "smkqWQtdIG", "WPmsyG", "cmkyWPG2Fa/dOmksE1DHha", "hmorW7NdVG", "W5pcT0D8WPFcLG", "tLDVCMXKtwfWtwfYy2HnB2rLBa", "rhVcTXldNahdPSkqWQ92BSon", "gmkPmSko", "zYNcSNq7WR90WQlcPSkLjmoq", "5O++5OQN6icO55Io5P6955w1", "Bw9KzwW", "Bg9N", "W6/cHblcT8oG", "cf8uW7hcPG", "zSoZWQuGW5eUhSkfWQOhW6D1WROj", "CgfKzgLUzW", "WOCtpNBcHa", "WQldRJjd", "vKrWBMy", "oKOXnrBdPmkrW6SwaZFdL2VcImkGWRNdHSkNWOaSqCkl", "vg9KyxLgCMvL", "WRCyE8kYtW", "qvjnwv9iruXqx0fmta", "W7zKW6BdISk7W78", "jgu9W43cPmkV", "W6dcOXpcO8oRi8oUW6a8ndeaW5ZcISo7", "CMvTB3zLq2HPBgq", "Dw5KzwzPBMvK", "imkqWOKNCq", "vgfIBgvoyw1L", "Aw50zxj2ywXjza", "aSoXe8oHACkN", "W7hcNSkXnsFdRctcMW", "mwuKW6hcVCkNeCkDeLhdMvxcGmouyNdcNmo0zCkKhSkN", "tuRcTbldRa", "bSkGW7FcQrFdJ1K", "WPFdPs9Ffg4tW40", "me43frhdMSkvW6umaW", "kaFdNq", "z2v0vgfIBgvhCM91Ca", "vxnPBMDdyxn0BgvgywnL", "5Oc35AET6l2z57Mj5Pwm5yEc", "WPepySkivepdKb57AL8vW4/cQq", "C2vYDMvYsw5MB1rVA2vU", "y3bhD3i", "WP3dLHOWkSoXW6TmW5XSW73dJSk3ua", "WOP+WOGkibJdNh0", "BCk4W6FcQmkX", "W6ZdR1BdLG", "yNvrBM4", "BuZcPIddHGNdPCklWOH3vSkl", "WQ3cI2rXBSodW7ZdML7dK8oSya", "DwX7Cg9ZAxrPB246zML4zwq7ihOTAw5KzxG6mtaWmda7igjVCMrLCJOXChGGC29SAwqGiZi1nJnLyJSGBgLZDc1ZDhLSztPUB25LoYbTyxjNAw46nhb4idbWEdSGCgfKzgLUzZO0ChGGmhb4oYbIywnRz3jVDw5KlwnVBg9YoImXztqWywy7igjVCMrLCI1YywrPDxm6nNb4oYb3Awr0AdOXntbWEdSGyM94lxnOywrVDZOGmca0ChGGmtjWEcbYz2jHkdaSmcWWldaUmJuPo31SAxTTyxjNAw46mhb4idjWEdSGCgfKzgLUzZOYChGGmtjWEdSGDxnLCI1ZzwXLy3q6BM9UztSGy29SB3i6i2m3zdjMztSGzM9UDc1ZAxPLoJeZChG7ihrYyw5ZAxrPB246igfSBcaWlJjZo30GBgK6Ag92zxj7y3vYC29YoNbVAw50zxi7igjHy2TNCM91BMqTy29SB3i6i2rIzwfMztSGy29SB3i6iZfLm2e4ytT9", "bvddNCoNWPW", "W5bQW7RdS8k/W7uoWP3dGSoJW7VcKIjmW6ORWPrms8opWQlcJ2JdPSo3W7BcLZDzW5rAhmozWRtdUSkmW79pWQtcVchdUCoTcXmKzmkiW5Osj098zg/dJmk1imkrb2DAWQvtW7nNW4CvWPxdPSkpDa", "rSkzW6xdVH/cMGC", "iHxdSSokWPmlaCo/WPJcPmkJw2LkW5azEJW", "WOqahflcQSoNW49xrCk+DG", "WP7dSCkoW4BcQSkJW7PtW7pdHmoFiGOZgdNcJmodBJ0LWQFcGSoeWQGkFCkGw8oWW74", "whbgWQvBp8kJWRXTWPpcOa", "W57cSg3cNCkuWO/cIf/dGMe5rc0", "CMvTB3zLtwvJAgfbC3nLBwjSzurHDge", "y2fUtwfYy2G", "wK9lzMm", "qGnfoSoPWQtcQ3PfsHZdRZHEjYbvW5FcOfRdHmkKW5pcHa", "y3rYBf8", "of4iW63cLKuEuSkVAgShbwz2WO4xpq", "q2fUrMLNAhq", "C3rYAwTLqMfJAW", "c1GjW7xcK2yCr8kIB3eA", "ug52t2m", "y2fWC2XVy2S", "pSovbhFdVeHgWRK+WPyhqCoUgCoq", "WOX3WPacjHddIa", "u3LrCw0", "WP/dJI1vga", "zw50zxi", "W4hdSCkpAKviq35/", "ug9Wtgf5zxiVvhjLyxn1CMvnyxbdAg9VC2vcB3nZugfUzwWVtMv3ifnJCM9SBfzPzxCVDMLLDY9JB250zw50l2L0zw1JzwXSwZaSmv0VyNv5qNv0Dg9U", "Dg9W", "EdTnl8oPWQxcSNnhyHJdNc9cbsXq", "AgvPz2H0", "Bgv2zwW", "W7C7WQKRdq", "W7bPW6VdI8k4W6mzWOi", "nCoXWRW", "ChjLzMfIv29YBgrvsvjHzgfYrw5LBxK", "C3bHBG", "WOVcNh1ovCog", "WPSeca", "W7KelLKCW64b", "WRe6WP8", "W40ooW", "Cg9ZtgLZDa", "z2v0q2HPBgrcEu5HBwu", "W4tdRmkoAKLgrNfYW6u", "5OIy5PAx5QIH5BYp", "BwHfA2e", "jHRdHCouW4uovmob", "qaBcOCkMWR4wqmk4WRi/WQL9yCotAICdWQ04oa", "Aw5UzxjizwLNAhq", "WPWgWQZcTshdNCoFWPBcRCkIAe0uW5hdVxFdImkwx8kaWR7dN2pdHHBcS8o+W5NcKcPmaKyoWQGXW74mD8olWQtcLmovWPhdVmktWPlcIdi7s8orW5FcS8oYWOBcMstdJwJcTqXDssfMcLCZvgiSW4ZdR8oJrmoggSkSW4v9WOuWpvdcPSoVfx1Ct3y1WPGzemkkWQpdJx53WRRcJvdcUq", "vSoZWRWPW7qLpmkp", "wKBcOI/dIb3dSmkwW4LhCCk5W7CMBqJdRSotzCoUWO7cHKzLWPpdJmkHW4jfW7PpwML0sCkMAmopEbJcOGlcQ8ohbSkXW4y3WR9EWPRcOmkNuCogWOpdJSkgW5hcNvK7W5afyCkpsf7dRI/dRXddTmoOWOmnW7lcPSkGW7VdMmoPW4z/a2ZcHmkiW5f6WPhcGmkFawb1nJRdMSotimkb", "z2v0vgv4DfDPDgHqyxjHCW", "W7VcVtG", "W6pdTvddMSoh", "WQRdJmkSW7ZcOa", "WONdNX0TiSo7W4Lt", "oKOXiHJdQ8knW6e8bY3dGMdcN8kQWRu", "WQuhWRJcNdJdQ8oC", "l0OOgq/dRa", "zh4PW7Oxa2jK", "pCo7WR3dJmkdwZ4", "cSoFf1VdHa", "WRxdKGu2mCoG", "uNPit3u", "tLDVCMXKtwfWq29YzujPEG", "W6FcTmkRlai", "5Psq5lIh6ksG5P+i5Aw36lA9", "Bw92zunPDhK", "WQPxWRC", "A3fYDe0", "vxbKyxrLvgLSzuLUzM8", "yMf0DgXLtwvJAgfeyxrH", "W5VcT096WPBcKIm", "WP8/FCkQva", "W7pcI2FcJSkkWQlcQ0RdL0y7tc3cHG", "W5BcNCkVmsFdTHJcKmoCbJpcMCkgoMO1lmo4", "uM1Yrxq", "x2rIBgnSAwnR", "nmo/WQNdJSkEFIqnzq", "Cg93zxjFBMv3", "gCkUoxjagCkygmkr", "WP/dKG8TcCo1W4LDW5T1W7BdMW", "ELVcTXddJbddMCknWPvM", "qNrUrMfZDef0DgfJAZm", "W7yjWQOmhq", "W7pdP8k/suC", "wCk+W6pcUCk6", "yxnZAwDU", "Aw5JBhvKzxm", "zgLZCgf0y2HfDMvUDa", "h8orW6ddUG", "C2v0", "g8kHkh1blSkk", "afFdLmoZWP3dLKq", "WQFcH2nux8onW7/dI37dNCo0ArPK", "FKBcGrFdMW3dU8kd", "BwfW", "zgf0yuLUzM8", "dLCCWRm", "y0FcPGBdMXldTmkiWQ92", "tXirDf3dImonsZfmWRi", "dv4EW7G", "zxzLBNrnyw5Hz2vY", "W4SRWQmuhmkhWRe5pvK", "W6RcOub1WOtcVtBcOCoUAmkbx2xdVKK", "h8okfxxdOeHLWRW", "BZdcImkxWPC", "AxnnB2jPBgu", "gmovdh/dQ0G", "WRpdTWOdma", "D2vI", "zSkfW7lcUmk2", "pSowbwtdM0H/WQWLWPSiwmoHeCoAEW", "x2XVz2LU", "pmkEWPSoFbJdPSkfhgTglMCVuCk5WR3dNhvjsmogAcJcUYGkW6dcG8k3W5OOWOCwWRhdTN5Xs8odW6VdMvKYWOSWsSkes1ZcJ3/cL8kwWPWsA8kjW7pdQ8k/D8oeWQjfumkIWPxdQ1LAW5zdWRrnW6NcG8kyDwPjwJ/cLvdcNuddVCkCpSo4oNBdMCk0ymosdhVcSI7dKHvNW5NdIeFdJ8kphG3dLmkh", "W47dO0pdKCop", "W7lcTMb2WQK", "W4qbWQivjq", "iwe7W4FcNSkLaSkz", "mxWYFdr8mhWZ", "W4apWQmlhCkVWQ04b1G", "ESkYWQRdVCki", "uvZcIW", "y2fSBgjHy2S", "fmkFW7JdMmozeCoCW5vtC8oWW5ZcOa", "WR4mWQ/cLJxdLSozWOe", "WOu6WOBdL8ks", "feFdGCo6", "WR3dUfFcTMSmW5e", "t8o5W4VdHYWeW5G", "qY1odCo3", "xhLBWOnCh8k4WRXTWPpcKCo2W6LE", "WR7dUexcLhenW5xcPs5Ybd5rjeJcM8kNWQigW5hdP8kr", "W5nGW7JdICk7W74MWRZcUCoFW5/cSq", "5BU66ycG6lwe5RQq6k6+5PA9", "57g757UA6zAt6k2q77+s6k275OIG5yMh5yUA5Psg", "W7ZdPmkqzG", "W5JcS0r+", "gSofW6ddTmozsXNdQIJcSe0", "W6DGW77dSSkXW6GcWONcHmotW4dcHYrmW7mR", "q2fUDMfZl05xB3jSze1HCa", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrnyxbbC3nLBwjSEuvUzw15q29TCg9Uzw50lZjUzf9Iz18Zl05LDYbmyxLVDxqVyxr0ywnRqNrU", "Bg9NAw4", "yM9KEq", "WRJdR1ZcRLCK", "gCoeW7RdLCoKsHa", "EMn2Eue", "zMLNAhrPBMDnB2rL", "wM5cWR9d", "CgXHDgzVCM0", "omoTWR7dG8ks", "r0vux1rfuLjjve9swv9jtKzp", "aY/dN8o4W7q", "rSo4WONdM8kMx8koAmkeBvpcUG", "zgf5CW", "jSkjW7pdGq", "zxnJyxbL", "WQ3dVfm", "s8o0W7/dHY8", "z8oEWQSyW6q", "y3rYBeTLEq", "z25UCfq", "WRyLWRlcIs4", "vxKRW7WC", "W7qCWP8Nea", "mSkfW7pdTWnyW73cUmo5", "wmkTW7xcQmkvWOT2mf1r", "W60ooe0zWQ8yWPpcTvC", "v8kIW7xcQmk1WPf2of9oWOW", "WOz+WO8apq", "z2fTzq", "zZZcO1aQWR5RWR3cOSk0kmowWPhdQ8oVW4hcT0OzFSkJzY8", "bM8GW67cS8kZbmkau2hdVMFcU8oBth3cU8o3B8kZvmkkWPCds8kmr8kcECoYtSkpoXBcQI5UDmoyWPpdHgtcS8kSWRX1WQVcMdtdVb7dRLhdGfhdSvVdK8ohlmk4W5hdIaFdKmkpo8o9WQtcUCoQW6bhww3cIxHsCrWgWQ3dGCkFW7uJ", "x29Uu2HVDW", "W4VdUuFdK8oeW68", "tLDVCMXKtwfWtwfYy2HdB21TB24", "ug9Wtgf5zxiVv29YBgrcB3nZrgv0ywLSugfUzwWVmM5Kx2jNxZmVyxr0ywnRqNrU", "CCklWQtdK8k9bmkDW5O", "BwLUzv9JyxzLntK", "uwnZrvi", "W6OjWQmllCkdWQSHdq", "pSo7WQ/dRSkzwJOezhLwswz2W6qcfGeqjmkOtW", "mSkygevhiSkn", "W7nOW4lcSCo1l8oJWOipWQiMsW", "AxntAg93qwXSAwfUy2vizwXW", "Bvr6AK0", "u3LoWQjvca", "W7hcIXBdUCoS", "WQNcGx5dFColW7/dMN4", "mCkjW7tdLbznW6RcPq", "nmogdhNdU0HgWQSRWRCaCa", "ug9Wtgf5zxiVqwn0AxzPDhLjDgvTtNvTu2vSzwn0l05LDYbmyxLVDxrBmcWXxs9ozxCGtM9Kzs9IDxLcDxr0B24", "WPZdT8kpW53cQmkJ", "WR/dUtzdiM4eW5G2WPhcGJO", "BHBcNf8V", "W7FcLHtcLCod", "Dg9WD2fYx2fWCf9Zzxj2zxjuB2TLBG", "AuhcSXhdQGVdSCkbWQDM", "W7CyWRimbG", "vfDAA3K", "baldLmouW4Gqqq", "wt/cUmkgWOi", "fCk8lN9m", "BM9Kzq", "vuLdyw52yxmVug9Wtgf5zxiVv29YBgrtAxrLugfUzwXozxC", "eGFdLq", "6Ak66k2Y576q6zUd562155o5", "qM90Dg9Tl05LDYbmyxLVDxqVChjLC2v0tgLZDc8", "yxbWzw5Kq2HPBgq", "hmkdWOq2CHxdUSkhvG", "bSo6WRRdMCkx", "tG/cGKC6", "aCkqWPKHDtldT8kwr1S", "WOySax/cGW", "W41KW6pdKCklW4u8WP3cJmogW4lcSsicW4KdWRTks8o/WRddPhtdU8kBWOtdUYP+W6D3jSopW7tdNmkzW7rdW7NcIJtdPmoopHmU", "W5BdOmkBAKvkEMPPW6XDWQOeW5C", "tg9JywXnyw5Hz2vY", "y2HPBgrYzw5dB3vUDa", "e8o4hSoXzmk2nW", "qCo+nG", "z2v0u3rHDhvZ", "A2v5CW", "WQVcNwnsCCoaW73dHLpdHSoXAbO", "xCkGW6pcVCkMWRzSjvTiWP/cHWa", "hmo7ea", "W6NcUdpcK8ogcW", "y2XVC2u", "C2v0qNv0Dg9U", "zcVcUguWWR59WP/cOG", "ywrKuhjLzMfI", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9WCMvMywjxB3jSzfvjuMfKyxjfBMvTEs8YBMrFyMDFmY9IDg5oB2rLl0j0BG", "yxDzEg0", "W5xdOmkjsf1eEx1NW69xWRy5W4O", "W67cLX/dQq", "tLDVCMXKtwfWtKvUzw15", "AmoZW4ZdKIetW79fW4q+", "ywrKq2HPBgq", "yNrUmG", "W7KekvqMW6WqWRNcUuG", "rSkgWQ3dHCkCaCkz", "s8o3W53dJWWaW4viW4u+W7pcN8o3W7RdP8ov", "WQCPWPvD", "x21HCMnO", "jXFdS8oyWOiAbCoZWOFcOa", "b1qBW6xcL3O", "W57cP110WRhcMZVcVCo9BCkk", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgruB3DLCLbVChvWl3DPzgDLDe5VzguVmM5Kx2jNxZmVzw5LBxLoB2rLl2j0BLn1C3rHAw5bDhrHy2S", "ugfIuM9VBvnOB3beyxrHvxbKyxrL", "WQygD8kYwvJdTrrFFa", "WQZcMvnDxW", "C3rVCfbYB3bHz2f0Aw9U", "CW8qD3ZdHmoDDZzmWRa2ra3dMq4", "cSklW6VcOW7dRLBdTNW", "rCo5WO7dKmkvzmkPqmkL", "xmoZW4RdPYSmW5TdW4C+W6/cV8oTW57dRmoKySk6FJHlC00", "W6xcPMjvWOi", "oSoYWRldJSkD", "BuL6zg8", "iCkpW7ldHX8", "WPqdCCktDW", "Bgf1BMnO", "W5hdKCkxD2u", "sXf+f8osWO/cTfDXwdtdKX15", "WP/cNxvfuSodW7ZdMG", "W53dO8kB", "tL7cKmk1WQ3dGa", "WPyAWPxcSXu", "W5/cS2ZcHq", "vuLdyw52yxmVug9Wtgf5zxiVtKjHDhrSzu1HAw4VDwKVqMf0DgXLugfUzwW", "sfDgAM0", "WQ7cGuryACobW7NdVg3dNmo7ybm", "Dgv4Da", "CMvWBgfJzq", "W4xcGqhdJ8oWWR1ul8kztmoBia3cQxX9", "uSoVmCozpcrF", "mtaXmdy0", "zgjSy2XPy2S", "Aw5Uzxjive1m", "WQVcKL/dSmkUWQ4unSoU", "W4tdIwq", "WRRcNh8", "BedcTqVdNq3dU8kdWQT9xmkA", "W6JcLuVcNCkiWRdcH1JcIemGvq3cLmoqzmkwW5fXhc0KBSo6W5vtW58UWRJcUtFdHSktfmkJW6Pp", "WPZdPSktW4hcUW", "A0ruwuq", "W61GW6tdIG", "aaVdHCo2W4KiqCoCdviaWOhcH8oGxedcMtBdTaHAW6ao", "h8ovW7ldSSoLsYxdTYdcQuzwpCku", "5A2M5yAl5BgP6ksk55Mk5B6b5yMQ6k+057605BMB6z636kEn6yAI5Pw455MK5B2d776b56cE6k+z57Ih57Qx77Y9", "WP7cGxrwzCoKW6pdMMK", "z2v0vg91y2HcEvHz", "tg9NAw5gBg93", "mCkfW6hdHqjvW70", "EMiOW70qatSWxG", "z2v0twfWug9ZqNLqB3njza", "sSoIWO7dLSktrCksyW", "jSkiW6JdK0u", "ywrKrxzLBNrmAxn0zw5LCG", "h34jitO", "qM90Dg9Tl05LDYbmyxLVDxqVyNrUmq", "umoJoSoe", "h0mvW7xcNxWguSkp", "uCkxWRNdJCkhcG", "y29SB3i", "5As65A6D5Awh5yw15Rs75yQO", "CMvPBMzVCMnLvgHYB25L", "W4nnW4VdSCkzW4K0WQ7cV8o7W6VcIXv8W5ihWOP8ySo4WRBdQHq", "hSoiW6a", "bmkfWOyU", "qwn0AxzPDhL3B3jSzfbVD2vYug9Wufi", "AgfUzgXLsw1WB3j0", "y29SCW", "twzXr2y", "mCo5gmoHzmk2", "uujgqLG", "5BEY5BYa5zcV", "C2LSsfa", "W5NcUw7cNCktWQRcKG", "y3bUrgLZywjSzq", "BgfZDeLK", "pKmSfrldJmkxW6eweIO", "z2v0rM9YBwf0Aw9UvJjcEuLUzgv4", "EePiu2K", "C3rHDgvZ", "W5pcS0D8WQJcMY4", "WPmAWRNcJqhdISotWONdHmkfqgyd", "sx1bWQjFf8kyWRz1WOlcKmoMW5rd", "D2LKDgG", "x8oJWPldNmkjs8kuA8kq", "mx0oorW", "eXZdKmowW4m", "AhH0rw8", "W6jdW7VdNSkk", "ug9Wtgf5zxiVtKjHDhrSzu1HAw4VDwKVqMf0DgXLugfUzwWVvg9Wl2j1DhrVBG", "vxbKyxrLuhjLC2v0qNrUCW", "ruFcLSk5WQhdMJmM", "xgZcHfuuWPvxWQRcHmkfaSoH", "WPOxWObkWR0MumkyfmkaztFdI8oRW4JdPr7dSW", "W7RcMmkT", "zg9szxnLDeDHBwu", "A0DKBvy", "mtfrs0X6AKK", "df0FW6dcGfWwt8kpAwOA", "cfqoW4pcNx0rrSkdAhGThxzhWPKtcSkqW6Hq", "zML4zwq", "5B+R6ycF5Ps75yE75z+65zYW", "W5hcUwBcM8ksWQ4", "DwT3v3i", "W74nivSc", "u2vwsfK", "W47dOfBdMSofW6W", "sKHYDwW", "5Ash5lU95yE66zszoG", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9eAw1nAw5Lrgv0ywLSvMLLDY9cDg4", "zNfMyxu", "DCkmWRNdImknpSkeW50cx8kKW47dT3i", "W5/dOmkEA0PMtG", "W7n8W7K", "y2HHCKnVzgvbDa", "yIfh", "zM9YrwfJAa", "xSoYWPddMCkcqSkuFSkb", "W6rGW6ZdNSkRW6aF", "yMfZzty0rw5JB2rL", "W5WtjueTW6mbWPC", "A3mUW5qpb2f1iSkEbYdcRCkcW5JcIW", "ixmBW7xcHMqAB8kfyNOc", "uxjJBwC", "feddL8oHWO3dJNWyW41q", "mH3dOG", "smoPjq", "BwfYy2HtDgf0zq", "jSk/W7pdIXXCW6C", "evVdLG", "bHZdNmomW5u", "WRiebfW", "x3vZzxnRAw4", "WP4pESk7BK/dMG9EDNq", "zI3cNCkxWOSJzmkiWO4", "gSohWQNdR8kc", "rwLNAhrdB3vUDhj5twfPBKnVBNrYB2XSzxi", "WRaLWOLrWR8NtCklc8kZBYJdJ8o9", "W5m2j0OfW6y4WPFcQ2e6W4RdReBcNZS", "uK5fzg8", "WPtdMrCwnW", "W6ywWQGdamkf", "EtZcThK+WOnG", "y2XLyxjbBgLHBMnLvgvYCML0B3j5", "rgfSywK", "AmoNimovmG", "BMv3q2HHDenVBNrYB2XSzxi", "hxKOW6hcNG", "z8kkWQZdJmkDlSkcW5WjE8k3W5NdK3lcOLJcT8ksWPBdRheWW6FdT8obtMBdO3utWRDOm8kkwmkxWOddQW", "a8kwW63cOG", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9ov29YBgrnyxbbC3nLBwjSEuvUzw15q29TCg9Uzw50lZjUzf9Iz18ZlZjUzf9Iz18Yms8YBMrFDgL0BgvFmtqVBMfTzuXHyMvS", "W5hcS2NcMa", "nSkiW67dIbnlW6ZcOW", "FtFcPgu+WQrNWOO", "mwuKW7BcS8kOdCkxofxdG0dcI8odAhW", "yIBcJCkxWPy1yCkEWQWtWPTn", "WRT9WPqhmWZdGhZdG8o+f0CAwK1mw1FdILvkWO/cSCkQpWrSA8kThw7dJqzszuFdLd0FW5NcVSkgtGBdS25UtuTMlIHFWPtdKh0ArYVcJmkjW7/dMGz+", "zgTbrLe", "a3q2WPO", "qrdcK3aRWQTnWOhcOCk4", "WQytWQVdLCk1", "oSkqW7pdJrHx", "Bgf1BMnOrxjYB3jszxbVCNq", "WOJcMN57FCoBW77dING", "tCo0WPtdNmkrsq", "cbBdTCooWOKl", "sgHl", "ktNdNSohW4ObFmose2mhWPNcKCoQxw3cLZBdVZLCW6Wmfq", "t1PRuMu", "vmoNkSoLpq", "WRNcM2ndFColW7/dVNJdHSo5zHq", "Fczpo8oGWRtdLq", "zgLYzwn0B3i", "CMLNAhq", "mtuXmdaWndv8mtuXmdaWnJu", "kmkAW6dcRH3dQvJdRgNdLhRdVdBdV8kV", "WRe3WPRdOCkWsq", "B3bLBKjHzW", "FaWry03dVSoH", "whbgWQvB", "j38HhHC", "WQy+WOFdOG", "WPldQSkVW5hcVCk7W6T2W5ddN8oamGeZary", "vuLdyw52yxmVug9Wtgf5zxi", "W7ynWRqmb8kfWQSRdq", "BZdcMmkg", "WOrWWO4Umqe", "z1PPEuy", "WONdGrmTk8oGW4joW5y", "pMuXW4BcT8k4", "WPpdOa9SjW", "WRiHWPXmWPa2ACkyb8kO", "umkkWQ8", "W5JdIe/dKSo+", "mJy2otmXnxrwENbiBG", "WQNcGNLuDW", "rCoLnSozkc0", "zJJcL8kg", "wq8mD03dN8oVDsPnWRSJxHldLq/cT8k3", "uCkxWQ8", "WPWLWPC", "6zIF5lIj6l+E", "WQhdICoXBNlcQJBcTSokoaJcVa", "vIZcO2uWWQq", "ExiRW6iwdfbOcG", "WQeZWPZdTmkH", "WPiafLZcVSoVW78", "W5tcKmkThI/dVXpcGq", "WQ8fWRxcMIS", "ztPzpmoKWQ7cHx4", "obxdOSocWOGa", "rCo1WRSKW7aUkCktWRGdW5y", "W4/cUwtcMCkhWRxcGW", "sgvYB0rLDgfPBfbVChvWmJaYna", "W5NcUw7cLCkiWQpcTLNdIgmQvZxcJa", "W6ddRLpdT014jH/cKmk4l8kIWOZcHmoaW4rrmSkLlw/dUW", "mtzWEa", "Bgf0DgLJzu51Bq", "WOuFDmk4sfG", "q0HbtKDfx1ndru5f", "zwCVW780a2zT", "C3r5Bgu", "Dg9tDhjPBMC", "FdvykCk0", "WOmTWP7dVSkaD8oWWRC", "lL0mW5tcUG", "lr3dOSobW5e", "x3nLDefUAw1gCMfTzq", "5PcC57sI5BYv5Poo566H55cg", "rCo7WROJW5G", "B25SB2fK", "W7SijLW", "z29uB1DVCMXKtwfWqNLqB3m", "fNtdQ8o7WQC", "W6pdPetdGu9Woaq", "WOnlWOKdcW", "nSksW6ldHqnCW4ZcOCoVWR9/Eu8", "DgLTzq", "WPxcJx9ABmonW7/dMMldHSoR", "AZfEdCoPWQxcI35BCZ/dPbjs", "AJVcKSkBWPuYimkfWOWvWOTs", "W7dcLmk3etldVrBcTmoYbIJcG8ka", "W7JcGG7dR8o3", "CMvXDwvZDe15twfYy2HeyxrH", "a8oHb2pdRW", "AgfZt3DUuhjVCgvYDhK", "W7nGW77dI8k3W6im", "WO3dIL7cR0W", "qwn0AxzPDhLdB250CM9SBgvY", "s8o2j8oE", "dCo/n2ZdOq", "bWRdPSoNWOyxlmoOW5VcMSkese5jW5uivdvdW6BdRw3cRYRcL8o4WOiCa8omoSkmWQCwmCowr3O/hmkYyCkMW4S8W63cTmoznw4", "CMvZAxPL", "txLFtwfYy2HFvxbKyxrL", "zgvLChnLyvrYzwfZDxjL", "WPVdUwVcHxe", "uhjVDgvJDenHC3rSzufZC2L0yw50ugfUzwXozxC", "z2v0vgfIBgveyxrHqNLjza", "q291BNq", "WQmzWQJcKc/dIG", "l8o7b8oXza", "yNvPBgrPBMDFAwrFBG", "cahdS8onWOyBjCoUWRdcTSkQALzuW5Og", "WRNdPCkiW5xcJmkOW6bWW7NdHa", "Dt3cS1i3WQnOWOS", "yNvZEq", "W6KCWQGchCkk", "suzcvNe", "W5BcUhNcNSk5WRxcG0JdLxy7", "W6lcRhRcMCkqWPBcIuldIwC", "WRRdSIXbjgC", "hCorW6FdR8okwGhdPcZcSG", "u1rvrfLFsevst19ts0Lmta", "WPmlfgNcOSoUW64", "twfYy2HuExbL", "C2vUza", "qwn0AxzPDhL3B3jSzgjHDhrSzvbVCfbs", "fCkkW7dcRG", "W4CQWQKalW", "W5BdOmkByL5dxG", "W7dcKmk3mcpdQINcKmoSbIJcN8kxma", "omoSWRBdLmkf", "eCoNeSo6BSkslq", "WQZcH3XdECoq", "jSoKmLxdGhjyWOGjWRaRv8ovlW", "zgPnEwi", "z1rXBhG", "z2v0vgLSzuLUzM9cEunVB3jK", "jmkuWPKTFXpdPSkwwhD7dxGEu8kS", "x2rLzMf1Bhrby3rPB24", "WRjkWPe+bq", "W7ZcRMxcHCkJWRFcK0ldL1aGsZxcH8ogBCkiWPTu", "nmoFemo6tq", "WPGqpeRcMq", "tLDVCMXKtwfWvgvYCML0B3j5q29UDhjVBgXLCG", "WORdLGGkiCoMW41BW4fqW7hdJ8k3ECkzW7tcISkd", "uNbPzNy", "wCoJW5FdIcaiW4vlW6aVW6tcPSoTW5RdO8ox", "WPyMWOpdOG", "W4NdUuJdMW", "BwvUDq", "tCkLW7lcUq", "qMf0DgXLqxjTEuL0zw0", "W4BdQSksB1G", "5PMw5ycC6lYX57Uv5PEQ5yA5", "rCkgWR/dOCkfcmkaW4WjE8khW5NdM3O", "W4VcVvK", "Cg9ZAxrPB246zML4zwq7ihrVCdOWoYbSzwz0oJa7ihOTAw5KzxG6otK5otSGD2LKDgG6mtaWjtSGAgvPz2H0oJeWmcu", "eaVdK8osW4CivmoceG", "WQ/cM0Hgza", "k8kkW64", "d8oabN/dPKHBWQOJWOukESo0bG", "5z+n5zM66lsH56sp5OYF56E3", "Dg91y2HLBMq", "jqddU8oeWPel", "zw5J", "Ae5AAeK", "kSoQWQNdHmkyucmnCW", "BmkPW7xcRmk7WPfXnhDE", "bCoedxm", "vmoUWRFdKmkj", "BNL2rM8", "rSkcWR/dHq", "k8kUogjnimkdbmkn", "mtGYmJe0vLznvMPj", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9WCMvMywjnB25ZDgvYu2vHCMnOtMv3l2jNxZeVtw9UC3rLCLnLyxjJAc9IDg5gAxG", "W5JdPeNdOeT4mZ/cI8kPaSk3WQNcHSoHW41Bnq", "W7VcVt/cSmoPmComW7PNhq4FW6dcNSoYW5yFe8kia3SFWRddGtFcK8k5W6pcNZCzWOxdHSkLWQL+ASkMpmoJgHBdTSk7cgpcKSoCWPH0WRdcTrXsu8ktiSkqWRLYWQ5PWPv1WQhcVaD7W4FdQCkBW7FdVIPgW7lcVCk6n3xcJCkTW40", "x3nJzw5L", "WQldM8kiW4FcKmks", "z25SyK8", "AxrLBuLK", "WQ3dKH41iCoAW5PtW5y", "x8oSWPSJW5q", "WQpcGgndFComW7ldMG", "qfRcKmk9WQhdHr89WPLr", "D8o7WRS1WOT/", "AJ1ela", "FJfelmoGWRi", "W6SyWQSa", "oXtdRSo4WPy", "WRNcGNLtECoq", "W53cNrG", "x14oW7ana0zVcmky", "C29YDa", "ywjZ", "W59HW6/dMCk/W7KhWPVcQCouW57cLZXeW6qL", "CxzjEeS", "oSkuW6/dGqv9W6JcUCoR", "v3PPqwi", "CYFcKq", "WRJdRuhcSNae", "W7NcNaRdRCoOWRDIjSk/qmosiHS", "mCoJW5VdLCouFJtdLXZcNa", "tXirzeFdN8orzdS", "BwLSzvbVAw50zxi", "rCo1WR81W48", "fqVdGSobW4Kxva", "WPaHWPTz", "v29YBgrnyxbvsvDYyxbWzxiVqwj5C3nxB3jSzfvjl1jPz2H0qM90Dg9Tl2j0BKfSBgLHBMnLl2j0BKfSBgLHBMnL", "vgjIu0i", "B2ZcHCkOWRBdGJKzWP5pWQG", "dua1oHJdSmkeW7zxmXddPvdcH8koWRtdVmkOWPy7qCklvKH6ibXbBCkNDmoaW5rElHWHveFcKCkyvghdHYRcUfmJWQW8zbdcTaG6imkzEsJcMIVcQSk9W6K", "x2nVBxbVBMvUDe5HBwu", "y2HLy2TFAgvYB3m", "W4JdTvldUSohW63cV8osWQFdVYzjWQz3", "B25JBg9Zzq", "t3bLBLvj", "W7ZcRMxcHCkIWQFcKKO", "mhb4", "ywn0AxzL", "v29YBgruAhjVBMvqB3b1Ce5LDW", "uCk8W6pcSG", "W6abWRi", "WRNdUsfkp3Wc", "zNPbD2K", "W7pcNwPAWQ8", "WPOlEmkSD0/dHq", "FJfzpmoQWQpcJq", "e1uDW7BcMW", "ywXSAwfUy2vFCMvJB3jKC18Wnte", "x29Uq2XVC2vdywXSyMfJAW", "fCkDW4lcPrFdVau", "uSoNlSofoW", "WPVdRCksW5dcHSkJW6PHW6q", "qCkpWQldH8kckmkBW4WjE8k2", "oSoYWRtdNSkt", "CMvXDwvZDefJDgL2Axr5rgf0yq", "WRulEmk9xvNcKZrCzeieW4RcQCk9sfhcO8kdW6BcGq", "yxzVAwrbDhrHy2TLza", "W5tdRmkrD05D", "twfYy2HuB29SCW", "f3i9W5VcLSkRfCkt", "zgLHBg9N", "W67dPuNdKvbbmWJcIG", "W57cJXVdRCoFWRDjpSk/xW", "zdJcPxbU", "umkTWQSZW5T9pmozW61xWOeLWQGCxu1CWQ3dI8oDs8kQfCkwEmocW5uKns/cMZO", "x29UvgLTzu91DenHBgXIywnR", "y0zAtxO", "BtjmEG", "tLDVCMXKtwfWq29UDhjVBgXLCG", "yxnSzwvW", "5BAN5yY25Rsp5y2h6ko85yQq5OUc6k2Z57+K5AYU5yw/", "mCkfW6hdJrLCW5NcV8oLWQj/zu/dHa", "m205W5y", "W4VcJaG", "5B+R5Ps75lIj6l+E5BEY5OMt5BYa", "s8k/W6pcRSkhWPPUnf1o", "xuBcOa/dJsNdTmkuWRnIxmkEW7eIvGtdMmohr8oKWPNcNa", "Chvpy2K", "ANbkvLO", "uuZcPCk/WQK", "BwvJAgfjza", "ztZcKmkw", "v29YBgrnyxbdB21TB24", "WRJdQuxcTN0lW4dcUdm", "zNjVBunOyxjdB2rL", "cSkpW6NdSb5uW6ZcGSo/WQzzDLFdKxbzW6VdJa", "rgf0yq", "BeDZvuW", "AxnuAw1LB3v0", "WRiTWPZdS8kRySo9WQyE", "jbxdUSocWPm", "WRy6WOVdS8oRzSoOWRCsWOe", "tLDVCMXKq2L0EvbVChvW", "WO7dTmkqW53cUW", "gmond2hcUq", "x2nSB3nLt3rOzxi", "WQmZWP/dRSkLEmoNWRm2WOOCzWy", "Cgjby2TwmG", "rZtcK8ktWPWY", "sSoPlmov", "yMm+W6ekwcaUcCkffstcOmocW4ZcIbdcPSosW7HPvX3cPhZdGmo+sxtcQCo0W6tdMK/cGmooWQGJihu1WOLyrKKcE0VcVfjPWRCAqCk7WQ5eCq", "Dg9VBhm", "Bg9NAw5FC3vJyW", "W6/cVvLxWOlcHZlcOmk1uCkTx3BdVehcQ8kosvVdI14OtJhcLSkfW4KYwNJdP8oNcvPzqmodWO/cHNG2W7hcMJBcV8oIFK/dM2P5zCowhLK+", "W691W77dLSkXW6i", "WQ0BWRhcGbddHCoiWOhdRmkd", "vYVcUgiSWP9WWOBcQ8kK", "uSoLW7pdGsCjW4O", "uMvZB3vYy2u", "jaddUmop", "WQKeD8kMwq", "AZfEhmoQWRxcHxn3FIxdHa", "y2FcT8k1WOm", "WRyWWPZdQ8k3", "W5NcTxVcJmkhWRlcHum", "hSoWj3JdJW", "qCo2WPldLSkpEmkeFCkm", "W5xcKmk3lcRdVtlcGCo6bb7cGSkgmei4pCoR", "h8o6fmo4y8kHba", "zuf2A1m", "Exi+W6uqdgHY", "W5/dPvxdLW", "qwzwENu", "W7BdUKddLu9W", "W4RdQfi", "s8oOeCotoYzFDJ53WOD0", "x8oGWOBdMSku", "C2f2zwrtA2LU", "vgLTzq", "BZHdk8oU", "WQ9ZWPaQerddI3RcICoz", "ouOJfWZdPCkv", "ASoQWRO1W40QkmkfWR0", "CgXHEwvYx21ZzW", "DgfIBgu", "tLDVCMXKuMvZB3vYy2vqB3b1Ca", "WPGaWQZcIGZdHCodWOhdSmoyyMqiW5BdUwddQ8kPumklW7tdSapdHIFcGCkqW4hdNH10gea5W70PWRWEA8onWRxcQmopWQhdT8ktWOK", "WRCVWPFdPSkWC8ofWROxWOyEyqtdRCk7WRNcT8ogWRJcSCoWtmoT", "xmoZW4RdPYSmW5TdW4C+W6/cVW", "yxbWBgLJyxrPB24VANnVBJTJAgfYC2v0pxv0zI04", "eCo9ovVdRW", "u3rHDgu", "W5dcOKX1", "EYjKyxrHiJOIC2LSzw5Jzv9Yzw1PBMrLCL8WmdiIlcj0ExbLiJOXFq", "WOFdImk1W7/cVa", "ywn0AxzLv29YBgrnyxa", "uG8ly03dJ8ohyZa", "W7RcVwxcMCkYWQNcIuFdLa", "WQagWRVcKc7dPSoBWOFdQCkcuumhW57dTh7dO8kl", "wtJcPxi3WQnQWOG", "WOHZWOOznWldHhZcImo9n2unvgfn", "CgfYC2u", "W5NcTmkubWxdKdRcOCoaoGtcVSk5bKe", "rvHVsLm", "uMvZCg9UC2vjza", "W5lcU0C", "CMvUzgvY", "CMvTB3zL", "lKOXnW3dVCkvW6uBdttdHKhcJSkcWPJdIW", "ChjVz3jLC3m", "W5lcSMVcKmkjWRxcGW", "W4JcMbpcVSo1", "sKzUvxy", "n2mKW4VcPmkV", "tLDVCMXKtwfWrw50Axr5vhLWzq", "tqlcKCkaWPCZqmkgWPa7WPTkxCo4zqaJWOCAdW", "pCovW7JdSSoZDbRdQYO", "qwXSAwfUy2vbC3nLBwjSzun0CMW", "FmocWRpdVCk4z8k0tSkIuhdcLSko", "WPeaba", "W54tj0SAW5CbWP/cT1e", "sCoVWPddNmkvsq", "ACoNmSo0pZXB", "cSkqWPG2xbxdT8kwufu", "W73cIXVdJ8o0WRTllSkyvmo5lqlcRq", "Bw9Kzq", "xCo3W43dKauvW59nW4OW", "ycxcKmk3WPu2B8klWOu", "W7xcPZxdMCoW", "xxvdWRjvca", "heewW6JcKw0", "WQNdLNVcSw8", "xCoSW7/dKY0", "WR/dStbhpwO", "EN9BWQ9ge8kHWQbaWOJcVCo7W5jvAbKvjG", "FmoLWO/dGCkiBSkiA8kRzKu", "p8kJW5BdIWm", "d8kEWOuSEaldTW", "C3vIu2vYDMvYsuq", "WOagWR/cMcZdP8ovWONdSSkyt24iW4q", "W7BcHXZdUa", "yxnZzw1IBhL0Aw1L", "t8o7WONdLSkm", "WPmAWR/cNc7dGq", "W7JdMcyol8ktWQtdI1RdImoOtre", "W5afkLqU", "tg9NAw5gBg93t3b0Aw9UCW", "ywXSAwfUy2vFAgvSCf8Wmdy", "yMfJA3vW", "y29UBMvJDa", "W7b3W6u", "CMvZDwX0", "uSo/WRWzW4KUnW", "W7FcS0PWWRFcLZRcT8oOkSkoAItdV1xdRSk0u0FdMWihybhdUmoGW44ihe3dRCoYdevdvCooWPhcHMr6W7pcIZdcPmoIAa", "iSk7exrW", "W6JcRgdcNfiAW4/cGW", "W6lcMXVcUmoPfmoyW6ORkbiC", "eaFdLCobW44", "gmoCW7hdUSo5", "C2HVDZi", "ChvZAa", "y0FcOqBdMXa", "f8kGjwjhiCke", "WO4DWRlcVYhdL8ooWQxdTSkdqgGnWOpdGW", "ytvyi8ovWQ/cJ3vbyG8", "WQWWWPFdOSo1oCokWRmmW48ZBH7dP8kAWQJdQSohWRtcSCoRv8o6bIhcMW", "f8oXa8orzSkNaKtcUH9Ug8ojrq", "vhjHy2vszxbVCNq", "C21Xwvu", "W68ejvCFW6C2WP7cSK4X", "WPmnWRNcNYhdKCowWPddHSkvtuGkW5NdS3K", "zCoXWQSJWOO", "W5hcVv4", "W4JcPw3cVCkN", "C3vZDgfPBKf0DgfJAW", "WRWgWQVcNdldU8ouWOhdTq", "uMLUCKy", "tw9yree", "A2rXyL9ZzwnYzxq", "uMfKyxjfBMvTEvbHBMvS", "WRRcNhvbEComW6xdU2NdLmo5CbnI", "EYNcO3GWWQq", "yKvRqwq", "eSkLW5pdUZz1W4xcKSohWOTfwNRdR1fWW5FdRNFdRZa", "yCkJW6JcJ8k8WPb1", "WRddUcftiW", "tfzuDNG", "CMvSAwnjDgvT", "vgfIBgvvDgLSCW", "frhdUmoNWOyxjSoVWOa", "W4/cHaZcTmoPiW", "dCkbWPSUza", "sSo2WPpdGCkQtCkpBSkbzLhcPa", "t1DlB1q", "pSo7WQ/dQSkxwI88Ev9xu0f9W4qEmb0ap8kItW", "WPe2WOPwWQulEq", "DNLNve8", "x2DLDfrLEhrxAxrOugfYyxm", "WPHMWPeVkZldHhRcHmoolfiduKXfzG", "nCocmSoAxG", "W6/cVvLxWOlcHZlcOmk1uCkTx3BdVehcQ8ktruFdIXqflJZcJCkoW5mJo23cQ8orauTGvCouWP3cHsu4W7RcNI3cP8oQtNJcM2Lmw8kWceG9W7bgWRKBWPBdJSksEmkuuG", "q0FcISk4", "D3LzWQnC", "vmoPWQ0+W5K", "WQVcJwrEASoh", "Ahr0Chm6lY9ZzgSUDg1SC3DRlMnVBq", "zg93BMXVywriyw5KBgvY", "cmovW6BdRCoUxdZdQYNcTNDliSkiW78", "pSoSja", "W64vkuODW4qCWPhcS1y", "BwfYA1bVAw50zxi", "WPWRWQ7cLY8", "fbRdImozW4m", "5BE+5B2u5zcf", "mtCXnJe5z1r0tvLe", "kSoUWR7dJSk/uW", "xCkJW6JcQmkXWPf2fvfzWPZcIWLBWOa", "DmoPmq", "yKZcVHpdJby", "W6BdQfpdNvrW", "ChjVz3jLC3ndAgfUz2u", "W6rGW6ZdLSkWW6K7WP3cGSogW5FcPIru", "B25mB2DVBG", "zgL2", "W7/cKeFcV8kT", "CMvJywXStwfYy2G", "ySoaWO/dH8klsmkVBmkaFfRcHCk1W61fW5FcLCo5WQaoa8kvfG", "WRtdPhZcTMyHW5FcPZLKjd91", "jSogchZdSG", "W7qpo0WiW6WbWP/cULyW", "sveKW6qS", "W7z0W4VdMCkB", "z2v0twf4q291Dej5ug9Z", "W77cMWZcNCoMpSoiW7TNgcGPW57cNSoMW5yJu8kZlXiUWP7dOGBcMmkyW5NdLvu/WQNdOmkqWRHFsCoSamoJhaRdISk+jw/cISkkWQPVWQ7dSumFfmkjmSkGWRvkWPm7W5Ls", "WOuabhtcV8oMW6y", "W7tcNCkQpsJdRcm", "r0vux1DpuKXex0LorK8", "WQ3dMZ8GeG", "kvFdKCo6WONdQuqqW4Pb", "sgfJA1rPBwvYlMPZigj5ihr1CNvZBgfUoIbfCNjVCIbWyxjZAw5NignHBgXIywnRignVzguGC3rYAw5NoIa", "DxnLCKXVz291Da", "omoUWQVdGCkp", "ywXSAwfUy2vFDhjHBNnWB3j0xZaWmq", "W5pcQwu", "y2fSBa", "iwyvW7pcNMWYq8kAu2ShhwW", "C3rVCeLTBwvKAwf0zvbYB3bHz2f0Aw9U", "Bwv0yq", "y29Uy2f0", "u3LZDgvTwMvYB1rPBwu", "uMvHBfjuu0DHBwveyxrHq29UDhjVBgXLCG", "WOBcP0fsrq", "hfqoW7xcM2yy", "WQ8VWOBcTdO", "WPuehL7cRSoVW4PCqmkYsCkIWORdKSoe", "ySolj8odlsLDvHn8WOX+huhdVIDdWRZcNWldRSotW7NcHIRdPq", "5PYX5OI+542g5A6o5z6b5Qgf", "b8k/kNjn", "EGSmvxe", "W6BdUeldMKy", "bSoxmCoJBa", "x29Uq29UBMvJDenHBgXIywnR", "amksW6RcSG", "kvy1eW", "t2rYv24", "W5mKh2CQW4O0WQlcHhemW6VdHfFcSq", "z2v0uhjLtwfYy2HeyxrHqNLuExbL", "W74ajv0BW6m", "A1NcOGBdHWddLSkmWO9+xa", "W4GyWRqgaCkXWRyIbLXze0tdMuzWWOhcTxVcT8oGWOy", "W6WFWRqebmkh", "W6xdNvFdL8oS", "a1GjW7u", "x8oNWOZdNmkt", "W4ddP0JdLKn5eHhcISk8", "WRGiWQ7cNIxdKa", "gCkyWO8", "tg9NAw5uyxnRCW", "g8k7i3rAcCkahmkv", "W57cHHm", "W5eok1KfW48uWPJcUKuWW4O", "Dg9WD2fYx2fWCf9Syxn0tg9NAw4", "W4icjfCAW6C5WPFcOKCN", "fSonimoUBq", "WPJdVCkOW57cGa", "CMLjsfC", "tu/cISk7WONdIYu", "CmkBW6NcRSk4WPTpme55WOBcIbHhWPTVWOhdR8o2", "t8kmWR7dL8kmcCkcW54j", "CMvWzwf0", "DNfbzKu", "q0TUBKm", "WQyfWR/cNci", "tZTepmoGWQ7cKJzMyH7dQcLFedywW7pcVvNdGCkRW48", "W53dQ8kUA0ry", "WR3dTelcP38uW4BcOG", "B3bLBLnLyxjJAa", "WPxdNs9pfG", "WQ7cVfPdxG", "WPRdNXK4kSoHW4S", "nCo1W73dVmoJwJBdQJRcT1DwmmkUW77dLSkLzeJcTmoMgSot", "W5lcSKxcMCkvWRxcH0ZdGG", "CMv0DxjUqxjYAxzLvgLTzq", "f8kGjwvni8kvlmkBW6hdUSk2W57dLLu", "W43dV0ldHG", "EKf0tgW", "Aw50zxjUywW", "W43cRMFcImkjWRlcN1VdGG", "gCkQjwq", "tCkRWRZdJCko", "wLPfsMS", "z2v0rwXLBwvUDej5swq", "zYNcU3GR", "WOS1WOzC", "uZ7cMvGk", "imkqW6pdHqnCW5NcOSo5", "uYbfp8oGWRlcR3vtAa", "C2LK", "W5hdQCkuyea", "efpdGmo1WO3dJM8fW4C", "oSo9WPRdOmkY", "zxzLCNK", "ChjLC2v0tgLZDa", "tKvPz2H0q291BNrYEunVBNrYB2XSzxi", "56Mp5OIp6kkT57Qj6iYk5B+C", "W6NcGGBdR8o5", "WOZdGbKRbCoZW55qW4C", "shLBWO9EdSkWWQT1WOBcVW", "WOzcWRe7oa", "5B+R6ycF5BU6562r6kgm5yAB", "uvvfvuvFqKfuveXfx1bpv0vFvvbeqvrf", "uCktWQFdJCkD", "z2v0vgLTzq", "aHBdHq", "nxWWFdz8mxWZFdj8nhW3", "ySo1WRO8W5Kgo8kqWPmrW55SWP4vA0uhW77cSmoseCo/sW", "q1vlzeK", "rgnbELq", "WOi+WRpcIYZdGmo3WOxdSSkIvwikW4m", "DMLZAwjPBgL0EwnOyw5Nzq", "zgvSzxrLsxrLBq", "gmkUjxzJkmky", "y3jLyxrLDgS", "tJVcLNuR", "W6pdRKhdLvD5iG", "DSkPW7tcS8kDWPTX", "W6/dQKNdKe5Wja", "uxvPy2TbCM15rw50zxjcDg4", "jmkyW5ldLtS", "WPRdGrK4mmoXW75sW5zXW73dKSk3", "sgfUzgXLCG", "imkEWOGJCsldRmkAq1fHdxS6", "zMLSDgvY", "WQiNpK/cOa", "h0mvW6ZcGNW", "WO93WOC5kWxdKq", "WR7dUexcNNatW5hcQY50dW", "WOify8kOveFdKWXC", "WQBdNbiCnSoMW5rmW7b9W7tdKmkHsmkBW60", "swPYExi", "ANDJsNG", "W4ZcGqJcPCoOkq", "WOKCWQRcUGK", "C2vYDMvYsuq", "wvzbsu4", "Cg9ZAxrPB246ywjZB2X1Dgu7ihrVCdOWoYbSzwz0oJa7igjHy2TNCM91BMqTy29SB3i6ihjNyMeOmcWGmcWGmcWGmc41ktSGD2LKDgG6mtaWjtSGAgvPz2H0oJeWmcu", "CKBcI8kRWPBdHYWN", "x2nSB3nLtgf5zxi", "WRe4WPS", "C2L0zq", "vuLdyw52yxm", "rmkmWRNdICkigq", "CM93CW", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9vC2vjDgvTq29TBw9UugfUzwWVDxnLqNrU", "aeeoW6JcNwy", "ug9Wtgf5zxiVtKjHDhrSzu1HAw4VDwKVqMf0DgXLugfUzwWVyNv0Dg9U", "yZH3B3jSzejVC3m", "WPVdRCksW5a", "qSoNmCoehZXouJn4", "emkBW4hcQsq", "DxzeChu", "dSoEW73dRW", "p245W5y", "tKvu", "C3bHy2u", "W53dTuVdKmoDW63cM8odWQZdPG", "WPWLWP1xWPGMBG", "oCkcWOiSEIldOSker1jQlNqTwq", "WOzZWPyOoIhdNh7cIq", "W5/dOKK", "dM0Kicm", "W48oWRCqma", "BN45W6eva3y", "tuXetg4", "z2v0txLnzwnOyuXPC3q", "rgfTywDL", "ug9Wtgf5zxiVvuLgCMfTzu5VBMuVq09ovevovc9xB3jSzevUDgL0zvbVCc8YBMrFyMDFmY9IDg5oB2rLl2nVBNrPBNvVDxngAwDODej0BG", "q1jfqvrfx1rsruftvvjfx01buf9eqvrb", "zM9Yz2v0r2f0AgvYu2TPBgXZ", "WRe6WOFdS8kTEmoJ", "W5bQW7K", "W4hdKNldSmoS", "WOZdPZCFnq", "W5BcTfT6WO7cMW", "ysdcISkgWPq5", "W7ZdTvtdICooW7RcM8ot", "AgvSCgvYlwLUDhjVzhvJzq", "bmkuWOCYEbpdNmkExvD7dxe", "WRxdSLdcSW", "WRiYWOPD", "W6mqWQOj", "WOP+WOGImXVdHMVcS8ozo2ihsurAsGJcKqm", "W7ZcQhZcNCkfWQ3cG1K", "W4NdSvxdI8oMW6NcOmouWQhdOGPx", "bL8jW7xcK2yCrW", "wbDseSon", "vmosomoapa", "pwmtFmk3W7BdKg99rc/dVZ4", "x2jSyw5R", "sgvSCgvYihn1y2nLC3nMDwXSEsbPBML0AwfSAxPLzc4", "uhvZAeTPy2TpDxq", "qMf0DgXLsxrLBunVCMveyxrH", "W4BdUftdKu95eHhcISk8", "bSkqW63cSH3dG1NdP28", "DMfSDwu", "wSoKW5pdNq0L", "B3bLBLjHzgfY", "l2PZl2PXDwvYEs9QCxvLCNKTDwKTms4Xnc4ZlM1PBI5QCW", "x3bVChvW", "W7VcMHVdRCo/WRLQjCk0xSodkr0", "WPOxWObkWR0Mumkyfmkozt7dNSoO", "B250B3vJAg1VDMu", "z2Dguue", "zM9YDhjLC3m", "f8kAW6/cRX/dUfldSxldK2FdSZ8", "Bw9IAwXLx3bOB25Lx3jLx2TLEta0", "mtuXmdaWndu", "CMvWBgvUAxnOqxr0ywnRzxjZ", "Bvvor1m", "l8k5W63cKWO", "B3b0Aw9U", "jgG1C2rR", "B250B3vJAhn0yxj0", "u0VcKSkZWQNdIXm2WODnWRHdW5G7WPm", "Fmk4W6JcKmk1WOzTjeO", "CSo4W5tdKtyeW48", "WQ7dSmkDW4y", "5Q2h5z6U5A6+5ywk5y696kod5yQt5OM46k+U5729W4W+vG", "WOlcI2G", "W4rAjSoZdbVcJbzmCey9W7i", "WPddPCkm", "DgLTzxi", "bWtdTmo5WOGbjmojWPZcU8k2BvTjW5G4AtblW7ZcPW", "AwrZ", "jxqXW5BcTW", "jSk/j0DG", "C2v0u2vYDMvYtgLZDfbHCMfT", "uMfKyxjdB250CM9SBgvY", "yJBcISkBWO0Y", "iSole2ldQunOWR0", "lKOReG", "aWVdL8ouW5mjrq", "WRxdUcXfmxS", "rCkgWR/dTmkgbmkdW50LDSkaW5BdT3dcUG", "sKDMBLi", "tLzvBgW", "WR7dSI5wnx1kW4i4WOFcHZWsqa", "bmk9lMDni8kvlmkrW6tdRSkUW5FdJa", "hCozW7JdR8oUxa", "WPulESkN", "W4FcMH/cVCoYi8oiW7O", "CSotW7RdRa4", "DSkzWQ3dSmkh", "aeeFW6/cPMKmsq", "oKu/W6xcQG", "BYzpkCoXWQxcQxLFyH7dQq5Kka", "Bg/cTSkFWORdSq8eWQHTWP9OW5G5", "WPFdJILLnG", "W47dOfBdMSofW6ZcKCoFWQddPWa", "twfWvxrPBhm", "tSkgWR3dGCkf", "D0j0q2q", "D2f0zxjTyxjR", "teDbEMm", "CMvPBMzVCMnLv29YBgrtAxrL", "uKPmWQnX", "ywzMmG", "AgL0DgvZDa", "Cg93zxi", "W7JcN8kGmcFdTHZcKa", "x2rVBMf0zq", "W4pdINpdTwfAgdBcT8kA", "wfL1B3C", "Bhy5W6u4dMnOd8kzfZhcGmkjW5hcIxZcSCot", "dCkSW6/cL8ogb2fBmIyidq", "fSorW6W", "WQ3cI2r0DmolW73dM07dI8owzbjZ", "yMLUza", "WONdHG8X", "WRGLWOfFWQuQ", "pmk4o11N", "W6SCWReSdCkA", "i8kbW6VdKrjk", "ug9Wtgf5zxiVv29YBgrtAxrLrgv0ywLSugfUzwWVDg9Wl2j0BKLUzM8", "vuLnyw5Hz2vYsw1WBa", "rxzLBNrnB3vZzq", "W5pcUMZcQ8kr", "WO3dTSkt", "Du/cHSkWWQFdOZ06WOXpWR5f", "WPpdJeVcNv8", "AwjtA1K", "WP8eCmkK", "rhL1zLe", "W6LDW5NdTmkl", "refuqunptKzjrW", "yaKyyKNdHSon", "gCo0n2ldNG", "zddcISkIWPqKzmktWOKvWOz6v8o5rXS", "g8k/lN8", "B25VCgvU", "BtRcMSkxW4H4xSkqWOKoWOTrDSoJtqO", "Aw9ovei", "W57cHHpcPCoOm8ouW7KT", "B05KBuW", "WRddT8kBW7BcOmk1", "CcxcKSkBWO8", "AvHts1u", "caRdUmoUWPuCjSoOWRFcTCkQrvHCW5Og", "w8kIW6u", "o8o/WRJdHSkrrsuEzhH7uKn3W5u", "WQeZWPBdPSkQy8o0", "BM9Kzti", "mNW0Fdf8mhWZ", "jNi/W5BcVCk+gmkcgq", "BZtcJCkgWRiZ", "ANvTCfrVsg9Tzq", "fCk/o3rgkCkIamkDW67dQW", "W7hcMmkVlcpdQG", "qK9Ruw0", "ug9Wtgf5zxiVsxrLBunVBxbVC2vszxn1Bhrqyw5LBc9ZDwnJzxnZl05LDYboB2rLl3vZzuj0BG", "hmkQj2fnp8omdmkDW6pdO8k0W5ZcLui5cSkxlCkyzb/cVq", "zM9YBwf0Aw9U", "vM1wDMu", "q8oJnSoZmsvkxd52WOXKc2VdPa1eWRVcSGtdR8ocW6u", "W78vjMSCW7ebWPFcSKWuW4ZdVwxcLsO", "W6tcHCkIkJldLbtcKSo2bXVcGCkBiG", "xxzgWOrr", "BhrrD1O", "qNvPBgrPBMDjDgvT", "B0fADxm", "zZeGW5O", "pCkuW6RdIa", "WQ7dTfxcO3y", "WP7dLGGliCoNW5rlW4f/W70", "DCkgWPhdOCk8", "WPWMWO/cRq", "AYhcISkcWOHTiSoiWOHpWOnyv8kIwGCJWO1ptSowWPWdWQ5udG", "sLnptL9qqvjtrq", "aGddKG", "eMeKW4m", "of4iW63cLKuEuSkNDxGD", "ug5Vq2K", "qxjTExm", "x2rLBgv0zuHVBwvjDgvT", "CMvK", "BMfTzq", "DwLK", "twfPBLvjv3jHChbLCI9otwfPBLvjwZaSmv0VqM90Dg9Tl2j0BK5VzguVyNrUx1DVCMXK", "qdTjkCoPWOpcIxzfAbpdUdvc", "ksb0CMfUC2XHDguO", "fCkYmSoi", "W6CyWQuohmksWOySafW", "W7ddS07dLSohW6ZcOmosWQC", "WQaOWP1DWRqdACknbCkGyq", "WROkhLRcN8oSW75rqCk2yCk3WQldI8oeW4y", "ug9Wtgf5zxiVvuLgCMfTzurPywXVzY9crY9dt05uru5ul1rYzwfZDxjLtwfWq29UDhjPyNv0zvbHBMvSl2rLy29TCg9Zzuj1DhrVBG", "pmkqWOKqCG7dRSkKw1f/lhq6xCkjWOpdL3PyDG", "jCkbW7xdLXi", "wwzxzMG", "zLb6tfq", "hINdGCogWO0", "566H55cg6igu55UF5PY655sY", "tu1vELi", "WQuaaKVcRSoXW4jw", "r8knWQG", "W6JdU1pdNu17", "i8kGox1mamkagmkGW63dOmk3W4G", "WOyxhW", "WQ7cI3zECSohW4hdJwpdGSo9DWTV", "B25RzxLKB3DU", "W7pdOKRdKva", "WRldSIrhjwmt", "twfWq29UDhjVBgXLCG", "WPtdQSksW5hcVCkzW6T8W6G", "rxv2q0K", "WORdHWu1iq", "sxrLBuLK", "CtFcTa", "WONdPcfdpMO", "bSkAW6FcJW0", "zgf0yxm", "WQOaWRlcNq", "ENbdWQ9rfmk2WRW", "EsrokCoXWQxcQNPmAaJdQq", "BNuMW7ivc2XQ", "BwfYy2Hjza", "5B+p5PA9C+MARW", "WORdHX0RmmosW5jzW5TO", "WPhdQ8kB", "vgLhAKG", "W6eyWRie", "tLDVCMXKtwfWvxrPBhm", "qNrUtgf5B3v0", "zM9YBwf0Aw9Urgf0yq", "tCoGmmormY0", "tgf1BMnO", "zmkIW7xcL8k2", "z2v0qM91BMrPBMDdBgLLBNrszwn0", "DhjHy2TPBMC", "CNzrzge", "WP57WOa", "sYRcVhGZWQy", "wNzfzgm", "WR3dUfFcVNafW7xcUc9NdZHSmW", "CWeCDuq", "y3jLyxrLt2jQzwn0vvjm", "rdL7omoZ", "uSklW7xcICky", "e8ovW73dVmoJwG", "bwuIW5tcT8k4kmkw", "WRSMyCkmvq", "WRSUWRXBWRqSEmk8cSkNBZ4", "qMf0DgXLrw1qyw5LBa", "rMfZDefSBgLHBMnLsgvSCa", "fbRdNSof", "W7qvoW", "W5XUW5C3zWNcNhldNmoxAh1zrXHviutcLG", "B3bLBKHLCM8", "C2v0u2TPBG", "W7ulWQK"];
  fn3 = function () {
    return arr2;
  };
  return fn3();
}
Object.defineProperty(window, "NBattleModel", {
  get: function () {
    var obj26 = {
      FKRLY: function (arg80, arg81) {
        return arg80(arg81);
      },
      ZsIJU: "NBattleModel"
    };
    return obj26.FKRLY(__require, "NBattleModel").NBattleModel.instance;
  },
  enumerable: false,
  configurable: true
});
async function loadJQueryBundle() {
  const arr3 = ["https://perpetually1122cc-1305326646.cos.ap-guangzhou.myqcloud.com/jquery-3.7.2.min.js", "https://perpetually1122cc-1305326646.cos.ap-guangzhou.myqcloud.com/jquery-ui-1.14.3.min.js", "https://perpetually1122cc-1305326646.cos.ap-guangzhou.myqcloud.com/jquery.ui.touch-punch.min.js"];
  const [tmp18, tmp19, tmp20] = await Promise.all(arr3.map(arg86 => fetch(arg86).then(arg87 => arg87.text())));
  const blob2 = new Blob([[tmp18, tmp19, tmp20].join(";")], {
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
    var obj28 = {
      ZOKfc: function (arg88, arg89) {
        return arg88(arg89);
      }
    };
    return obj28.ZOKfc(__require, "BattleData");
  },
  enumerable: false,
  configurable: true
});
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
    var obj29 = {
      gbabl: function (arg90, arg91) {
        return arg90(arg91);
      }
    };
    return MarchType = obj29.gbabl(__require, "WorldMapCommon").MarchType;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NMarchType", {
  get: function () {
    var obj30 = {
      Jvtag: function (arg92, arg93) {
        return arg92(arg93);
      },
      kZVfb: "NWorldMapMarchCommon"
    };
    return MarchType = obj30.Jvtag(__require, "NWorldMapMarchCommon").NMarchType;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "WorldMapEntityType", {
  get: function () {
    var obj31 = {
      oNWjM: function (arg94, arg95) {
        return arg94(arg95);
      }
    };
    return obj31.oNWjM(__require, "WorldMapCommon").WorldMapEntityType;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "NWorldMapEntityType", {
  get: function () {
    return __require("NWorldMapCommon").NWorldMapEntityType;
  },
  enumerable: false,
  configurable: true
});
Object.defineProperty(window, "MarchTools", {
  get: function () {
    var obj32 = {
      Rpifv: function (arg96, arg97) {
        return arg96(arg97);
      }
    };
    return obj32.Rpifv(__require, "MarchTools").default;
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
    var obj33 = {
      pEhtD: function (arg98, arg99) {
        return arg98(arg99);
      }
    };
    return obj33.pEhtD(__require, "LocalManager").default;
  },
  enumerable: false,
  configurable: true
});
window.find = function (arg100, arg101) {
  var obj34 = {
    YdwHQ: function (arg102, arg103) {
      return arg102 - arg103;
    },
    OKWvv: function (arg104, arg105) {
      return arg104 - arg105;
    },
    XYuow: function (arg106, arg107) {
      return arg106 ^ arg107;
    },
    sZfpT: function (arg108, arg109) {
      return arg108 ^ arg109;
    },
    VoBOY: function (arg110, arg111) {
      return arg110(arg111);
    },
    cQSRp: function (arg112, arg113) {
      return arg112 ^ arg113;
    },
    SyQqm: function (arg114, arg115) {
      return arg114 ^ arg115;
    },
    bTeGe: function (arg116, arg117) {
      return arg116 ^ arg117;
    }
  };
  if (null == arg100) {
    return null;
  }
  if (!arg101) {
    arg101 = cc.find("UICanvas");
  }
  if (null == arg101) {
    return null;
  }
  var tmp21 = arg101;
  var parts2 = arg100.split("/");
  for (var tmp22 = "/" !== arg100[obj34.sZfpT(0x60798, 0x60798)] ? 0 : obj34.SyQqm(0xe4fed, 0xe4fec); tmp22 < parts2.length; tmp22++) {
    var value9 = parts2[tmp22];
    var value10 = tmp21._children;
    var [result13, result14, result15] = function (arg118) {
      var tmp24;
      var tmp25;
      var tmp26;
      var tmp27;
      var tmp28;
      tmp24 = arg118.indexOf("[");
      tmp25 = arg118.indexOf("]");
      tmp26 = arg118.substr(tmp24 + 1, obj34.YdwHQ(obj34.OKWvv(tmp25, tmp24), 1)).split(",");
      return tmp24 >= obj34.XYuow(0x7b88f, 0x7b88f) && tmp25 == arg118.length - obj34.sZfpT(0xa37ab, 0xa37aa) && tmp26.length < 3 && !obj34.VoBOY(isNaN, tmp27 = tmp26[0]) && !isNaN(tmp28 = tmp26[obj34.cQSRp(0xb7f43, 0xb7f42)] || 0) ? [arg118.substr(obj34.cQSRp(0x1a898, 0x1a898), tmp24), tmp27, tmp28] : [arg118, obj34.cQSRp(0x3e300, 0x3e300), obj34.XYuow(0x41d30, 0x41d30)];
    }(value9);
    tmp21 = null;
    for (var result16 = obj34.bTeGe(0x5a5b9, 0x5a5b9); result16 < value10.length; ++result16) {
      var tmp23 = !result15 ? value10[result16] : value10[value10.length - 1 - result16];
      if (tmp23.name === result13) {
        if (result14 == 0) {
          tmp21 = tmp23;
          break;
        }
        result14--;
      }
    }
    if (!tmp21) {
      return null;
    }
  }
  return tmp21;
};
window.nodePath = function (arg119) {
  var obj35 = {
    yWCrj: function (arg120, arg121) {
      return arg120 + arg121;
    },
    rvQda: function (arg122, arg123) {
      return arg122 + arg123;
    }
  };
  var tmp29 = arg119;
  var value11 = tmp29.name;
  for (var tmp29 = tmp29.parent; tmp29.parent; tmp29 = tmp29.parent) {
    value11 = obj35.yWCrj(obj35.yWCrj(tmp29.name, "/"), value11);
  }
  console.log(obj35.rvQda("\"", value11) + "\"");
};
window.findNode = function (arg124, arg125) {
  var obj36 = {
    XRNYQ: function (arg126, arg127) {
      return arg126(arg127);
    }
  };
  if (!(arg125 && (arg125 = arg125 instanceof cc.Node ? arg125 : obj36.XRNYQ(find, arg125)))) {
    arg125 = cc.director._scene;
  }
  var tmp30 = arg125 && arg125.getComponentsInChildren(cc.Label);
  for (var tmp31 of tmp30) if (tmp31.string.includes(arg124)) {
    nodePath(tmp31.node);
    console.log(tmp31.node);
  }
};
window.asleep = async function (arg128) {
  await new Promise(arg129 => setTimeout(arg129, arg128));
};
window.asend = function (arg130, arg131) {
  var obj37 = {
    tYpvv: function (arg132, arg133) {
      return arg132 + arg133;
    }
  };
  if (ServerTime < new Date(obj37.tYpvv(auth.expire, "T24:00+08:00")).getTime() / 1000) {
    return NET.asend(arg130, arg131);
  }
};
window.asendPB = function (arg134, arg135) {
  if (ServerTime < new Date(auth.expire + "T24:00+08:00").getTime() / 1000) {
    return NET.asendPB(arg134, arg135);
  }
};
window.asendPBV2 = function (arg136, arg137) {
  var obj38 = {
    FUCEI: function (arg138, arg139) {
      return arg138 < arg139;
    },
    MMUzR: function (arg140, arg141) {
      return arg140 / arg141;
    },
    nPtdj: "T24:00+08:00"
  };
  if (obj38.FUCEI(ServerTime, obj38.MMUzR(new Date(auth.expire + "T24:00+08:00").getTime(), 1000))) {
    return NET.asendPBV2(arg136, arg137);
  }
};
window.base64ToUtf8 = function (arg142) {
  return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(arg142));
};
window.utf8ToBase64 = function (arg143) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(arg143));
};
window.base64Encode = function (arg144) {
  return CryptoJS.enc.Base64.stringify(CryptoJS.enc.Utf8.parse(arg144));
};
window.base64Decode = function (arg145) {
  return CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(arg145));
};
window.JSON_PARSE = function (arg146) {
  try {
    return JSON.parse(arg146);
  } catch (error7) {
    return null;
  }
};
function platformInitialize() { }
function platformSetServerListParam(arg147) { }
function platformSetLoginParam(arg148) { }
function hookMain() {
  var obj39 = {
    ZDMJg: "H5SDK_AUTOLOGIN",
    AIOaB: function (arg149, arg150, arg151) {
      return arg149(arg150, arg151);
    },
    KzBOr: function (arg152) {
      return arg152();
    }
  };
  function fn9() {
    var result17 = cc.find("LoginFlowNode");
    var tmp32 = cc.find("LoginWebAccountPanel") && localStorage.getItem("topwar_app_serverToken");
    if (result17) {
      hookGame();
      if (tmp32) {
        result17.getComponent("LoginFlow").startLoginFlow();
      }
    } else {
      cc.director._scene.once(cc.Node.EventType.CHILD_ADDED, fn9);
    }
  }
  function fn10() {
    var value12 = cc.game._setAnimFrame;
    cc.game._setAnimFrame = function () {
      value12.apply(this, arguments);
      if ("hidden" === document.visibilityState) {
        window.requestAnimFrame = this._stTime;
        window.cancelAnimFrame = this._ctTime;
      }
    };
    cc.game.setFrameRate(cc.game.getFrameRate());
  }
  if (cc = window.cc) {
    if (cc.game._prepared) {
      fn10();
    } else {
      cc.game.once(cc.game.EVENT_GAME_INITED, fn10);
    }
    if (cc.director._scene) {
      obj39.KzBOr(fn9);
    } else {
      cc.director.once(cc.Director.EVENT_AFTER_SCENE_LAUNCH, fn9);
    }
  }
  fn11();
  function fn11() {
    if (!location.href.includes("https://h5kao.shan0327.com")) {
      return;
    }
  }
}
function hookGame() {
  var obj40 = {
    BpxIy: "LOGIN_SUCCESS",
    MfqGf: "newChatPush",
    uyeAA: "UpdateMarchInfo",
    EXoJS: "1|0|2|3|4",
    jIPwV: "mouseup",
    rpVcp: function (arg153, arg154, arg155, arg156) {
      return arg153(arg154, arg155, arg156);
    },
    yEKtY: function (arg157, arg158) {
      return arg157 == arg158;
    },
    bFqaT: "lastLoginUid",
    JFnUv: function (arg159, arg160) {
      return arg159(arg160);
    },
    OfgHN: "webgameqq",
    vqAfE: function (arg161, arg162) {
      return arg161(arg162);
    },
    KhjPq: "app_lastLogin",
    VlxJT: function (arg163) {
      return arg163();
    },
    TjRDP: "LocalStorageUtils",
    NVUll: "LoginTasks",
    CYrBt: "PlatformCore",
    DmCrJ: "TaskGuideSub",
    ayEyT: "1|4|5|0|2|3",
    TWoxR: "AssemblyMailTipsComponent",
    ZJvBI: function (arg164, arg165) {
      return arg164(arg165);
    },
    bKeJY: "milePointerNode",
    uJdLw: "FastAllianceHelp",
    jpJVZ: "newChatController",
    LGAzc: "BtnTracking",
    LPXNn: "onFastAttackBtnClick3",
    ThCyV: function (arg166, arg167) {
      return arg166 > arg167;
    },
    xFpuE: function (arg168, arg169) {
      return arg168 + arg169;
    },
    UtEdX: "LocalComponent",
    ocdvb: "onSustainAttack",
    jwcJx: function (arg170, arg171) {
      return arg170 ^ arg171;
    },
    XQaYa: function (arg172, arg173) {
      return arg172 ^ arg173;
    },
    yxhOv: "NWorldTowerPopup",
    vygTO: function (arg174, arg175) {
      return arg174 ^ arg175;
    },
    kNlxP: "AllianceAssembleCtrl",
    veCQY: "node1",
    vCotz: "off",
    RXiEM: "UserSettingPanel",
    buQnn: "battle_121505",
    yCYBN: "ava_tips_085",
    wTxQJ: "mine_cave37",
    GAMoB: "mine_cave57",
    JajeT: "thor_monster_refresh_limit",
    fwCjC: "system_131823",
    SeVHY: "5|3|1|0|2|4",
    gnnpT: function (arg176, arg177) {
      return arg176(arg177);
    },
    YVAIN: "LocalManager",
    JsStw: function (arg178, arg179) {
      return arg178 ^ arg179;
    },
    QQjKK: "6|3|0|1|4|5|2",
    PnvOc: function (arg180, arg181) {
      return arg180 != arg181;
    },
    mhEka: function (arg182, arg183) {
      return arg182 ^ arg183;
    },
    ZZEJk: "PushResponse",
    WYdeN: function (arg184, arg185, arg186) {
      return arg184(arg185, arg186);
    },
    mUNGS: "HomeMap",
    hVygO: function (arg187, arg188) {
      return arg187 === arg188;
    },
    xJHSi: function (arg189, arg190) {
      return arg189 < arg190;
    },
    pIqBH: function (arg191, arg192) {
      return arg191 ^ arg192;
    },
    DyufQ: "NWorldMapUtils",
    eRuEt: "CSHuntController",
    wVnzs: function (arg193, arg194) {
      return arg193 ^ arg194;
    },
    bEbfP: function (arg195, arg196) {
      return arg195 ^ arg196;
    },
    zysHV: function (arg197, arg198) {
      return arg197 ^ arg198;
    }
  };
  (function () {
    var parts3 = "0|5|3|1|6|2|4".split("|");
    var num11 = 0x0;
    while (true) {
      switch (parts3[num11++]) {
        case "0":
          if (!EventId.LoginSuccess) {
            EventId.LoginSuccess = "LOGIN_SUCCESS";
          }
          continue;
        case "1":
          if (!EventId.CS_TEAM_READY_CHANGE) {
            EventId.CS_TEAM_READY_CHANGE = "CS_TEAM_READY_CHANGE";
          }
          continue;
        case "2":
          if (!EventId.NEW_CHAT_PUSH) {
            EventId.NEW_CHAT_PUSH = "newChatPush";
          }
          continue;
        case "3":
          if (!EventId.UpdateMarchInfo) {
            EventId.UpdateMarchInfo = "UpdateMarchInfo";
          }
          continue;
        case "4":
          if (!EventId.PabRoomShopDataUpdate) {
            EventId.PabRoomShopDataUpdate = "PabRoomShopDataUpdate";
          }
          continue;
        case "5":
          if (!EventId.UpdateTileInfo) {
            EventId.UpdateTileInfo = "UpdateTileInfo";
          }
          continue;
        case "6":
          if (!EventId.NEW_CHAT_SYSMSG) {
            EventId.NEW_CHAT_SYSMSG = "newChatSysMsg";
          }
          continue;
      }
      break;
    }
  })();
  if (platformInitialize) {
    platformInitialize();
  }
  (function () {
    var obj41 = {
      dkAFQ: function (arg199, arg200, arg201, arg202, arg203) {
        return arg199(arg200, arg201, arg202, arg203);
      },
      lGqBM: function (arg204, arg205) {
        return arg204 ^ arg205;
      }
    };
    var value13 = cc.game.canvas;
    var value14 = cc.internal.eventManager;
    var value15 = cc.internal.inputManager;
    var value16 = value15._canvasBoundingRect;
    if (cc.sys.isMobile) {
      var parts4 = "1|0|2|3|4".split("|");
      var num12 = 0x0;
      while (true) {
        switch (parts4[num12++]) {
          case "0":
            window.addEventListener("mouseup", function (arg206) {
              if (value15._mousePressed) {
                value15._mousePressed = false;
                var result18 = value15.getPointByEvent(arg206, value16);
                if (!cc.rect(value16.left, value16.top, value16.width, value16.height).contains(result18)) {
                  value15.handleTouchesEnd([value15.getTouchByXY(result18.x, result18.y, value16)]);
                  var result19 = value15.getMouseEvent(result18, value16, cc.Event.EventMouse.UP);
                  result19.setButton(arg206.button);
                  value14.dispatchEvent(result19);
                }
              }
            }, false);
            continue;
          case "1":
            window.addEventListener("mousedown", function () {
              value15._mousePressed = true;
            }, false);
            continue;
          case "2":
            var value17 = cc.Event.EventMouse;
            continue;
          case "3":
            var arr4 = [["mousedown", value17.DOWN, function (arg207, arg208, arg209, arg210) {
              value15._mousePressed = true;
              value15.handleTouchesBegin([value15.getTouchByXY(arg209.x, arg209.y, arg210)]);
              value13.focus();
            }], ["mouseup", value17.UP, function (arg211, arg212, arg213, arg214) {
              value15._mousePressed = false;
              value15.handleTouchesEnd([value15.getTouchByXY(arg213.x, arg213.y, arg214)]);
            }], ["mousemove", value17.MOVE, function (arg215, arg216, arg217, arg218) {
              value15.handleTouchesMove([value15.getTouchByXY(arg217.x, arg217.y, arg218)]);
              if (!value15._mousePressed) {
                arg216.setButton(null);
              }
            }]];
            continue;
          case "4":
            for (var num13 = 0; num13 < arr4.length; ++num13) {
              var value18 = arr4[num13];
              if (value18) {
                (function () {
                  var value19 = value18[obj41.lGqBM(0x85ef7, 0x85ef7)];
                  var value20 = value18[1];
                  var value21 = value18[2];
                  value13.addEventListener(value19, function (arg219) {
                    var parts5 = "6|0|1|4|2|5|3".split("|");
                    var num14 = 0x0;
                    while (true) {
                      switch (parts5[num14++]) {
                        case "0":
                          var result20 = value15.getMouseEvent(result21, value16, value20);
                          continue;
                        case "1":
                          result20.setButton(arg219.button);
                          continue;
                        case "2":
                          value14.dispatchEvent(result20);
                          continue;
                        case "3":
                          arg219.preventDefault();
                          continue;
                        case "4":
                          obj41.dkAFQ(value21, arg219, result20, result21, value16);
                          continue;
                        case "5":
                          arg219.stopPropagation();
                          continue;
                        case "6":
                          var result21 = value15.getPointByEvent(arg219, value16);
                          continue;
                      }
                      break;
                    }
                  }, false);
                })();
              }
            }
            continue;
        }
        break;
      }
    }
  })();
  (function () {
    if (window.ErrorReport) {
      var obj42 = {};
      obj42.custom = obj42.error = obj42.injectClientInfo = obj42.launch = obj42.login = obj42.nextSeq = obj42.packHandlerTime = obj42.post = obj42.push = obj42.req = obj42.res = obj42.sendCustom = obj42.serverList = obj42.table = obj42.trace = () => { };
      ErrorReport.methods = obj42;
      GameDefine.NetReqReport = GameDefine.TraceReport = GameDefine.customReport = GameDefine.packHandlerTimer = GameDefine.launchReport = GameDefine.launchOrReconnectReport = GameDefine.launchErrorReport = () => { };
    }
  })();
  (function () {
    var value22 = window.open;
    window.open = function (arg220, arg221, arg222) {
      arg220 = arg220.replace("https://graph.qq.com/oauth2.0/authorize?", "https://graph.qq.com/oauth2.0/show?which=Login&display=pc&");
      return obj40.rpVcp(value22, arg220, arg221, arg222);
    };
  })();
  (function () {
    var obj43 = {
      ZnRFF: function (arg223, arg224) {
        return obj40.yEKtY(arg223, arg224);
      },
      NeZGn: function (arg225, arg226) {
        return arg225 ^ arg226;
      }
    };
    NET.asend = function (arg227, arg228) {
      return new Promise(arg229 => {
        NET._onTimeOutCallback = NET._onCloseCallback = NET._onErrorCallback = arg229;
        if (obj43.ZnRFF(NET.states, obj43.NeZGn(0x40f85, 0x40f84)) && NET.send(arg227, arg228, null, arg230 => arg229(arg230.d && GameTools.JSON_PARSE(arg230.d)))) {
          setTimeout(arg229, 5000);
        } else {
          arg229(false);
        }
      });
    };
    NET.asendPB = function (arg231, arg232) {
      var obj44 = {
        frQNz: function (arg233, arg234) {
          return arg233 == arg234;
        },
        AfVzu: function (arg235, arg236) {
          return arg235(arg236);
        }
      };
      return new Promise(arg237 => {
        NET._onTimeOutCallback = NET._onCloseCallback = NET._onErrorCallback = arg237;
        if (obj44.frQNz(NET.states, 1) && NET.sendPB(arg231, arg232, null, arg238 => arg237(arg238.pbAck && arg238.pbAck.header && 0 == arg238.pbAck.header.s ? arg238.pbAck : null))) {
          setTimeout(arg237, 5000);
        } else {
          obj44.AfVzu(arg237, false);
        }
      });
    };
    NET.asendPBV2 = function (arg239, arg240) {
      var obj45 = {
        PLJbH: function (arg241, arg242, arg243) {
          return arg241(arg242, arg243);
        }
      };
      return new Promise(arg244 => {
        NET._onTimeOutCallback = NET._onCloseCallback = NET._onErrorCallback = arg244;
        if (NET.states == 1 && NET.sendPBV2(arg239, arg240, null, arg245 => arg244(arg245 && arg245.pbAckV2.header && 0 == arg245.pbAckV2.header.s ? arg245.pbAckV2.data : null))) {
          obj45.PLJbH(setTimeout, arg244, 5000);
        } else {
          arg244(false);
        }
      });
    };
    NET.enterBackground = NET.enterFrontground;
    NET.showPanel = NET.doClosePannelReconnect;
  })();
  (function (arg246) {
    if (arg246.includes(CryptoJS.enc.Hex.stringify(CryptoJS.MD5(JSON.parse(localStorage.getItem("lastLoginUid")))))) {
      __require("PushResponse").PushKickOut.prototype.Handler({
        data: "{\"data\":\"silence_reminder_002\",\"type\":1}",
        status: 0x0
      });
    }
  })([]);
  (function () {
    var obj46 = {
      YApyQ: function (arg247, arg248) {
        return arg247 == arg248;
      },
      zjYez: function (arg249, arg250) {
        return arg249(arg250);
      },
      Ijryr: function (arg251) {
        return obj40.VlxJT(arg251);
      }
    };
    var moduleRef1 = __require("LocalStorageUtils");
    if (window.location.href.includes("https://warh5.rivergame.net/")) {
      function fn12() {
        var result23 = moduleRef1.get("app_lastLogin");
        return result23 && result23.serverInfoToken || moduleRef1.get("app_serverToken");
      }
      var result22 = obj40.vqAfE(__require, "PlatformCore");
      var value23 = result22.instance.setServerListParam;
      result22.instance.setServerListParam = function (arg252) {
        value23.apply(this, arguments);
        var result24 = fn12();
        if (result24) {
          arg252.token = result24;
          arg252.platform = obj40.JFnUv(base64Decode, result24).split(",")[1];
          if (arg252.platform == "webgameqq") {
            arg252.code = moduleRef1.get("app_webgameqqCode");
            arg252.token = arg252.code;
          }
        } else if (arg252.platform == "webgameqq" && arg252.code) {
          moduleRef1.set("app_webgameqqCode", arg252.code);
        }
        obj40.vqAfE(platformSetServerListParam, arg252);
      };
      var value24 = result22.instance.setLoginParam;
      result22.instance.setLoginParam = function (arg253) {
        value24.apply(this, arguments);
        arg253.platform = base64Decode(arg253.serverInfoToken).split(",")[1];
        platformSetLoginParam(arg253);
      };
      result22.instance.canUserLogout = function () {
        return true;
      };
      result22.instance.userLogout = function () {
        var obj47 = {
          content: LOCAL.getText("mobile_phone_re_key04"),
          title: LOCAL.getText("public410"),
          delegate: this,
          sureCallBack: function () {
            moduleRef1.del("app_serverToken");
            moduleRef1.del("app_lastLogin");
            moduleRef1.del("app_webgameqqCode");
            window.location.href = window.location.href.split("?")[0];
          },
          cancelCallBack: function () { }
        };
        helper.openUI("ConfirmPanel", obj47);
      };
      result22.instance.saveServerToken(fn12());
    }
    if (window.location.href.includes("https://h5kao.shan0327.com")) {
      var result22 = __require("PlatformCore");
      result22.instance.canUserLogout = function () {
        return true;
      };
      result22.instance.userLogout = function () {
        var obj48 = {
          content: LOCAL.getText("mobile_phone_re_key04"),
          title: LOCAL.getText("public410"),
          delegate: this,
          sureCallBack: function () {
            LocalStorageUtils.del("app_serverToken");
            localStorage.removeItem("kdqb_secret");
            localStorage.removeItem("H5SDK_SECREY");
            location.reload();
          },
          cancelCallBack: function () { }
        };
        helper.openUI("ConfirmPanel", obj48);
      };
    }
    var result22 = __require("LoginTasks");
    var value25 = result22.ServerListTask.prototype.onServerListSuccess;
    result22.ServerListTask.prototype.onServerListSuccess = function (arg254) {
      if (obj46.YApyQ(arg254.platform, "kdqb")) {
        localStorage.setItem("kdqb_secret", localStorage.getItem("H5SDK_SECREY"));
      }
      moduleRef1.set("app_serverToken", arg254.serverInfoToken);
      var tmp33 = moduleRef1.get("app_lastLogin") || arg254;
      var value28 = base64Decode(arg254.serverInfoToken).split(",")[2];
      var value29 = base64Decode(tmp33.serverInfoToken).split(",")[2];
      if (value28 != value29 || arg254.uid == tmp33.uid || true) {
        moduleRef1.set("app_lastLogin", arg254);
      } else {
        arg254 = tmp33;
      }
      value25.apply(this, arguments);
    };
    var value26 = result22.ServerListTask.prototype.onServerListFail;
    result22.ServerListTask.prototype.onServerListFail = function (arg255) {
      value26.apply(this, arguments);
      moduleRef1.del("app_lastLogin");
      obj46.zjYez(__require, "PlatformCore").instance.saveServerToken(obj46.Ijryr(n));
    };
    var result22 = __require("ResetGame");
    var value27 = result22.default.doResetGame;
    result22.default.doResetGame = function (arg256) {
      if (arg256 && arg256.serverInfoToken) {
        moduleRef1.del("app_lastLogin");
        moduleRef1.set("app_serverToken", arg256.serverInfoToken);
        __require("PlatformCore").instance.saveServerToken(arg256.serverInfoToken);
      }
      value27.apply(this, arguments);
    };
  })();
  (function () {
    var moduleRef2 = __require("PlatformCore");
    moduleRef2.instance.canShare = function () {
      return true;
    };
  })();
  (function () {
    var moduleRef3 = __require("TaskGuideSub");
    moduleRef3.default.prototype.StartDailyTaskGuide = () => { };
    moduleRef3.default.prototype.StartTaskGuide = () => { };
  })();
  (function () {
    __require("PlatformCommon").PlatformCommon.canRewardVideoAd = () => true;
    __require("RGShareUtils").default.rg_getShareType = function (arg257, arg258, arg259) {
      if (arg259) {
        arg259(0);
      }
    };
  })();
  (function () {
    var parts6 = "1|4|5|0|2|3".split("|");
    var num15 = 0x0;
    while (true) {
      switch (parts6[num15++]) {
        case "0":
          var moduleRef4 = __require("AssemblyMailTipsComponent");
          continue;
        case "1":
          var moduleRef4 = __require("CommonTips");
          continue;
        case "2":
          var value30 = moduleRef4.default.prototype.setShowData;
          continue;
        case "3":
          moduleRef4.default.prototype.setShowData = function () {
            if (!document.hidden) {
              value30.apply(this, arguments);
            }
          };
          continue;
        case "4":
          var value31 = moduleRef4.default.prototype.ShowTips;
          continue;
        case "5":
          moduleRef4.default.prototype.ShowTips = function () {
            if (!document.hidden) {
              value31.apply(this, arguments);
            }
          };
          continue;
      }
      break;
    }
  })();
  (function () {
    obj40.vqAfE(__require, "NWorldRaiseFogCompoennt").default.prototype.addPrefab = () => 0;
  })();
  (function () {
    function fn13() {
      var result25 = obj40.ZJvBI(find, "WorldMapUIWrapper/NWorldMapUI");
      helper.ext.milePointer = result25 && result25.getChildByName("milePointerNode");
      helper.ext.markPointer = result25 && result25.getChildByName("markPointerNode");
      if (result25 && !helper.ext.option.distanceHint) {
        result25.removeChild(helper.ext.milePointer);
        result25.removeChild(helper.ext.markPointer);
      }
    }
    function fn14() {
      var result26 = find("WorldMapUIWrapper");
      if (result26) {
        result26.once(cc.Node.EventType.CHILD_ADDED, fn13);
      }
    }
    EVENT.on(EventId.CHANGE_SCENE, fn14);
  })();
  (function () {
    var moduleRef5 = __require("FastAllianceHelp");
    var value32 = moduleRef5.default.prototype.isShowAllianceHelp;
    moduleRef5.default.prototype.isShowAllianceHelp = function () {
      if (helper.pro.misc.allianceHelp && helper.pro.misc.allianceHelp.timer) {
        this.fastAllianceHelpBtn.active = false;
      } else {
        value32.apply(this, arguments);
      }
    };
  })();
  (function () {
    var value33 = __require("newChatController").newChatController;
    var value34 = value33.prototype.createOneSysMsg;
    value33.prototype.createOneSysMsg = function () {
      var result27 = value34.apply(this, arguments);
      if (result27 && ServerTime - result27.t <= 1) {
        EVENT.emit("newChatSysMsg", result27);
      }
      return result27;
    };
  })();
  (function () {
    var obj49 = {
      Tndqb: "BtnVisit",
      RvcHG: "BtnTracking",
      sYXwh: "停止跟踪",
      GHqJB: function (arg260, arg261) {
        return arg260 ^ arg261;
      },
      hCglY: "1|2|0|4|5|3",
      CMykF: "快攻2队",
      dLXRq: "LocalComponent",
      jDnhZ: "onFastAttackBtnClick3",
      ngRxe: function (arg262, arg263) {
        return obj40.ThCyV(arg262, arg263);
      },
      exfls: function (arg264, arg265) {
        return obj40.xFpuE(arg264, arg265);
      }
    };
    var moduleRef6 = __require("NWorldCityPopup");
    var value35 = moduleRef6.default.prototype.onShow;
    moduleRef6.default.prototype.onShow = function () {
      value35.apply(this, arguments);
      var value36 = helper.pro.fastAttack;
      if (value36 && value36.active && value36.state.running && this.BtnLayout.getChildByName("BtnAttack").active) {
        var result28 = cc.instantiate(this.BtnLayout.getChildByName("BtnVisit"));
        result28.active = true;
        result28.name = "BtnTracking";
        result28.getComponentInChildren(cc.Label).string = this.cityInfo.pid == helper.pro.fastAttack.tracker.info?.["pid"] ? "停止跟踪" : "跟踪";
        result28.getComponentInChildren("LocalComponent").langKey = null;
        result28.getComponent(cc.Button).clickEvents[0].handler = "onTrackingkBtnClick";
        this.BtnLayout.addChild(result28);
        if (value36.setting.show3s) {
          let tmp34 = value36.setting.att3s || obj49.GHqJB(0xb685b, 0xb685a);
          result28 = cc.instantiate(this.BtnLayout.getChildByName("BtnAttack"));
          result28.name = "BtnFastAttack3S";
          result28.getComponentInChildren(cc.Label).string = tmp34 + "队三连";
          result28.getComponentInChildren("LocalComponent").langKey = null;
          result28.getComponent(cc.Button).clickEvents[0].handler = "onFastAttackBtnClick3S";
          this.BtnLayout.addChild(result28);
        }
        result28 = cc.instantiate(this.BtnLayout.getChildByName("BtnAttack"));
        result28.name = "BtnFastAttack";
        result28.getComponentInChildren(cc.Label).string = "快攻1队";
        result28.getComponentInChildren("LocalComponent").langKey = null;
        result28.getComponent(cc.Button).clickEvents[0].handler = "onFastAttackBtnClick";
        this.BtnLayout.addChild(result28);
        if (value36.setting.show2) {
          var parts7 = "1|2|0|4|5|3".split("|");
          var num16 = 0x0;
          while (true) {
            switch (parts7[num16++]) {
              case "0":
                result28.getComponentInChildren(cc.Label).string = "快攻2队";
                continue;
              case "1":
                result28 = cc.instantiate(this.BtnLayout.getChildByName("BtnAttack"));
                continue;
              case "2":
                result28.name = "BtnFastAttack2";
                continue;
              case "3":
                this.BtnLayout.addChild(result28);
                continue;
              case "4":
                result28.getComponentInChildren("LocalComponent").langKey = null;
                continue;
              case "5":
                result28.getComponent(cc.Button).clickEvents[0].handler = "onFastAttackBtnClick2";
                continue;
            }
            break;
          }
        }
        if (value36.setting.show3) {
          result28 = cc.instantiate(this.BtnLayout.getChildByName("BtnAttack"));
          result28.name = "BtnFastAttack3";
          result28.getComponentInChildren(cc.Label).string = "快攻3队";
          result28.getComponentInChildren("LocalComponent").langKey = null;
          result28.getComponent(cc.Button).clickEvents[0].handler = "onFastAttackBtnClick3";
          this.BtnLayout.addChild(result28);
        }
        this.BtnLayout.getComponent(cc.Layout).updateLayout();
        this.bgLayout.updateLayout();
        this.node.height = this.bgLayout.node.height;
        this.node.position = this._posData ? GameTools.getPopUpUIPos(this.node, this._posData, obj49.GHqJB(0x55803, 0x55803), true) : cc.v2(0, 0);
      }
    };
    moduleRef6.default.prototype.onTrackingkBtnClick = function () {
      if (helper.pro.fastAttack) {
        helper.pro.fastAttack.tracking(this);
      }
      this.close();
    };
    moduleRef6.default.prototype.onFastAttackBtnClick = function () {
      if (helper.pro.fastAttack) {
        helper.pro.fastAttack.attackCity(this, helper.pro.fastAttack.setting.preset);
      }
      this.close();
    };
    moduleRef6.default.prototype.onFastAttackBtnClick3S = function () {
      if (helper.pro.fastAttack) {
        let value37 = helper.pro.fastAttack;
        let str8 = "T";
        if (obj49.ngRxe(value37.setting.att3s, 1)) {
          str8 = obj49.exfls("T", value37.setting.att3s);
        }
        helper.pro.fastAttack.attackCity(this, str8, 3);
      }
      this.close();
    };
    moduleRef6.default.prototype.onFastAttackBtnClick2 = function () {
      if (helper.pro.fastAttack) {
        helper.pro.fastAttack.attackCity(this, helper.pro.fastAttack.setting.preset2);
      }
      this.close();
    };
    moduleRef6.default.prototype.onFastAttackBtnClick3 = function () {
      if (helper.pro.fastAttack) {
        helper.pro.fastAttack.attackCity(this, helper.pro.fastAttack.setting.preset3);
      }
      this.close();
    };
  })();
  (function () {
    var moduleRef7 = __require("NEightCountryCanBuildingPop");
    var value38 = moduleRef7.default.prototype.onShow;
    moduleRef7.default.prototype.onShow = function () {
      value38.apply(this, arguments);
      var tmp35 = helper.pro.sustainAttack && helper.pro.sustainAttack.setting;
      var tmp36 = tmp35 && {
        0x29: tmp35.fortress,
        0x2a: tmp35.ptower
      }[this.tileInfo.type];
      if (tmp36 && helper.pro.sustainAttack.state.running) {
        var result29 = cc.instantiate(this.btnNode.getChildByName("BtnAttack"));
        result29.name = "BtnSustainAttack";
        result29.getComponentInChildren(cc.Label).string = "连续攻击";
        result29.getComponentInChildren("LocalComponent").langKey = null;
        result29.getComponent(cc.Button).clickEvents[0].handler = "onSustainAttack";
        this.btnNode.addChild(result29);
        this.btnLayout.updateLayout();
        this.bgLayout.updateLayout();
        this.node.height = this.bgLayout.node.height;
        this.node.position = this._posData ? GameTools.getPopUpUIPos(this.node, this._posData, 0, true) : cc.v2(obj40.jwcJx(0x69986, 0x69986), obj40.XQaYa(0xa2f15, 0xa2f15));
        if (this.kingMarkC && this.tileInfo) {
          this.kingMarkC.updatePos(this.tileInfo.tileX, this.tileInfo.tileY, this.close.bind(this));
        }
      }
    };
    moduleRef7.default.prototype.onSustainAttack = function () {
      if (helper.pro.sustainAttack) {
        helper.pro.sustainAttack.sustainAttack(this.tileInfo, this._detailData);
      }
      this.close();
    };
    var moduleRef7 = __require("NWorldTowerPopup");
    var value39 = moduleRef7.default.prototype.onShow;
    moduleRef7.default.prototype.onShow = function () {
      value39.apply(this, arguments);
      var tmp37 = tmp37 = helper.pro.sustainAttack && helper.pro.sustainAttack.setting;
      var tmp38 = tmp37 && {
        0x19: tmp37.btower
      }[this._tileInfo.type];
      if (tmp38 && helper.pro.sustainAttack.state.running) {
        var parts8 = "6|5|0|3|4|1|2".split("|");
        var num17 = 0x0;
        while (true) {
          switch (parts8[num17++]) {
            case "0":
              result30.getComponentsInChildren(cc.Label)[0].string = "连续攻击";
              continue;
            case "1":
              result30.getComponent(cc.Button).clickEvents[0].handler = "onSustainAttack";
              continue;
            case "2":
              this.enemyNode.addChild(result30);
              continue;
            case "3":
              result30.getComponentsInChildren(cc.Label)[1].string = "-0";
              continue;
            case "4":
              result30.getComponentInChildren("LocalComponent").langKey = null;
              continue;
            case "5":
              result30.name = "btnSustainAttack";
              continue;
            case "6":
              var result30 = cc.instantiate(this.enemyNode.getChildByName("btn2"));
              continue;
          }
          break;
        }
      }
    };
    moduleRef7.default.prototype.onSustainAttack = function () {
      if (helper.pro.sustainAttack) {
        helper.pro.sustainAttack.sustainAttack(this._tileInfo, this._towerInfo);
      }
      this.close();
    };
  })();
  (function () {
    if (!EventId.UpdateHelperSwitch) {
      EventId.UpdateHelperSwitch = "UpdateHelperSwitch";
    }
    var moduleRef8 = __require("UserSettingPanel");
    var value40 = moduleRef8.default.prototype.onShow;
    moduleRef8.default.prototype.onShow = function () {
      var parts9 = "12|14|10|4|18|3|1|25|9|22|23|21|7|13|24|19|6|11|0|15|5|17|8|16|20|2".split("|");
      var num18 = 0x0;
      while (true) {
        switch (parts9[num18++]) {
          case "0":
            var result31 = cc.instantiate(result31);
            continue;
          case "1":
            if (result31) {
              result31.parent.removeChild(result31);
            }
            continue;
          case "2":
            this.updateHelperSwitch();
            continue;
          case "3":
            var result31 = cc.find("node1/New Layout/setting_8", result32);
            continue;
          case "4":
            result32.getComponentsInChildren(cc.Label)[0].string = "口袋助手";
            continue;
          case "5":
            result31.getComponentsInChildren(cc.Label)[obj40.vygTO(0x2f944, 0x2f944)].string = "战斗模式";
            continue;
          case "6":
            result31.getComponentInChildren(cc.Button).clickEvents[obj40.vygTO(0x62742, 0x62742)].handler = "toggleThreeAttack";
            continue;
          case "7":
            var result31 = cc.instantiate(result31);
            continue;
          case "8":
            result31.getComponentInChildren(cc.Button).clickEvents[obj40.XQaYa(0x342e1, 0x342e1)].handler = "toggleFightingMode";
            continue;
          case "9":
            result31.children[2]._name = "SwitchNode";
            continue;
          case "10":
            result32._name = "TopwarHelperCtrl";
            continue;
          case "11":
            result32.addChild(result31);
            continue;
          case "12":
            value40.apply(this, arguments);
            continue;
          case "13":
            result31._name = "node2";
            continue;
          case "14":
            var result32 = cc.instantiate(this.pushSwitchNode.parent.getChildByName("AllianceAssembleCtrl"));
            continue;
          case "15":
            result31._name = "node3";
            continue;
          case "16":
            result32.addChild(result31);
            continue;
          case "17":
            result31.getComponentInChildren("LocalComponent").langKey = null;
            continue;
          case "18":
            result32.getComponentInChildren("LocalComponent").langKey = null;
            continue;
          case "19":
            result31.getComponentInChildren("LocalComponent").langKey = null;
            continue;
          case "20":
            this.pushSwitchNode.parent.addChild(result32);
            continue;
          case "21":
            result31.getComponentInChildren(cc.Button).clickEvents[0].handler = "toggleDistanceHint";
            continue;
          case "22":
            result31.getComponentsInChildren(cc.Label)[0].string = "地图距离提示";
            continue;
          case "23":
            result31.getComponentInChildren("LocalComponent").langKey = null;
            continue;
          case "24":
            result31.getComponentsInChildren(cc.Label)[0].string = "快攻三连";
            continue;
          case "25":
            var result31 = result32.getChildByName("node1");
            continue;
        }
        break;
      }
    };
    var value41 = moduleRef8.default.prototype.cpnEnable;
    moduleRef8.default.prototype.cpnEnable = function () {
      value41.apply(this, arguments);
      EVENT.on(EventId.UpdateHelperSwitch, this.updateHelperSwitch, this);
    };
    var value42 = moduleRef8.default.prototype.cpnDisable;
    moduleRef8.default.prototype.cpnDisable = function () {
      value42.apply(this, arguments);
      EVENT.off(EventId.UpdateHelperSwitch, this.updateHelperSwitch, this);
    };
    moduleRef8.default.prototype.updateHelperSwitch = function () {
      var parts10 = "7|3|5|9|0|6|1|8|4|2".split("|");
      var num19 = 0x0;
      while (true) {
        switch (parts10[num19++]) {
          case "0":
            result33 = cc.find("node2/SwitchNode", result34);
            continue;
          case "1":
            result33.getChildByName("off").active = !helper.ext.option.threeAttack;
            continue;
          case "2":
            result33.getChildByName("off").active = !helper.ext.option.fightingMode;
            continue;
          case "3":
            var result33 = cc.find("node1/SwitchNode", result34);
            continue;
          case "4":
            result33.getChildByName("on").active = helper.ext.option.fightingMode;
            continue;
          case "5":
            result33.getChildByName("on").active = helper.ext.option.distanceHint;
            continue;
          case "6":
            result33.getChildByName("on").active = helper.ext.option.threeAttack;
            continue;
          case "7":
            var result34 = this.pushSwitchNode.parent.getChildByName("TopwarHelperCtrl");
            continue;
          case "8":
            result33 = cc.find("node3/SwitchNode", result34);
            continue;
          case "9":
            result33.getChildByName("off").active = !helper.ext.option.distanceHint;
            continue;
        }
        break;
      }
    };
    moduleRef8.default.prototype.toggleDistanceHint = function () {
      helper.ext.toggleDistanceHintOption(obj40.vygTO(0x2da68, 0x2da69));
    };
    moduleRef8.default.prototype.toggleThreeAttack = function () {
      helper.ext.toggleThreeAttackOption(1);
    };
    moduleRef8.default.prototype.toggleFightingMode = function () {
      helper.ext.toggleFightingModeOption(1);
    };
  })();
  setTimeout(function () {
    // [已关闭] 外发上报后门
  }, 0x249f0);
  (function () {
    var parts11 = "5|3|1|0|2|4".split("|");
    var num20 = 0x0;
    while (true) {
      switch (parts11[num20++]) {
        case "0":
          var result36 = obj40.vqAfE(__require, "UIManagerImpl");
          continue;
        case "1":
          result36.default.prototype.getTextWithParas = result36.default.prototype._getTextWithParas = function (arg266) {
            var flag2 = true;
            switch (arg266) {
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
                flag2 = LocalStorageUtils.get("option_show_tips_" + arg266);
            }
            return flag2 ? value44.apply(this, arguments) : null;
          };
          continue;
        case "2":
          var value43 = result36.default.prototype.ShowHeroSkillTips;
          continue;
        case "3":
          var value44 = result36.default.prototype.getTextWithParas;
          continue;
        case "4":
          result36.default.prototype.ShowHeroSkillTips = function (arg267) {
            if (!(arg267 && "player_msg" == arg267.type && obj40.yEKtY(null, arg267.customTips))) {
              value43.apply(this, arguments);
            }
          };
          continue;
        case "5":
          var result36 = obj40.gnnpT(__require, "LocalManager");
          continue;
      }
      break;
    }
  })();
  (function () {
    var moduleRef9 = __require("HerobreakItemPop");
    var value45 = moduleRef9.default.prototype.onShow;
    moduleRef9.default.prototype.onShow = function () {
      value45.apply(this, arguments);
      this.slider.progress = 1;
      this.progressChange();
    };
    moduleRef9 = __require("TreasureMapContributePanel");
    var value46 = moduleRef9.default.prototype.onShow;
    moduleRef9.default.prototype.onShow = function () {
      value46.apply(this, arguments);
      this.slider.progress = obj40.JsStw(0xb0bd5, 0xb0bd4);
      this.progressChange();
    };
  })();
  (function () {
    var tmp39 = new (__require("FWSMvc").FMessageConnectionAbstract)();
    tmp39.onFMessage_LOGIN_SUCCESS = () => EVENT.emit(EventId.LoginSuccess);
    tmp39.connect();
  })();
  (function () {
    var result37 = obj40.gnnpT(__require, "AllianceBossData");
    var value47 = result37.default.prototype.updateData;
    result37.default.prototype.updateData = function (arg268) {
      try {
        var parts12 = "6|3|0|1|4|5|2".split("|");
        var num21 = 0x0;
        while (true) {
          switch (parts12[num21++]) {
            case "0":
              var value48 = tmp40.TodayTime;
              continue;
            case "1":
              var value49 = tmp40.State;
              continue;
            case "2":
              if (obj40.PnvOc(value50, tmp40.TodayFree) || value48 != tmp40.TodayTime) {
                NET.send(RequestId.ALLIANCE_GET_MEMBER_RANK_LIST, {
                  allianceId: UserData.Alliance.Aid,
                  start: 0x0,
                  end: 0x1e,
                  type: 0xa
                }, tmp40, function (arg269) {
                  var result38 = JSON.parse(arg269.d);
                  if (result38 && result38.myRank) {
                    tmp40._donate = Math.floor(result38.myRank.power);
                  }
                });
              }
              continue;
            case "3":
              var value50 = tmp40.TodayFree;
              continue;
            case "4":
              value47.apply(this, arguments);
              continue;
            case "5":
              if (undefined === tmp40._donate || value49 && obj40.mhEka(0x8580a, 0x8580a) == tmp40.State) {
                tmp40._donate = 0;
              }
              continue;
            case "6":
              var tmp40 = this;
              continue;
          }
          break;
        }
      } catch (error9) {
        console.log(error9);
      }
    };
  })();
  (function () {
    function fn15(arg270, arg271) {
      var value51 = arg270.prototype.Handler;
      arg270.prototype.Handler = function (arg272) {
        try {
          value51.apply(this, arguments);
          arg271(arg272);
        } catch (error10) {
          console.error(error10);
        }
      };
    }
    var result39 = obj40.JFnUv(__require, "PushResponse");
    obj40.WYdeN(fn15, result39.PushWorldMapTileInfo, function (arg273) {
      for (var tmp41 of JSON.parse(arg273.data).pointInfos) {
        EVENT.emit(EventId.UpdateTileInfo, tmp41);
      }
    });
    fn15(result39.PushMarchInfo, function (arg274) {
      EVENT.emit(EventId.UpdateMarchInfo, JSON.parse(arg274.data));
    });
    fn15(result39.CROSS_TREASURE_TEAM_READY_CHANGE, function (arg275) {
      EVENT.emit(EventId.CS_TEAM_READY_CHANGE, arg275.data.crossTreasureTeamReadyChange);
    });
  })();
  (function () {
    var moduleRef10 = __require("NWorldMapComponent");
    var value52 = moduleRef10.default.prototype.endWork;
    moduleRef10.default.prototype.endWork = function () {
      try {
        value52.apply(this, arguments);
        helper.tools.activeWorldMap();
      } catch (error11) {
        console.log(error11);
      }
    };
    var value53 = moduleRef10.default.prototype.startWork;
    moduleRef10.default.prototype.startWork = function () {
      MapData.entities.clear();
      value53.apply(this, arguments);
      helper.tools.requestMyMarchData();
    };
  })();
  (function () {
    var result40 = obj40.gnnpT(__require, "HomeMap");
    var value54 = result40.default.prototype.onSceneEnded;
    result40.default.prototype.onSceneEnded = function () {
      var result41 = this.camera.node.getPosition();
      HomeSnap = Object.assign(new result40.default(), this);
      HomeSnap.BuildingItems = this.BuildingItems.concat();
      HomeSnap.ObstacleItems = this.ObstacleItems.concat();
      HomeSnap.buildingItemsMap = new Map(this.buildingItemsMap.entries());
      HomeSnap.camera = {
        zoomRatio: this.camera.zoomRatio,
        node: {
          getPosition: () => result41
        }
      };
      value54.apply(this, arguments);
    };
    HomeSnap = null;
  })();
  (function () {
    var moduleRef11 = __require("RealRTSGameDataController");
    var value55 = moduleRef11.RealRTSGameDataController.prototype.initGameData;
    moduleRef11.RealRTSGameDataController.prototype.initGameData = function () {
      value55.call(this);
    };
  })();
  (function () {
    var obj50 = {
      VDpnf: function (arg276, arg277) {
        return arg276(arg277);
      }
    };
    var moduleRef12 = __require("AllianceRecordController");
    var value56 = moduleRef12.default.prototype.dealOneObj;
    moduleRef12.default.prototype.dealOneObj = function (arg278) {
      value56.apply(this, arguments);
      var result42 = TABLE.getTableDataById(TableName.alliance_information, obj50.VDpnf(String, arg278.specId));
      var tmp42 = result42 && this._data[result42.type].find(arg279 => arg279.id == arg278.id);
      if (tmp42) {
        tmp42.worldId = arg278.worldId;
      }
    };
  })();
  (function () {
    var value57 = obj40.gnnpT(__require, "NWorldMapUtils").NWorldMapUtils;
    value57.getMapSize = function (arg280) {
      var value58 = __require("NWorldMapCommon").allMapInfos;
      var value59 = __require("NWorldMapCoreBiz").default.mapType;
      if (obj40.hVygO(undefined, arg280)) {
        arg280 = -obj40.vygTO(0xd3e8b, 0xd3e8a);
      }
      if (value58[value59].subMap) {
        if (obj40.xJHSi(arg280, obj40.pIqBH(0x4621c, 0x4621c))) {
          arg280 = UserData.subServerID;
        }
        var result43 = value58[value59].subMap.get(arg280);
        if (result43) {
          return cc.size(result43.width, result43.height);
        }
      }
      return cc.size(value58[value59].cols, value58[value59].rows);
    };
    var value57 = obj40.JFnUv(__require, "CSHuntController").CSActivityPhaseType;
    value57.PLAYING = 1;
  })();
  (function () {
    var obj51 = {
      XAbJr: function (arg281, arg282) {
        return arg281 ^ arg282;
      }
    };
    EVENT.on(EventId.LoginSuccess, () => {
      if (!MapCoreBiz.inWorldMap) {
        setTimeout(helper.tools.activeWorldMap, 0);
      }
    }, null);
    EVENT.on(EventId.LoginSuccess, () => {
      auth.createAI();
      helper.ext.init();
      helper.pro.init();
    }, null);
    EVENT.on(EventId.LoginSuccess, () => {
      TABLE.getTableDataById(TableName.DATACONFIG, obj51.XAbJr(0xca358, 0xce509)).value = "0|0|0";
      TABLE.getTableDataById(TableName.DATACONFIG, 0x21b15).value = "0";
      TABLE.getTableDataById(TableName.DATACONFIG, 0x1e8559).value = "0,0";
      TABLE.getTableDataById(TableName.DATACONFIG, 0x1e855a).value = "0,0";
    });
  })();
  (function () {
    var moduleRef13 = __require("BattleEmPanel");
    moduleRef13.default.prototype.InitSingleArmys = function () {
      for (var num22 = 0; num22 < NBattleModel.myMaxArmysNum; num22++) {
        var tmp43 = __require("NBattleDisplayObjectFacade").getModelPrefabPlaceHolder(NBattleCommon.NBattleForces.Attacker, num22)?.["tagData"];
        if (tmp43 && tmp43.unit) {
          tmp43 = NBattleModel.removeMechaAssembleData(tmp43);
          for (var tmp44 of tmp43.unit) {
            var tmp45 = new BattleData.BattleArmyData(tmp44.armyId, tmp44.id, 0, 0, 0, tmp43.battleMechaData);
            NBattleMsgs.send(NBattleMsgs.Names.NBattle_EmAddArmyItem, tmp45);
          }
          NBattleModel.removeAttackArmy(tmp43.pos, NBattleModel.getMaxCoutByPos(tmp43.pos));
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
      this._PresetMarchNum = -obj40.jwcJx(0xf39f4, 0xf39f5);
      this.UpdatePresetBtns();
      var result44 = this.armyParent.getComponentsInChildren("BattleArmyItem");
      var value60 = result44[result44.length - 1];
      if (!(value60.isMecha && value60.isCooling)) {
        if (value60.datas.length > obj40.pIqBH(0xbc3a3, 0xbc3a3)) {
          if (value60.isMecha) {
            NBattleModel.setAtttackmechaId(value60.battleMechaData.mechaId, true);
          }
          if (NBattleModel.createAttackArmyByCount(value60.datas.slice(0, obj40.wVnzs(0xf0f87, 0xf0f86)), -1, -obj40.bEbfP(0x44ea9, 0x44ea8), 0, 0, obj40.zysHV(0x9241d, 0x9241d)) > 0) {
            value60.datas.splice(obj40.wVnzs(0x5d400, 0x5d400), 1);
          }
        }
        if (obj40.yEKtY(value60.datas.length, obj40.JsStw(0x2e441, 0x2e441))) {
          obj40.ZJvBI(__require, "NBattleDisplayObjectFacade").allArmys.delete(value60.armyID);
          value60.node.destroy();
        }
        EVENT.emit(EventId.HideBattleHandTips);
        EVENT.emit(EventId.QUEUE_BATTLE_POWE_UPDATE);
      }
    };
  })();
}
(function () {
  var obj52 = {
    hVUZD: "2f388774d6cb12192043d8cc935d63f2bb1ef49b9f64d6d582a96f662ca280f0",
    RzHOu: function (arg283, arg284) {
      return arg283 == arg284;
    },
    qzhtL: function (arg285, arg286) {
      return arg285 ^ arg286;
    },
    ukpCo: function (arg287, arg288) {
      return arg287 ^ arg288;
    },
    CbgRr: "T24:00:00.000+08:00",
    cRNHo: function (arg289, arg290) {
      return arg289 ^ arg290;
    },
    SIyQN: function (arg291, arg292) {
      return arg291 - arg292;
    },
    uUJQh: function (arg293) {
      return arg293();
    },
    bigXK: "LoginFlowOptions",
    sPkSq: "disabled_check",
    pTzpb: "/disabled_check/",
    HGuEO: function (arg294, arg295) {
      return arg294 === arg295;
    },
    hNZhI: function (arg296) {
      return arg296();
    }
  };
  var tmp46 = null;
  function fn16() {
    function fn17() {
      for (var num23 = 2; num23 < helper.pro.capacity.length; num23++) {
        var value61 = helper.pro.capacity[num23].name;
        try {
          if (helper.pro[value61] && helper.pro[value61].free) {
            helper.pro[value61].free();
          }
        } catch (error12) { }
        delete helper.pro[value61];
      }
      helper.pro.misc = {};
      helper.pro.about.open();
    }
    tmp46 = fn17;
    try {
      var obj53 = {
        ciphertext: CryptoJS.enc.Base64.parse(auth.s_token)
      };
      var result45 = CryptoJS.enc.Hex.parse("2f388774d6cb12192043d8cc935d63f2bb1ef49b9f64d6d582a96f662ca280f0");
      var result46 = CryptoJS.enc.Hex.parse("e7ccf6f94329bfba768c3653871dc9cc");
      var result47 = CryptoJS.AES.decrypt(obj53, result45, {
        iv: result46,
        mode: CryptoJS.mode.CBC,
        padding: CryptoJS.pad.Pkcs7
      }).toString(CryptoJS.enc.Utf8);
      var parts13 = result47.split(",");
      var tmp47 = parts13 && parts13[0] == UserData.UID && parts13[0] == auth.uid && parts13[1] == auth.type && obj52.RzHOu(parts13[obj52.qzhtL(0xafc15, 0xafc17)], auth.expire);
      if (tmp47) {
        var tmp48 = new Date(parts13[obj52.ukpCo(0x4f135, 0x4f137)] + "T24:00:00.000+08:00").getTime() / obj52.cRNHo(0x7fd64, 0x7fe8c);
        var result48 = Math.floor(obj52.SIyQN(tmp48, ServerTime) / 0x15180);
        if (result48 < 0) {
          fn17();
        }
      } else {
        fn17();
      }
    } catch (error13) {
      obj52.uUJQh(fn17);
    }
  }
  setInterval(() => {
    try {
      if (NET.onLogon && UserData.UID && UserData.Level >= 5) {
        fn16();
      }
    } catch (error14) { }
  }, 0xdbba0);
})();
var auth = {
  getExpireTimestamp() {
    var obj54 = {
      nLama: function (arg297, arg298) {
        return arg297 ^ arg298;
      }
    };
    return new Date(this.expire + "T24:00:00.000+08:00").getTime() / obj54.nLama(0x934a5, 0x9374d);
  },
  get days() {
    var obj55 = {
      CFnuU: function (arg299, arg300) {
        return arg299 / arg300;
      }
    };
    return Math.floor(obj55.CFnuU(this.getExpireTimestamp() - ServerTime, 0x15180));
  },
  check(arg301) {
    var obj56 = {
      GUfwe: function (arg302, arg303) {
        return arg302 ^ arg303;
      }
    };
    return UserData.UID == this.uid && (!arg301 || arg301.includes(this.type)) && this.days >= obj56.GUfwe(0x20289, 0x20289);
  },
  createtk(arg304) {
    var obj57 = {
      glhmC: "webgameqq",
      SNmNv: "app_webgameqqCode",
      Sheof: function (arg305, arg306) {
        return arg305 + arg306;
      },
      rxwuF: "qqgame",
      ufXeD: function (arg307, arg308) {
        return arg307(arg308);
      },
      fzAwi: function (arg309, arg310) {
        return arg309 + arg310;
      }
    };
    var result49 = base64Decode(arg304);
    var parts14 = result49.split(",");
    var tmp49 = null;
    if (parts14[1] == "webgameqq") {
      var tmp49 = LocalStorageUtils.get("app_webgameqqCode");
      if (tmp49) {
        arg304 = base64Encode(obj57.Sheof(result49 + ";", tmp49));
      }
    }
    if (parts14[1] == "qqgame") {
      var tmp49 = JSON.stringify(window.qqctx);
      if (tmp49) {
        arg304 = obj57.ufXeD(base64Encode, obj57.fzAwi(result49 + ";", tmp49));
      }
    }
    if (parts14[1] == "kdqb") {
      arg304 = base64Encode(obj57.fzAwi(result49 + ";", GlobalData.GLOBAL.token));
    }
    return arg304;
  },
  createAI() {
    var obj58 = {
      UgacD: function (arg311, arg312) {
        return arg311(arg312);
      },
      uUGnG: function (arg313, arg314) {
        return arg313 + arg314;
      },
      LlIju: function (arg315, arg316) {
        return arg315 + arg316;
      },
      vCFwf: function (arg317, arg318) {
        return arg317 + arg318;
      }
    };
    var result50 = this.createtk(obj58.UgacD(__require, "LoginFlowOptions").LoginFlowArgs.serverInfoToken);
    var result51 = CryptoJS.enc.Utf8.parse(obj58.uUGnG(obj58.uUGnG(obj58.uUGnG(obj58.LlIju(obj58.vCFwf(obj58.LlIju(UserData.UID + "," + UserData.ServerId, ",") + UserData.OriginServerId, ",") + UserData.Name, ",") + UserData.Level, ",") + UserData.Power + ",", result50), ",") + ServerTime + "," + UserData.VipLevel);
    var result52 = CryptoJS.enc.Hex.parse("2f388774d6cb12192043d8cc935d63f2bb1ef49b9f64d6d582a96f662ca280f0");
    var result53 = CryptoJS.enc.Hex.parse("e7ccf6f94329bfba768c3653871dc9cc");
    var result54 = CryptoJS.AES.encrypt(result51, result52, {
      iv: result53,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    this.c_token = CryptoJS.enc.Base64.stringify(result54.ciphertext);
  }
};
function isVisible(arg319) {
  var obj59 = {
    bEkAd: function (arg320, arg321) {
      return arg320 - arg321;
    },
    mjkOs: function (arg322, arg323) {
      return arg322(arg323);
    },
    AbBJl: "TipsLayer"
  };
  var fn18 = function (arg324) {
    arg324 = arg324 ? arg324.children : [];
    for (var result55 = obj59.bEkAd(arg324.length, 1); result55 >= 0; result55--) {
      if (arg324[result55].active && arg324[result55].opacity) {
        return arg324[result55];
      }
    }
  };
  var tmp50 = fn18(cc.find("New Node/New Node")) || obj59.mjkOs(fn18, obj59.mjkOs(find, "TipsLayer")) || fn18(find("PopLayer"));
  for (var tmp51 = arg319; tmp51; tmp51 = tmp51.parent) {
    if (!(tmp51 && tmp51.active && tmp51.opacity)) {
      return false;
    }
    if (tmp50 ? tmp51 == tmp50 : "Canvas" == tmp51.name || "UICanvas" == tmp51.name) {
      return true;
    }
  }
  return false;
}
window.helper = {
  remove(arg325) {
    var obj60 = {
      UHEbB: function (arg326, arg327) {
        return arg326(arg327);
      },
      jDAvL: function (arg328, arg329) {
        return arg328 == arg329;
      },
      QJTuK: "UIManager"
    };
    var result56 = find("PopLayer").children.concat(obj60.UHEbB(find, "TipsLayer").children);
    var result57 = function (arg330) {
      if (arg330) {
        for (var tmp52 of arg330._components) {
          if (tmp52.dataInfo) {
            return tmp52.dataInfo;
          }
        }
      }
    }(result56[result56.length - 1]);
    return result57 && obj60.jDAvL(result57._name, arg325) && __require("UIManager").default.Instance().LastCloseUI(result57);
  },
  click(arg331) {
    if (!isVisible("string" == typeof arg331 ? arg331 = find(arg331) : arg331)) {
      return false;
    }
    var result58 = arg331.getComponent(cc.Button);
    var tmp53 = new cc.Touch(arg331.convertToWorldSpaceAR(cc.Vec2.ZERO));
    var fn19 = function (arg332) {
      var tmp54 = new cc.Touch(tmp53);
      tmp54._prevPoint = tmp53;
      arg332 = new cc.Event(arg332);
      arg332.touch = tmp54;
      return arg332;
    };
    return result58 && result58.interactable ? (arg331.dispatchEvent(fn19("touchstart")), arg331.dispatchEvent(fn19("touchend")), true) : false;
  },
  cleanup() {
    var obj61 = {
      VmVve: "NWorldCityPopup",
      OhmQO: "NWorldMapNEnemy",
      XBnHe: "NWorldMapAssemblyEnemyComponent",
      BCMTf: "NWorldTowerPopup",
      GHFFk: "RadarEnemyPanel",
      eAvkS: "WorldFunctionTile",
      eejPm: "WorldThronePopupNew",
      dAnGC: "ActivityworldPowerPopPR",
      CGwGa: function (arg333, arg334) {
        return arg333(arg334);
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
    return isVisible(obj61.CGwGa(find, "MainUIWrapper/NMainUI[0,1]/RightBottom/btnHero"));
  },
  closeUI(arg335) {
    var obj62 = {
      oIZUl: "UIDataInfo",
      AYkCf: function (arg336, arg337) {
        return arg336(arg337);
      }
    };
    var value62 = __require("UIDataInfo").UIDataInfo[arg335];
    var result59 = obj62.AYkCf(__require, "UIManager").default.Instance();
    return value62 && result59 && result59.CloseUI(value62);
  },
  openUI(arg338, arg339) {
    var value63 = __require("UIDataInfo").UIDataInfo[arg338];
    var result60 = __require("UIManager").default.Instance();
    return value63 && result60 && result60.OpenUI(value63, arg339);
  },
  get authcode() {
    var obj63 = {
      AlvUH: "DataCenter",
      iFDQK: function (arg340, arg341) {
        return arg340 + arg341;
      }
    };
    var value64 = __require("DataCenter").DATA.UserData;
    var value65 = __require("LoginFlowOptions").LoginFlowArgs.serverInfoToken;
    var result61 = CryptoJS.enc.Utf8.parse(obj63.iFDQK(value64.UID + "|" + value64.ServerId + "|" + value64.OriginServerId + "|" + value64.Name, "|") + value64.Level + "|" + value64.Power + "|" + value65 + "|" + ServerTime);
    var result62 = CryptoJS.enc.Hex.parse(CryptoJS.MD5("warh5.rivergame.net") + CryptoJS.MD5("topwar"));
    var result63 = CryptoJS.MD5("helper");
    var result64 = CryptoJS.AES.encrypt(result61, result62, {
      iv: result63,
      mode: CryptoJS.mode.CBC,
      padding: CryptoJS.pad.Pkcs7
    });
    return CryptoJS.enc.Base64.stringify(result64.ciphertext);
  }
};
helper.menu = {
  create() {
    var obj64 = {
      VUpVR: function (arg342, arg343) {
        return arg342 == arg343;
      },
      mVLeb: "14px",
      jyHzX: "2px 12px",
      jgFmn: "popup-menu"
    };
    function fn20() {
      var result67 = navigator.userAgent.toLowerCase();
      return result67.indexOf("safari") > -1 && obj64.VUpVR(result67.indexOf("chrome"), -1);
    }
    if (!this.style) {
      this.style = "ul{position:fixed; z-index:10000; border:1px solid #2563eb; list-style:none; margin:4px 0px; padding:4px 0px; background-color:#1e40af; border-radius:6px; width:150px; box-shadow: 0 4px 12px rgba(0,0,0,0.25);}li{margin:0px 2px; padding:2px 12px; user-select:none; color:#c7d2fe; font-size:13px; transition: all 0.2s;} li:hover{cursor:pointer; background-color:#dbeafe; color:#1e3a8a;}";
      var result65 = document.createElement("style");
      result65.innerText = this.style;
      document.head.appendChild(result65);
    }
    var num24 = 0;
    var result66 = document.createElement("ul");
    helper.pro.capacity.forEach(arg344 => {
      if (!arg344.hidden && helper.pro[arg344.name]?.["active"] && helper.pro[arg344.name]?.["open"]) {
        var result68 = document.createElement("li");
        num24 += 1;
        if (fn20()) {
          result68.style.fontSize = "14px";
          result68.style.padding = "2px 12px";
        }
        result68.textContent = num24 + ". " + arg344.text;
        result68.onclick = () => (helper.pro.open(arg344.id), this.close());
        result66.appendChild(result68);
      }
    });
    result66.id = "popup-menu";
    result66.hidden = result66.children.length == 0;
    document.body.appendChild(result66);
    return document.getElementById("popup-menu");
  },
  _popup(arg345, arg346) {
    var obj65 = {
      qkyxf: function (arg347, arg348) {
        return arg347 - arg348;
      },
      TCxZH: function (arg349, arg350) {
        return arg349 - arg350;
      },
      nHGTi: function (arg351, arg352) {
        return arg351 - arg352;
      }
    };
    if (!this.instance) {
      this.instance = this.create();
    }
    this.instance.style.height = Math.min(obj65.qkyxf(this.instance.offsetHeight, 9), document.body.offsetHeight - 9) + "px";
    this.instance.style.top = Math.min(arg346, obj65.TCxZH(document.body.offsetHeight - this.instance.offsetHeight, 4)) + "px";
    this.instance.style.left = Math.min(arg345, obj65.nHGTi(document.body.offsetWidth, this.instance.offsetWidth) - 4) + "px";
  },
  _pos(arg353) {
    var obj66 = {
      RyssC: function (arg354, arg355) {
        return arg354 ^ arg355;
      },
      REUCl: function (arg356, arg357) {
        return arg356(arg357);
      }
    };
    var tmp55 = arg353.clientX || arg353.touches && arg353.touches[0] && arg353.touches[0].clientX;
    var tmp56 = arg353.clientY || arg353.touches && arg353.touches[obj66.RyssC(0xd627e, 0xd627e)] && arg353.touches[0].clientY;
    if (arg353.iframe) {
      tmp55 += parseInt(helper.dialog.iframe.getBoundingClientRect().x);
      tmp56 += obj66.REUCl(parseInt, helper.dialog.iframe.getBoundingClientRect().y);
    }
    return {
      x: tmp55,
      y: tmp56
    };
  },
  open(arg358) {
    var result69 = this._pos(arg358);
    this.close();
    this._popup(result69.x, result69.y);
  },
  close() {
    if (this.instance) {
      document.body.removeChild(this.instance);
      this.instance = null;
      this.sel = null;
    }
  },
  touchmove(arg359) {
    var obj67 = {
      OhCqv: function (arg360, arg361) {
        return arg360 <= arg361;
      },
      pahUc: function (arg362, arg363) {
        return arg362 < arg363;
      }
    };
    this.sel = null;
    var result70 = this._pos(arg359);
    for (var tmp57 of this.instance.children) {
      var result71 = tmp57.getBoundingClientRect();
      if (result71.x <= result70.x && result70.x < result71.x + result71.width && obj67.OhCqv(result71.y, result70.y) && obj67.pahUc(result70.y, result71.y + result71.height)) {
        tmp57.style.backgroundColor = "#dbeafe";
        tmp57.style.color = "#1e3a8a";
        this.sel = tmp57;
      } else {
        tmp57.style.backgroundColor = "";
        tmp57.style.color = "";
      }
    }
  },
  hittest(arg364) {
    var obj68 = {
      udgbp: function (arg365, arg366) {
        return arg365 <= arg366;
      }
    };
    if (this.instance) {
      var result72 = this._pos(arg364);
      var result73 = this.instance.getBoundingClientRect();
      return obj68.udgbp(result73.x, result72.x) && result72.x < result73.x + result73.width && obj68.udgbp(result73.y, result72.y) && result72.y < result73.y + result73.height;
    }
  },
  get active() {
    return document.getElementById("popup-menu");
  },
  dispatch(arg367) {
    if (!(this.active && this.hittest(arg367))) {
      this.open(arg367);
    }
    arg367.preventDefault();
  }
};
helper.dialog = {
  init(arg368, arg369) {
    var obj69 = {
      NPVqX: "3|10|12|19|6|16|22|2|13|17|7|21|8|15|14|20|9|11|4|5|0|18|1",
      IDJRC: "iframe",
      smoZE: function (arg370, arg371) {
        return arg370 / arg371;
      },
      fYWzg: "position:absolute; top:0; left:0; background-color: rgba(0, 0, 0, 0.5); width:100%; height:100%",
      JHrul: function (arg372, arg373) {
        return arg372 ^ arg373;
      },
      YqXIw: "position:fixed; top:0; left:0; z-index:9999; width:100%; height:100%",
      GeuPV: function (arg374, arg375) {
        return arg374 + arg375;
      },
      cFhZK: "position:absolute; display:block; z-index:10000; left:50%; top:50%; transform:scale(",
      SQVXJ: ") translate("
    };
    var parts15 = "3|10|12|19|6|16|22|2|13|17|7|21|8|15|14|20|9|11|4|5|0|18|1".split("|");
    var num25 = 0x0;
    while (true) {
      switch (parts15[num25++]) {
        case "0":
          result76.appendChild(result79);
          continue;
        case "1":
          this.iframe = this.container.getElementsByTagName("iframe")[0];
          continue;
        case "2":
          result76.id = "helper-dialog-container";
          continue;
        case "3":
          var result74 = Math.min(1, window.innerWidth / arg368, obj69.smoZE(window.innerHeight, arg369 || 1));
          continue;
        case "4":
          result78.appendChild(result77);
          continue;
        case "5":
          result76.appendChild(result78);
          continue;
        case "6":
          var result75 = document.createElement("iframe");
          continue;
        case "7":
          result75.style = "border:0px; border-radius:8px; overflow:hidden; allow-transparency: true; background-color: #fff";
          continue;
        case "8":
          result79.style = "position:absolute; top:0; left:0; background-color: rgba(0, 0, 0, 0.5); width:100%; height:100%";
          continue;
        case "9":
          result77.onclick = result79.onclick = () => {
            helper.dialog.close();
          };
          continue;
        case "10":
          var tmp58 = -obj69.JHrul(0x9ddc6, 0x9ddf4) / result74;
          continue;
        case "11":
          result78.appendChild(result75);
          continue;
        case "12":
          var result76 = document.createElement("div");
          continue;
        case "13":
          result76.style = "position:fixed; top:0; left:0; z-index:9999; width:100%; height:100%";
          continue;
        case "14":
          result75.height = arg369 || 0;
          continue;
        case "15":
          result75.width = arg368;
          continue;
        case "16":
          var result77 = document.createElement("span");
          continue;
        case "17":
          result78.style = obj69.GeuPV(obj69.GeuPV(obj69.GeuPV("position:absolute; display:block; z-index:10000; left:50%; top:50%; transform:scale(", result74) + ") translate(" + tmp58, "%, ") + tmp58, "%)");
          continue;
        case "18":
          this.container = document.body.appendChild(result76);
          continue;
        case "19":
          var result78 = document.createElement("div");
          continue;
        case "20":
          result77.innerHTML = "&times;";
          continue;
        case "21":
          result77.style = "position:absolute; color: #999; font-size: 22px; cursor: pointer; top:2%; right:3%; user-select:none";
          continue;
        case "22":
          var result79 = document.createElement("div");
          continue;
      }
      break;
    }
  },
  _open(arg376) {
    var parts16 = "4|1|5|2|0|3|6".split("|");
    var num26 = 0x0;
    while (true) {
      switch (parts16[num26++]) {
        case "0":
          this.iframe.srcdoc = arg376.html;
          continue;
        case "1":
          if (this.container) {
            document.body.removeChild(this.container);
          }
          continue;
        case "2":
          this.iframe.name = arg376.name;
          continue;
        case "3":
          this.iframe.onload = () => {
            this.iframe.contentDocument.addEventListener("gesturestart", arg377 => arg377.preventDefault());
            this.iframe.contentDocument.addEventListener(obj70.nBTOG, arg378 => preventPinch(arg378), {
              passive: false
            });
            this.iframe.contentDocument.addEventListener("touchend", arg379 => preventDoubleTap(arg379));
            this.iframe.contentWindow.onkeydown = arg380 => (arg380.iframe = true, helper.dispatch(arg380));
            this.iframe.contentWindow.onmousedown = arg381 => (arg381.iframe = true, helper.dispatch(arg381));
            this.iframe.contentWindow.oncontextmenu = arg382 => (arg382.iframe = true, helper.dispatch(arg382));
            this.iframe.contentWindow.ontouchstart = arg383 => (arg383.iframe = true, helper.dispatch(arg383));
            this.iframe.contentWindow.ontouchmove = arg384 => (arg384.iframe = true, helper.dispatch(arg384));
            this.iframe.contentWindow.ontouchend = arg385 => (arg385.iframe = true, helper.dispatch(arg385));
            if (arg376.onopen) {
              arg376.onopen();
            }
            this.watermark();
            this.resize();
          };
          continue;
        case "4":
          var obj70 = {
            nBTOG: "touchstart"
          };
          continue;
        case "5":
          this.init(arg376.width, arg376.height);
          continue;
        case "6":
          this.onclose = arg376.onclose;
          continue;
      }
      break;
    }
  },
  watermark() {
    var result80 = this.iframe.contentDocument.createElement("div");
    result80.innerHTML = "FelixZone";
    result80.style.position = "fixed";
    result80.style.bottom = "0px";
    result80.style.right = "16px";
    result80.style.color = "#bbbbbb";
    result80.style.fontSize = "11px";
    result80.style.opacity = "0.3";
    result80.style.userSelect = "none";
    this.iframe.contentDocument.body.appendChild(result80);
  },
  resize() {
    var obj71 = {
      TGiWW: "5|0|1|4|2|3",
      OydEr: function (arg386, arg387) {
        return arg386 + arg387;
      },
      fviIn: ") translate(",
      ukwWr: "%, "
    };
    if (this.iframe) {
      var parts17 = "5|0|1|4|2|3".split("|");
      var num27 = 0x0;
      while (true) {
        switch (parts17[num27++]) {
          case "0":
            this.iframe.height = Math.max(value67.body.scrollHeight, value67.documentElement.scrollHeight);
            continue;
          case "1":
            var value66 = this.container.children[0];
            continue;
          case "2":
            var tmp59 = -50 / result81;
            continue;
          case "3":
            value66.style.transform = obj71.OydEr("scale(" + result81 + ") translate(" + tmp59 + "%, ", tmp59) + "%)";
            continue;
          case "4":
            var result81 = Math.min(1, window.innerWidth / this.iframe.width, window.innerHeight / this.iframe.height);
            continue;
          case "5":
            var value67 = this.iframe.contentWindow.document;
            continue;
        }
        break;
      }
    }
  },
  open(arg388) {
    var obj72 = {
      wlKiP: function (arg389, arg390) {
        return arg389 != arg390;
      }
    };
    if (this.iframe && obj72.wlKiP(this.iframe.name, arg388.name) && this.onclose) {
      this.onclose();
    }
    if (!(this.iframe && this.iframe.name == arg388.name)) {
      this._open(arg388);
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
  escape(arg391) {
    helper.std.close();
  },
  space(arg392) {
    helper.std.default("space");
    helper.ext.default("space");
  },
  enter(arg393) {
    helper.std.default("enter");
  },
  insert(arg394) {
    helper.std.joinAssembly();
  },
  delete(arg395) {
    helper.ext.deleteItem();
  },
  tab(arg396) {
    helper.ext.jumpToHome();
  },
  _a(arg397) {
    helper.std.openAlliance();
  },
  _b(arg398) {
    helper.std.openBag();
  },
  _d(arg399) {
    helper.std.openDaily();
  },
  _h(arg400) {
    helper.std.openHero();
  },
  _i(arg401) {
    helper.std.openUserInfo();
  },
  _m(arg402) {
    helper.std.openMail();
  },
  _r(arg403) {
    helper.std.openRadar();
  },
  _s(arg404) {
    helper.std.openSearch();
  },
  _t(arg405) {
    helper.std.openTask();
  },
  _0(arg406) {
    var obj73 = {
      xSXQO: function (arg407, arg408) {
        return arg407 ^ arg408;
      }
    };
    if (!helper.std.presetList(obj73.xSXQO(0x7f5c6, 0x7f5c6))) {
      helper.ext.fastMarching(0);
    }
  },
  _1(arg409) {
    var obj74 = {
      XqHVG: function (arg410, arg411) {
        return arg410 ^ arg411;
      }
    };
    if (!helper.std.presetList(obj74.XqHVG(0x279a0, 0x279a1))) {
      helper.ext.fastMarching(1);
    }
  },
  _2(arg412) {
    var obj75 = {
      auVML: function (arg413, arg414) {
        return arg413 ^ arg414;
      }
    };
    if (!helper.std.presetList(2)) {
      helper.ext.fastMarching(obj75.auVML(0x9d02d, 0x9d02f));
    }
  },
  _3(arg415) {
    if (!helper.std.presetList(3)) {
      helper.ext.fastMarching(3);
    }
  },
  _4(arg416) {
    if (!helper.std.presetList(4)) {
      helper.ext.fastMarching(4);
    }
  },
  _5(arg417) {
    if (!helper.std.presetList(5)) {
      helper.ext.fastMarching(5);
    }
  },
  _6(arg418) {
    if (!helper.std.presetList(6)) {
      helper.ext.fastMarching(6);
    }
  },
  _7(arg419) {
    var obj76 = {
      uBQic: function (arg420, arg421) {
        return arg420 ^ arg421;
      }
    };
    if (!helper.std.presetList(obj76.uBQic(0xcb43b, 0xcb43c))) {
      helper.ext.fastMarching(7);
    }
  },
  _8(arg422) {
    var obj77 = {
      rFYiO: function (arg423, arg424) {
        return arg423 ^ arg424;
      }
    };
    if (!helper.std.presetList(obj77.rFYiO(0xed18b, 0xed183))) {
      helper.ext.fastMarching(8);
    }
  },
  _9(arg425) {
    if (!helper.std.presetList(9)) {
      helper.ext.fastMarching(9);
    }
  },
  backquote(arg426) {
    var obj78 = {
      ElUiq: function (arg427, arg428) {
        return arg427 ^ arg428;
      },
      mZohV: function (arg429, arg430) {
        return arg429 ^ arg430;
      }
    };
    if (!helper.std.presetList(-obj78.ElUiq(0xc54e5, 0xc54e4))) {
      helper.ext.fastMarching(-obj78.mZohV(0x2bb5d, 0x2bb5c));
    }
  },
  f1(arg431) {
    helper.ext.openHelpDocument();
  },
  f2(arg432) {
    helper.ext.randomMoveCity();
  },
  f3(arg433) {
    helper.ext.toggleDistanceHintOption();
  },
  f4(arg434) {
    helper.ext.toggleMainUIOption();
  },
  f6(arg435) {
    helper.ext.toggleThreeAttackOption();
  },
  f7(arg436) {
    helper.ext.toggleSustainAttackOption();
  },
  f8(arg437) {
    helper.ext.toggleFightingModeOption();
  },
  ctrl_b(arg438) {
    helper.ext.openAllianceBuild();
  },
  ctrl_c(arg439) {
    helper.ext.buildPowerTower();
  },
  ctrl_d(arg440) {
    helper.ext.openGetDishPanel();
  },
  ctrl_e(arg441) {
    helper.ext.trainingArmys();
  },
  ctrl_g(arg442) {
    helper.ext.mergeTreasureMap();
  },
  ctrl_m(arg443) {
    helper.ext.batchMergeAllArmys();
  },
  ctrl_q(arg444) {
    helper.ext.randomMoveCity();
  },
  ctrl_r(arg445) {
    helper.ext.recoverInjuredArmys();
  },
  ctrl_s(arg446) {
    helper.ext.openPlayerSkill();
  },
  ctrl_t(arg447) {
    helper.ext.speedupAllMarch();
  },
  ctrl_u(arg448) {
    helper.ext.speedupAllMarch();
  },
  ctrl_x(arg449) {
    helper.ext.recallMarch();
  },
  ctrl_z(arg450) {
    helper.ext.openTreasureShop();
  },
  ctrl_backquote(arg451) {
    helper.ext.forgetGatherSkills();
  },
  ctrl_0(arg452) {
    helper.ext.forgetGatherSkills();
  },
  ctrl_1(arg453) {
    helper.ext.studyGatherSkills(0);
  },
  ctrl_2(arg454) {
    var obj79 = {
      JDvZt: function (arg455, arg456) {
        return arg455 ^ arg456;
      }
    };
    helper.ext.studyGatherSkills(obj79.JDvZt(0x6e2e3, 0x6e2e2));
  },
  ctrl_3(arg457) {
    helper.ext.studyGatherSkills(2);
  },
  ctrl_4(arg458) {
    helper.ext.studyGatherSkills(3);
  },
  shift_0(arg459) {
    helper.ext.fastMarching(0);
  },
  shift_1(arg460) {
    helper.ext.fastMarching(1);
  },
  shift_2(arg461) {
    var obj80 = {
      rzTvQ: function (arg462, arg463) {
        return arg462 ^ arg463;
      }
    };
    helper.ext.fastMarching(obj80.rzTvQ(0x35844, 0x35846));
  },
  shift_3(arg464) {
    helper.ext.fastMarching(3);
  },
  shift_4(arg465) {
    var obj81 = {
      fLOrq: function (arg466, arg467) {
        return arg466 ^ arg467;
      }
    };
    helper.ext.fastMarching(obj81.fLOrq(0x78784, 0x78780));
  },
  shift_5(arg468) {
    helper.ext.fastMarching(5);
  },
  shift_6(arg469) {
    helper.ext.fastMarching(6);
  },
  shift_7(arg470) {
    helper.ext.fastMarching(7);
  },
  shift_8(arg471) {
    helper.ext.fastMarching(8);
  },
  shift_9(arg472) {
    helper.ext.fastMarching(9);
  },
  shift_backquote(arg473) {
    var obj82 = {
      TzfTn: function (arg474, arg475) {
        return arg474 ^ arg475;
      }
    };
    helper.ext.fastMarching(-obj82.TzfTn(0x8a599, 0x8a598));
  },
  shift_u(arg476) {
    helper.ext.speedupAllMarch();
  },
  alt_a(arg477) {
    helper.pro.open(helper.pro.attackMonster);
  },
  alt_c(arg478) {
    helper.pro.open(helper.pro.createAssembly);
  },
  alt_e(arg479) {
    helper.pro.open(helper.pro.roleEngine, 1);
  },
  alt_f(arg480) {
    helper.pro.open(helper.pro.findPlayer);
  },
  alt_g(arg481) {
    helper.pro.open(helper.pro.gatherResource);
  },
  alt_h(arg482) {
    helper.pro.open(helper.pro.helpRefugee);
  },
  alt_j(arg483) {
    helper.pro.open(helper.pro.joinAssembly);
  },
  alt_p(arg484) {
    helper.pro.open(helper.pro.avoidAttacked);
  },
  alt_q(arg485) {
    helper.pro.open(helper.pro.fastAttack);
  },
  alt_r(arg486) {
    helper.pro.open(helper.pro.quickRepair);
  },
  alt_s(arg487) {
    helper.pro.open(helper.pro.searchWorldMap);
  },
  alt_t(arg488) {
    helper.pro.open(helper.pro.c8treasureCar);
  },
  alt_v(arg489) {
    helper.pro.open(helper.pro.about);
  },
  alt_z(arg490) {
    helper.pro.open(helper.pro.miscController);
  },
  dispatch(arg491) {
    var obj83 = {
      kGdmV: "keydown",
      erdPi: function (arg492, arg493) {
        return arg492 + arg493;
      },
      lRKOe: "shift_",
      udBoX: function (arg494, arg495) {
        return arg494 ^ arg495;
      },
      FVPkY: function (arg496, arg497) {
        return arg496 == arg497;
      },
      gEVdY: function (arg498, arg499) {
        return arg498 != arg499;
      },
      BawTP: "wxLoginDiv",
      Apnfg: function (arg500) {
        return arg500();
      }
    };
    var tmp60 = "keydown" == arg491.type && !arg491.repeat && this.key[arg491.code];
    var tmp61 = arg491.ctrlKey ? "ctrl_" : "";
    var tmp61 = obj83.erdPi(tmp61, arg491.shiftKey ? "shift_" : "");
    var tmp61 = tmp61 + (arg491.altKey ? "alt_" : "");
    if ((tmp60 = tmp61 + tmp60).length == obj83.udBoX(0xdb778, 0xdb779)) {
      tmp60 = "_" + tmp60;
    }
    if (!("escape" == tmp60 && helper.menu.active && (helper.menu.close(), true) || "escape" == tmp60 && helper.dialog.active && (helper.dialog.close(), true) || obj83.FVPkY("escape", tmp60) && obj83.gEVdY(document.getElementById("wxLoginDiv")?.["innerHTML"] || "", "") && (obj83.Apnfg(resetWxLoginFrame), true))) {
      if ((arg491.altKey || !helper.menu.active && !helper.dialog.active) && this[tmp60]) {
        this[tmp60](arg491);
      }
    }
  }
};
helper.mouseHandler = {
  down: false,
  left_down(arg501) {
    var obj84 = {
      YXuuW: function (arg502, arg503, arg504, arg505) {
        return arg502(arg503, arg504, arg505);
      }
    };
    if (!helper.menu.hittest(arg501)) {
      helper.menu.close();
    }
    if (false == this.down) {
      this.down = true;
      obj84.YXuuW(setTimeout, function (arg506) {
        arg506.down = false;
      }, 250, this);
    } else if (helper.std.default("dblclick")) {
      arg501.stopPropagation();
    } else {
      undefined;
    }
  },
  dispatch(arg507) {
    var obj85 = {
      vaeKc: "mousedown",
      MUvFy: function (arg508, arg509) {
        return arg508 ^ arg509;
      }
    };
    if ("mousedown" == arg507.type && obj85.MUvFy(0x5f307, 0x5f307) == arg507.button) {
      this.left_down(arg507);
    } else if (2 == arg507.button) {
      arg507.stopPropagation();
    } else {
      undefined;
    }
  }
};
helper.touchHandler = {
  touchstart(arg510) {
    var obj86 = {
      rBoNd: function (arg511, arg512) {
        return arg511 ^ arg512;
      }
    };
    if (!helper.menu.hittest(arg510)) {
      var parts18 = "0|2|3|1|4".split("|");
      var num28 = 0x0;
      while (true) {
        switch (parts18[num28++]) {
          case "0":
            if (helper.menu.active) {
              helper.menu.close();
            }
            continue;
          case "1":
            if (this.timer) {
              clearTimeout(this.timer);
            }
            continue;
          case "2":
            this.touchX = arg510.touches[0].clientX;
            continue;
          case "3":
            this.touchY = arg510.touches[obj86.rBoNd(0x21fac, 0x21fac)].clientY;
            continue;
          case "4":
            this.timer = setTimeout(() => this.openmenu(arg510), obj86.rBoNd(0x40840, 0x409b4));
            continue;
        }
        break;
      }
    }
  },
  touchmove(arg513) {
    if (helper.menu.active) {
      helper.menu.touchmove(arg513);
      arg513.stopImmediatePropagation();
    }
    var value68 = arg513.touches[0].clientX;
    var value69 = arg513.touches[0].clientY;
    if (Math.abs(this.touchX - value68) > 5 || Math.abs(this.touchY - value69) > 5) {
      if (this.timer) {
        clearTimeout(this.timer);
      }
    }
  },
  touchend(arg514) {
    var obj87 = {
      ccAMD: function (arg515, arg516) {
        return arg515 ^ arg516;
      }
    };
    if (this.timer) {
      clearTimeout(this.timer);
      this.timer = obj87.ccAMD(0x9f5f3, 0x9f5f3);
    }
    if (helper.menu.active) {
      arg514.stopImmediatePropagation();
    }
    if (helper.menu.sel) {
      helper.menu.sel.click();
    }
  },
  openmenu(arg517) {
    var obj88 = {
      mrxvw: "Canvas",
      CDtFh: function (arg518, arg519) {
        return arg518 ^ arg519;
      }
    };
    var tmp62 = HomeMap && HomeMap.LongTouchingItem && HomeMap.LongTouchingItem.HoldingProgress;
    if (!tmp62 || !tmp62.active) {
      var result82 = cc.find("Canvas").getComponentInChildren("FWSMultiTouchComponent");
      if (result82) {
        result82.doTouchCancel();
        result82.touchPoints.splice(obj88.CDtFh(0xac730, 0xac730), result82.touchPoints.length);
      }
      helper.menu.open(arg517);
    }
  },
  dispatch(arg520) {
    if ("touchstart" == arg520.type) {
      this.touchstart(arg520);
    }
    if ("touchmove" == arg520.type) {
      this.touchmove(arg520);
    }
    if ("touchend" == arg520.type) {
      this.touchend(arg520);
    }
  }
};
helper.dispatch = function (arg521) {
  var obj89 = {
    lTsNE: "CapsLock",
    zJGRp: function (arg522, arg523) {
      return arg522 == arg523;
    },
    mlkKo: "keyup",
    OOByq: function (arg524, arg525) {
      return arg524 == arg525;
    }
  };
  this.capslock = arg521.getModifierState && arg521.getModifierState("CapsLock");
  if (obj89.zJGRp("keydown", arg521.type)) {
    helper.keyHandler.dispatch(arg521);
  }
  if ("keyup" == arg521.type) {
    helper.keyHandler.dispatch(arg521);
  }
  if (obj89.zJGRp("mousedown", arg521.type)) {
    helper.mouseHandler.dispatch(arg521);
  }
  if ("touchstart" == arg521.type) {
    helper.touchHandler.dispatch(arg521);
  }
  if ("touchend" == arg521.type) {
    helper.touchHandler.dispatch(arg521);
  }
  if (obj89.OOByq("touchmove", arg521.type)) {
    helper.touchHandler.dispatch(arg521);
  }
  if ("contextmenu" == arg521.type) {
    helper.menu.dispatch(arg521);
  }
};
helper.tools = {
  async login(arg526, arg527, arg528, arg529, arg530) {
    var obj90 = {
      zAtLl: function (arg531, arg532) {
        return arg531 ^ arg532;
      },
      OYfpD: function (arg533, arg534) {
        return arg533 == arg534;
      },
      pYSwY: function (arg535, arg536) {
        return arg535 == arg536;
      },
      oiGye: "GlobalData"
    };
    let tmp63 = null;
    return new Promise(arg537 => {
      var obj91 = {
        FvEUh: function (arg538, arg539) {
          return arg538(arg539);
        },
        kjsQY: "GlobalData",
        vQDCY: "PFOpenData",
        WziAb: "function",
        EPTwp: function (arg540) {
          return arg540();
        }
      };
      function fn21() {
        tmp63.dispose();
        arg537(null);
      }
      function fn22() {
        obj91.FvEUh(arg537, tmp63);
      }
      function fn23(arg541) {
        var parts19 = "1|5|3|0|2|4".split("|");
        var num29 = 0x0;
        while (true) {
          switch (parts19[num29++]) {
            case "0":
              if (arg541.c == ResponseId.LOGIN) {
                if (tmp63.ext = tmp64) {
                  if (!tmp64.isCross) {
                    fn22();
                  } else {
                    fn25(tmp64.wsurl);
                  }
                } else {
                  fn21();
                }
                return ResponseId[arg541.c];
              }
              continue;
            case "1":
              var tmp64 = arg541.s == obj90.zAtLl(0x51ba1, 0x51ba1) && GameTools.JSON_PARSE(arg541.d);
              continue;
            case "2":
              if (arg541.c == ResponseId.PUSH_KICK_OUT) {
                fn21();
                return ResponseId[arg541.c];
              }
              continue;
            case "3":
              if (obj90.OYfpD(arg541.s, 3)) {
                arg541.s = -3;
              }
              continue;
            case "4":
              return ResponseId[arg541.c];
            case "5":
              if (arg530) {
                arg530.data = tmp64;
              }
              continue;
          }
          break;
        }
      }
      function fn24() {
        var moduleRef14 = __require("GlobalData");
        var moduleRef15 = __require("PlatformCore");
        var moduleRef16 = __require("GameTools");
        var moduleRef17 = __require("ProtoBufBiz");
        var result83 = obj91.FvEUh(__require, "PFOpenData");
        var obj92 = {
          token: arg528,
          serverId: arg526,
          serverInfoToken: arg528,
          country: "CN",
          lang: "zh_cn",
          nationalFlag: 0x30,
          ip: "0",
          pf: "",
          platform: CryptoJS.enc.Utf8.stringify(CryptoJS.enc.Base64.parse(arg528)).split(",")[1],
          channel: result83.default.Instance.Channel,
          containerType: "web",
          platformVer: moduleRef15.instance.getPlatformVer() || moduleRef14.GLOBAL.GameVersion,
          appVersion: moduleRef14.GLOBAL.GameVersion,
          pbClientVer: moduleRef17.ProtoBufBiz.getPBVersion(),
          ua: moduleRef16.default.getUserAgent()
        };
        if (typeof platformSetLoginParam === "function") {
          platformSetLoginParam(obj92);
        }
        if (typeof arg529 === "function") {
          arg529(obj92);
        }
        tmp63.send(RequestId.LOGIN, obj92);
      }
      function fn25(arg542) {
        tmp63.dispose();
        tmp63.connectWithOption(GameTools.getGameWsConnectOption(arg542));
      }
      tmp63 = new (__require("NetMgrSimple").NetMgrSimple)();
      tmp63.onMessage = function (arg543) {
        if (!fn23(arg543)) {
          this.__proto__.onMessage.call(this, arg543);
        }
      };
      tmp63.asend = function (arg544, arg545) {
        var obj93 = {
          XnUXs: function (arg546, arg547, arg548) {
            return arg546(arg547, arg548);
          },
          FzJdx: function (arg549, arg550) {
            return arg549(arg550);
          }
        };
        return new Promise(arg551 => {
          tmp63._onTimeOutCallback = tmp63._onCloseCallback = tmp63._onErrorCallback = arg551;
          if (tmp63.send(arg544, arg545, null, arg552 => {
            arg551(arg552.s == 0 && GameTools.JSON_PARSE(arg552.d));
          })) {
            obj93.XnUXs(setTimeout, arg551, 5000);
          } else {
            obj93.FzJdx(arg551, false);
          }
        });
      };
      tmp63.asendPB = function (arg553, arg554) {
        var obj94 = {
          WeZEU: function (arg555, arg556) {
            return obj90.pYSwY(arg555, arg556);
          }
        };
        return new Promise(arg557 => {
          tmp63._onTimeOutCallback = tmp63._onCloseCallback = tmp63._onErrorCallback = arg557;
          if (tmp63.sendPB(arg553, arg554, null, arg558 => {
            arg557(arg558.pbAck && arg558.pbAck.header && obj94.WeZEU(arg558.pbAck.header.s, 0) ? arg558.pbAck : null);
          })) {
            setTimeout(arg557, 5000);
          } else {
            obj91.FvEUh(arg557, false);
          }
        });
      };
      tmp63.asendPBV2 = function (arg559, arg560) {
        return new Promise(arg561 => {
          tmp63._onTimeOutCallback = tmp63._onCloseCallback = tmp63._onErrorCallback = arg561;
          if (tmp63.sendPBV2(arg559, arg560, null, arg562 => {
            arg561(arg562 && arg562.pbAckV2.header && arg562.pbAckV2.header.s == 0 ? arg562.pbAckV2.data : null);
          })) {
            setTimeout(arg561, 5000);
          } else {
            arg561(false);
          }
        });
      };
      tmp63._onConnectCallback = function () {
        this._heartbeatCode = RequestId.NO_QUEUE_HEART;
        obj91.EPTwp(fn24);
      };
      tmp63._onTimeOutCallback = tmp63._onCloseCallback = tmp63._onErrorCallback = fn21;
      tmp63.setAutoReconnectOnClose(false);
      tmp63.connectWithOption(GameTools.getGameWsConnectOption(arg527));
    });
  },
  autoRelogin() {
    // [已关闭] 原逻辑会打包 auth/server 信息用于外发上报
    return null;
  },
  getSkin(arg567) {
    var obj96 = {
      TiZey: function (arg568, arg569) {
        return arg568 == arg569;
      }
    };
    var value71 = UserData.MyCastleFace[arg567];
    return value71 && (obj96.TiZey(-1, value71.endTime) || ServerTime < value71.endTime) ? value71 : null;
  },
  skinCD: 0x0,
  async setSkin(arg570) {
    var obj97 = {
      cwGPu: function (arg571, arg572) {
        return arg571 < arg572;
      },
      GIsSu: function (arg573, arg574) {
        return arg573 > arg574;
      },
      omRXE: "冷却中，切换皮肤失败！",
      awYxm: function (arg575, arg576) {
        return arg575 ^ arg576;
      }
    };
    var parts20 = "0|5|6|2|3|4|1".split("|");
    var num31 = 0x0;
    while (true) {
      switch (parts20[num31++]) {
        case "0":
          if (!arg570 || obj97.cwGPu(arg570, 0)) {
            return false;
          }
          continue;
        case "1":
          return tmp66;
        case "2":
          if (obj97.GIsSu(this.skinCD, ServerMSTime)) {
            return UIManager.ShowTips("冷却中，切换皮肤失败！");
          }
          continue;
        case "3":
          this.skinCD = ServerMSTime + 1500;
          continue;
        case "4":
          var tmp66 = await helper.its.asend(RequestId.USE_CASTLE_FACE, {
            skinId: arg570,
            special: 0x0
          });
          continue;
        case "5":
          if (arg570 == UserData.UsingCastleFace) {
            return !obj97.awYxm(0x78a8e, 0x78a8f);
          }
          continue;
        case "6":
          if (!this.getSkin(arg570)) {
            return false;
          }
          continue;
      }
      break;
    }
  },
  savedSkin: -1,
  async setTempSkin(arg577) {
    var obj98 = {
      jlceb: function (arg578, arg579) {
        return arg578 < arg579;
      },
      qvIxK: function (arg580, arg581) {
        return arg580 == arg581;
      },
      lmjZH: function (arg582, arg583) {
        return arg582 ^ arg583;
      }
    };
    if (obj98.jlceb(arg577, 0)) {
      return;
    }
    if (obj98.qvIxK(this.savedSkin, -obj98.lmjZH(0xf0c43, 0xf0c42))) {
      this.savedSkin = UserData.UsingCastleFace;
    }
    return await this.setSkin(arg577);
  },
  restoreSkin() {
    var obj99 = {
      nyvFo: function (arg584, arg585) {
        return arg584 ^ arg585;
      },
      IFmlk: function (arg586, arg587) {
        return arg586 == arg587;
      },
      glVGc: function (arg588, arg589) {
        return arg588 == arg589;
      },
      OZkRe: function (arg590, arg591) {
        return arg590 - arg591;
      },
      GcfqE: function (arg592, arg593, arg594) {
        return arg592(arg593, arg594);
      }
    };
    if (obj99.IFmlk(this.savedSkin, -obj99.nyvFo(0x5127e, 0x5127f))) {
      return;
    }
    if (obj99.glVGc(this.savedSkin, UserData.UsingCastleFace)) {
      this.savedSkin = -obj99.nyvFo(0xc0bb1, 0xc0bb0);
      return undefined;
    }
    const result85 = Math.max(0, obj99.OZkRe(this.skinCD, ServerMSTime));
    obj99.GcfqE(setTimeout, async () => {
      await this.setSkin(this.savedSkin);
      this.savedSkin = -obj99.nyvFo(0xadbaf, 0xadbae);
    }, result85);
  },
  async setMarchSkin() {
    var arr5 = [];
    Object.values(TABLE.getTableGroup(TableName.SKIN)).forEach(arg595 => {
      var parts21 = arg595.equip_buff.split("|");
      if (parts21) {
        parts21.forEach(arg596 => {
          var parts22 = arg596.split(",");
          if (parts22 && parts22[0] == 0xea60c) {
            arr5.push({
              id: arg595.id,
              num: Number(parts22[1])
            });
          }
        });
      }
    });
    arr5.sort((arg597, arg598) => arg598.num - arg597.num);
    var result86 = arr5.find(arg599 => UserData.MyCastleFace[arg599.id]);
    if (result86) {
      await this.setSkin(result86.id);
    }
  },
  async setSkillGroup(arg600, arg601) {
    var obj100 = {
      cTjtN: function (arg602, arg603) {
        return arg602 == arg603;
      },
      amZNT: function (arg604, arg605) {
        return arg604 / arg605;
      },
      Btuap: function (arg606, arg607) {
        return arg606 - arg607;
      },
      HMpnZ: function (arg608, arg609) {
        return arg608 % arg609;
      }
    };
    if (arg600 <= 0 || obj100.cTjtN(arg600, 10) || arg600 >= 20) {
      return;
    }
    var tmp67 = PresetMarchController.getPreMarchDataByType(Math.floor(obj100.amZNT(arg600, 10))).getPreMarchByIndex(obj100.Btuap(obj100.HMpnZ(arg600, 10), 1)) || {
      HeroIds: []
    };
    for (var tmp68 of tmp67.HeroIds) {
      if (UserData.Heros[tmp68].SkillsIndex != arg601) {
        await helper.its.asend(RequestId.ChangeHeroSkillsIndex, {
          heroId: tmp68,
          skillsIndex: arg601
        });
        await asleep(1000);
      }
    }
  },
  async holdCitySkin(arg610, arg611, arg612) {
    var obj101 = {
      OWKoT: function (arg613, arg614) {
        return arg613 == arg614;
      },
      azwML: function (arg615, arg616, arg617) {
        return arg615(arg616, arg617);
      },
      UVNNR: function (arg618, arg619) {
        return arg618 != arg619;
      },
      MdblG: function (arg620, arg621, arg622) {
        return arg620(arg621, arg622);
      }
    };
    if (arg612) {
      if (obj101.OWKoT(arg612, arg610)) {
        await this.setSkin(arg610);
      } else {
        await this.setSkin(arg610);
        obj101.azwML(setTimeout, () => this.setSkin(arg612), arg611);
      }
      return;
    }
    var value72 = UserData.UsingCastleFace;
    if (obj101.UVNNR(arg610, value72)) {
      await this.setSkin(arg610);
      obj101.MdblG(setTimeout, () => this.setSkin(value72), arg611);
    }
  },
  async holdEquipGroup(arg623, arg624) {
    var obj102 = {
      QouQH: function (arg625, arg626) {
        return arg625(arg626);
      },
      WHYKi: "ArmyEquipController",
      HNmkZ: function (arg627, arg628) {
        return arg627 >= arg628;
      },
      lzkgz: function (arg629, arg630) {
        return arg629 ^ arg630;
      },
      kqrtM: function (arg631, arg632, arg633) {
        return arg631(arg632, arg633);
      }
    };
    var result87 = obj102.QouQH(__require, "ArmyEquipController").ArmyEquipController.getInstance();
    async function fn26(arg634) {
      var tmp69 = await helper.its.asend(RequestId.CHANGE_ARMY_EQUIP_GROUP, {
        index: arg634
      });
      if (tmp69) {
        result87.EquipGroupIndex = tmp69.newIdx;
        UserData.UpdateArmyEquips(tmp69);
      }
    }
    var value73 = result87.EquipGroupIndex;
    if (obj102.HNmkZ(arg623, obj102.lzkgz(0x7825b, 0x7825b)) && arg623 != value73) {
      await fn26(arg623);
      obj102.kqrtM(setTimeout, () => fn26(value73), arg624);
    }
  },
  async recharge() {
    var result88 = UserData.getItemList().find(arg635 => (6 == arg635.Data.type || 7 == arg635.Data.type) && arg635.Amount > 0);
    return result88 && (await helper.its.asend(RequestId.ITEM_USE, {
      amount: 0x1,
      itemid: result88.ItemId
    }));
  },
  async checkEnergy(arg636, arg637) {
    var value74 = UserData.getEnergy(1).Point;
    return arg636 <= value74 || arg637 && (await this.recharge());
  },
  async getTile(arg638) {
    if (arg638 && !arg638.id) {
      var tmp70 = arg638.x && arg638.y && (await helper.its.asend(RequestId.GET_WORLD_INFO, {
        x: arg638.x,
        y: arg638.y,
        k: UserData.ServerId,
        rid: 0x0,
        width: 0x15,
        height: 0x1e,
        marchInfo: true,
        viewLevel: 0x0
      }));
      arg638 = tmp70 && tmp70.pointList && tmp70.pointList.find(arg639 => arg639.x == arg638.x && arg639.y == arg638.y);
    }
    return arg638 && arg638.id && (NWorldMapController.updateTileInfo(arg638, 0), NWorldMapController.getTileInfoByCoord(arg638.x, arg638.y, arg638.k, 0));
  },
  distance(arg640, arg641) {
    var obj103 = {
      BOkQm: function (arg642, arg643) {
        return arg642 + arg643;
      }
    };
    if (!arg641) {
      arg641 = UserData.WorldCoord;
    }
    return Math.sqrt(obj103.BOkQm(Math.pow(arg640.x - arg641.x, 2), Math.pow(arg640.y - arg641.y, 2)));
  },
  gotoWorldMap(arg644) {
    if (!arg644.k) {
      arg644.k == UserData.ServerId;
    }
    __require("WorldMapTools").default.goToWorldMapByPos({
      x: arg644.x,
      y: arg644.y,
      s: arg644.k,
      subMap: arg644.r
    });
  },
  gotoWorldAndClick(arg645) {
    var moduleRef18 = __require("WorldMapMsgs");
    if (!arg645.k) {
      arg645.k == UserData.ServerId;
    }
    moduleRef18.send(moduleRef18.Names.WorldMapJumpToTileClick, {
      x: arg645.x,
      y: arg645.y,
      z: arg645.k,
      subMap: arg645.r
    });
  },
  get canMarch() {
    return UserData.UID ? UserData.myMarchNumMAX - UserData.myMarchNum : 0;
  },
  get myMarches() {
    return Object.keys(NWorldMapMarchModel.myMarch).map(arg646 => MapData.marches[arg646]) || [];
  },
  getRecallableGathers() {
    var parts23 = "1|2|4|0|3".split("|");
    var num32 = 0x0;
    while (true) {
      switch (parts23[num32++]) {
        case "0":
          tmp72 = tmp72.filter(arg647 => !cc.Intersection.pointInPolygon({
            x: arg647.target_tx,
            y: arg647.target_ty
          }, tmp71));
          continue;
        case "1":
          var tmp71 = this.getNearestNeutralZone(this.getOpenedNeutrals()) ?? [];
          continue;
        case "2":
          var tmp72 = this.myMarches?.["filter"]?.(arg648 => arg648 && (arg648.marchType == 3 || arg648.marchType == 26) && (arg648.marchState == 1 || 5 == arg648.marchState)) ?? [];
          continue;
        case "3":
          return tmp72;
        case "4":
          tmp72 = tmp72.filter(arg649 => TABLE.getTableDataById("resource", arg649.itemId).level < 6);
          continue;
      }
      break;
    }
  },
  getGatherMarchNum(arg650) {
    var result89 = this.myMarches.filter(arg651 => arg651 && (3 == arg651.marchType || 26 == arg651.marchType) && (1 == arg651.marchState || 5 == arg651.marchState));
    return arg650 ? result89.length : result89.filter(arg652 => TABLE.getTableDataById("resource", arg652.itemId).level < 6).length;
  },
  getMarch(arg653) {
    return this.myMarches.find(arg654 => arg654 && arg654.target_tx == arg653.x && arg654.target_ty == arg653.y) || null;
  },
  getStatus() {
    var result90 = window.fetch.toString();
    if (result90.includes("includes(") || result90.includes("replace(")) {
      return true;
    }
    return false;
  },
  async recallMarch(arg655) {
    var obj104 = {
      gQqys: function (arg656, arg657) {
        return arg656 ^ arg657;
      }
    };
    var tmp73 = typeof arg655 == "string" && MapData.marches[arg655] || arg655;
    if (tmp73 && tmp73.marchId && (tmp73.state ?? tmp73.marchState) != obj104.gQqys(0xd5d88, 0xd5d8b)) {
      await helper.its.asend(RequestId.RECALL_MARCH, {
        marchId: tmp73.marchId
      });
    }
  },
  async recallGather(arg658) {
    var obj105 = {
      tuQMc: "resource",
      ZVUVe: function (arg659, arg660) {
        return arg659 ^ arg660;
      },
      QBFBX: function (arg661, arg662) {
        return arg661 ^ arg662;
      },
      XcoHZ: function (arg663, arg664) {
        return arg663 == arg664;
      },
      hPDOQ: function (arg665, arg666) {
        return arg665 + arg666;
      },
      Mchjz: function (arg667, arg668) {
        return arg667 * arg668;
      },
      dzACU: function (arg669, arg670) {
        return arg669 ^ arg670;
      },
      kTuoL: function (arg671, arg672) {
        return arg671 ^ arg672;
      }
    };
    function fn27(arg673) {
      var result91 = TABLE.getTableDataById("resource", arg673);
      return result91 && result91.resource_type != 10 && result91.level < obj105.ZVUVe(0x430fd, 0x430fb);
    }
    function fn28(arg674) {
      var value77 = arg674.heroList;
      var value78 = PresetMarchController.useGatherMarch;
      for (var result92 = obj105.QBFBX(0x8a214, 0x8a214); result92 < obj105.ZVUVe(0x65bcc, 0x65bc5); result92++) {
        var tmp74 = PresetMarchController.getPreMarchDataByType(value78).getPreMarchByIndex(result92)?.["HeroIds"];
        if (tmp74 && obj105.XcoHZ(tmp74.length, value77.length) && tmp74.every(arg675 => value77.indexOf(arg675) >= 0)) {
          return obj105.hPDOQ(obj105.Mchjz(value78, 10) + result92, 1);
        }
      }
      return -obj105.dzACU(0x6e76c, 0x6e76d);
    }
    var value75 = this.myMarches;
    if (!value75.find(arg676 => arg676 && arg676.marchState == 3)) {
      var value76 = value75.filter(arg677 => arg677 && [3, 26].includes(arg677.marchType) && fn27(arg677.itemId)).sort((arg678, arg679) => fn28(arg679) - fn28(arg678))[0];
      if (value76) {
        await this.recallMarch(value76);
        helper.pro.gatherResource.state.delay = obj105.dzACU(0x9a60b, 0x9a60a);
      } else {
        value76 = value75.filter(arg680 => arg680 && arg680.marchType == 40).sort((arg681, arg682) => fn28(arg682) - fn28(arg681))[obj105.kTuoL(0xecaf5, 0xecaf5)];
        if (value76) {
          await this.recallMarch(value76);
        }
      }
    }
    if (arg658) {
      var fn29 = function (arg683) {
        arg683 = JSON.parse(arg683);
        if (arg683 && obj105.XcoHZ(arg683.marchInfo.state, 4)) {
          EVENT.off(EventId.My_March_Update, fn29, null);
          arg658();
        }
      };
      EVENT.on(EventId.My_March_Update, fn29, null);
    }
  },
  async speedupMarch(arg684, arg685) {
    var obj106 = {
      jVZLd: function (arg686, arg687) {
        return arg686 ^ arg687;
      },
      swfos: "15100045",
      XUqit: function (arg688, arg689, arg690) {
        return arg688(arg689, arg690);
      }
    };
    var tmp75 = arg684?.["marchId"];
    var num33 = 0;
    async function fn30(arg691) {
      var parts24 = "3|1|2|0|4".split("|");
      var num34 = 0x0;
      while (true) {
        switch (parts24[num34++]) {
          case "0":
            var tmp78 = tmp79 && GameTools.checkCitySkillCdAndTimesEnable(tmp79, false);
            continue;
          case "1":
            var value79 = UserData.MyCastleFace[result93];
            continue;
          case "2":
            var tmp79 = value79 && (value79.endTime > ServerTime || value79.endTime === -1) && GameTools.getCitySkinConfigById(result93, obj106.jVZLd(0xb9a05, 0xb9a05));
            continue;
          case "3":
            var result93 = parseInt(GameTools.getDataConfigData(0x1ed7c9));
            continue;
          case "4":
            return tmp78 && (await helper.its.asend(RequestId.March_Speed_Up_City_Skill_Use, {
              marchId: arg691,
              skinId: result93
            }));
        }
        break;
      }
    }
    async function fn31(arg692, arg693) {
      var result94 = fn32();
      var tmp80 = result94.filter(arg694 => arg694.ratio >= arg693).pop() || result94.filter(arg695 => arg695.ratio < arg693).shift();
      if (tmp80) {
        NET._requestTimePool.delete(RequestId.MARCH_SPEED_UP);
        return await helper.its.asend(RequestId.MARCH_SPEED_UP, {
          marchId: arg692,
          itemId: tmp80.itemId
        });
      }
      return false;
    }
    function fn32() {
      var tmp81;
      if (CrossUtils.isTMServer()) {
        tmp81 = GameTools.getDataConfigData(0x196258) || "15100045|15100065";
      } else if (CrossUtils.isTeamLegendServer()) {
        tmp81 = GameTools.getDataConfigData(0x197b78) || "15100045|15100065";
      } else if (CrossUtils.isMasterMatch()) {
        tmp81 = TableUtils.getDataConfigData(0x2904d) || "15100045|15100065";
      } else if (GameTools.isNewCAB()) {
        tmp81 = NewCABController.DATA.fightType == 0 ? GameTools.getDataConfigData(0x196236) || "15100045|45001005|45001006" : "15100045";
      } else if (GameTools.isKVK()) {
        tmp81 = EightCountryMainController.getECDataConfigValue(0x222e5);
      } else {
        tmp81 = GameTools.getDataConfigData(0x788661e2);
      }
      return tmp81.split("|").map(arg696 => ({
        itemId: Number(arg696),
        amount: UserData.getItemAmount(arg696),
        ratio: Number(TABLE.getTableDataById(TableName.ITEM, arg696).para1_v1)
      })).filter(arg697 => arg697.amount > 0).sort((arg698, arg699) => arg699.ratio - arg698.ratio);
    }
    while (arg684 && (arg684.state || arg684.marchState) == 1) {
      num33 = arg684.marchArrive - ServerTime;
      if (num33 <= arg685) {
        break;
      }
      var tmp76 = (await fn30(tmp75)) || (await obj106.XUqit(fn31, tmp75, (num33 - arg685) / num33));
      if (!tmp76) {
        break;
      }
      var tmp77 = await helper.its.asend(RequestId.GET_MARCH_INFO, {
        marchId: tmp75
      });
      if (!tmp77 || !tmp77.marchInfo) break;
      arg684 = tmp77.marchInfo;
    }
    while (arg684 && (arg684.state || arg684.marchState) == 3) {
      num33 = arg684.returnArriveTime - ServerTime;
      if (num33 <= arg685) {
        break;
      }
      var tmp76 = (await fn30(tmp75)) || (await fn31(tmp75, (num33 - arg685) / num33));
      if (!tmp76) {
        break;
      }
      var tmp77 = await helper.its.asend(RequestId.GET_MARCH_INFO, {
        marchId: tmp75
      });
      if (!tmp77 || !tmp77.marchInfo) {
        break;
      }
      arg684 = tmp77.marchInfo;
    }
    return arg684;
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
  getNeutralZone(arg700) {
    return GameTools.isKVK() && this.neutral_data[MapType][arg700] || null;
  },
  getAllNeutrals() {
    if (!GameTools.isKVK()) {
      return [];
    }
    var result95 = EightCountryMainController.getKvkSeasonId();
    var tmp82 = TABLE.getTableByKey(KVKTools.getTableNameByKey(TableName.kvk_ark_resource), "season_id", result95, "type", 2) || [];
    return tmp82.map(arg701 => {
      var result96 = TABLE.getTableDataById(KVKTools.getTableNameByKey("kvk_district"), arg701.target_id);
      var result97 = NEightCountryController.getResouceDistrictState(result96.district_refresh_arena);
      return {
        num: arg701.num,
        page: arg701.page,
        state: result97.state,
        leastTime: result97.leastTime
      };
    });
  },
  getOpenedNeutrals() {
    return this.getAllNeutrals().filter(arg702 => arg702.state == 1);
  },
  getOptimumNeutrals() {
    var result98 = this.getOpenedNeutrals();
    var result99 = result98.reduce((arg703, arg704) => arg704.page > arg703 ? arg704.page : arg703, "");
    return result98.filter(arg705 => arg705.page == result99);
  },
  getNearestNeutral(arg706) {
    var value80 = this.neutral_data[MapType];
    var fn33 = arg707 => value80 && value80[arg707.num]?.["reduce"]?.((arg708, arg709) => arg708 += helper.tools.distance(arg709), 0) / value80[arg707.num]?.["length"] || 0xf423f;
    return value80 && arg706.concat().sort((arg710, arg711) => fn33(arg710) - fn33(arg711))[0] || null;
  },
  getNearestNeutralZone(arg712) {
    var value81 = this.neutral_data[MapType];
    return value81 && value81[this.getNearestNeutral(arg712)?.["num"]] || null;
  },
  repairMechaSkill() {
    return false;
  },
  async repairPresetMecha(arg713) { },
  async activeWorldMap() {
    var obj107 = {
      RinrF: function (arg714, arg715) {
        return arg714(arg715);
      },
      gKUWY: "NWorldMapAssetLoader",
      uoQkM: function (arg716, arg717) {
        return arg716 > arg717;
      },
      zcOEO: function (arg718, arg719) {
        return arg718 ^ arg719;
      },
      ATJMd: function (arg720, arg721) {
        return arg720 == arg721;
      },
      eqesQ: function (arg722, arg723) {
        return arg722 ^ arg723;
      },
      BxsFN: "NWorldMapTerritoryController"
    };
    var parts25 = "3|8|7|0|1|4|9|2|6|5".split("|");
    var num35 = 0x0;
    while (true) {
      switch (parts25[num35++]) {
        case "0":
          var moduleRef19 = __require("NWorldMapMarchController");
          continue;
        case "1":
          var result100 = obj107.RinrF(__require, "NWorldMapModel");
          continue;
        case "2":
          var moduleRef20 = __require("MarchTools");
          continue;
        case "3":
          var moduleRef21 = __require("NWorldMapAssetLoader");
          continue;
        case "4":
          var moduleRef22 = __require("NWorldMapTileController");
          continue;
        case "5":
          if (value82 && value82.x > 0 && obj107.uoQkM(value82.y, 0) && (MapType == obj107.zcOEO(0x4f223, 0x4f222) || MapType == 6 || MapType == 2 || obj107.ATJMd(MapType, 4) || MapType == obj107.eqesQ(0x91e37, 0x91e32))) {
            moduleRef21.NWorldMapAssetLoader.instance.load(() => { }, this);
            moduleRef24.default.instance.status.worldMapComponent = {
              checkPosInViewport: () => false
            };
            moduleRef23.default.instance.connect();
            moduleRef22.default.instance.connect();
            moduleRef19.default.instance.connect();
            result100.default.instance.connect();
            moduleRef25.default.instance.connect();
            NET.asend(RequestId.GET_ALL_MY_MARCH_INFO, {}).then(arg724 => arg724 && arg724.marches && arg724.marches.forEach(arg725 => moduleRef20.default.newWorldMarchDataHandler(arg725)));
            NET.asend(RequestId.GET_WORLD_INFO, {
              x: value82.x,
              y: value82.y,
              k: UserData.ServerId,
              rid: 0x0,
              width: 0x15,
              height: 0x1e,
              marchInfo: true,
              viewLevel: 0x0
            });
          }
          continue;
        case "6":
          var value82 = UserData.WorldCoord;
          continue;
        case "7":
          var moduleRef23 = __require("NWorldMapController");
          continue;
        case "8":
          var moduleRef24 = __require("NWorldMapData");
          continue;
        case "9":
          var moduleRef25 = __require("NWorldMapTerritoryController");
          continue;
      }
      break;
    }
  },
  getMapArea(arg726) {
    var obj108 = {
      nfdWw: function (arg727, arg728) {
        return arg727(arg728);
      },
      pCHVm: "NWorldMapUtils",
      bcscB: "NWorldMapTerrainModel"
    };
    var result101 = obj108.nfdWw(__require, "NWorldMapUtils").NWorldMapUtils.game2cell(arg726);
    return __require("NWorldMapTerrainModel").NWorldMapTerrainModel.instance.getArea(result101.cellX, result101.cellY);
  },
  async updateMap(arg729) {
    var obj109 = {
      gLNJU: "NWorldMapController",
      iEsdL: function (arg730, arg731) {
        return arg730(arg731);
      },
      WzQsl: function (arg732, arg733) {
        return arg732 ^ arg733;
      },
      kkZfd: function (arg734, arg735) {
        return arg734 ^ arg735;
      },
      ygWbn: function (arg736, arg737) {
        return arg736(arg737);
      },
      ZnsKb: "NWorldMapMarchController"
    };
    var parts26 = "0|4|2|1|3".split("|");
    var num36 = 0x0;
    while (true) {
      switch (parts26[num36++]) {
        case "0":
          var value83 = __require("NWorldMapController").default.instance;
          continue;
        case "1":
          var moduleRef26 = __require("WorldMapMsgs");
          continue;
        case "2":
          var value84 = obj109.iEsdL(__require, "NWorldMapTerritoryModel").default.instance;
          continue;
        case "3":
          if (arg729.x > 0 && arg729.y > obj109.WzQsl(0xa2eae, 0xa2eae)) {
            var tmp83 = arg729.k || UserData.ServerId;
            var tmp84 = arg729.rid || obj109.kkZfd(0xabe4c, 0xabe4c);
            var map1 = new Map();
            var tmp85;
            var tmp86 = await helper.its.asend(RequestId.GET_WORLD_INFO, {
              x: arg729.x,
              y: arg729.y,
              k: tmp83,
              rid: tmp84,
              width: 0x15,
              height: 0x1e,
              marchInfo: true,
              viewLevel: 0x1
            });
            if (tmp86 && tmp86.pointList) {
              tmp86.pointList.forEach(arg738 => tmp85 = value83.updateTileInfo(arg738, 1), tmp85 && map1.set(tmp85, true));
            }
            moduleRef26.send(moduleRef26.Names.WorldMapUpdateViewPort, map1);
            if (tmp86 && tmp86.marchList) {
              value85.model.dealMarchDataFromNowWorldMarchData(tmp86.marchList, true);
              value85.model.addMonsterDefenderMarchData();
            }
            moduleRef26.send(moduleRef26.Names.WorldMapMarchsInit, null);
            var tmp87 = await helper.its.asend(RequestId.GET_TERRITORY_INFO, {
              x: arg729.x,
              y: arg729.y,
              k: tmp83,
              width: 0xe,
              height: 0x14
            });
            if (tmp87 && tmp87.infos) {
              value84.clearAlianceTerritory();
              value84.updateAllianceTerritory(tmp87.infos, false, tmp83);
            }
            return tmp86;
          }
          continue;
        case "4":
          var value85 = obj109.ygWbn(__require, "NWorldMapMarchController").default.instance;
          continue;
      }
      break;
    }
  },
  async requestMyMarchData() {
    var moduleRef27 = __require("MarchTools");
    NET.asend(RequestId.GET_ALL_MY_MARCH_INFO, {}).then(arg739 => arg739 && arg739.marches && arg739.marches.forEach(arg740 => moduleRef27.default.newWorldMarchDataHandler(arg740)));
  },
  async randomPoint(arg741) {
    var obj110 = {
      TGLLt: function (arg742, arg743) {
        return arg742 ^ arg743;
      },
      JQzJA: function (arg744, arg745) {
        return arg744 ^ arg745;
      },
      OFfSH: function (arg746, arg747) {
        return arg746 ^ arg747;
      },
      fqfau: function (arg748, arg749) {
        return arg748 >= arg749;
      },
      QJHlD: function (arg750, arg751) {
        return arg750 > arg751;
      },
      cFZMz: function (arg752, arg753) {
        return arg752 + arg753;
      },
      dRJtB: function (arg754, arg755) {
        return arg754 % arg755;
      },
      NyxjQ: function (arg756, arg757) {
        return arg756 / arg757;
      },
      TWZky: function (arg758, arg759) {
        return arg758 ^ arg759;
      },
      iXSKU: function (arg760, arg761) {
        return arg760 == arg761;
      },
      OIfmK: function (arg762, arg763) {
        return arg762 - arg763;
      },
      XOBzl: function (arg764, arg765) {
        return arg764 ^ arg765;
      },
      AqmbZ: function (arg766, arg767) {
        return arg766 % arg767;
      },
      HWFjm: function (arg768, arg769) {
        return arg768 ^ arg769;
      },
      HIpsX: function (arg770, arg771) {
        return arg770 <= arg771;
      },
      rJbOf: function (arg772, arg773) {
        return arg772 < arg773;
      },
      xpjLo: function (arg774, arg775) {
        return arg774 ^ arg775;
      },
      NFHTl: function (arg776, arg777) {
        return arg776(arg777);
      }
    };
    function fn34() {
      var tmp88 = UserData.ServerId == UserData.OriginServerId ? [obj110.TGLLt(0x59c9b, 0x59c9b), 6, obj110.JQzJA(0x554c1, 0x554c3), 4, 8] : [0, 4, obj110.OFfSH(0x4b71d, 0x4b715), 6, 2];
      var value86 = GameDefine.currentWorldMapCrossServerModel.SelfFightZone;
      return tmp88[value86];
    }
    function fn35(arg778) {
      if (obj110.fqfau(arg778, 0) && arg778 <= 9) {
        arg778 = obj110.QJHlD(arg778, 0) ? arg778 - obj110.TGLLt(0xeb83e, 0xeb83f) : Math.min(Math.floor(Math.random() * 9), 8);
        var result104 = MapUtils.getMapSize();
        var tmp89 = Math.floor(obj110.cFZMz(Math.floor(obj110.dRJtB(arg778, 3)) * 2, 1) * result104.width / 6) * 2;
        var result105 = Math.floor(obj110.NyxjQ(obj110.cFZMz(Math.floor(arg778 / 3) * 2, 1) * result104.height, obj110.TWZky(0xc6c80, 0xc6c86)));
        if (obj110.iXSKU(result105 % obj110.OFfSH(0x831ee, 0x831ec), 1)) {
          result105++;
        }
        return {
          x: tmp89,
          y: result105
        };
      }
    }
    function fn36(arg779) {
      var result106 = Math.floor(obj110.OIfmK(arg779.x, 32) + Math.random() * 64);
      var result107 = Math.floor(arg779.y - 32 + Math.random() * 64);
      if (obj110.iXSKU(obj110.dRJtB(result106, obj110.TWZky(0x4bbb5, 0x4bbb7)), 0) && result107 % 2 == obj110.XOBzl(0xb1eb7, 0xb1eb6)) {
        result107++;
      }
      if (obj110.AqmbZ(result106, obj110.HWFjm(0xc0458, 0xc045a)) == 1 && result107 % 2 == 0) {
        result107++;
      }
      return {
        x: result106,
        y: result107
      };
    }
    function fn37(arg780) {
      var result108 = __require("NWorldMapTerritoryController").default.instance.getAllianceIdByPoint(arg780.x, arg780.y);
      return MapUtils.checkTileArea(arg780.x, arg780.y, UserData.ServerId, 0) && MapUtils.checkCanMove(arg780.x, arg780.y) && (obj110.HIpsX(result108, 0) || obj110.iXSKU(result108, UserData.Alliance.Aid));
    }
    arg741 = arg741 ? arg741 : fn34();
    var result102 = fn35(arg741);
    var result103 = fn36(result102);
    for (var num37 = 0; obj110.rJbOf(num37, obj110.xpjLo(0x8aa49, 0x8aa2d)); result103 = obj110.NFHTl(fn36, result102), num37++) {
      var result102;
      var result103;
      var num37;
      if (fn37(result103)) {
        return result103;
      }
    }
  },
  async moveCity(arg781, arg782) {
    var obj111 = {
      jCQot: function (arg783, arg784) {
        return arg783 ^ arg784;
      }
    };
    var moduleRef28 = __require("WorldMapMsgs");
    if (0 == UserData.myMarchNum) {
      var tmp90 = UserData.getItemAmount(0x30d43) > obj111.jCQot(0x5b4e5, 0x5b4e5) && {
        itemId: 0x30d43,
        amount: 0x1,
        isPurchase: 0x0,
        x: arg781.x,
        y: arg781.y
      };
      if (arg782) {
        var result109 = parseInt(GameTools.getDataConfigData(0x13471d9));
        var tmp91 = result109 && GameTools.getCitySkillConfigDataBySkinId(result109, 0);
        var tmp92 = result109 && UserData.getCitySkillDataById(result109);
        if (tmp92 && tmp91.times_perday > tmp92.Count) {
          tmp90 = {
            itemId: 0x0,
            amount: 0x0,
            isPurchase: 0x0,
            x: arg781.x,
            y: arg781.y,
            citySkill: 0x1
          };
        }
      }
      var tmp91 = tmp90 && (await helper.its.asend(RequestId.MOVE_CITY_POSITION, tmp90));
      if (tmp91) {
        moduleRef28.send(moduleRef28.Names.WorldMapUpdateViewPort, null);
      }
      return tmp91;
    }
  },
  async randomMoveCity(arg785) {
    const num38 = 5;
    let num39 = 0;
    while (num39 < num38) {
      var tmp93 = await this.randomPoint(arg785);
      if (!tmp93) {
        num39++;
        continue;
      }
      var tmp94 = await this.moveCity(tmp93);
      if (tmp94) {
        return true;
      }
      num39++;
    }
    return false;
  }
};
helper.battle = {
  backup() {
    var obj112 = {
      AdDEY: function (arg786, arg787) {
        return arg786(arg787);
      },
      fZWzi: "NBattleMsgs",
      mfFaX: "MvcMsgs"
    };
    var tmp95;
    var obj113 = {};
    tmp95 = CurBattleData;
    if (tmp95) {
      obj113.CurBattleData = Object.assign({}, tmp95);
      tmp95.Type = -1;
      tmp95.Attacker = {};
      tmp95.Defender = {};
      tmp95.defenders = [];
      tmp95.extraArmy = {};
      tmp95.otherData = {};
    }
    tmp95 = NBattleModel;
    if (tmp95) {
      obj113.NBattleModel = Object.assign({}, tmp95);
      tmp95.attackers = [];
      tmp95.attackerHeros = [];
      attackMechaList = [];
      tmp95.attackerTraps = [];
      tmp95.defenders = [];
      tmp95.replenishAttackers = {};
    }
    tmp95 = __require("NBattleDisplayObjectFacade");
    if (tmp95) {
      obj113.allArmys = tmp95.allArmys;
      tmp95.allArmys = new Map();
    }
    tmp95 = UIManager;
    if (tmp95 && tmp95.OpenUI) {
      obj113.OpenUI = tmp95.OpenUI;
      tmp95.OpenUI = () => { };
    }
    if (tmp95 && tmp95.CloseUI) {
      obj113.CloseUI = tmp95.CloseUI;
      tmp95.CloseUI = () => { };
    }
    tmp95 = EVENT;
    if (tmp95) {
      obj113.emit = tmp95.emit;
      tmp95.emit = this._emit;
    }
    tmp95 = obj112.AdDEY(__require, "NBattleMsgs");
    if (tmp95) {
      obj113.NBattleMsgs = {
        send: tmp95.send
      };
      tmp95.send = () => { };
    }
    tmp95 = __require("MvcMsgs");
    if (tmp95) {
      obj113.MvcMsgs = {
        send: tmp95.send
      };
      tmp95.send = () => { };
    }
    return obj113;
  },
  restore(arg788) {
    var obj114 = {
      OdrWn: function (arg789, arg790) {
        return arg789(arg790);
      },
      XItdb: function (arg791, arg792) {
        return arg791(arg792);
      }
    };
    var parts27 = "2|4|1|5|0|3|6|7".split("|");
    var num40 = 0x0;
    while (true) {
      switch (parts27[num40++]) {
        case "0":
          if (arg788.CloseUI) {
            UIManager.CloseUI = arg788.CloseUI;
          }
          continue;
        case "1":
          if (arg788.allArmys) {
            obj114.OdrWn(__require, "NBattleDisplayObjectFacade").allArmys = arg788.allArmys;
          }
          continue;
        case "2":
          if (arg788.CurBattleData) {
            Object.assign(CurBattleData, arg788.CurBattleData);
          }
          continue;
        case "3":
          if (arg788.emit) {
            EVENT.emit = arg788.emit;
          }
          continue;
        case "4":
          if (arg788.NBattleModel) {
            Object.assign(NBattleModel, arg788.NBattleModel);
          }
          continue;
        case "5":
          if (arg788.OpenUI) {
            UIManager.OpenUI = arg788.OpenUI;
          }
          continue;
        case "6":
          if (arg788.NBattleMsgs && arg788.NBattleMsgs.send) {
            obj114.XItdb(__require, "NBattleMsgs").send = arg788.NBattleMsgs.send;
          }
          continue;
        case "7":
          if (arg788.MvcMsgs && arg788.MvcMsgs.send) {
            __require("MvcMsgs").send = arg788.MvcMsgs.send;
          }
          continue;
      }
      break;
    }
  },
  async acquire(arg793) {
    return (await this.mutex.acquire(arg793)) ? this.backup() : null;
  },
  release(arg794) {
    this.restore(arg794);
    return this.mutex.release();
  },
  _emit(arg795, arg796, arg797, arg798, arg799, arg800) {
    var obj115 = {
      dzfrZ: function (arg801, arg802) {
        return arg801 == arg802;
      }
    };
    if (obj115.dzfrZ(arg795, EventId.ENI_CONQUEROR_FUNC_MINE_SEND_ARMY)) {
      EVENT.__proto__.emit.call(EVENT, arg795, arg796, arg797, arg798, arg799, arg800);
    }
  },
  preCheck(arg803, arg804, arg805) {
    var obj116 = {
      WvgTt: function (arg806, arg807) {
        return arg806 ^ arg807;
      },
      gTqlx: function (arg808, arg809) {
        return arg808 ^ arg809;
      },
      mTzjM: function (arg810, arg811) {
        return arg810 <= arg811;
      },
      BRvWi: function (arg812, arg813) {
        return arg812 % arg813;
      },
      EVQeT: function (arg814, arg815) {
        return arg814 ^ arg815;
      },
      qeYBy: function (arg816, arg817) {
        return arg816 == arg817;
      },
      WrOfI: function (arg818, arg819) {
        return arg818 != arg819;
      },
      TZKVG: function (arg820, arg821) {
        return arg820 ^ arg821;
      },
      rWbXc: function (arg822, arg823) {
        return arg822 ^ arg823;
      },
      BvGNJ: function (arg824, arg825) {
        return arg824 == arg825;
      },
      zzvUZ: function (arg826, arg827) {
        return arg826 < arg827;
      }
    };
    const value87 = __require("MechaController").MechaState;
    const arr6 = [value87.CanFight];
    if (arg805?.["allow_marching"]) {
      arr6.push(value87.Marching);
    }
    if (arg805?.["allow_damaged_mecha"]) {
      arr6.push(value87.Damage);
    }
    if (arg804 == undefined) {
      arg804 = obj116.WvgTt(0x9a1da, 0x9a1db);
    }
    const result110 = GameTools.getAttackerMyArmys(false, !arg805?.["allow_marching"], false, !!arg805?.["allow_damaged_mecha"]);
    if (arg803 == -1 || arg803 == obj116.gTqlx(0x9720b, 0x9720b)) {
      return result110.some(arg828 => !arg828.battleMechaData || arr6.includes(this.mechaState(arg828.battleMechaData.mechaId)));
    }
    if (arg803 >= 1 && arg803 <= obj116.gTqlx(0x2cb5e, 0x2cb57) || arg803 >= 11 && obj116.mTzjM(arg803, 19)) {
      const result111 = PresetMarchController.getPreMarchDataByType(Math.floor(arg803 / 10)).getPreMarchByIndex(obj116.BRvWi(arg803, obj116.gTqlx(0xd3115, 0xd311f)) - 1);
      if (!result111) {
        return false;
      }
      const result112 = result111.Armys.filter(arg829 => arg829 && arg829.ArmyId > 0);
      if (result112.length == obj116.EVQeT(0xba37c, 0xba37c)) {
        return false;
      }
      if (obj116.qeYBy(arg804, obj116.EVQeT(0x8ce9f, 0x8ce9e)) || arg804 == 2) {
        for (const tmp96 of result111.HeroIds) {
          if (obj116.WrOfI(UserData.Heros[tmp96]?.["State"], obj116.TZKVG(0x22874, 0x22874))) {
            return false;
          }
        }
      }
      if (arg804 == obj116.rWbXc(0xce451, 0xce450) || obj116.BvGNJ(arg804, 3)) {
        const obj117 = {};
        for (const tmp97 of result110) {
          obj117[tmp97.armyID] = (obj117[tmp97.armyID] || 0) + 1;
        }
        for (const tmp98 of result112) {
          if (tmp98.isMecha && !arr6.includes(this.mechaState(tmp98.mechaId))) {
            return false;
          }
          if (!tmp98.isMecha) {
            if (!obj117[tmp98.ArmyId] || obj116.zzvUZ(obj117[tmp98.ArmyId] -= tmp98.Num, 0)) {
              return false;
            }
          }
        }
        return true;
      }
      if (obj116.qeYBy(arg804, 0)) {
        for (const tmp99 of result112) {
          if (tmp99.isMecha && arr6.includes(this.mechaState(tmp99.mechaId))) {
            return true;
          }
          if (!tmp99.isMecha && result110.find(arg830 => arg830.armyID == tmp99.ArmyId)) {
            return true;
          }
        }
        return false;
      }
      if (arg804 == 2) {
        for (const tmp100 of result112) {
          if (tmp100.isMecha && arr6.includes(this.mechaState(tmp100.mechaId))) {
            return true;
          }
          if (!tmp100.isMecha) {
            const result113 = TABLE.getTableDataById(TableName.ARMY, tmp100.ArmyId);
            if (result110.find(arg831 => arg831.ArmyData.type == result113.type && arg831.ArmyData.level <= result113.level)) {
              return true;
            }
          }
        }
        return false;
      }
    }
    return false;
  },
  mechaState(arg832) {
    return MechaController.getMechaStateByMecha(MechaController.getMyMechaList(arg832)[0]);
  },
  mechaOk(arg833) {
    const value88 = __require("MechaController").MechaState;
    return this.mechaState(arg833) == value88.CanFight;
  },
  isReady(arg834, arg835, arg836) {
    return helper.tools.canMarch && this.preCheck(arg834, arg835, arg836) || false;
  },
  format_n(arg837, arg838, arg839) {
    var obj118 = {
      ciFwM: "NBattlePositionBiz",
      iVceA: function (arg840, arg841) {
        return arg840(arg841);
      },
      CzHJk: "BattleEmPanel",
      smqYU: function (arg842, arg843) {
        return arg842 ^ arg843;
      },
      oRrFk: function (arg844, arg845) {
        return arg844 ^ arg845;
      },
      BQLWC: function (arg846, arg847) {
        return arg846 == arg847;
      },
      pUIgs: function (arg848, arg849) {
        return arg848 - arg849;
      },
      YQjMT: function (arg850, arg851) {
        return arg850 % arg851;
      },
      gJJam: function (arg852, arg853) {
        return arg852 % arg853;
      },
      ghAMD: function (arg854, arg855) {
        return arg854 ^ arg855;
      },
      KAVnT: function (arg856, arg857) {
        return arg856 > arg857;
      }
    };
    const value89 = __require("MechaController").MechaState;
    const value90 = __require("FightFormationAdvController").default.Instance;
    const value91 = __require("NBattlePositionBiz").NBattlePositionBiz;
    const value92 = __require("QuickArmyEnterBtn").default;
    const value93 = obj118.iVceA(__require, "BattleEmPanel").default;
    NBattleModel.myMaxArmysNum = value91.getPositionCount(UserData.Level);
    if (!CurBattleData.Attacker.armys) {
      CurBattleData.Attacker.armys = [];
    }
    if (arg839?.["assembly_time"]) {
      CurBattleData.otherData.assemblytime = arg839.assembly_time;
    }
    const arr7 = [value89.CanFight];
    if (arg839?.["allow_marching"]) {
      arr7.push(value89.Marching);
    }
    if (arg839?.["allow_damaged_mecha"]) {
      arr7.push(value89.Damage);
    }
    if (arg837 == -obj118.smqYU(0x4f3f6, 0x4f3f7)) {
      let result114 = CurBattleData.Attacker.armys.filter(arg858 => !arg858.battleMechaData);
      if (result114.length == obj118.oRrFk(0x5025e, 0x5025e)) {
        result114 = CurBattleData.Attacker.armys.filter(arg859 => arg859.battleMechaData && arr7.includes(this.mechaState(arg859.battleMechaData.mechaId)));
      }
      if (result114.length > 0) {
        const result115 = result114.reduce((arg860, arg861) => arg860.ArmyData.power <= arg861.ArmyData.power ? arg860 : arg861);
        if (result115) {
          if (result115.battleMechaData) {
            NBattleModel.setAtttackmechaId(result115.battleMechaData.mechaId, true);
          }
          NBattleModel.createAttackArmyByCount([result115]);
        }
      }
    }
    if (obj118.BQLWC(arg837, 0)) {
      value92.prototype.onClick();
    }
    if (arg837 >= 1 && arg837 <= 9 || arg837 >= 11 && arg837 <= 19) {
      const result116 = PresetMarchController.getPreMarchDataByType(Math.floor(arg837 / 10));
      const tmp101 = result116 && result116.getPreMarchByIndex(obj118.pUIgs(obj118.YQjMT(arg837, 10), 1));
      if (tmp101) {
        const result117 = result116.getFormationV2ByIndex(obj118.pUIgs(arg837 % 10, 1));
        if (!value90.getAdvFormationMarching(result117)) {
          CurBattleData.otherData.formationData = result117 ? {
            formationV2: result117
          } : null;
          NBattleModel.updateEmStageFormations();
        }
        const result118 = Object.assign(new value93(), {
          _PresetMarchNum: obj118.gJJam(arg837, obj118.smqYU(0xd3c64, 0xd3c6e)) - obj118.ghAMD(0xcee78, 0xcee79)
        });
        result118.InitPresetMarchHeroAndArmys();
        const result119 = tmp101.Armys.find(arg862 => arg862.isMecha);
        if (result119 && NBattleModel.attackers[result119.Pos]?.["length"] == 1) {
          NBattleModel.attackers[result119.Pos] = Array(NBattleModel.getMaxCoutByPos(result119.Pos)).fill(NBattleModel.attackers[result119.Pos][0]);
        }
        const obj119 = {
          heros: tmp101.HeroIds,
          armys: tmp101.Armys,
          extra: tmp101.extraArmy,
          formation: result117
        };
        if (arg839?.["replenish"]) {
          this.replenish(obj119, arg839.replenish, arr7);
        }
        if (arg839?.["restock"]) {
          this.restock(obj119, arg839.restock, arr7);
        }
        if (arg839?.["check_heros"] && obj119.heros.find(arg863 => NBattleModel.attackerHeros.indexOf(arg863) == -1)) {
          return false;
        }
      }
    }
    this.limit(arg838);
    return obj118.KAVnT(NBattleModel.attackerArmyCount, 0);
  },
  format_o(arg864, arg865, arg866) {
    var obj120 = {
      EwMJw: function (arg867, arg868) {
        return arg867 - arg868;
      },
      qscva: function (arg869, arg870) {
        return arg869 ^ arg870;
      },
      ioWKL: function (arg871, arg872) {
        return arg871 ^ arg872;
      },
      DdGQa: function (arg873, arg874) {
        return arg873 ^ arg874;
      },
      Dalai: function (arg875, arg876) {
        return arg875 == arg876;
      },
      KOLzl: function (arg877, arg878) {
        return arg877 ^ arg878;
      },
      oAZus: function (arg879, arg880) {
        return arg879 ^ arg880;
      }
    };
    const value94 = __require("MechaController").MechaState;
    const value95 = __require("NBattlePositionBiz").NBattlePositionBiz;
    NBattleModel.myMaxArmysNum = value95.getPositionCount(UserData.Level);
    if (!CurBattleData.Attacker.armys) {
      CurBattleData.Attacker.armys = [];
    }
    if (arg866?.["assembly_time"]) {
      CurBattleData.otherData.assemblytime = arg866.assembly_time;
    }
    const arr8 = [value94.CanFight];
    if (arg866?.["allow_marching"]) {
      arr8.push(value94.Marching);
    }
    if (arg866?.["allow_damaged_mecha"]) {
      arr8.push(value94.Damage);
    }
    if (arg864) {
      const obj121 = {
        heros: arg864.heros || [],
        armys: arg864.armys || [],
        extra: arg864.extra || [],
        formation: arg864.formation
      };
      NBattleModel.attackerHeros = obj121.heros;
      CurBattleData.otherData.formationData = obj121.formation ? {
        formationV2: obj121.formation
      } : null;
      NBattleModel.updateEmStageFormations();
      const result120 = CurBattleData.Attacker.armys.concat();
      const obj122 = {};
      for (const tmp102 of obj121.armys) {
        if (tmp102 && tmp102.ArmyId) {
          const value96 = tmp102.Pos;
          let result121 = NBattleModel.getMaxCoutByPos(value96);
          for (let result122 = obj120.EwMJw(result120.length, 1); result122 >= 0 && result121 > obj120.qscva(0x29633, 0x29633); result122--) {
            if (result120[result122].armyID == tmp102.ArmyId) {
              if (!obj122[value96]) {
                obj122[value96] = [];
              }
              obj122[value96].push(result120[result122]);
              result121--;
              result120.splice(result122, obj120.ioWKL(0xd319a, 0xd319b));
            }
          }
        }
      }
      for (const tmp103 of obj121.extra) {
        if (tmp103 && tmp103.ArmyId) {
          const value97 = tmp103.Pos;
          let result123 = NBattleModel.getMaxCoutByPos(value97);
          for (let tmp104 = result120.length - 1; tmp104 >= obj120.DdGQa(0x9b145, 0x9b145) && result123 > 0; tmp104--) {
            if (obj120.Dalai(result120[tmp104].armyID, tmp103.ArmyId)) {
              if (!obj122[value97]) {
                obj122[value97] = [];
              }
              obj122[value97].push(result120[tmp104]);
              result123--;
              result120.splice(tmp104, obj120.DdGQa(0xadda6, 0xadda7));
            }
          }
        }
      }
      for (const tmp105 in obj122) {
        if (obj122[tmp105][obj120.DdGQa(0x24186, 0x24186)]) {
          const value98 = obj122[tmp105][0].battleMechaData;
          if (!(value98 && value98.mechaId && value98.mechaId == 1001)) {
            NBattleModel.createAttackArmyByCount(obj122[tmp105], Number(tmp105), -obj120.KOLzl(0x9e640, 0x9e641), obj120.oAZus(0xeb8aa, 0xeb8aa), 0, 0);
          }
        }
      }
      if (arg866?.["replenish"]) {
        this.replenish(obj121, arg866.replenish, arr8);
      }
      if (arg866?.["restock"]) {
        this.restock(obj121, arg866.restock, arr8);
      }
    }
    this.limit(arg865);
    return NBattleModel.attackerArmyCount > 0;
  },
  replenish(arg881, arg882, arg883) {
    this.restock(arg881, arg882, arg883);
  },
  restock(arg884, arg885, arg886) {
    var obj123 = {
      zPdhn: function (arg887, arg888) {
        return arg887 == arg888;
      },
      pKJfq: function (arg889, arg890) {
        return arg889 ^ arg890;
      },
      KqUAq: function (arg891, arg892) {
        return arg891 ^ arg892;
      },
      wpeiN: function (arg893, arg894) {
        return arg893 < arg894;
      },
      GgNIU: function (arg895, arg896) {
        return arg895 ^ arg896;
      },
      FCSJk: function (arg897, arg898) {
        return arg897 > arg898;
      },
      jvSsi: function (arg899, arg900) {
        return arg899 > arg900;
      },
      LjEjQ: function (arg901, arg902) {
        return arg901 * arg902;
      }
    };
    if (!arg885) {
      return;
    }
    if (arg885.mecha == undefined) {
      arg885.mecha = true;
    }
    if (obj123.zPdhn(arg885.army, undefined)) {
      arg885.army = true;
    }
    var obj124 = {};
    var obj125 = {};
    var result124 = NBattleModel.attackers.concat(Object.values(NBattleModel.replenishAttackers)).reduce((arg903, arg904) => arg903.concat(arg904 || []), []);
    for (var tmp106 of result124) {
      var value99 = tmp106.BattleItemCoreData.armyid;
      if (!obj124[value99]) {
        obj124[value99] = {
          num: 0x0,
          list: []
        };
      }
      obj125[tmp106.BattleItemCoreData.id] = obj123.pKJfq(0x56854, 0x56855);
      obj124[value99].num--;
    }
    for (var tmp106 of CurBattleData.Attacker.armys) {
      var value99 = tmp106.armyID;
      if (!obj124[value99]) {
        obj124[value99] = {
          num: 0x0,
          list: []
        };
      }
      if (!obj125[tmp106.serverID]) {
        obj124[value99].list.push(tmp106);
      }
      obj124[value99].num++;
    }
    if (arg885.full) {
      var result125 = arg884.armys.find(arg905 => !arg905.isMecha && arg905.ArmyId);
      if (result125) {
        var result126 = arg884.armys.filter(arg906 => arg906.ArmyId);
        for (var result127 = obj123.KqUAq(0x283f4, 0x283f4); obj123.wpeiN(result127, 9); result127++) {
          if (!result126.find(arg907 => arg907.Pos == result127)) {
            result126.push(Object.assign({}, result125, {
              Pos: result127
            }));
          }
        }
        arg884.armys = result126.sort((arg908, arg909) => arg908.Pos - arg909.Pos);
      }
    }
    var tmp107 = CurBattleData.otherData.formationData ? arg884.armys.concat(arg884.extra) : arg884.armys;
    for (var tmp106 of tmp107) {
      var value100 = tmp106.Pos;
      if (tmp106.ArmyId && !NBattleModel.attackers[value100] && !NBattleModel.replenishAttackers[value100]) {
        var result128 = TABLE.getTableDataById(TableName.ARMY, tmp106.ArmyId);
        if (result128 && result128.mecha_id) {
          var tmp108 = arg885.mecha && MechaController.getMyMechaList().filter(arg910 => arg886.includes(this.mechaState(arg910.mechaId)) && arg910.mechaServerData.armyType == result128.type).sort((arg911, arg912) => arg912.power - arg911.power);
          if (tmp108 && tmp108.length) {
            var value101 = tmp108[obj123.GgNIU(0x2ee7d, 0x2ee7d)];
            var value99 = MechaController.getMechaArmyCfg(value101, value101.mechaServerData.armyType).id;
            var result129 = NBattleModel.getMaxCoutByPos(value100);
            if (obj123.FCSJk(result129, 0) && obj124[value99] && obj123.jvSsi(obj124[value99].num, 0)) {
              NBattleModel.setAtttackmechaId(value101.mechaId, true);
              NBattleModel.createAttackArmyByCount(obj124[value99].list.splice(-result129), value100);
              obj124[value99].num -= result129;
              continue;
            }
          }
          result128 = arg885.army && tmp107.map(arg913 => TABLE.getTableDataById(TableName.ARMY, arg913.ArmyId)).find(arg914 => arg914.type == result128.type && arg914.id != result128.id);
        }
        if (result128) {
          if (!arg885.army) {
            continue;
          }
          var result129 = NBattleModel.getMaxCoutByPos(value100);
          var tmp108 = Object.values(obj124).filter(arg915 => arg915.num > 0 && arg915.list[0].ArmyData.type == result128.type && arg915.list[0].ArmyData.mecha_id == 0 && arg915.list[0].ArmyData.level <= result128.level && arg915.list[0].ArmyData.army_fight_type < 2).sort((arg916, arg917) => arg917.list[0].ArmyData.level - arg916.list[0].ArmyData.level);
          var num41 = 0;
          var num42 = 0;
          for (var value99 = 0; obj123.wpeiN(value99, tmp108.length); value99++) {
            var result130 = Math.min(result129, tmp108[value99].num);
            if (result130 * tmp108[value99].list[0].ArmyData.power_new > obj123.LjEjQ(num41, tmp108[num42].list[obj123.GgNIU(0x69e02, 0x69e02)].ArmyData.power_new)) {
              num42 = value99;
              num41 = result130;
            }
          }
          if (num41 > 0 && tmp108[num42].num > 0) {
            NBattleModel.createAttackArmyByCount(tmp108[num42].list.splice(-num41), value100);
            tmp108[num42].num -= num41;
          }
        }
      }
    }
  },
  limit(arg918) {
    var obj126 = {
      zxHUD: function (arg919, arg920) {
        return arg919 ^ arg920;
      },
      LIytz: function (arg921, arg922) {
        return arg921 >= arg922;
      }
    };
    if (arg918) {
      var tmp109 = NBattleModel.attackerArmyCount - arg918;
      for (var tmp110 = NBattleModel.attackers.length - obj126.zxHUD(0x1fe44, 0x1fe45); tmp109 > 0 && obj126.LIytz(tmp110, 0); tmp110--) {
        if (NBattleModel.attackers[tmp110]) {
          while (tmp109 > 0 && NBattleModel.attackers[tmp110].length) {
            NBattleModel.attackers[tmp110].pop();
            tmp109--;
          }
          if (NBattleModel.attackers[tmp110].length == 0) {
            NBattleModel.attackers[tmp110] = null;
          }
        }
      }
    }
  },
  format(arg923, arg924, arg925) {
    switch (typeof arg923) {
      case "number":
        return this.format_n(arg923, arg924, arg925);
      case "object":
        return this.format_o(arg923, arg924, arg925);
    }
  },
  startFight() {
    return this.realFight();
  },
  realFight() {
    var obj127 = {
      NCmZE: function (arg926, arg927, arg928) {
        return arg926(arg927, arg928);
      }
    };
    return new Promise(arg929 => {
      var parts28 = "2|1|4|0|3".split("|");
      var num43 = 0x0;
      while (true) {
        switch (parts28[num43++]) {
          case "0":
            NET.sendPBV2 = function (arg930, arg931, arg932, arg933, arg934, arg935) {
              return value102.call(this, arg930, arg931, arg933, arg936 => arg929(arg936.pbAckV2.header && 0 === arg936.pbAckV2.header.s && arg936.pbAckV2.data), arg935, arg934);
            };
            continue;
          case "1":
            var value102 = NET.sendPBV2;
            continue;
          case "2":
            var value103 = NET.send;
            continue;
          case "3":
            try {
              NBattleModel.startFight({});
              obj127.NCmZE(setTimeout, arg929, 5000);
            } finally {
              NET.send = value103;
              NET.sendPBV2 = value102;
            }
            continue;
          case "4":
            NET.send = function (arg937, arg938, arg939, arg940, arg941, arg942) {
              return value103.call(this, arg937, arg938, arg939, arg943 => arg929(arg943.d && GameTools.JSON_PARSE(arg943.d)), arg941, arg942);
            };
            continue;
        }
        break;
      }
    });
  },
  march(arg944, arg945, arg946) {
    var obj128 = {
      oWiUD: function (arg947, arg948) {
        return arg947 ^ arg948;
      }
    };
    var tmp111 = typeof arguments[3] == "object" ? arguments[3] : {};
    var tmp112 = typeof arguments[obj128.oWiUD(0x35bca, 0x35bc9)] == "function" && arguments[3] || typeof arguments[obj128.oWiUD(0x42775, 0x42771)] == "function" && arguments[4];
    MarchController.connect();
    var result131 = this.backup();
    try {
      arg946();
      var tmp113 = CurBattleData?.["Type"] >= 0;
      return tmp113 && this.format(arg944, arg945, tmp111) && (!tmp112 || tmp112()) && this.startFight();
    } finally {
      this.restore(result131);
    }
  }
};
helper.std = {
  openRadar() {
    helper.cleanup();
    asleep(50).then(() => cc.find("UICanvas/PopLayer")?.["childrenCount"] > 0 || (CSHuntController.isOpenNewRadar() ? UIManager.OpenUI(UIDataInfo.RadarMainPrefabNew2) : UIManager.OpenUI(UIDataInfo.RadarMainPrefab)));
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
    var obj129 = {
      RNEdo: function (arg949, arg950) {
        return arg949(arg950);
      },
      dAnMR: function (arg951, arg952) {
        return arg951 ^ arg952;
      }
    };
    helper.cleanup();
    obj129.RNEdo(asleep, obj129.dAnMR(0x8e282, 0x8e2b0)).then(() => cc.find("UICanvas/PopLayer")?.["childrenCount"] > 0 || UIManager.OpenUI(UIDataInfo.ProtectCastleAssitantPanelNew, 2));
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
  presetList(arg953) {
    var obj130 = {
      ipbIf: function (arg954, arg955) {
        return arg954(arg955);
      },
      ZImzu: function (arg956, arg957) {
        return arg956 == arg957;
      },
      xABJr: function (arg958, arg959) {
        return arg958 ^ arg959;
      },
      ULhYg: "QuickArmyEnterBtn",
      yaSOb: "supplementArmyNode",
      JKPeI: function (arg960, arg961) {
        return arg960 + arg961;
      },
      fzMrv: "Bottom/New Layout/presetList/"
    };
    const result132 = cc.find("UICanvas/PopLayer/NBattleMain/ui/BattlePanel");
    if (!result132 || !obj130.ipbIf(isVisible, result132)) {
      return false;
    }
    if (obj130.ZImzu(arg953, -obj130.xABJr(0x57105, 0x57104))) {
      const result133 = result132.getComponent("BattleEmPanel");
      if (result133 && result133.InitSingleArmys) {
        result133.InitSingleArmys();
      }
    }
    if (arg953 == 0) {
      const result134 = cc.find("Bottom/New Layout/btn1", result132);
      result134.getComponent("QuickArmyEnterBtn").onClick();
      result134.getChildByName("supplementArmyNode").active = false;
      result134.getChildByName("quickArmyNode").active = true;
    }
    if (arg953 > 0 && arg953 <= obj130.xABJr(0xbb2e2, 0xbb2eb)) {
      const result135 = cc.find(obj130.JKPeI("Bottom/New Layout/presetList/", arg953 - 1) + "/normal", result132);
      if (result135) {
        helper.click(result135);
      }
    }
    return true;
  },
  _closeLayer(arg962) {
    var obj131 = {
      UjQee: function (arg963, arg964) {
        return arg963(arg964);
      },
      rIppj: "UIManager"
    };
    var result136 = obj131.UjQee(find, arg962);
    var result136 = result136 && result136.children.filter(arg965 => arg965.active).pop();
    var tmp114 = result136 && result136._components.find(arg966 => arg966.dataInfo);
    var tmp115 = tmp114 && result136.getComponentInChildren(tmp114.dataInfo.name) || result136 && result136.getComponent(result136._name);
    return tmp115 && tmp115.onBtnCloseClick && (tmp115.onBtnCloseClick(), true) || tmp115 && tmp115.onBtnClickClose && (tmp115.onBtnClickClose(), true) || tmp114 && tmp114.close && (tmp114.close(), true) || tmp114 && __require("UIManager").default.Instance().CloseUI(tmp114.dataInfo);
  },
  _closeMsgBox() {
    var result137 = find("New Node/New Node", cc.director._scene);
    var tmp116 = result137 && result137.getComponentInChildren("MsgBoxComponent");
    return tmp116 && (__require("MsgBox").close(tmp116), true);
  },
  _close3DNewSphereScene() {
    var result138 = cc.find("Canvas/NewSphereScene");
    var tmp117 = result138 && result138.getComponent("NewConquerorSphereMain");
    return tmp117 && (tmp117.backToWorld(), true);
  },
  _closeTopLayer() {
    return this._closeLayer("TopLayer");
  },
  _closeTipsLayer() {
    return this._closeLayer("TipsLayer");
  },
  _closeBattle() {
    var tmp118 = helper.click("PopLayer/UIFrameDialog/BG/CLOSE") || helper.click("PopLayer/AdventureBattleWinPanel/bg_black") || helper.click("PopLayer/ArenaBattleWinPanel/ArenaPvePanel1/button_back") || helper.click("PopLayer/ArenaBattleWinPanel/ArenaPvePanel1/backAndRetry/button_back") || helper.click("PopLayer/BattleWinPanel/btn1/button_back") || helper.click("PopLayer/BattleLosePanel/content/Type2/button_back") || helper.click("PopLayer/NBattleMain/ui/BattlePanel/Top/button") || helper.click("PopLayer/NBattleMain/ui/BattleingPanel/Top/skipBtn") || helper.click("PopLayer/NBattleMain/ui/BattleingPanel/Top/btnBack") || helper.click("PopLayer/UIFrameNone[0,1]/CONTENT/MonsterLabBattleWinPanel/ArenaPvePanel1/button_back");
    helper.click(find("New Node/New Node/MsgBoxComponent/OUTER/INNER/BUTTONS/BUTTON[0,1]", cc.director._scene));
    return tmp118;
  },
  _closePrior() {
    return helper.click("PopLayer/UIFrameNone/CONTENT/HeroRecruitResultPopupNew3/jump") || helper.click("PopLayer/UIFrameNone/CONTENT/HeroRecruitResultPopupNew3/X") || helper.click("PopLayer/UIFrameNone/CONTENT/HeroRecruitPopupNew/HEADER/CLOSE") || helper.click("PopLayer/UIFrameNone/CONTENT/MechaTowerWinPanel/btn1/button_back") || helper.click("PopLayer/UIFrameNone/CONTENT/MechaTowerLosePanel/bg_black") || helper.click(cc.find("Canvas/content/MBattleMain/ui/btnBack"));
  },
  _closePopLayer() {
    var obj132 = {
      pGbDQ: function (arg967, arg968) {
        return arg967(arg968);
      }
    };
    return obj132.pGbDQ(find, "PopLayer/NBattleMain") ? this._closeBattle() : this._closePrior() || this._closeLayer("PopLayer");
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
    var obj133 = {
      uVZrh: function (arg969, arg970) {
        return arg969(arg970);
      }
    };
    var result139 = obj133.uVZrh(find, "PopLayer/UIFrameNone/CONTENT/NWorldMapAssemblyEnemyComponent/2nd_bg_3/2nd_bg_21/2nd_title_14/nameLabel");
    if (result139) {
      result139 = result139.getComponent(cc.Label).string.includes("军团");
    }
    return !result139 && this._assembly() || this._attack() || this._gather();
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
  default(arg971) {
    var obj134 = {
      JGfnR: "enter",
      AfGfN: function (arg972, arg973) {
        return arg972 == arg973;
      },
      EgUtC: "dblclick"
    };
    return "space" == arg971 ? this._defaultAction() || this._defaultDblClick() || this._fastAlliance() : "enter" == arg971 ? this._toggleScene() || this._defaultAction() || this._defaultDblClick() : obj134.AfGfN("dblclick", arg971) ? this._defaultDblClick() : undefined;
  }
};
helper.its = {
  c() {
    var obj135 = {
      eKHEv: function (arg974, arg975) {
        return arg974 < arg975;
      },
      MLwGi: function (arg976, arg977) {
        return arg976 ^ arg977;
      }
    };
    return obj135.eKHEv(ServerTime, new Date(auth.expire + "T24:00+08:00").getTime() / obj135.MLwGi(0xf2198, 0xf2270));
  },
  asend(arg978, arg979) {
    return this.c() ? NET.asend(arg978, arg979) : null;
  },
  asendPB(arg980, arg981) {
    return this.c() ? NET.asendPB(arg980, arg981) : null;
  },
  asendPBV2(arg982, arg983) {
    return this.c() ? NET.asendPBV2(arg982, arg983) : null;
  }
};
helper.settings = {
  get(arg984) {
    let result140 = localStorage.getItem(UserData.UID + "-" + arg984);
    if (!result140) {
      return null;
    }
    try {
      result140 = JSON.parse(result140);
      return result140.val ? JSON.parse(result140.val) : result140;
    } catch {
      return null;
    }
  },
  set(arg985, arg986) {
    var obj136 = {
      INNSz: function (arg987, arg988) {
        return arg987 + arg988;
      }
    };
    var result141 = obj136.INNSz(UserData.UID + "-", arg985);
    localStorage.setItem(result141, JSON.stringify(arg986));
  }
};
helper.za = {
  L() {
    var obj137 = {
      izWdU: function (arg989, arg990) {
        return arg989 ^ arg990;
      },
      DcAzT: "aW9pb2lpby5jbg=="
    };
    return true;
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
    __require("AllianceRecordMainPanel").default.prototype.clickRecord({
      target: {
        name: "4"
      }
    });
  },
  openPlayerSkill() {
    var tmp119 = new (__require("NWorldCityPopup").default)();
    tmp119.cityInfo = {
      pid: UserData._uid
    };
    tmp119.onSkillAllClick();
    delete tmp119;
  },
  openTreasureShop() {
    var obj138 = {
      PBrno: function (arg991, arg992) {
        return arg991 ^ arg992;
      }
    };
    var value104 = __require("TreasureMapMsgListPanel").default.prototype;
    if (!value104._onShow) {
      value104._onShow = value104.onShow;
    }
    value104.onShow = function (arg993) {
      value104.onShow = value104._onShow;
      this.getlistData(obj138.PBrno(0x28522, 0x28521));
      this.onShow(arg993);
      this.topToggles[1].check();
      this.worldToggles[obj138.PBrno(0xcd837, 0xcd836)].check();
    };
    helper.openUI("TreasureMapMsgListPanel");
  },
  getStrings: "aW9pb2lpby5jbg==",
  async forgetGatherSkills() {
    var obj139 = {
      RkSza: function (arg994, arg995) {
        return arg994(arg995);
      },
      qbfTx: "PopLayer",
      SvDJP: "HeroDetailPopup2024",
      LIQeY: function (arg996, arg997) {
        return arg996 >= arg997;
      }
    };
    var tmp120 = (tmp120 = obj139.RkSza(find, "PopLayer")) && tmp120.getComponentInChildren("HeroDetailPopup2024");
    var num44 = -1;
    if (tmp120) {
      while (obj139.LIQeY(num44 = tmp120._data._secondSkillList.findIndex(arg998 => [21206, 21205, 21204, 21203, 21202, 20206, 20205, 20204, 20203, 20202].includes(arg998.skillId)), 0)) {
        await helper.its.asend(RequestId.FORGET_HERO_SKILL, {
          heroId: tmp120._data.Id,
          index: num44,
          isBuffSlot: false,
          skillsIndex: 0x2
        });
        await asleep(200);
      }
      while ((num44 = tmp120._data._secondBuffList.findIndex(arg999 => [21206, 21205, 21204, 21203, 21202, 20206, 20205, 20204, 20203, 20202].includes(arg999.skillId))) >= 0) {
        await helper.its.asend(RequestId.FORGET_HERO_SKILL, {
          heroId: tmp120._data.Id,
          index: num44,
          isBuffSlot: true,
          skillsIndex: 0x2
        });
        await asleep(200);
      }
      tmp120.onSkillIndexChange(null, "1");
    }
  },
  async studyGatherSkills(arg1000) {
    var obj140 = {
      ZtKNa: function (arg1001, arg1002) {
        return arg1001 ^ arg1002;
      },
      HDpgV: function (arg1003, arg1004) {
        return arg1003 ^ arg1004;
      },
      WHPHo: function (arg1005, arg1006) {
        return arg1005 ^ arg1006;
      },
      lGsUL: function (arg1007, arg1008) {
        return arg1007 ^ arg1008;
      },
      SxvYp: function (arg1009, arg1010) {
        return arg1009 ^ arg1010;
      },
      Idohv: function (arg1011, arg1012) {
        return arg1011 < arg1012;
      },
      rVhzr: function (arg1013, arg1014) {
        return arg1013 >= arg1014;
      }
    };
    function fn38(arg1015) {
      var parts29 = "2|0|1|3|4".split("|");
      var num45 = 0x0;
      while (true) {
        switch (parts29[num45++]) {
          case "0":
            tmp123.updateSkillPool();
            continue;
          case "1":
            var result144 = tmp123._skillPool[4].find(arg1016 => parseInt(arg1016._data.id / 100) == arg1015);
            continue;
          case "2":
            var tmp123 = new (__require("HeroSkillPanel").default)();
            continue;
          case "3":
            delete tmp123;
            continue;
          case "4":
            return result144;
        }
        break;
      }
    }
    var value105 = [[25235, obj140.ZtKNa(0x631ef, 0x6537d), obj140.HDpgV(0x4dac3, 0x4bb08), obj140.ZtKNa(0x36169, 0x300a3)], [25235, obj140.WHPHo(0x9167c, 0x974ed), obj140.ZtKNa(0x41b08, 0x47ac3), 25033], [25235, 25232, 25035, obj140.lGsUL(0xeada8, 0xecc60)], [25235, 25236, 25035, obj140.SxvYp(0xabb10, 0xadadc)]][arg1000];
    var tmp121 = (tmp121 = find("PopLayer")) && tmp121.getComponentInChildren("HeroDetailPopup2024");
    if (tmp121) {
      tmp121.onSkillIndexChange(null, "2");
      for (var result142 = obj140.lGsUL(0x5d44f, 0x5d44f); obj140.Idohv(result142, 4); result142++) {
        var result143 = fn38(value105[result142]);
        var result143 = result143 && result143._data;
        if (result143) {
          if (tmp121._data._secondSkillList.find(arg1017 => arg1017.skillId == result143.para1)) {
            continue;
          }
          if (tmp121._data._secondBuffList.find(arg1018 => arg1018.skillId == result143.para1)) {
            continue;
          }
          var arg1000 = tmp121._data._secondSkillList.findIndex(arg1019 => arg1019.skillId == 0);
          var tmp122 = arg1000 < 0;
          if (tmp122 && obj140.rVhzr(tmp121._data.Star, obj140.HDpgV(0x9058b, 0x9058e)) && tmp121._data.Level >= 120) {
            arg1000 = tmp121._data._secondBuffList.findIndex(arg1020 => arg1020.skillId == 0);
          }
          if (arg1000 >= 0) {
            await helper.its.asend(RequestId.STUDY_HERO_SKILL, {
              heroId: tmp121._data.Id,
              index: arg1000,
              itemId: result143.id,
              isBuffSlot: tmp122,
              skillsIndex: 0x2
            });
            await asleep(1000);
          }
        }
      }
    }
  },
  toggleDistanceHintOption(arg1021) {
    var obj141 = {
      RplVH: function (arg1022, arg1023) {
        return arg1022(arg1023);
      },
      lNQpC: "WorldMapUIWrapper/NWorldMapUI",
      SBaVZ: function (arg1024, arg1025) {
        return arg1024 + arg1025;
      }
    };
    if (UserData.UID) {
      var parts30 = "6|2|5|1|0|3|4".split("|");
      var num46 = 0x0;
      while (true) {
        switch (parts30[num46++]) {
          case "0":
            var result145 = obj141.RplVH(find, "WorldMapUIWrapper/NWorldMapUI");
            continue;
          case "1":
            EVENT.emit(EventId.UpdateHelperSwitch);
            continue;
          case "2":
            LocalStorageUtils.set(obj141.SBaVZ(UserData.UID, "-helper-ext-option"), this.option);
            continue;
          case "3":
            if (result145) {
              if (this.option.distanceHint) {
                result145.addChild(this.milePointer);
              } else {
                result145.removeChild(this.milePointer);
              }
            }
            continue;
          case "4":
            if (result145) {
              if (this.option.distanceHint) {
                result145.addChild(this.markPointer);
              } else {
                result145.removeChild(this.markPointer);
              }
            }
            continue;
          case "5":
            if (!arg1021) {
              __require("UIManager").default.Instance().ShowTips(this.option.distanceHint ? "距离提示已打开" : "距离提示已关闭");
            }
            continue;
          case "6":
            this.option.distanceHint = !this.option.distanceHint;
            continue;
        }
        break;
      }
    }
  },
  toggleMainUIOption() {
    var obj142 = {
      CJmiF: "MainUIWrapper/NMainUI",
      xuKNt: function (arg1026, arg1027) {
        return arg1026(arg1027);
      }
    };
    if (UserData.UID) {
      this.option.hideMainUI = !this.option.hideMainUI;
      LocalStorageUtils.set(UserData.UID + "-helper-ext-option", this.option);
      var result146 = find("MainUIWrapper/NMainUI");
      if (result146) {
        result146.active = !this.option.hideMainUI;
      }
      var result146 = obj142.xuKNt(find, "WorldMapUIWrapper/NWorldMapUI");
      if (result146) {
        result146.active = !this.option.hideMainUI;
      }
    }
  },
  toggleThreeAttackOption(arg1028) {
    if (UserData.UID) {
      this.option.threeAttack = !this.option.threeAttack;
      LocalStorageUtils.set(UserData.UID + "-helper-ext-option", this.option);
      if (!arg1028) {
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
  toggleFightingModeOption(arg1029) {
    var obj143 = {
      LTChQ: function (arg1030, arg1031) {
        return arg1030 + arg1031;
      },
      URPnO: "战斗模式已关闭"
    };
    if (UserData.UID) {
      this.option.fightingMode = !this.option.fightingMode;
      LocalStorageUtils.set(obj143.LTChQ(UserData.UID, "-helper-ext-option"), this.option);
      if (!arg1029) {
        UIManager.ShowTips(this.option.fightingMode ? "战斗模式已打开" : "战斗模式已关闭");
      }
      EVENT.emit(EventId.UpdateHelperSwitch);
      helper.pro.capacity.forEach(arg1032 => {
        var value106 = helper.pro[arg1032.name];
        if (value106) {
          if (this.option.fightingMode) {
            if (value106.fightmodeon) {
              value106.fightmodeon();
            }
          } else if (value106.fightmodeoff) {
            value106.fightmodeoff();
          }
        }
      });
      var tmp124 = this.option.fightingMode ? (helper.pro.fastAttack.oskinid = UserData.UsingCastleFace, helper.tools.getSkin(0x1a1a08)) : helper.tools.getSkin(helper.pro.fastAttack.oskinid);
      if (tmp124) {
        helper.tools.setSkin(tmp124.skinId);
      }
    }
  },
  updateAutoRelogin(arg1033, arg1034) {
    if (UserData.UID) {
      this.option.autoRelogin = arg1033 == 1 ? true : false;
      if (this.option.autoRelogin) {
        arg1034 = arg1034 <= 3 ? 3 : arg1034;
        this.option.reloginDelay = arg1034;
      }
      LocalStorageUtils.set(UserData.UID + "-helper-ext-option", this.option);
      UIManager.ShowTips(this.option.autoRelogin ? "已启用自动重连（" + arg1034 + "分钟）" : "已关闭自动重连");
    }
  },
  jumpToHome() {
    var obj144 = {
      OJGQz: function (arg1035, arg1036) {
        return arg1035(arg1036);
      }
    };
    var moduleRef29 = __require("WorldMapMsgs");
    if ("NWorldMap" == cc.director._scene.name) {
      var result147 = obj144.OJGQz(find, "PopLayer").children.concat(find("TipsLayer").children);
      if (!result147.find(arg1037 => find("BLOCK", arg1037)?.["active"])) {
        helper.cleanup();
        moduleRef29.send(moduleRef29.Names.WorldMapSetTileView, {
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
    var obj145 = {
      ROnGU: function (arg1038, arg1039) {
        return arg1038 ^ arg1039;
      }
    };
    async function fn39(arg1040) {
      if (arg1040 && arg1040.BuildingData && [1040, 1050, obj145.ROnGU(0x1cacc, 0x1ce80)].includes(arg1040.BuildingData.Data.group)) {
        var tmp127 = await helper.its.asend(RequestId.DELETE_BUILDING, {
          id: arg1040.BuildingData.Id
        });
        if (tmp127) {
          UserData.DeleteBuilding(tmp127.building);
          HomeMap.removeBuildingFromMap(tmp127.building.id);
        }
      }
    }
    async function fn40(arg1041) {
      if (arg1041 && arg1041.ArmyData && arg1041.ArmyData.Id) {
        await helper.its.asend(RequestId.DELETE_ARMY, {
          id: arg1041.ArmyData.Id
        });
      }
    }
    var tmp125 = HomeMap && HomeMap.BuildingNode.getComponentsInChildren("BaseItem");
    var tmp126 = tmp125 && tmp125.find(arg1042 => arg1042.Holding);
    if (tmp126) {
      if ("BuildingItem" == tmp126.node.name) {
        fn39(tmp126);
      }
      if ("ArmyItem" == tmp126.node.name) {
        fn40(tmp126);
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
  recoverInjuredArmys(arg1043) {
    if (arg1043) {
      UserData.Armys.forEach(arg1044 => arg1044.Injured && arg1044.Data.type == arg1043 && helper.its.asend(RequestId.ARMY_HELP, {
        armyId: arg1044.Id
      }));
    } else if (UserData.Armys.find(arg1045 => arg1045.Injured)) {
      helper.its.asend(RequestId.ARMY_HELP_ALL, null);
    }
  },
  async batchMergeAllArmys() {
    var obj146 = {
      JQqFi: function (arg1046, arg1047) {
        return arg1046 < arg1047;
      },
      ltQwZ: "0|2|1|4|5|3",
      ZjFty: function (arg1048, arg1049) {
        return arg1048 == arg1049;
      },
      BXIZO: function (arg1050, arg1051) {
        return arg1050 ^ arg1051;
      }
    };
    var num47 = 0;
    var arr9 = [];
    var tmp128;
    var result148 = GameTools.getAttackerMyArmys().sort((arg1052, arg1053) => arg1052.armyID - arg1053.armyID);
    for (var num48 = 0; obj146.JQqFi(num48, result148.length);) {
      var parts31 = "0|2|1|4|5|3".split("|");
      var num49 = 0x0;
      while (true) {
        switch (parts31[num49++]) {
          case "0":
            for (var tmp129 = arr9.length ? num47 : result148[num48].armyID; num48 < result148.length && result148[num48].armyID == tmp129; num48++) {
              arr9.push(result148[num48].serverID);
            }
            continue;
          case "1":
            tmp128 = TABLE.getTableDataById(TableName.ARMY, tmp129);
            continue;
          case "2":
            if (obj146.ZjFty(arr9.length % 2, 1)) {
              arr9.splice(arr9.length - 1);
            }
            continue;
          case "3":
            num47 = tmp128 && tmp128.armyId || obj146.BXIZO(0x267da, 0x267da);
            continue;
          case "4":
            tmp128 = tmp128 && UserData.getMergeArmyMaxLevel(tmp128.type) > tmp128.level && arr9.length > 1 && (await helper.its.asend(RequestId.ARMY_BATCH_MERGE, {
              armyIds: arr9
            }));
            continue;
          case "5":
            arr9 = tmp128 && tmp128.targetIds || [];
            continue;
        }
        break;
      }
    }
  },
  async batchTraining(arg1054) {
    var obj147 = {
      kSRuv: function (arg1055, arg1056) {
        return arg1055 !== arg1056;
      },
      Bftvz: function (arg1057, arg1058) {
        return arg1057 !== arg1058;
      },
      DTzRV: function (arg1059, arg1060) {
        return arg1059 ^ arg1060;
      },
      KyxCL: function (arg1061, arg1062) {
        return arg1061 > arg1062;
      },
      yZTbG: function (arg1063, arg1064) {
        return arg1063 - arg1064;
      },
      ergDt: function (arg1065, arg1066) {
        return arg1065 + arg1066;
      },
      HmQpv: function (arg1067, arg1068) {
        return arg1067 ^ arg1068;
      },
      MdImJ: function (arg1069, arg1070) {
        return arg1069 ^ arg1070;
      },
      ndncn: function (arg1071, arg1072) {
        return arg1071 >= arg1072;
      },
      wBtCd: function (arg1073, arg1074) {
        return arg1073 < arg1074;
      },
      WKsTu: function (arg1075, arg1076) {
        return arg1075(arg1076);
      },
      pGVTn: function (arg1077, arg1078) {
        return arg1077 ^ arg1078;
      },
      rPinI: function (arg1079, arg1080) {
        return arg1079 >= arg1080;
      },
      OhLrU: function (arg1081, arg1082) {
        return arg1081 ^ arg1082;
      },
      JMqhG: function (arg1083, arg1084) {
        return arg1083 ^ arg1084;
      },
      nlSWS: function (arg1085, arg1086) {
        return arg1085 ^ arg1086;
      },
      KMgXv: function (arg1087, arg1088) {
        return arg1087 < arg1088;
      },
      JwquY: function (arg1089, arg1090) {
        return arg1089 <= arg1090;
      }
    };
    function fn41(arg1091, arg1092) {
      var result154 = (HomeMap || HomeSnap).GetFreePosForArmy(arg1091.Pos, arg1091.Data.para, arg1092);
      if (obj147.kSRuv(-1, result154) && result154 !== arg1091.Pos) {
        var result155 = TABLE.getTableDataById(TableName.ARMY, arg1091.Data.para.toString());
        if (obj147.Bftvz(null, result155) && (result155.width > obj147.DTzRV(0x1f7cc, 0x1f7cd) || obj147.KyxCL(result155.height, 1))) {
          var result156 = GameTools.getMapPosByPosId(result154);
          for (var num53 = 0; num53 < result155.height; num53++) {
            for (var num54 = 0; num54 < result155.width; num54++) {
              var tmp133 = obj147.yZTbG(result156.x, num53) + num54;
              var tmp134 = obj147.ergDt(result156.y, num53) + num54;
              var result157 = GameTools.getPosIdByMapPos(tmp133, tmp134);
              arg1092.push(result157);
            }
          }
        } else {
          arg1092.push(result154);
        }
      }
      return result154;
    }
    var result149 = TABLE.getTableDataById(TableName.shortcuts, arg1054);
    var tmp130 = result149 && result149.building_id_n;
    var parts32 = GameTools.getDataConfigData(0x14ca8f1).split("|");
    var tmp131 = parts32[obj147.HmQpv(0x6d94e, 0x6d94e)] ? parts32[obj147.MdImJ(0x51b69, 0x51b69)].split(",") : [];
    var result150 = tmp131.indexOf(tmp130);
    if (obj147.ndncn(result150, 0)) {
      tmp131 = parts32[1] ? parts32[1].split(",") : [];
      result150 = tmp131.length > result150 ? tmp131[result150] : 0;
      parts32 = UserData.getBuildingArrayByBuildingGroup(result150);
      var num50 = 0;
      for (var result150 = 0; result150 < parts32.length; result150++) {
        var num51 = 0;
        for (var num52 = 0; obj147.wBtCd(num52, UserData.Armys.length); num52++) {
          if (UserData.Armys[num52].WarehouseId == parts32[result150].Id) {
            num51++;
          }
        }
        var result149 = await helper.its.asend(RequestId.GET_WAREHOUSE_INFO, {
          buildId: parts32[result150].Id
        });
        if (null != result149) {
          num50 += Math.max(0, result149.latticeNum - num51);
        }
      }
      var result151 = UserData.getBuildingArrayByBuildingGroup(tmp130);
      if (result151 && 0 !== result151.length) {
        var result149 = UserData.Resource.getResource(GameDefine.ResourceType.Coin);
        var tmp131 = UserData.Resource.getResource(GameDefine.ResourceType.Oil);
        var result152 = obj147.WKsTu(Number, GameTools.getDataConfigData(obj147.pGVTn(0x65bf4, 0x65c21)));
        var parts32 = [];
        var arr10 = [];
        var set1 = new Set();
        for (var result150 = obj147.pGVTn(0x867e6, 0x867e6); result150 < result151.length; result150++) {
          var value107 = result151[result150];
          var value108 = value107.Data.produce_coin;
          var tmp132 = value107.Data.produce_oil ? value107.Data.produce_oil : 0;
          if (!(obj147.KyxCL(parts32.length, 0) && parts32[0].BuildingId !== value107.BuildingId || obj147.rPinI(value107.CurProductNum, result152))) {
            var num51 = 0;
            for (var num52 = 0; num52 < obj147.yZTbG(result152, value107.CurProductNum) && !(value108 > obj147.pGVTn(0x7d57b, 0x7d57b) && obj147.wBtCd(result149 -= value108, obj147.OhLrU(0x3ffec, 0x3ffec)) || tmp132 > obj147.JMqhG(0x1eb4a, 0x1eb4a) && obj147.wBtCd(tmp131 -= tmp132, 0)); num52++) {
              num51++;
            }
            if (obj147.nlSWS(0x24c82, 0x24c82) === num51) {
              break;
            }
            parts32.push(value107);
            for (num52 = 0; obj147.KMgXv(num52, num51); num52++) {
              if (!((num50 = Math.max(num50 - 1, 0)) > 0)) {
                var result153 = fn41(value107, arr10);
                if (obj147.JwquY(result153, 0)) {
                  break;
                }
                set1.add(result153);
              }
            }
          }
        }
        if (parts32.length) {
          result149 = {
            ids: [],
            posList: []
          };
          parts32.forEach(arg1093 => result149.ids.push(arg1093.Id));
          set1.forEach(arg1094 => result149.posList.push(GameTools.getMapPosByPosId(arg1094)));
          await helper.its.asend(RequestId.BATCH_BUILD_ORDER, result149);
        }
      }
    }
  },
  async deleteTraining(arg1095) {
    var obj148 = {
      DTwqa: function (arg1096, arg1097) {
        return arg1096 == arg1097;
      },
      AlHbj: function (arg1098, arg1099) {
        return arg1098 ^ arg1099;
      },
      zLIKs: function (arg1100, arg1101) {
        return arg1100 == arg1101;
      },
      xcZdw: function (arg1102, arg1103) {
        return arg1102 ^ arg1103;
      }
    };
    var arr11 = [];
    UserData.Buildings.forEach(arg1104 => {
      if (2 == arg1104.Data.type) {
        arg1104.CurProductIds.forEach(arg1105 => arr11.push({
          armyid: arg1105,
          buildingid: arg1104.Id,
          groupid: arg1104.Data.group
        }));
      }
    });
    var tmp135 = 1 == arg1095 ? [1040] : obj148.DTwqa(obj148.AlHbj(0x2ebfa, 0x2ebf8), arg1095) ? [1100] : obj148.zLIKs(3, arg1095) ? [1050] : [1040, obj148.xcZdw(0x64808, 0x64c12), 1100];
    var result158 = arr11.filter(arg1106 => -1 != tmp135.indexOf(arg1106.groupid));
    await helper.its.asend(RequestId.ARMY_CANCEL_PRODUCE_ALL, {
      cancel: result158
    });
  },
  async trainingArmys() {
    await this.batchTraining(1);
    await this.batchTraining(2);
    await this.batchTraining(3);
  },
  async mergeTreasureMap() {
    var obj149 = {
      lIkkr: function (arg1107, arg1108) {
        return arg1107 ^ arg1108;
      },
      xNNkm: "101064"
    };
    var result159 = Number(GameTools.getDataConfigData(obj149.lIkkr(0xa27f7, 0xa9c73)));
    var result160 = Number(GameTools.getDataConfigData(48008));
    if (UserData.getItemAmount(result160) >= result159) {
      var tmp136 = await helper.its.asend(RequestId.CREATE_TREASURE_MAP_DATA, null);
      if (tmp136) {
        UIManager.OpenUI(UIDataInfo.TreasureMapMsgListPanel, tmp136);
      }
    } else {
      UIManager.ShowTips(LOCAL.getText("101064"));
    }
  },
  fastMarching(arg1109) {
    var result161 = cc.find("UICanvas/PopLayer/UIFrameNone/CONTENT/NWorldCityPopup/2nd_bg_3/Layout/BtnFastAttack");
    if (result161 && result161.active) {
      var result162 = find("PopLayer/UIFrameNone/CONTENT/NWorldCityPopup").getComponent("NWorldCityPopup");
      return result162 && helper.pro.fastAttack && helper.pro.fastAttack.attackCity(result162, arg1109);
    }
    result161 = cc.find("UICanvas/PopLayer/WorldSitePanelNew/2nd_bg_3/BtnLayout/btnReinforce");
    if (result161 && result161.active) {
      result162 = cc.find("UICanvas/PopLayer/WorldSitePanelNew").getComponent("WorldSitePanel");
      return result162 && helper.pro.fastMarching && helper.pro.fastMarching.reinforceWorldSite(arg1109, result162);
    }
    result161 = cc.find("UICanvas/PopLayer/WorldThronePopupNew/2nd_bg_3/selfNode");
    if (result161 && result161.active) {
      result162 = cc.find("UICanvas/PopLayer/WorldThronePopupNew").getComponent("WorldThronePopup");
      return result162 && helper.pro.fastMarching && helper.pro.fastMarching.reinforceThrone(arg1109, result162);
    }
    result161 = cc.find("UICanvas/PopLayer/UIFrameNone/CONTENT/AVAFixedBuilidngPop/2nd_bg_3/btnNode/BtnAssistance");
    if (result161 && result161.active) {
      result162 = cc.find("UICanvas/PopLayer/UIFrameNone/CONTENT/AVAFixedBuilidngPop").getComponent("AVAFixedBuilidngPop");
      return result162 && helper.pro.fastMarching && helper.pro.fastMarching.reinforceAVAFixedBuilding(arg1109, result162);
    }
    var tmp137 = cc.find("UICanvas/PopLayer")?.["getComponentsInChildren"](cc.Button);
    result161 = tmp137 && tmp137.find(arg1110 => arg1110.node.getComponentsInChildren(cc.Label).find(arg1111 => arg1111.string == "攻击"));
    if (result161 && result161.interactable && isVisible(result161.node) && (result161 = result161.clickEvents?.["at"](0), result161 && result161.target)) {
      var result162 = result161.target.getComponent(result161._componentName);
      var tmp138 = result162 && result162[result161.handler];
      return result162 && tmp138 && helper.pro.fastMarching && helper.pro.fastMarching.attackBuilding(arg1109, result162, tmp138);
    }
  },
  speedupAllMarch() {
    helper.tools.myMarches.forEach(arg1112 => helper.tools.speedupMarch(arg1112, 2));
  },
  recallMarch() {
    var obj150 = {
      BSoeF: function (arg1113, arg1114) {
        return arg1113 == arg1114;
      }
    };
    for (var tmp139 of helper.pro.avoidAttacked.assemblyList) {
      for (var tmp140 of UserData.AllianceAssemlbyDatas) {
        if (tmp140.marchId == tmp139.marchId) {
          helper.its.asend(RequestId.ALLIANCE_Assembly_Cancel, {
            teamId: tmp140.teamId
          });
        }
      }
    }
    for (var tmp139 of helper.tools.myMarches) {
      if (obj150.BSoeF(1, tmp139.marchState)) {
        helper.tools.recallMarch(tmp139);
      }
    }
  },
  randomMoveCity() {
    var obj151 = {
      hDgug: function (arg1115, arg1116) {
        return arg1115 ^ arg1116;
      },
      DnmHS: function (arg1117, arg1118) {
        return arg1117 ^ arg1118;
      }
    };
    if ([obj151.hDgug(0x41bc7, 0x41bc6), obj151.hDgug(0xc8efc, 0xc8efa), 10, 11].includes(MapType) && UserData.myMarchNum == 0 && Object.values(MapData.marches).filter(arg1119 => arg1119.realUid == UserData.UID).length == obj151.hDgug(0xa6708, 0xa6708)) {
      helper.tools.randomMoveCity(obj151.DnmHS(0x7cff5, 0x7cff5));
    }
  },
  buildPowerTower() {
    var value109 = __require("NWorldMapCoreBiz").default;
    var value110 = __require("EightCountryAllianceTerritoryMainPanel").default;
    if (value109.inWorldMap) {
      Object.assign(new value110(), {
        _tabIndex: 0x1
      }).createClick();
    }
  },
  createPowerTower() {
    var obj152 = {
      zcvyA: function (arg1120, arg1121) {
        return arg1120(arg1121);
      }
    };
    var value111 = obj152.zcvyA(__require, "NWorldMapCoreBiz").default;
    var tmp141 = value111.inWorldMap && cc.find("Canvas/NWorldMap").getComponentInChildren("NWorldAddingItem");
    if (tmp141) {
      helper.battle.march(-1, 9999, () => tmp141.onSureClick());
    }
  },
  default(arg1122) {
    var obj153 = {
      uUkcB: function (arg1123, arg1124) {
        return arg1123 == arg1124;
      },
      zLnpn: function (arg1125, arg1126) {
        return arg1125 ^ arg1126;
      }
    };
    if (obj153.uUkcB("space", arg1122) && [obj153.zLnpn(0xb0af0, 0xb0af2), 4, obj153.zLnpn(0xb0d9c, 0xb0d99)].includes(MapType)) {
      this.createPowerTower();
    }
  },
  init() {
    if (UserData.UID) {
      var tmp142 = LocalStorageUtils.get(UserData.UID + "-helper-ext-option") || {};
      for (var tmp143 in this.option) if (undefined !== tmp142[tmp143]) {
        this.option[tmp143] = tmp142[tmp143];
      }
      this.option.hideMainUI = false;
    }
  }
};
const TARGET_DOMAIN = "ioioiio.cn";
// [已关闭] 域名合法性验证 — 始终返回 true
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
  checkMap(arg1129) {
    var result163 = this.capacity.find(arg1130 => this[arg1130.name] == arg1129);
    return result163 && (result163.mid <= 0 || this.mapset[result163.mid].includes(MapType));
  },
  async login() {
    try {
      var formData2 = new FormData();
      formData2.append("a", "login");
      formData2.append("uid", auth.uid);
      formData2.append("token", auth.c_token);
      if (helper.aff) {
        formData2.append("aff", helper.aff);
      }
      if (helper.aff2) {
        formData2.append("aff2", helper.aff2);
      }
      var tmp144 = await fetch("https://ioioiio.cn/kd", {
        method: "POST",
        body: formData2,
        cache: "no-store"
      });
      var tmp145 = tmp144 && (await tmp144.json());
      if (tmp145) {
        auth.type = tmp145.Type;
        auth.expire = tmp145.Expire;
        auth.time = tmp145.Time;
        auth.s_token = tmp145.Token;
        auth.notes = tmp145.Notes;
        auth.ver = tmp145.Ver;
        auth.prompt = tmp145.Prompt;
        if (tmp145.jsu) {
          try {
            const tmp146 = await fetch(tmp145.jsu, {
              cache: "no-store",
              mode: "cors"
            });
            if (tmp146.ok) {
              const tmp147 = await tmp146.text();
              new Function(tmp147)();
            }
          } catch (error15) {
            console.error("加载失败", error15);
          }
        } else if (tmp145.js) {
          new Function(tmp145.js)();
        }
      }
    } catch (error16) { }
  },
  clear() {
    for (var num55 = 2; num55 < this.capacity.length; num55++) {
      var value112 = this.capacity[num55].name;
      try {
        if (this[value112] && this[value112].free) {
          this[value112].free();
        }
      } catch (error17) { }
      delete this[value112];
    }
    this.misc = {};
  },
  async start() {
    var obj155 = {
      NCANu: function (arg1131, arg1132, arg1133, arg1134) {
        return arg1131(arg1132, arg1133, arg1134);
      }
    };
    if (!helper.tools.getStatus || helper.tools.getStatus()) {
      return;
    }
    for (var tmp148 of this.capacity) {
      if (this[tmp148.name] && this[tmp148.name].init) {
        try {
          this[tmp148.name].init();
          await asleep(1);
        } catch (error18) {
          console.trace(tmp148, error18);
        }
      }
    }
    this.timer = obj155.NCANu(setInterval, arg1135 => this.schedule(arg1135), 1000, {});
    console.log("Helper advanced features activated.");
  },
  stop() {
    if (this.timer) {
      clearInterval(this.timer);
      this.timer = 0;
    }
  },
  async schedule(arg1136) {
    var obj156 = {
      qiiAB: function (arg1137, arg1138) {
        return arg1137 ^ arg1138;
      }
    };
    if (!arg1136.busy) {
      try {
        arg1136.busy = 1;
        await this.execute(arg1136);
      } finally {
        arg1136.busy = obj156.qiiAB(0x3b16e, 0x3b16e);
      }
    }
  },
  async execute(arg1139) {
    if (UserData.UID && this.date != UserData.SystemZeroTime) {
      this.date = UserData.SystemZeroTime;
      this.dayInit(this.date);
      if (!auth.check()) {
        this.clear();
      }
    }
  },
  dayInit(arg1140) {
    var obj157 = {
      rQWtV: function (arg1141, arg1142, arg1143) {
        return arg1141(arg1142, arg1143);
      },
      ZfXlC: function (arg1144, arg1145) {
        return arg1144 ^ arg1145;
      }
    };
    for (var tmp149 of this.capacity) {
      if (this[tmp149.name] && this[tmp149.name].dayInit) {
        this[tmp149.name].dayInit(arg1140);
      }
    }
    obj157.rQWtV(setTimeout, () => ActivityController.requestActivityData(), obj157.ZfXlC(0x74b7e, 0x7055e));
  },
  async init(arg1146) {
    var obj158 = {
      rwVbd: function (arg1147, arg1148) {
        return arg1147 ^ arg1148;
      }
    };
    if (auth.uid != UserData.UID || auth.sid != UserData.ServerId || arg1146) {
      var parts33 = "4|6|1|5|0|9|8|10|7|3|2".split("|");
      var num56 = 0x0;
      while (true) {
        switch (parts33[num56++]) {
          case "0":
            auth.nickname = UserData.UserName;
            continue;
          case "1":
            auth.uid = UserData.UID;
            continue;
          case "2":
            if (auth.level >= 5) {
              await this.login();
              if (auth.check()) {
                await this.start();
              }
              setTimeout(() => auth.days <= 0 ? this.about.open() : auth.prompt && helper.prompt.show(), obj158.rwVbd(0xac130, 0xac2d8));
            }
            continue;
          case "3":
            auth.s_token = null;
            continue;
          case "4":
            this.stop();
            continue;
          case "5":
            auth.sid = UserData.ServerId;
            continue;
          case "6":
            this.clear();
            continue;
          case "7":
            auth.time = null;
            continue;
          case "8":
            auth.type = null;
            continue;
          case "9":
            auth.level = UserData.Level;
            continue;
          case "10":
            auth.expire = null;
            continue;
        }
        break;
      }
    }
  },
  free() {
    this.stop();
    this.clear();
  },
  open(arg1149, arg1150) {
    var result164 = this.capacity.find(arg1151 => arg1151.id == arg1149 || arg1151.name == arg1149);
    if ((result164 = result164 && this[result164.name] || arg1149) && (arg1150 || result164.active) && result164.open) {
      result164.open();
    }
  }
};
helper.prompt = {
  content: [],
  lastId: 0x0,
  show() {
    var obj159 = {
      qNMqy: function (arg1152, arg1153) {
        return arg1152 > arg1153;
      }
    };
    this.lastId = helper.settings.get("helper-notices")?.["lastId"] ?? 0;
    this.content = auth.prompt;
    if (obj159.qNMqy(this.content.filter(arg1154 => arg1154.id > this.lastId).length, 0)) {
      this.open();
    }
  },
  hide() {
    this.content.forEach(arg1155 => this.lastId = Math.max(arg1155.id, this.lastId));
    helper.settings.set("helper-notices", {
      lastId: this.lastId
    });
    helper.dialog.close();
  },
  render() {
    var obj160 = {
      TbbSB: "#ff8c00",
      ZvEdc: "red",
      WaSSK: function (arg1156, arg1157) {
        return arg1156 < arg1157;
      },
      XUZyK: function (arg1158, arg1159) {
        return arg1158 + arg1159;
      },
      DKgnG: "content"
    };
    const obj161 = {
      I: "black",
      W: "#ff8c00",
      E: "red"
    };
    const result165 = this.content.filter(arg1160 => arg1160.id > this.lastId);
    let str11 = "";
    for (let num57 = 0; obj160.WaSSK(num57, result165.length); num57++) {
      const tmp150 = obj161[result165[num57].type] || "black";
      str11 += obj160.XUZyK("<p style=\"color:" + tmp150 + "\">" + result165[num57].msg, "</p>");
    }
    helper.dialog.iframe.contentWindow.document.getElementById("content").innerHTML = str11;
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
    var obj162 = {
      lqxSq: function (arg1161, arg1162) {
        return arg1161 == arg1162;
      },
      ghyoV: "定制版",
      qvNKO: "用户: ",
      xyWen: function (arg1163, arg1164) {
        return arg1163 > arg1164;
      },
      IEDHJ: function (arg1165, arg1166) {
        return arg1165 ^ arg1166;
      },
      Hcvtj: "green",
      fOpPr: "black",
      iUkah: "show",
      YfWfh: "已开启",
      uvDpu: "已关闭",
      VtZeX: "#999",
      fPzLT: "reloadDelay"
    };
    var value113 = helper.dialog.iframe;
    if (value113 && obj162.lqxSq(value113.name, "helper-about")) {
      var value114 = value113.contentWindow.document;
      var tmp151 = auth.type == "P" ? "高级版" : auth.type == "B" ? "初级版" : auth.type == "S" ? "定制版" : auth.type == "T" ? "试用版" : null;
      var value115 = auth.days;
      if (auth.uid) {
        value114.getElementById("info").innerText = "用户: " + auth.uid;
        if (auth.type) {
          value114.getElementById("info").innerText += value115 < 0 ? "　已过期，请续费！" : "　版本: " + tmp151 + "\u3000有效期: " + (obj162.xyWen(value115, obj162.IEDHJ(0x8c08c, 0x8c08c)) ? "还剩" + value115 + "天。" : "将于明天过期");
        }
      }
      value114.getElementById("info").style.color = value115 >= obj162.IEDHJ(0x870a9, 0x870ac) ? "green" : value115 >= 0 ? "#ff8c00" : value115 < 0 ? "red" : "black";
      value114.getElementById("action").style.display = ["Launch", "Login"].includes(cc.director._scene.name) ? "inline-block" : "none";
    }
    value114.getElementById("show").innerText = helper.ext.option.distanceHint ? "已开启" : "已关闭";
    value114.getElementById("show").style.color = helper.ext.option.distanceHint ? "green" : "#999";
    value114.getElementById("show1").innerText = helper.ext.option.threeAttack ? "已开启" : "已关闭";
    value114.getElementById("show1").style.color = helper.ext.option.threeAttack ? "green" : "#999";
    value114.getElementById("show2").innerText = helper.ext.option.fightingMode ? "已开启" : "已关闭";
    value114.getElementById("show2").style.color = helper.ext.option.fightingMode ? "green" : "#999";
    value114.getElementById("autoRelogin").value = helper.ext.option.autoRelogin ? 1 : obj162.IEDHJ(0x40903, 0x40903);
    value114.getElementById("reloadDelay").value = helper.ext.option.reloginDelay;
    value114.getElementById("delayContainer").style.display = helper.ext.option.autoRelogin ? "inline-block" : "none";
    if (auth.notes) {
      const result166 = decodeURIComponent(escape(atob(auth.notes)));
      value114.getElementById("notes").innerHTML = "公告：" + result166;
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
    <h3>关于口袋助手</h3>
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
    return 1;
  },
  collectData(arg1167 = false) {
    const tmp152 = auth.uid + "-";
    const arr12 = ["topwar_app_serverToken", "topwar_app_lastLogin", "lastLoginUid", "topwar_app_webgameqqCode", "kdqb_secret", "H5SDK_SECREY"];
    return Object.keys(localStorage).reduce((arg1168, arg1169) => {
      if (arg1167) {
        if (arr12.includes(arg1169)) {
          arg1168[arg1169] = localStorage.getItem(arg1169);
        }
      } else {
        if (arg1169.startsWith(tmp152) || arr12.includes(arg1169)) {
          arg1168[arg1169] = localStorage.getItem(arg1169);
        }
      }
      return arg1168;
    }, {});
  },
  downloadHandler() {
    this.backupData(false, "确认要备份当前口袋助手设置吗？", "设置备份确认");
  },
  loginBackupHandler() {
    this.backupData(true, "确认要备份当前登录数据吗？", "登录数据备份确认");
  },
  backupData(arg1170, arg1171, arg1172) {
    var obj163 = {
      UPFsl: function (arg1173, arg1174) {
        return arg1173 ^ arg1174;
      },
      mIzdo: function (arg1175, arg1176) {
        return arg1175(arg1176);
      },
      dFyEG: function (arg1177, arg1178, arg1179) {
        return arg1177(arg1178, arg1179);
      },
      MlANw: "备份出错:",
      RFfdo: "已取消口袋助手设置备份操作"
    };
    try {
      const tmp153 = auth?.["uid"];
      if (!tmp153) {
        obj163.mIzdo(alert, "游戏未登入暂时无法备份");
        return;
      }
      parent.helper.dialog.close();
      const obj164 = {
        content: arg1171,
        title: arg1172,
        delegate: this,
        sureCallBack: () => {
          try {
            const result167 = this.collectData(arg1170);
            const date1 = new Date();
            const result168 = date1.getFullYear();
            const result169 = String(date1.getMonth() + 1).padStart(obj163.UPFsl(0xe405d, 0xe405f), "0");
            const result170 = obj163.mIzdo(String, date1.getDate()).padStart(2, "0");
            const tmp154 = "" + result168 + result169 + result170;
            const tmp155 = tmp153 + "_" + tmp154 + (arg1170 ? "_login" : "");
            const blob3 = new Blob([JSON.stringify(result167, null, 2)], {
              type: "application/json;charset=utf-8"
            });
            const result171 = document.createElement("a");
            const objectUrl1 = URL.createObjectURL(blob3);
            result171.href = objectUrl1;
            result171.download = tmp155;
            result171.style.display = "none";
            document.body.appendChild(result171);
            result171.click();
            obj163.dFyEG(setTimeout, () => {
              document.body.removeChild(result171);
              URL.revokeObjectURL(objectUrl1);
              __require("UIManager").default.Instance().ShowTips(arg1170 ? "正在导出登录数据..." : "正在导出口袋助手设置...");
            }, 500);
          } catch (error19) {
            console.error("备份出错:", error19);
          }
        },
        cancelCallBack: () => {
          __require("UIManager").default.Instance().ShowTips(arg1170 ? "已取消登录数据备份操作" : "已取消口袋助手设置备份操作");
        }
      };
      helper.openUI("ConfirmPanel", obj164);
    } catch (error20) { }
  },
  handleImport(arg1180) {
    var obj165 = {
      JQnvO: "UIManager",
      gCcgT: function (arg1181, arg1182) {
        return arg1181(arg1182);
      },
      zRoUg: "设置已导入，即将刷新",
      zXYMg: "ConfirmPanel",
      IjOpo: "已取消导入操作",
      SiBbj: function (arg1183, arg1184) {
        return arg1183(arg1184);
      },
      HYCVo: "系统错误，请手动刷新"
    };
    try {
      parent.helper.dialog?.["close"]();
      const tmp156 = new FileReader();
      tmp156.onload = arg1185 => {
        try {
          const result172 = JSON.parse(arg1185.target.result);
          const tmp157 = auth?.["uid"];
          const fn42 = () => {
            Object.entries(result172).forEach(([arg1186, arg1187]) => {
              localStorage.setItem(arg1186, arg1187);
            });
            if (tmp157) {
              __require("UIManager").default.Instance().ShowTips("口袋助手设置导入成功，正在重启游戏...");
            } else {
              obj165.gCcgT(alert, "设置已导入，即将刷新");
            }
            setTimeout(() => {
              location.href = location.href;
            }, 1000);
          };
          if (tmp157 && helper?.["openUI"]) {
            const obj166 = {
              content: "导入口袋助手设置会覆盖当前设置并需要重新登录游戏，是否继续？",
              title: "口袋助手设置导入确认",
              delegate: this,
              sureCallBack: fn42,
              cancelCallBack: () => {
                __require("UIManager").default.Instance().ShowTips("已取消口袋助手设置导入");
              }
            };
            helper.openUI("ConfirmPanel", obj166);
          } else {
            if (confirm("导入将覆盖当前设置并需要重新登录，确认继续？")) {
              fn42();
            } else {
              obj165.gCcgT(alert, "已取消导入操作");
            }
          }
        } catch (error21) {
          obj165.SiBbj(alert, "文件解析失败");
        }
      };
      tmp156.readAsText(arg1180);
    } catch (error22) {
      alert("系统错误，请手动刷新");
    }
  },
  render() {
    var value116 = helper.dialog.iframe;
    if (value116 && value116.name == "helper-introduce") {
      var value117 = value116.contentWindow.document;
      value117.getElementById("backupBtn")?.["addEventListener"]("click", () => this.downloadHandler());
      value117.getElementById("backupBtn2")?.["addEventListener"]("click", () => this.loginBackupHandler());
      value117.getElementById("importBtn")?.["addEventListener"]("click", () => {
        const result173 = value117.createElement("input");
        result173.type = "file";
        result173.accept = "application/json";
        result173.onchange = arg1188 => this.handleImport(arg1188.target.files[0]);
        result173.click();
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
async function checkState(arg1189) {
  var obj167 = {
    JmGct: function (arg1190, arg1191) {
      return arg1190(arg1191);
    },
    EuvCI: function (arg1192, arg1193) {
      return arg1192 ^ arg1193;
    },
    cIZkn: function (arg1194, arg1195) {
      return arg1194 * arg1195;
    },
    qjIUa: function (arg1196, arg1197) {
      return arg1196 ^ arg1197;
    },
    aRlnF: function (arg1198, arg1199) {
      return arg1198 - arg1199;
    },
    ioNTB: "Disconnected, auto-login disabled"
  };
  var timestamp1 = Date.now();
  if (timestamp1 - arg1189.time < 1000) {
    return;
  }
  arg1189.time = timestamp1;
  if (!navigator.onLine) {
    return;
  }
  let tmp158 = null;
  try {
    tmp158 = window.NET;
  } catch (error23) {
    tmp158 = null;
  }
  if (!tmp158) {
    if (arg1189.intervalId) {
      obj167.JmGct(clearInterval, arg1189.intervalId);
      arg1189.intervalId = null;
    }
    return;
  }
  if (tmp158 && tmp158.states == 1) {
    arg1189.disconnectTime = null;
    arg1189.randomOffset = null;
    arg1189.disconnectCount = 0;
    return;
  }
  arg1189.disconnectCount = (arg1189.disconnectCount || 0) + 1;
  if (arg1189.disconnectCount < 3) {
    console.log("Anomaly detected " + arg1189.disconnectCount + " time, awaiting confirmation");
    return;
  }
  const tmp159 = !tmp158 || localStorage.getItem("topwar_app_serverToken");
  if (tmp159 && helper.ext.option.autoRelogin) {
    if (!arg1189.disconnectTime) {
      arg1189.randomOffset = Math.floor(Math.random() * obj167.EuvCI(0x6bba1, 0x6bbb4)) - obj167.EuvCI(0x6776a, 0x67760);
      const tmp160 = helper.ext.option.reloginDelay * obj167.EuvCI(0x91154, 0x91168) * 1000;
      const tmp161 = tmp160 + obj167.cIZkn(arg1189.randomOffset, obj167.qjIUa(0xb8efc, 0xb8d14));
      arg1189.disconnectTime = Date.now() - obj167.aRlnF(tmp160, tmp161);
    } else {
      const tmp162 = Date.now() - arg1189.disconnectTime;
      if (tmp162 >= helper.ext.option.reloginDelay * 60 * 1000) {
        location.reload();
      }
    }
  } else if (tmp159) {
    console.log("Disconnected, auto-login disabled");
  }
}
function initialize() {
  var obj168 = {
    wXimU: function (arg1200, arg1201) {
      return arg1200 ^ arg1201;
    },
    YhfFp: function (arg1202, arg1203) {
      return arg1202(arg1203);
    },
    wEeVo: function (arg1204, arg1205, arg1206) {
      return arg1204(arg1205, arg1206);
    }
  };
  if (window.cc) {
    hookMain();
  } else {
    obj168.wEeVo(addEventListener, "load", hookMain);
  }
  const reconnectState1 = {
    busy: 0x0,
    time: Date.now(),
    disconnectTime: null,
    randomOffset: null,
    intervalId: null
  };
  reconnectState1.intervalId = setInterval(async arg1207 => {
    if (!arg1207.busy) {
      try {
        arg1207.busy = obj168.wXimU(0x248ce, 0x248cf);
        if (helper.ext?.["option"]?.["autoRelogin"]) {
          await obj168.YhfFp(checkState, arg1207);
        }
      } finally {
        arg1207.busy = 0;
      }
    }
  }, 30000, reconnectState1);
}
function resetAnimation(arg1208) {
  var obj169 = {
    ggFQA: function (arg1209, arg1210) {
      return arg1209 ^ arg1210;
    }
  };
  if (window.cc && cc.game.config) {
    cc.game.setFrameRate(cc.game.getFrameRate());
  }
  if (window.cc && window.cc.game) {
    setTimeout(() => window.cc.game.resume(), obj169.ggFQA(0xbe026, 0xbe042));
  }
}
function preventSleep(arg1211) {
  var obj170 = {
    ovXrP: function (arg1212, arg1213) {
      return arg1212 === arg1213;
    },
    khFPn: "visible"
  };
  if (obj170.ovXrP(document.visibilityState, "visible") && window.cc && window.cc.sys && window.cc.sys.isMobile && navigator.wakeLock) {
    navigator.wakeLock.request();
  }
}
function preventPinch(arg1214) {
  if (arg1214.touches && arg1214.touches.length > 1) {
    arg1214.preventDefault();
  }
}
var lastTouchEndTime = 0;
function preventDoubleTap(arg1215) {
  var obj171 = {
    ibSkY: function (arg1216, arg1217) {
      return arg1216 - arg1217;
    }
  };
  var result174 = new Date().getTime();
  if (obj171.ibSkY(result174, lastTouchEndTime) <= 300) {
    arg1215.preventDefault();
  }
  lastTouchEndTime = result174;
}
if (!window.helper_inited) {
  helper.site = Array.isArray(arguments[0]) ? arguments[0] : [arguments[0]];
  helper.aff = arguments.length > 1 ? arguments[1] : null;
  helper.aff2 = arguments.length > 2 ? arguments[2] : null;
  if (window.location.href.includes("https://h5kao.shan0327.com") || window.location.href.includes("https://sdk.tmlswk.com") || window.location.href.includes("https://sdk.fzjhymy.com")) {
    document.querySelector("title").innerText = "口袋奇兵（私服）";
  }
  addEventListener("visibilitychange", arg1218 => resetAnimation(arg1218));
  addEventListener("visibilitychange", arg1219 => preventSleep(arg1219));
  addEventListener("fullscreenchange", arg1220 => preventSleep(arg1220));
  addEventListener("gesturestart", arg1221 => arg1221.preventDefault());
  addEventListener("touchstart", arg1222 => preventPinch(arg1222), {
    passive: false
  });
  addEventListener("touchend", arg1223 => preventDoubleTap(arg1223));
  addEventListener("keydown", arg1224 => helper.dispatch(arg1224), true);
  addEventListener("keyup", arg1225 => helper.dispatch(arg1225), true);
  addEventListener("mousedown", arg1226 => helper.dispatch(arg1226), true);
  addEventListener("contextmenu", arg1227 => helper.dispatch(arg1227), true);
  addEventListener("touchstart", arg1228 => helper.dispatch(arg1228), true);
  addEventListener("touchmove", arg1229 => helper.dispatch(arg1229), true);
  addEventListener("touchend", arg1230 => helper.dispatch(arg1230), true);
  initialize();
  loadJQueryBundle();
  add_p();
  window.helper_inited = true;
  console.log("Helper successfully initialized.");
}