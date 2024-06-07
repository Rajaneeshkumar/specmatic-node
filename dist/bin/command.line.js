"use strict";

Object.defineProperty(exports, "__esModule", {
  value: true
});
exports["default"] = void 0;
var _logger = _interopRequireDefault(require("../common/logger"));
var _runner = require("../common/runner");
function _interopRequireDefault(obj) { return obj && obj.__esModule ? obj : { "default": obj }; }
var callSpecmaticCli = function callSpecmaticCli(args) {
  args = args || process.argv;
  var cliArgs = extractArgsForJar(args);
  var fn = getJarFunction(args);
  _logger["default"].info("CLI: Running with args \"".concat(cliArgs, "\""));
  fn(cliArgs, function (err) {
    if (err) {
      _logger["default"].info('CLI: Finished with non zero exit code: ', err.code);
      process.exitCode = err.code;
    } else {
      _logger["default"].info('CLI: Finished');
      process.exitCode = 0;
    }
  }, function (message) {
    console.log("".concat(message));
  });
};
function getJarFunction(args) {
  return args.length >= 3 && args[2] == 'kafka' ? _runner.callKafka : _runner.callCore;
}
function extractArgsForJar(args) {
  var argsToRemove = args.length >= 3 && args[2] == 'kafka' ? 3 : 2;
  return args.slice(argsToRemove).join(' ');
}
var _default = exports["default"] = callSpecmaticCli;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJuYW1lcyI6WyJfbG9nZ2VyIiwiX2ludGVyb3BSZXF1aXJlRGVmYXVsdCIsInJlcXVpcmUiLCJfcnVubmVyIiwib2JqIiwiX19lc01vZHVsZSIsImNhbGxTcGVjbWF0aWNDbGkiLCJhcmdzIiwicHJvY2VzcyIsImFyZ3YiLCJjbGlBcmdzIiwiZXh0cmFjdEFyZ3NGb3JKYXIiLCJmbiIsImdldEphckZ1bmN0aW9uIiwibG9nZ2VyIiwiaW5mbyIsImNvbmNhdCIsImVyciIsImNvZGUiLCJleGl0Q29kZSIsIm1lc3NhZ2UiLCJjb25zb2xlIiwibG9nIiwibGVuZ3RoIiwiY2FsbEthZmthIiwiY2FsbENvcmUiLCJhcmdzVG9SZW1vdmUiLCJzbGljZSIsImpvaW4iLCJfZGVmYXVsdCIsImV4cG9ydHMiXSwic291cmNlcyI6WyIuLi8uLi9zcmMvYmluL2NvbW1hbmQubGluZS50cyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgbG9nZ2VyIGZyb20gJy4uL2NvbW1vbi9sb2dnZXInXG5pbXBvcnQgeyBjYWxsS2Fma2EsIGNhbGxDb3JlIH0gZnJvbSAnLi4vY29tbW9uL3J1bm5lcidcblxuY29uc3QgY2FsbFNwZWNtYXRpY0NsaSA9IChhcmdzPzogc3RyaW5nW10pID0+IHtcbiAgICBhcmdzID0gYXJncyB8fCBwcm9jZXNzLmFyZ3ZcbiAgICBsZXQgY2xpQXJncyA9IGV4dHJhY3RBcmdzRm9ySmFyKGFyZ3MpXG4gICAgbGV0IGZuID0gZ2V0SmFyRnVuY3Rpb24oYXJncylcbiAgICBsb2dnZXIuaW5mbyhgQ0xJOiBSdW5uaW5nIHdpdGggYXJncyBcIiR7Y2xpQXJnc31cImApXG4gICAgZm4oXG4gICAgICAgIGNsaUFyZ3MsXG4gICAgICAgIChlcnI/OiBhbnkpID0+IHtcbiAgICAgICAgICAgIGlmIChlcnIpIHtcbiAgICAgICAgICAgICAgICBsb2dnZXIuaW5mbygnQ0xJOiBGaW5pc2hlZCB3aXRoIG5vbiB6ZXJvIGV4aXQgY29kZTogJywgZXJyLmNvZGUpXG4gICAgICAgICAgICAgICAgcHJvY2Vzcy5leGl0Q29kZSA9IGVyci5jb2RlXG4gICAgICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgICAgICAgIGxvZ2dlci5pbmZvKCdDTEk6IEZpbmlzaGVkJylcbiAgICAgICAgICAgICAgICBwcm9jZXNzLmV4aXRDb2RlID0gMFxuICAgICAgICAgICAgfVxuICAgICAgICB9LFxuICAgICAgICBtZXNzYWdlID0+IHtcbiAgICAgICAgICAgIGNvbnNvbGUubG9nKGAke21lc3NhZ2V9YClcbiAgICAgICAgfVxuICAgIClcbn1cblxuZnVuY3Rpb24gZ2V0SmFyRnVuY3Rpb24oYXJnczogc3RyaW5nW10pIHtcbiAgICByZXR1cm4gYXJncy5sZW5ndGggPj0gMyAmJiBhcmdzWzJdID09ICdrYWZrYScgPyBjYWxsS2Fma2EgOiBjYWxsQ29yZVxufVxuXG5mdW5jdGlvbiBleHRyYWN0QXJnc0ZvckphcihhcmdzOiBzdHJpbmdbXSkge1xuICAgIGNvbnN0IGFyZ3NUb1JlbW92ZSA9IGFyZ3MubGVuZ3RoID49IDMgJiYgYXJnc1syXSA9PSAna2Fma2EnID8gMyA6IDJcbiAgICByZXR1cm4gYXJncy5zbGljZShhcmdzVG9SZW1vdmUpLmpvaW4oJyAnKVxufVxuXG5leHBvcnQgZGVmYXVsdCBjYWxsU3BlY21hdGljQ2xpXG4iXSwibWFwcGluZ3MiOiI7Ozs7OztBQUFBLElBQUFBLE9BQUEsR0FBQUMsc0JBQUEsQ0FBQUMsT0FBQTtBQUNBLElBQUFDLE9BQUEsR0FBQUQsT0FBQTtBQUFzRCxTQUFBRCx1QkFBQUcsR0FBQSxXQUFBQSxHQUFBLElBQUFBLEdBQUEsQ0FBQUMsVUFBQSxHQUFBRCxHQUFBLGdCQUFBQSxHQUFBO0FBRXRELElBQU1FLGdCQUFnQixHQUFHLFNBQW5CQSxnQkFBZ0JBLENBQUlDLElBQWUsRUFBSztFQUMxQ0EsSUFBSSxHQUFHQSxJQUFJLElBQUlDLE9BQU8sQ0FBQ0MsSUFBSTtFQUMzQixJQUFJQyxPQUFPLEdBQUdDLGlCQUFpQixDQUFDSixJQUFJLENBQUM7RUFDckMsSUFBSUssRUFBRSxHQUFHQyxjQUFjLENBQUNOLElBQUksQ0FBQztFQUM3Qk8sa0JBQU0sQ0FBQ0MsSUFBSSw2QkFBQUMsTUFBQSxDQUE0Qk4sT0FBTyxPQUFHLENBQUM7RUFDbERFLEVBQUUsQ0FDRUYsT0FBTyxFQUNQLFVBQUNPLEdBQVMsRUFBSztJQUNYLElBQUlBLEdBQUcsRUFBRTtNQUNMSCxrQkFBTSxDQUFDQyxJQUFJLENBQUMseUNBQXlDLEVBQUVFLEdBQUcsQ0FBQ0MsSUFBSSxDQUFDO01BQ2hFVixPQUFPLENBQUNXLFFBQVEsR0FBR0YsR0FBRyxDQUFDQyxJQUFJO0lBQy9CLENBQUMsTUFBTTtNQUNISixrQkFBTSxDQUFDQyxJQUFJLENBQUMsZUFBZSxDQUFDO01BQzVCUCxPQUFPLENBQUNXLFFBQVEsR0FBRyxDQUFDO0lBQ3hCO0VBQ0osQ0FBQyxFQUNELFVBQUFDLE9BQU8sRUFBSTtJQUNQQyxPQUFPLENBQUNDLEdBQUcsSUFBQU4sTUFBQSxDQUFJSSxPQUFPLENBQUUsQ0FBQztFQUM3QixDQUNKLENBQUM7QUFDTCxDQUFDO0FBRUQsU0FBU1AsY0FBY0EsQ0FBQ04sSUFBYyxFQUFFO0VBQ3BDLE9BQU9BLElBQUksQ0FBQ2dCLE1BQU0sSUFBSSxDQUFDLElBQUloQixJQUFJLENBQUMsQ0FBQyxDQUFDLElBQUksT0FBTyxHQUFHaUIsaUJBQVMsR0FBR0MsZ0JBQVE7QUFDeEU7QUFFQSxTQUFTZCxpQkFBaUJBLENBQUNKLElBQWMsRUFBRTtFQUN2QyxJQUFNbUIsWUFBWSxHQUFHbkIsSUFBSSxDQUFDZ0IsTUFBTSxJQUFJLENBQUMsSUFBSWhCLElBQUksQ0FBQyxDQUFDLENBQUMsSUFBSSxPQUFPLEdBQUcsQ0FBQyxHQUFHLENBQUM7RUFDbkUsT0FBT0EsSUFBSSxDQUFDb0IsS0FBSyxDQUFDRCxZQUFZLENBQUMsQ0FBQ0UsSUFBSSxDQUFDLEdBQUcsQ0FBQztBQUM3QztBQUFDLElBQUFDLFFBQUEsR0FBQUMsT0FBQSxjQUVjeEIsZ0JBQWdCIn0=