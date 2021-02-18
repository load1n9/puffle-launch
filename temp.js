var shellBridgeKeys = flash.external.ExternalInterface.call("ruffleBridge.client.getShellBridgeKeys");
var engineBridgeKeys = flash.external.ExternalInterface.call("ruffleBridge.client.getEngineBridgeKeys");
var interfaceBridgeKeys = flash.external.ExternalInterface.call("ruffleBridge.client.getInterfaceBridgeKeys");
var airtowerBridgeKeys = flash.external.ExternalInterface.call("ruffleBridge.client.getAirtowerBridgeKeys");
var localeTextBridgeKeys = flash.external.ExternalInterface.call("ruffleBridge.client.getLocaleTextKeys");
var shellBridge = {};
var engineBridge = {};
var interfaceBridge = {};
var airtowerBridge = {};
var localeTextBridge = {};
var i = 0;
while(i < shellBridgeKeys.length)
{
   shellBridge[shellBridgeKeys[i]] = function(args)
   {
      var _loc3_ = arguments.callee;
      for(funcKey in shellBridge)
      {
         var _loc2_ = shellBridge[funcKey];
         if(_loc2_ == _loc3_)
         {
            trace(funcKey);
            return flash.external.ExternalInterface.call("ruffleBridge.shell." + funcKey,arguments);
         }
      }
   };
   i++;
}
var i = 0;
while(i < engineBridgeKeys.length)
{
   engineBridge[engineBridgeKeys[i]] = function(args)
   {
      var _loc3_ = arguments.callee;
      for(funcKey in engineBridge)
      {
         var _loc2_ = engineBridge[funcKey];
         if(_loc2_ == _loc3_)
         {
            trace(funcKey);
            return flash.external.ExternalInterface.call("ruffleBridge.engine." + funcKey,arguments);
         }
      }
   };
   i++;
}
var i = 0;
while(i < interfaceBridgeKeys.length)
{
   interfaceBridge[interfaceBridgeKeys[i]] = function(args)
   {
      var _loc3_ = arguments.callee;
      for(funcKey in interfaceBridge)
      {
         var _loc2_ = interfaceBridge[funcKey];
         if(_loc2_ == _loc3_)
         {
            trace(funcKey);
            return flash.external.ExternalInterface.call("ruffleBridge.interface." + funcKey,arguments);
         }
      }
   };
   i++;
}
var i = 0;
while(i < airtowerBridgeKeys.length)
{
   airtowerBridge[airtowerBridgeKeys[i]] = function(args)
   {
      var _loc3_ = arguments.callee;
      for(funcKey in airtowerBridge)
      {
         var _loc2_ = airtowerBridge[funcKey];
         if(_loc2_ == _loc3_)
         {
            trace(funcKey);
            return flash.external.ExternalInterface.call("ruffleBridge.airtower." + funcKey,arguments);
         }
      }
   };
   i++;
}
var i = 0;
while(i < localeTextBridgeKeys.length)
{
   localeTextBridge[localeTextBridgeKeys[i]] = function(args)
   {
      var _loc3_ = arguments.callee;
      for(funcKey in localeTextBridge)
      {
         var _loc2_ = localeTextBridge[funcKey];
         if(_loc2_ == _loc3_)
         {
            trace(funcKey);
            return flash.external.ExternalInterface.call("ruffleBridge.LocaleText." + funcKey,arguments);
         }
      }
   };
   i++;
}
_global.getCurrentShell = function()
{
   return shellBridge;
};
_global.getCurrentEngine = function()
{
   return engineBridge;
};
_global.getCurrentInterface = function()
{
   return interfaceBridge;
};
_global.getCurrentAirtower = function()
{
   return airtowerBridge;
};
_root.showWindow = function(window, obj)
{
   if(window === "Game Over")
   {
      flash.external.ExternalInterface.call("ruffleBridge.client.getCoins",obj);
   }
};
_root.LocaleText = function(window, obj)
{
   return localeTextBridge;
};
_root.playSound = function(sound, options)
{
   flash.external.ExternalInterface.call("ruffleBridge.client.playSound",[sound,options]);
};
_root.myPlayer = flash.external.ExternalInterface.call("ruffleBridge.root.getMyPlayer");
_root.myCrumbs = flash.external.ExternalInterface.call("ruffleBridge.root.getMyCrumbs");
_root.myMediaPath = "assets/flash/global/";
var SHELL = _global.getCurrentShell();
com.clubpenguin.util.Loader.setLocaleVersion(undefined);
com.clubpenguin.util.Loader.setLocale(SHELL.getLocalizedFrame());
var listener = new Object();
listener.onLoadComplete = function()
{
   com.clubpenguin.util.Loader.removeEventListener(listener);
};
com.clubpenguin.util.Loader.addEventListener(listener);
loadMovie("cannon.swf",menu=false);
stop();
