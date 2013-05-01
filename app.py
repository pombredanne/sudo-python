### FRAMEWORK STUFF ###################################################


class Messaging:
    """Class for sending message which allows for loose coupling of
    component in the app.

    Example usage:

    .. code-block:: python

       messaging = Messaging()
       messaging.subscribe(something, 'boot:done')
       messaging.publish(boot, 'boot:done')
    """

    def __init__(self):
        self.omni = list()
        self.channels = dict()

    def publish(self, sender, channel, param=None):
        print 'publish', sender, channel, param
        for receiver in self.omni:
            receiver(sender, channel, param)
        channel = self.channels.get(channel, None)
        if channel:
            channel = self.channels.get(channel)
            for receiver in channel:
                receiver(sender, channel, param)

    def subscribe(self, receiver, channel=None):
        print 'subscribe', channel
        if not channel:
            self.omni.append(receiver)
        else:
            receivers = self.channels.get(channel)
            if receivers:
                receivers.append(receiver)
            else:
                receivers = list()
                receivers.append(receiver)
                self.channels.set(channel, receivers)


class Node:
    """Node in a state machine"""

    def __init__(self, app):
        self.app = app
        self.transitions = dict()

    def transition(self, message, end):
        """Change state on ``message`` to ``end``"""
        self.transitions.set(message, end)

    def on_leave(self, next, sender, message, param=None):
        print 'on_leave empty', next, sender, message, param

    def on_enter(self, before, sender, message, param=None):
        print 'on_enter empty', before, sender, message, param


class Machinima:
    """State machine"""

    def __init__(self, name):
        self.name = name
        self.node = None

    def handle(self, sender, message, param=None):
        print 'handle', sender, message, param
        end = self.node.transitions.get(message)
        if end:
            self.node.on_leave(next, sender, message, param)
            end.on_enter(self.node, sender, message, param)
            self.node = end

    def start(self):
        self.node.on_enter(None, None, None, None)


class Animator:

    def __init__(self, func, delay, loop):
        self.func = func
        self.delay = delay
        self.loop = loop

    def run(self):
        var(delay, func)
        delay = self.delay
        func = self.func
        if self.loop:
            self.id = JS('setInterval(adapt_arguments(func), delay)')
        else:
            JS('setTimeout(adapt_arguments(func), delay)')

    def stop(self):
        var(id)
        id = self.id
        JS('clearInterval(id)')


class Application:

    def __init__(self):
        self.messaging = Messaging()
        self.machinima = Machinima('main')
        self.messaging.subscribe(self.machinima.handle)

### END FRAMEWORK STUFF ###################################################

### PROGRESSIVE TEXT ######################################################

ABC = list()
ABC.append('&nbsp;')
ABC.append('a')
ABC.append('b')
ABC.append('c')
ABC.append('d')
ABC.append('e')
ABC.append('f')
ABC.append('g')
ABC.append('h')
ABC.append('i')
ABC.append('j')
ABC.append('k')
ABC.append('l')
ABC.append('m')
ABC.append('n')
ABC.append('o')
ABC.append('p')
ABC.append('q')
ABC.append('r')
ABC.append('s')
ABC.append('t')
ABC.append('u')
ABC.append('v')
ABC.append('w')
ABC.append('x')
ABC.append('y')
ABC.append('z')
ABC.append(' ')


class ProgressiveText:

    def __init__(self, selector, text, callback=None, delay=50):
        self.callback = callback
        self.delay = delay
        self.text = text
        self.length = len(text)
        var(element)
        element = J(selector)
        element.html('')
        for i in text:
            element.append('<span>&nbsp;</span>')
        self.elements = J(selector + ' span')

    def start(self):
        self.running = True
        self.animation = Animator(self.update, self.delay, True)
        self.animation.run()

    def update(self):
        if not self.running:
            self.animation.stop()
            return
        var(to_update)
        to_update = False
        for index in range(self.length):
            var(element, char, expected)
            element = self.elements.get(index)
            char = element.html()
            expected = self.text.get(index)
            if char != expected:
                var(novo)
                novo = ABC.get(ABC.index(char) + 1)
                element.html(novo)
                to_update = True
        if not to_update:
            self.animation.stop()
            if self.callback:
                self.callback()

### END PROGRESSIVE TEXT ##############################################

### START APP #########################################################~


link = J('#link')
playground = J('#playground')


class Block:

    def __init__(self, action, helpline, href):
        block = J('<div></div>')
        playground.append(block.j)
        block.click(self.show)
        self.action = action
        self.helpline = helpline
        self.href = href

    def show(self):
        ProgressiveText('#action', self.action, delay=75).start()
        ProgressiveText('#helpline', self.helpline, delay=100).start()
        link.attr('href', self.href)


class SUDO(Application):

    def __init__(self):
        Application.__init__(self)

        var(title, helpline)

        ProgressiveText('#title', str('sudo python'), None, 100).start()
        ProgressiveText('#helpline', str('awesomness'), self.start, 200).start()

    def start(self):
        var(metaclass)
        Block(str('metaclass'), str('powerful meta programming mechanic'), 'http://stackoverflow.com/questions/100003/what-is-a-metaclass-in-python')
        Block(str('free books'), str('best free resources'), 'http://pythonbooks.revolunet.com/')
        J('#playground').show()


sudo = SUDO()
