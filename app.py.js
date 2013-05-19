var Messaging, __Messaging_attrs, __Messaging_parents;
__Messaging_attrs = {};
__Messaging_parents = create_array();
var __Messaging___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_0, __kwargs_0;
__args_0 = create_array();
__kwargs_0 = {};
set_attribute(self, "omni", get_attribute(list, "__call__")(__args_0, __kwargs_0));
var __args_1, __kwargs_1;
__args_1 = create_array();
__kwargs_1 = {};
set_attribute(self, "channels", get_attribute(dict, "__call__")(__args_1, __kwargs_1));
}

__Messaging_attrs.__init__ = __Messaging___init__;
var __Messaging_publish = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {"param": undefined}, "args": create_array("self", "sender", "channel", "param")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var sender = arguments['sender'];
var channel = arguments['channel'];
var param = arguments['param'];
var __iterator__, receiver;
__iterator__ = get_attribute(get_attribute(get_attribute(self, "omni"), "__iter__"), "__call__")(create_array(), {});
try {
receiver = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
var __args_2, __kwargs_2;
__args_2 = create_array(sender, channel, param);
__kwargs_2 = {};
get_attribute(receiver, "__call__")(__args_2, __kwargs_2);
undefined;
receiver = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {
if (__exception__ == StopIteration || isinstance([__exception__, StopIteration])) {

}

}

var __args_3, __kwargs_3;
__args_3 = create_array(channel, undefined);
__kwargs_3 = {};
channel = get_attribute(get_attribute(get_attribute(self, "channels"), "get"), "__call__")(__args_3, __kwargs_3);
if(channel) {
var __args_4, __kwargs_4;
__args_4 = create_array(channel);
__kwargs_4 = {};
channel = get_attribute(get_attribute(get_attribute(self, "channels"), "get"), "__call__")(__args_4, __kwargs_4);
var __iterator__, receiver;
__iterator__ = get_attribute(get_attribute(channel, "__iter__"), "__call__")(create_array(), {});
try {
receiver = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
var __args_5, __kwargs_5;
__args_5 = create_array(sender, channel, param);
__kwargs_5 = {};
get_attribute(receiver, "__call__")(__args_5, __kwargs_5);
undefined;
receiver = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {
if (__exception__ == StopIteration || isinstance([__exception__, StopIteration])) {

}

}

}

}

__Messaging_attrs.publish = __Messaging_publish;
var __Messaging_subscribe = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {"channel": undefined}, "args": create_array("self", "receiver", "channel")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var receiver = arguments['receiver'];
var channel = arguments['channel'];
if(!channel) {
var __args_6, __kwargs_6;
__args_6 = create_array(receiver);
__kwargs_6 = {};
get_attribute(get_attribute(get_attribute(self, "omni"), "append"), "__call__")(__args_6, __kwargs_6);
}
else {
var __args_7, __kwargs_7;
__args_7 = create_array(channel);
__kwargs_7 = {};
receivers = get_attribute(get_attribute(get_attribute(self, "channels"), "get"), "__call__")(__args_7, __kwargs_7);
if(receivers) {
var __args_8, __kwargs_8;
__args_8 = create_array(receiver);
__kwargs_8 = {};
get_attribute(get_attribute(receivers, "append"), "__call__")(__args_8, __kwargs_8);
}
else {
var __args_9, __kwargs_9;
__args_9 = create_array();
__kwargs_9 = {};
receivers = get_attribute(list, "__call__")(__args_9, __kwargs_9);
var __args_10, __kwargs_10;
__args_10 = create_array(receiver);
__kwargs_10 = {};
get_attribute(get_attribute(receivers, "append"), "__call__")(__args_10, __kwargs_10);
var __args_11, __kwargs_11;
__args_11 = create_array(channel, receivers);
__kwargs_11 = {};
get_attribute(get_attribute(get_attribute(self, "channels"), "set"), "__call__")(__args_11, __kwargs_11);
}

}

}

__Messaging_attrs.subscribe = __Messaging_subscribe;
Messaging = create_class("Messaging", __Messaging_parents, __Messaging_attrs);
var Node, __Node_attrs, __Node_parents;
__Node_attrs = {};
__Node_parents = create_array();
var __Node___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "app")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var app = arguments['app'];
set_attribute(self, "app", app);
var __args_12, __kwargs_12;
__args_12 = create_array();
__kwargs_12 = {};
set_attribute(self, "transitions", get_attribute(dict, "__call__")(__args_12, __kwargs_12));
}

__Node_attrs.__init__ = __Node___init__;
var __Node_transition = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "message", "end")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var message = arguments['message'];
var end = arguments['end'];
var __args_13, __kwargs_13;
__args_13 = create_array(message, end);
__kwargs_13 = {};
get_attribute(get_attribute(get_attribute(self, "transitions"), "set"), "__call__")(__args_13, __kwargs_13);
}

__Node_attrs.transition = __Node_transition;
var __Node_on_leave = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {"param": undefined}, "args": create_array("self", "next", "sender", "message", "param")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var next = arguments['next'];
var sender = arguments['sender'];
var message = arguments['message'];
var param = arguments['param'];
}

__Node_attrs.on_leave = __Node_on_leave;
var __Node_on_enter = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {"param": undefined}, "args": create_array("self", "before", "sender", "message", "param")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var before = arguments['before'];
var sender = arguments['sender'];
var message = arguments['message'];
var param = arguments['param'];
}

__Node_attrs.on_enter = __Node_on_enter;
Node = create_class("Node", __Node_parents, __Node_attrs);
var Machinima, __Machinima_attrs, __Machinima_parents;
__Machinima_attrs = {};
__Machinima_parents = create_array();
var __Machinima___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "name")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var name = arguments['name'];
set_attribute(self, "name", name);
set_attribute(self, "node", undefined);
}

__Machinima_attrs.__init__ = __Machinima___init__;
var __Machinima_handle = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {"param": undefined}, "args": create_array("self", "sender", "message", "param")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var sender = arguments['sender'];
var message = arguments['message'];
var param = arguments['param'];
var __args_14, __kwargs_14;
__args_14 = create_array(message);
__kwargs_14 = {};
end = get_attribute(get_attribute(get_attribute(get_attribute(self, "node"), "transitions"), "get"), "__call__")(__args_14, __kwargs_14);
if(end) {
var __args_15, __kwargs_15;
__args_15 = create_array(next, sender, message, param);
__kwargs_15 = {};
get_attribute(get_attribute(get_attribute(self, "node"), "on_leave"), "__call__")(__args_15, __kwargs_15);
var __args_16, __kwargs_16;
__args_16 = create_array(get_attribute(self, "node"), sender, message, param);
__kwargs_16 = {};
get_attribute(get_attribute(end, "on_enter"), "__call__")(__args_16, __kwargs_16);
set_attribute(self, "node", end);
}

}

__Machinima_attrs.handle = __Machinima_handle;
var __Machinima_start = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_17, __kwargs_17;
__args_17 = create_array(undefined, undefined, undefined, undefined);
__kwargs_17 = {};
get_attribute(get_attribute(get_attribute(self, "node"), "on_enter"), "__call__")(__args_17, __kwargs_17);
}

__Machinima_attrs.start = __Machinima_start;
Machinima = create_class("Machinima", __Machinima_parents, __Machinima_attrs);
var Animator, __Animator_attrs, __Animator_parents;
__Animator_attrs = {};
__Animator_parents = create_array();
var __Animator___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "func", "delay", "loop")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var func = arguments['func'];
var delay = arguments['delay'];
var loop = arguments['loop'];
set_attribute(self, "func", func);
set_attribute(self, "delay", delay);
set_attribute(self, "loop", loop);
}

__Animator_attrs.__init__ = __Animator___init__;
var __Animator_run = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var delay, func;
delay = get_attribute(self, "delay");
func = get_attribute(self, "func");
if(get_attribute(self, "loop")) {
set_attribute(self, "id", setInterval(adapt_arguments(func), delay));
}
else {
setTimeout(adapt_arguments(func), delay);
}

}

__Animator_attrs.run = __Animator_run;
var __Animator_stop = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var id;
id = get_attribute(self, "id");
clearInterval(id);
}

__Animator_attrs.stop = __Animator_stop;
Animator = create_class("Animator", __Animator_parents, __Animator_attrs);
var Application, __Application_attrs, __Application_parents;
__Application_attrs = {};
__Application_parents = create_array();
var __Application___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_18, __kwargs_18;
__args_18 = create_array();
__kwargs_18 = {};
set_attribute(self, "messaging", get_attribute(Messaging, "__call__")(__args_18, __kwargs_18));
var __args_19, __kwargs_19;
__args_19 = create_array("main");
__kwargs_19 = {};
set_attribute(self, "machinima", get_attribute(Machinima, "__call__")(__args_19, __kwargs_19));
var __args_20, __kwargs_20;
__args_20 = create_array(get_attribute(get_attribute(self, "machinima"), "handle"));
__kwargs_20 = {};
get_attribute(get_attribute(get_attribute(self, "messaging"), "subscribe"), "__call__")(__args_20, __kwargs_20);
}

__Application_attrs.__init__ = __Application___init__;
Application = create_class("Application", __Application_parents, __Application_attrs);
var __args_21, __kwargs_21;
__args_21 = create_array("azertyuiopQSDFGHJKLMwxcvbnAZERTYUIOPqsdfghjklmWXCVBN  ");
__kwargs_21 = {};
ABC = get_attribute(str, "__call__")(__args_21, __kwargs_21);
var ProgressiveText, __ProgressiveText_attrs, __ProgressiveText_parents;
__ProgressiveText_attrs = {};
__ProgressiveText_parents = create_array();
var __ProgressiveText___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {"callback": undefined, "delay": 50}, "args": create_array("self", "selector", "text", "callback", "delay")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var selector = arguments['selector'];
var text = arguments['text'];
var callback = arguments['callback'];
var delay = arguments['delay'];
set_attribute(self, "callback", callback);
set_attribute(self, "delay", delay);
set_attribute(self, "text", text);
var __args_22, __kwargs_22;
__args_22 = create_array(text);
__kwargs_22 = {};
set_attribute(self, "length", get_attribute(len, "__call__")(__args_22, __kwargs_22));
var element;
var __args_23, __kwargs_23;
__args_23 = create_array(selector);
__kwargs_23 = {};
element = get_attribute(J, "__call__")(__args_23, __kwargs_23);
var __args_24, __kwargs_24;
__args_24 = create_array("");
__kwargs_24 = {};
get_attribute(get_attribute(element, "html"), "__call__")(__args_24, __kwargs_24);
var __iterator__, i;
__iterator__ = get_attribute(get_attribute(text, "__iter__"), "__call__")(create_array(), {});
try {
i = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
var __args_25, __kwargs_25;
__args_25 = create_array("<span>a</span>");
__kwargs_25 = {};
get_attribute(get_attribute(element, "append"), "__call__")(__args_25, __kwargs_25);
undefined;
i = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {
if (__exception__ == StopIteration || isinstance([__exception__, StopIteration])) {

}

}

var __args_26, __kwargs_26;
__args_26 = create_array(selector + " span");
__kwargs_26 = {};
set_attribute(self, "elements", get_attribute(J, "__call__")(__args_26, __kwargs_26));
}

__ProgressiveText_attrs.__init__ = __ProgressiveText___init__;
var __ProgressiveText_start = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
set_attribute(self, "running", true);
var __args_27, __kwargs_27;
__args_27 = create_array(get_attribute(self, "update"), get_attribute(self, "delay"), true);
__kwargs_27 = {};
set_attribute(self, "animation", get_attribute(Animator, "__call__")(__args_27, __kwargs_27));
var __args_28, __kwargs_28;
__args_28 = create_array();
__kwargs_28 = {};
get_attribute(get_attribute(get_attribute(self, "animation"), "run"), "__call__")(__args_28, __kwargs_28);
}

__ProgressiveText_attrs.start = __ProgressiveText_start;
var __ProgressiveText_update = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
if(!get_attribute(self, "running")) {
var __args_29, __kwargs_29;
__args_29 = create_array();
__kwargs_29 = {};
get_attribute(get_attribute(get_attribute(self, "animation"), "stop"), "__call__")(__args_29, __kwargs_29);
return undefined;
}

var to_update;
to_update = false;
var __iterator__, index;
var __args_30, __kwargs_30;
__args_30 = create_array(get_attribute(self, "length"));
__kwargs_30 = {};
__iterator__ = get_attribute(get_attribute(get_attribute(range, "__call__")(__args_30, __kwargs_30), "__iter__"), "__call__")(create_array(), {});
try {
index = get_attribute(__iterator__, "next")(create_array(), {});
while(true) {
var element, char, expected;
var __args_31, __kwargs_31;
__args_31 = create_array(index);
__kwargs_31 = {};
element = get_attribute(get_attribute(get_attribute(self, "elements"), "get"), "__call__")(__args_31, __kwargs_31);
var __args_32, __kwargs_32;
__args_32 = create_array();
__kwargs_32 = {};
char = get_attribute(get_attribute(element, "html"), "__call__")(__args_32, __kwargs_32);
var __args_33, __kwargs_33;
__args_33 = create_array(index);
__kwargs_33 = {};
expected = get_attribute(get_attribute(get_attribute(self, "text"), "get"), "__call__")(__args_33, __kwargs_33);
if(char != expected) {
var novo;
var __args_34, __kwargs_34;
__args_34 = create_array(char);
__kwargs_34 = {};
var __args_35, __kwargs_35;
__args_35 = create_array(get_attribute(get_attribute(ABC, "index"), "__call__")(__args_34, __kwargs_34) + 1);
__kwargs_35 = {};
novo = get_attribute(get_attribute(ABC, "get"), "__call__")(__args_35, __kwargs_35);
var __args_36, __kwargs_36;
__args_36 = create_array(novo);
__kwargs_36 = {};
get_attribute(get_attribute(element, "html"), "__call__")(__args_36, __kwargs_36);
to_update = true;
}

undefined;
undefined;
undefined;
undefined;
undefined;
index = get_attribute(__iterator__, "next")(create_array(), {});
}
}
catch(__exception__) {
if (__exception__ == StopIteration || isinstance([__exception__, StopIteration])) {

}

}

if(!to_update) {
var __args_37, __kwargs_37;
__args_37 = create_array();
__kwargs_37 = {};
get_attribute(get_attribute(get_attribute(self, "animation"), "stop"), "__call__")(__args_37, __kwargs_37);
if(get_attribute(self, "callback")) {
var __args_38, __kwargs_38;
__args_38 = create_array();
__kwargs_38 = {};
get_attribute(get_attribute(self, "callback"), "__call__")(__args_38, __kwargs_38);
}

}

}

__ProgressiveText_attrs.update = __ProgressiveText_update;
ProgressiveText = create_class("ProgressiveText", __ProgressiveText_parents, __ProgressiveText_attrs);
var __args_39, __kwargs_39;
__args_39 = create_array("#link");
__kwargs_39 = {};
link = get_attribute(J, "__call__")(__args_39, __kwargs_39);
var __args_40, __kwargs_40;
__args_40 = create_array("#playground");
__kwargs_40 = {};
playground = get_attribute(J, "__call__")(__args_40, __kwargs_40);
var Block, __Block_attrs, __Block_parents;
__Block_attrs = {};
__Block_parents = create_array();
var __Block___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self", "action", "helpline", "href")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var action = arguments['action'];
var helpline = arguments['helpline'];
var href = arguments['href'];
var __args_41, __kwargs_41;
__args_41 = create_array("<div></div>");
__kwargs_41 = {};
block = get_attribute(J, "__call__")(__args_41, __kwargs_41);
var __args_42, __kwargs_42;
__args_42 = create_array(get_attribute(block, "j"));
__kwargs_42 = {};
get_attribute(get_attribute(playground, "append"), "__call__")(__args_42, __kwargs_42);
var __args_43, __kwargs_43;
__args_43 = create_array(get_attribute(self, "show"));
__kwargs_43 = {};
get_attribute(get_attribute(block, "click"), "__call__")(__args_43, __kwargs_43);
set_attribute(self, "action", action);
set_attribute(self, "helpline", helpline);
set_attribute(self, "href", href);
}

__Block_attrs.__init__ = __Block___init__;
var __Block_show = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_44, __kwargs_44;
__args_44 = create_array();
__kwargs_44 = {};
var __args_45, __kwargs_45;
__args_45 = create_array("#action", get_attribute(self, "action"));
__kwargs_45 = {"delay": 75};
get_attribute(get_attribute(get_attribute(ProgressiveText, "__call__")(__args_45, __kwargs_45), "start"), "__call__")(__args_44, __kwargs_44);
var __args_46, __kwargs_46;
__args_46 = create_array();
__kwargs_46 = {};
var __args_47, __kwargs_47;
__args_47 = create_array("#helpline", get_attribute(self, "helpline"));
__kwargs_47 = {"delay": 100};
get_attribute(get_attribute(get_attribute(ProgressiveText, "__call__")(__args_47, __kwargs_47), "start"), "__call__")(__args_46, __kwargs_46);
var __args_48, __kwargs_48;
__args_48 = create_array("href", get_attribute(self, "href"));
__kwargs_48 = {};
get_attribute(get_attribute(link, "attr"), "__call__")(__args_48, __kwargs_48);
}

__Block_attrs.show = __Block_show;
Block = create_class("Block", __Block_parents, __Block_attrs);
var SUDO, __SUDO_attrs, __SUDO_parents;
__SUDO_attrs = {};
__SUDO_parents = create_array();
__SUDO_parents.push(Application);
var __SUDO___init__ = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var __args_49, __kwargs_49;
__args_49 = create_array(self);
__kwargs_49 = {};
get_attribute(get_attribute(Application, "__init__"), "__call__")(__args_49, __kwargs_49);
var __args_50, __kwargs_50;
__args_50 = create_array();
__kwargs_50 = {};
var __args_51, __kwargs_51;
__args_51 = create_array("sudo python");
__kwargs_51 = {};
var __args_52, __kwargs_52;
__args_52 = create_array("#title", get_attribute(str, "__call__")(__args_51, __kwargs_51), undefined, 100);
__kwargs_52 = {};
get_attribute(get_attribute(get_attribute(ProgressiveText, "__call__")(__args_52, __kwargs_52), "start"), "__call__")(__args_50, __kwargs_50);
var __args_53, __kwargs_53;
__args_53 = create_array();
__kwargs_53 = {};
var __args_54, __kwargs_54;
__args_54 = create_array("awesomeness");
__kwargs_54 = {};
var __args_55, __kwargs_55;
__args_55 = create_array("#helpline", get_attribute(str, "__call__")(__args_54, __kwargs_54), get_attribute(self, "start"), 200);
__kwargs_55 = {};
get_attribute(get_attribute(get_attribute(ProgressiveText, "__call__")(__args_55, __kwargs_55), "start"), "__call__")(__args_53, __kwargs_53);
}

__SUDO_attrs.__init__ = __SUDO___init__;
var __SUDO_start = function(args, kwargs) {
var signature, arguments;
signature = {"kwargs": {}, "args": create_array("self")};
arguments = get_arguments(signature, args, kwargs);
var self = arguments['self'];
var metaclass;
var __args_56, __kwargs_56;
__args_56 = create_array("metaclass");
__kwargs_56 = {};
var __args_57, __kwargs_57;
__args_57 = create_array("Powerful meta programming mechanic");
__kwargs_57 = {};
var __args_58, __kwargs_58;
__args_58 = create_array(get_attribute(str, "__call__")(__args_56, __kwargs_56), get_attribute(str, "__call__")(__args_57, __kwargs_57), "http://stackoverflow.com/questions/100003/what-is-a-metaclass-in-python");
__kwargs_58 = {};
get_attribute(Block, "__call__")(__args_58, __kwargs_58);
var __args_59, __kwargs_59;
__args_59 = create_array("free books");
__kwargs_59 = {};
var __args_60, __kwargs_60;
__args_60 = create_array("Best free resources");
__kwargs_60 = {};
var __args_61, __kwargs_61;
__args_61 = create_array(get_attribute(str, "__call__")(__args_59, __kwargs_59), get_attribute(str, "__call__")(__args_60, __kwargs_60), "http://pythonbooks.revolunet.com/");
__kwargs_61 = {};
get_attribute(Block, "__call__")(__args_61, __kwargs_61);
var __args_62, __kwargs_62;
__args_62 = create_array("deep");
__kwargs_62 = {};
var __args_63, __kwargs_63;
__args_63 = create_array("dive");
__kwargs_63 = {};
var __args_64, __kwargs_64;
__args_64 = create_array(get_attribute(str, "__call__")(__args_62, __kwargs_62), get_attribute(str, "__call__")(__args_63, __kwargs_63), "http://www.cafepy.com/");
__kwargs_64 = {};
get_attribute(Block, "__call__")(__args_64, __kwargs_64);
var __args_65, __kwargs_65;
__args_65 = create_array("make");
__kwargs_65 = {};
var __args_66, __kwargs_66;
__args_66 = create_array("it yourself");
__kwargs_66 = {};
var __args_67, __kwargs_67;
__args_67 = create_array(get_attribute(str, "__call__")(__args_65, __kwargs_65), get_attribute(str, "__call__")(__args_66, __kwargs_66), "http://xkcd.com/149/");
__kwargs_67 = {};
get_attribute(Block, "__call__")(__args_67, __kwargs_67);
var __args_68, __kwargs_68;
__args_68 = create_array("python");
__kwargs_68 = {};
var __args_69, __kwargs_69;
__args_69 = create_array("fast implementation in python");
__kwargs_69 = {};
var __args_70, __kwargs_70;
__args_70 = create_array(get_attribute(str, "__call__")(__args_68, __kwargs_68), get_attribute(str, "__call__")(__args_69, __kwargs_69), "http://pypy.org/");
__kwargs_70 = {};
get_attribute(Block, "__call__")(__args_70, __kwargs_70);
var __args_71, __kwargs_71;
__args_71 = create_array("brython");
__kwargs_71 = {};
var __args_72, __kwargs_72;
__args_72 = create_array("in the browser by javascript");
__kwargs_72 = {};
var __args_73, __kwargs_73;
__args_73 = create_array(get_attribute(str, "__call__")(__args_71, __kwargs_71), get_attribute(str, "__call__")(__args_72, __kwargs_72), "http://www.brython.info/");
__kwargs_73 = {};
get_attribute(Block, "__call__")(__args_73, __kwargs_73);
var __args_74, __kwargs_74;
__args_74 = create_array("script");
__kwargs_74 = {};
var __args_75, __kwargs_75;
__args_75 = create_array("in the browser by Python");
__kwargs_75 = {};
var __args_76, __kwargs_76;
__args_76 = create_array(get_attribute(str, "__call__")(__args_74, __kwargs_74), get_attribute(str, "__call__")(__args_75, __kwargs_75), "http://apppyjs.appspot.com/");
__kwargs_76 = {};
get_attribute(Block, "__call__")(__args_76, __kwargs_76);
var __args_77, __kwargs_77;
__args_77 = create_array("cloud");
__kwargs_77 = {};
var __args_78, __kwargs_78;
__args_78 = create_array("operate a private or public cloud");
__kwargs_78 = {};
var __args_79, __kwargs_79;
__args_79 = create_array(get_attribute(str, "__call__")(__args_77, __kwargs_77), get_attribute(str, "__call__")(__args_78, __kwargs_78), "http://www.openstack.org/");
__kwargs_79 = {};
get_attribute(Block, "__call__")(__args_79, __kwargs_79);
var __args_80, __kwargs_80;
__args_80 = create_array("ZOPE");
__kwargs_80 = {};
var __args_81, __kwargs_81;
__args_81 = create_array("complex thing should be possible");
__kwargs_81 = {};
var __args_82, __kwargs_82;
__args_82 = create_array(get_attribute(str, "__call__")(__args_80, __kwargs_80), get_attribute(str, "__call__")(__args_81, __kwargs_81), "https://www.zope.com/");
__kwargs_82 = {};
get_attribute(Block, "__call__")(__args_82, __kwargs_82);
var __args_83, __kwargs_83;
__args_83 = create_array("nerfed");
__kwargs_83 = {};
var __args_84, __kwargs_84;
__args_84 = create_array("the dos and doings");
__kwargs_84 = {};
var __args_85, __kwargs_85;
__args_85 = create_array(get_attribute(str, "__call__")(__args_83, __kwargs_83), get_attribute(str, "__call__")(__args_84, __kwargs_84), "https://github.com/amirouche/Nerfed");
__kwargs_85 = {};
get_attribute(Block, "__call__")(__args_85, __kwargs_85);
var __args_86, __kwargs_86;
__args_86 = create_array("blockbuster");
__kwargs_86 = {};
var __args_87, __kwargs_87;
__args_87 = create_array("primary web solution");
__kwargs_87 = {};
var __args_88, __kwargs_88;
__args_88 = create_array(get_attribute(str, "__call__")(__args_86, __kwargs_86), get_attribute(str, "__call__")(__args_87, __kwargs_87), "https://www.djangoproject.com/");
__kwargs_88 = {};
get_attribute(Block, "__call__")(__args_88, __kwargs_88);
var __args_89, __kwargs_89;
__args_89 = create_array("lovestory");
__kwargs_89 = {};
var __args_90, __kwargs_90;
__args_90 = create_array("network (SFW)");
__kwargs_90 = {};
var __args_91, __kwargs_91;
__args_91 = create_array(get_attribute(str, "__call__")(__args_89, __kwargs_89), get_attribute(str, "__call__")(__args_90, __kwargs_90), "https://github.com/organizations/python-graph-lovestory");
__kwargs_91 = {};
get_attribute(Block, "__call__")(__args_91, __kwargs_91);
var __args_92, __kwargs_92;
__args_92 = create_array();
__kwargs_92 = {};
var __args_93, __kwargs_93;
__args_93 = create_array("#playground");
__kwargs_93 = {};
get_attribute(get_attribute(get_attribute(J, "__call__")(__args_93, __kwargs_93), "fade_in"), "__call__")(__args_92, __kwargs_92);
}

__SUDO_attrs.start = __SUDO_start;
SUDO = create_class("SUDO", __SUDO_parents, __SUDO_attrs);
var __args_94, __kwargs_94;
__args_94 = create_array();
__kwargs_94 = {};
sudo = get_attribute(SUDO, "__call__")(__args_94, __kwargs_94);
