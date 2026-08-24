#include "pxt.h"
#include "source/platform.h"
#include "source/pxt.h"
#include "source/pxtbase.h"
#include "source/pxtcore.h"
#include "source/configkeys.h"
namespace pxt {
    typedef uint32_t ImageLiteral_;
    typedef MicroBitPin DevicePin;
    typedef RefMImage *Image;
    typedef TValueStruct *TValue;
    typedef TValue TNumber;
    typedef TValue Action;
    typedef TValue ImageLiteral;
    typedef TValue (*RunActionType)(Action a, TValue arg0, TValue arg1, TValue arg2);
    typedef void (*RefObjectMethod)(RefObject *self);
    typedef unsigned (*RefObjectSizeMethod)(RefObject *self);
    typedef void *PVoid;
    typedef void **PPVoid;
    typedef void *Object_;
    typedef TValue (*ActionCB)(TValue *captured, TValue arg0, TValue arg1, TValue arg2);
    typedef int color;
    typedef BoxedBuffer *Buffer;
    typedef BoxedString *String;
    typedef RefImage *Image_;
    void deleteRefObject(RefObject *obj);
}
namespace Array_ {
    bool isArray(TValue arr);
}
namespace pxtrt {
    RefCollection* keysOf(TValue v);
    TValue mapDeleteByString(RefMap *map, String key);
}
namespace pxt {
    void seedRandom(unsigned seed);
    void seedAddRandom(unsigned seed);
}
namespace String_ {
    String mkEmpty();
    String fromCharCode(int code);
    TNumber charCodeAt(String s, int pos);
    String charAt(String s, int pos);
    String concat(String s, String other);
    int length(String s);
    TNumber toNumber(String s);
    String substr(String s, int start, int length);
    int indexOf(String s, String searchString, int start);
    int includes(String s, String searchString, int start);
}
namespace Boolean_ {
    bool bang(bool v);
}
namespace pxt {
    bool switch_eq(TValue a, TValue b);
}
namespace numops {
    TNumber adds(TNumber a, TNumber b);
    TNumber subs(TNumber a, TNumber b);
    TNumber muls(TNumber a, TNumber b);
    TNumber div(TNumber a, TNumber b);
    TNumber mod(TNumber a, TNumber b);
    TNumber lsls(TNumber a, TNumber b);
    TNumber lsrs(TNumber a, TNumber b);
    TNumber asrs(TNumber a, TNumber b);
    TNumber eors(TNumber a, TNumber b);
    TNumber orrs(TNumber a, TNumber b);
    TNumber bnot(TNumber a);
    TNumber ands(TNumber a, TNumber b);
    bool lt_bool(TNumber a, TNumber b);
    TNumber le(TNumber a, TNumber b);
    TNumber lt(TNumber a, TNumber b);
    TNumber ge(TNumber a, TNumber b);
    TNumber gt(TNumber a, TNumber b);
    TNumber eq(TNumber a, TNumber b);
    TNumber neq(TNumber a, TNumber b);
    TNumber eqq(TNumber a, TNumber b);
    TNumber neqq(TNumber a, TNumber b);
}
namespace Math_ {
    TNumber pow(TNumber x, TNumber y);
    TNumber random();
    TNumber randomRange(TNumber min, TNumber max);
    TNumber log(TNumber x);
    TNumber log10(TNumber x);
    TNumber floor(TNumber x);
    TNumber ceil(TNumber x);
    TNumber trunc(TNumber x);
    TNumber round(TNumber x);
    int imul(int x, int y);
    int idiv(int x, int y);
}
namespace pxt {
    void* ptrOfLiteral(int offset);
    unsigned programSize();
    void deepSleep();
    int getConfig(int key, int defl);
}
namespace pxtrt {
    TValue ldlocRef(RefRefLocal *r);
    void stlocRef(RefRefLocal *r, TValue v);
    RefRefLocal* mklocRef();
    RefAction* stclo(RefAction *a, int idx, TValue v);
    void panic(int code);
    String emptyToNull(String s);
    int ptrToBool(TValue p);
    void* getGlobalsPtr();
    void runtimeWarning(String s);
}
namespace pxt {
    ValType valType(TValue v);
    String typeOf(TValue v);
    typedef void (*RestoreStateType)(TryFrame *, ThreadContext *);
    TryFrame* beginTry();
    void endTry();
    void throwValue(TValue v);
    TValue getThrownValue();
    void endFinally();
    Buffer getGCStats();
    void popThreadContext(ThreadContext *ctx);
    ThreadContext* pushThreadContext(void *sp, void *endSP);
    unsigned afterProgramPage();
}
namespace images {
    Image createImage(ImageLiteral_ leds);
    Image createBigImage(ImageLiteral_ leds);
    Buffer charCodeBuffer(int charCode);
}
namespace ImageMethods {
    void plotImage(Image i, int xOffset = 0);
    void showImage(Image sprite, int xOffset, int interval = 400);
    void plotFrame(Image i, int xOffset);
    void scrollImage(Image id, int frameOffset, int interval);
    void clear(Image i);
    void setPixelBrightness(Image i, int x, int y, int value);
    int pixelBrightness(Image i, int x, int y);
    int width(Image i);
    int height(Image i);
    void setPixel(Image i, int x, int y, bool value);
    bool pixel(Image i, int x, int y);
    void showFrame(Image i, int frame, int interval = 400);
}
namespace basic {
    void showLeds(ImageLiteral_ leds, int interval = 400);
    void showString(String text, int interval = 150);
    void clearScreen();
    void showAnimation(ImageLiteral_ leds, int interval = 400);
    void plotLeds(ImageLiteral_ leds);
    void forever(Action a);
    void pause(int ms);
}
    enum Button : int;
    enum Dimension : int;
    enum Rotation : int;
    enum TouchPin : int;
    enum AcceleratorRange : int;
    enum Gesture : int;
    enum MesDpadButtonInfo : int;
namespace input {
    void onButtonPressed(Button button, Action body);
    void onGesture(Gesture gesture, Action body);
    bool isGesture(Gesture gesture);
    void onPinPressed(TouchPin name, Action body);
    void onPinReleased(TouchPin name, Action body);
    bool buttonIsPressed(Button button);
    bool pinIsPressed(TouchPin name);
    int acceleration(Dimension dimension);
    int lightLevel();
    int compassHeading();
    int temperature();
    int rotation(Rotation kind);
    TNumber magneticForce(Dimension dimension);
    void calibrateCompass();
    void setAccelerometerRange(AcceleratorRange range);
}
    enum EventCreationMode : int;
    enum EventBusSource : int;
    enum EventBusValue : int;
    enum EventFlags : int;
namespace control {
    int millis();
    int micros();
    void inBackground(Action a);
    void waitForEvent(int src, int value);
    void reset();
    void singleSimulator();
    void waitMicros(int micros);
    void raiseEvent(int src, int value, EventCreationMode mode);
    void onEvent(int src, int value, Action handler, int flags = 0);
    int eventValue();
    int eventTimestamp();
    String deviceName();
    String _hardwareVersion();
    int deviceSerialNumber();
    Buffer deviceLongSerialNumber();
    void __midiSend(Buffer buffer);
    void __log(int priority, String text);
    int allocateNotifyEvent();
    void dmesg(String s);
    void dmesgPtr(String str, Object_ ptr);
    uint32_t _ramSize();
    void gc();
    void heapDump();
    void setDebugFlags(int flags);
    void heapSnapshot();
    bool profilingEnabled();
}
    enum DisplayMode_ : int;
namespace led {
    void plot(int x, int y);
    void plotBrightness(int x, int y, int brightness);
    void unplot(int x, int y);
    int pointBrightness(int x, int y);
    int brightness();
    void setBrightness(int value);
    void stopAnimation();
    void setDisplayMode(DisplayMode_ mode);
    DisplayMode_ displayMode();
    void enable(bool on);
    Image screenshot();
}
namespace music {
    void setVolume(int volume);
    int volume();
    void setBuiltInSpeakerEnabled(bool enabled);
    bool isSoundPlaying();
    void setSilenceLevel(int level);
}
    enum DigitalPin : int;
    enum AnalogPin : int;
    enum PulseValue : int;
    enum PinPullMode : int;
    enum PinEventType : int;
namespace pins {
    MicroBitPin* getPinAddress(int id);
    int digitalReadPin(int name);
    void digitalWritePin(int name, int value);
    int analogReadPin(int name);
    void analogWritePin(int name, int value);
    void analogSetPeriod(int name, int micros);
    void onPulsed(DigitalPin name, PulseValue pulse, Action body);
    int pulseDuration();
    int pulseIn(int name, PulseValue value, int maxDuration = 2000000);
    void servoWritePin(int name, int value);
    void servoSetContinuous(int name, bool value);
    void servoSetPulse(int name, int micros);
    void analogSetPitchPin(int name);
    void analogSetPitchVolume(int volume);
    int analogPitchVolume();
    void analogPitch(int frequency, int ms);
    void setPull(int name, PinPullMode pull);
    void setEvents(int name, PinEventType type);
    Buffer createBuffer(int size);
    void setMatrixWidth(int pin, int width);
    Buffer i2cReadBuffer(int address, int size, bool repeat = false);
    int i2cWriteBuffer(int address, Buffer buf, bool repeat = false);
    int spiWrite(int value);
    void spiTransfer(Buffer command, Buffer response);
    void spiFrequency(int frequency);
    void spiFormat(int bits, int mode);
    void spiPins(int mosi, int miso, int sck);
    void pushButton(int pin);
    void setAudioPin(int name);
    void setAudioPinEnabled(bool enabled);
}
    enum SerialPin : int;
    enum BaudRate : int;
namespace serial {
    String readUntil(String delimiter);
    String readString();
    void onDataReceived(String delimiters, Action body);
    void writeString(String text);
    void writeBuffer(Buffer buffer);
    Buffer readBuffer(int length);
    void redirect(SerialPin tx, SerialPin rx, BaudRate rate);
    int redirectWithStatus(SerialPin tx, SerialPin rx);
    void setBaudRate(BaudRate rate);
    void redirectToUSB();
    void setRxBufferSize(uint8_t size);
    void setTxBufferSize(uint8_t size);
    void writeDmesg();
}
namespace BufferMethods {
    uint8_t* getBytes(Buffer buf);
    int getByte(Buffer buf, int off);
    void setByte(Buffer buf, int off, int v);
    int getUint8(Buffer buf, int off);
    bool isReadOnly(Buffer buf);
    void setUint8(Buffer buf, int off, int v);
    void setNumber(Buffer buf, NumberFormat format, int offset, TNumber value);
    TNumber getNumber(Buffer buf, NumberFormat format, int offset);
    int length(Buffer s);
    void fill(Buffer buf, int value, int offset = 0, int length = -1);
    Buffer slice(Buffer buf, int offset = 0, int length = -1);
    void shift(Buffer buf, int offset, int start = 0, int length = -1);
    String toString(Buffer buf);
    String toHex(Buffer buf);
    void rotate(Buffer buf, int offset, int start = 0, int length = -1);
    void write(Buffer buf, int dstOffset, Buffer src);
    uint32_t hash(Buffer buf, int bits);
}
namespace control {
    Buffer createBuffer(int size);
    Buffer createBufferFromUTF8(String str);
}
namespace Math_ {
    TNumber log2(TNumber x);
    TNumber exp(TNumber x);
    TNumber tanh(TNumber x);
    TNumber sinh(TNumber x);
    TNumber cosh(TNumber x);
    TNumber atanh(TNumber x);
    TNumber asinh(TNumber x);
    TNumber acosh(TNumber x);
    TNumber atan2(TNumber y, TNumber x);
    TNumber tan(TNumber x);
    TNumber sin(TNumber x);
    TNumber cos(TNumber x);
    TNumber atan(TNumber x);
    TNumber asin(TNumber x);
    TNumber acos(TNumber x);
    TNumber sqrt(TNumber x);
}
namespace light {
    void sendWS2812Buffer(Buffer buf, int pin);
    void sendWS2812BufferWithBrightness(Buffer buf, int pin, int brightness);
    void setMode(int pin, int mode);
}
    enum TouchButtonEvent : int;
namespace input {
    void onLogoEvent(TouchButtonEvent action, Action body);
    bool logoIsPressed();
}
    enum TouchTargetMode : int;
    enum TouchTarget : int;
namespace pins {
    void touchSetMode(TouchTarget name, TouchTargetMode mode);
}
namespace music {
    void __playSoundExpression(String nodes, bool waitTillDone);
    void __stopSoundExpressions();
}
    enum DetectedSound : int;
    enum SoundThreshold : int;
namespace input {
    void onSound(DetectedSound sound, Action handler);
    int soundLevel();
    void setSoundThreshold(SoundThreshold sound, int threshold);
}
namespace radio {
    void off();
    void on();
    void raiseEvent(int src, int value);
    Buffer readRawPacket();
    void sendRawPacket(Buffer msg);
    void onDataReceived(Action body);
    void setGroup(int id);
    void setTransmitPower(int power);
    void setFrequencyBand(int band);
}
extern "C" void __aeabi_dadd();
extern "C" void __aeabi_dcmplt();
extern "C" void __aeabi_dcmpgt();
extern "C" void __aeabi_dsub();
extern "C" void __aeabi_ddiv();
extern "C" void __aeabi_dmul();

PXT_SHIMS_BEGIN
(uint32_t)(void*)::pxt::afterProgramPage,
(uint32_t)(void*)::pxt::dumpDmesg,
(uint32_t)(void*)::pxt::mkAction,
(uint32_t)(void*)::pxt::templateHash,
(uint32_t)(void*)::pxt::programHash,
(uint32_t)(void*)::pxt::programName,
(uint32_t)(void*)::pxt::programSize,
(uint32_t)(void*)::pxt::getNumGlobals,
(uint32_t)(void*)::pxt::mkClassInstance,
(uint32_t)(void*)::pxt::debugMemLeaks,
(uint32_t)(void*)::pxt::anyPrint,
(uint32_t)(void*)::pxt::getConfig,
(uint32_t)(void*)::pxt::toInt,
(uint32_t)(void*)::pxt::toUInt,
(uint32_t)(void*)::pxt::toDouble,
(uint32_t)(void*)::pxt::toFloat,
(uint32_t)(void*)::pxt::fromDouble,
(uint32_t)(void*)::pxt::fromFloat,
(uint32_t)(void*)::pxt::fromInt,
(uint32_t)(void*)::pxt::fromUInt,
(uint32_t)(void*)::pxt::fromBool,
(uint32_t)(void*)::pxt::eq_bool,
(uint32_t)(void*)::pxt::eqq_bool,
(uint32_t)(void*)::pxt::failedCast,
(uint32_t)(void*)::pxt::missingProperty,
(uint32_t)(void*)::pxt::incr,
(uint32_t)(void*)::pxt::decr,
PXT_FNPTR(&::pxt::string_inline_ascii_vt),
PXT_FNPTR(&::pxt::buffer_vt),
PXT_FNPTR(&::pxt::number_vt),
PXT_FNPTR(&::pxt::RefAction_vtable),
(uint32_t)(void*)::pxt::RefRecord_destroy,
(uint32_t)(void*)::pxt::RefRecord_print,
(uint32_t)(void*)::pxt::RefRecord_scan,
(uint32_t)(void*)::pxt::RefRecord_gcsize,
(uint32_t)(void*)::pxt::dumpPerfCounters,
(uint32_t)(void*)::pxt::startPerfCounter,
(uint32_t)(void*)::pxt::stopPerfCounter,
(uint32_t)(void*)::numops::toString,
(uint32_t)(void*)::numops::toBool,
(uint32_t)(void*)::numops::toBoolDecr,
(uint32_t)(void*)::pxtrt::mkMap,
(uint32_t)(void*)::pxtrt::mapGetByString,
(uint32_t)(void*)::pxtrt::lookupMapKey,
(uint32_t)(void*)::pxtrt::mapGet,
(uint32_t)(void*)::pxtrt::mapSetByString,
(uint32_t)(void*)::pxtrt::mapSet,
(uint32_t)(void*)::String_::compare,
(uint32_t)(void*)::Array_::mk,
(uint32_t)(void*)::Array_::length,
(uint32_t)(void*)::Array_::setLength,
(uint32_t)(void*)::Array_::push,
(uint32_t)(void*)::Array_::pop,
(uint32_t)(void*)::Array_::getAt,
(uint32_t)(void*)::Array_::setAt,
(uint32_t)(void*)::Array_::removeAt,
(uint32_t)(void*)::Array_::insertAt,
(uint32_t)(void*)::Array_::indexOf,
(uint32_t)(void*)::Array_::removeElement,
(uint32_t)(void*)::pxt::deleteRefObject,
(uint32_t)(void*)::Array_::isArray,
(uint32_t)(void*)::pxtrt::keysOf,
(uint32_t)(void*)::pxtrt::mapDeleteByString,
(uint32_t)(void*)::pxt::seedRandom,
(uint32_t)(void*)::pxt::seedAddRandom,
(uint32_t)(void*)::String_::mkEmpty,
(uint32_t)(void*)::String_::fromCharCode,
(uint32_t)(void*)::String_::charCodeAt,
(uint32_t)(void*)::String_::charAt,
(uint32_t)(void*)::String_::concat,
(uint32_t)(void*)::String_::length,
(uint32_t)(void*)::String_::toNumber,
(uint32_t)(void*)::String_::substr,
(uint32_t)(void*)::String_::indexOf,
(uint32_t)(void*)::String_::includes,
(uint32_t)(void*)::Boolean_::bang,
(uint32_t)(void*)::pxt::switch_eq,
(uint32_t)(void*)::numops::adds,
(uint32_t)(void*)::numops::subs,
(uint32_t)(void*)::numops::muls,
(uint32_t)(void*)::numops::div,
(uint32_t)(void*)::numops::mod,
(uint32_t)(void*)::numops::lsls,
(uint32_t)(void*)::numops::lsrs,
(uint32_t)(void*)::numops::asrs,
(uint32_t)(void*)::numops::eors,
(uint32_t)(void*)::numops::orrs,
(uint32_t)(void*)::numops::bnot,
(uint32_t)(void*)::numops::ands,
(uint32_t)(void*)::numops::lt_bool,
(uint32_t)(void*)::numops::le,
(uint32_t)(void*)::numops::lt,
(uint32_t)(void*)::numops::ge,
(uint32_t)(void*)::numops::gt,
(uint32_t)(void*)::numops::eq,
(uint32_t)(void*)::numops::neq,
(uint32_t)(void*)::numops::eqq,
(uint32_t)(void*)::numops::neqq,
(uint32_t)(void*)::Math_::pow,
(uint32_t)(void*)::Math_::random,
(uint32_t)(void*)::Math_::randomRange,
(uint32_t)(void*)::Math_::log,
(uint32_t)(void*)::Math_::log10,
(uint32_t)(void*)::Math_::floor,
(uint32_t)(void*)::Math_::ceil,
(uint32_t)(void*)::Math_::trunc,
(uint32_t)(void*)::Math_::round,
(uint32_t)(void*)::Math_::imul,
(uint32_t)(void*)::Math_::idiv,
(uint32_t)(void*)::pxt::ptrOfLiteral,
(uint32_t)(void*)::pxt::programSize,
(uint32_t)(void*)::pxt::deepSleep,
(uint32_t)(void*)::pxt::getConfig,
(uint32_t)(void*)::pxtrt::ldlocRef,
(uint32_t)(void*)::pxtrt::stlocRef,
(uint32_t)(void*)::pxtrt::mklocRef,
(uint32_t)(void*)::pxtrt::stclo,
(uint32_t)(void*)::pxtrt::panic,
(uint32_t)(void*)::pxtrt::emptyToNull,
(uint32_t)(void*)::pxtrt::ptrToBool,
(uint32_t)(void*)::pxtrt::getGlobalsPtr,
(uint32_t)(void*)::pxtrt::runtimeWarning,
(uint32_t)(void*)::pxt::valType,
(uint32_t)(void*)::pxt::typeOf,
(uint32_t)(void*)::pxt::beginTry,
(uint32_t)(void*)::pxt::endTry,
(uint32_t)(void*)::pxt::throwValue,
(uint32_t)(void*)::pxt::getThrownValue,
(uint32_t)(void*)::pxt::endFinally,
(uint32_t)(void*)::pxt::getGCStats,
(uint32_t)(void*)::pxt::popThreadContext,
(uint32_t)(void*)::pxt::pushThreadContext,
PXT_FNPTR(::__aeabi_dadd),
PXT_FNPTR(::__aeabi_dcmplt),
PXT_FNPTR(::__aeabi_dcmpgt),
PXT_FNPTR(::__aeabi_dsub),
PXT_FNPTR(::__aeabi_ddiv),
PXT_FNPTR(::__aeabi_dmul),
(uint32_t)(void*)::pxt::afterProgramPage,
(uint32_t)(void*)::images::createImage,
(uint32_t)(void*)::images::createBigImage,
(uint32_t)(void*)::images::charCodeBuffer,
(uint32_t)(void*)::ImageMethods::plotImage,
(uint32_t)(void*)::ImageMethods::showImage,
(uint32_t)(void*)::ImageMethods::plotFrame,
(uint32_t)(void*)::ImageMethods::scrollImage,
(uint32_t)(void*)::ImageMethods::clear,
(uint32_t)(void*)::ImageMethods::setPixelBrightness,
(uint32_t)(void*)::ImageMethods::pixelBrightness,
(uint32_t)(void*)::ImageMethods::width,
(uint32_t)(void*)::ImageMethods::height,
(uint32_t)(void*)::ImageMethods::setPixel,
(uint32_t)(void*)::ImageMethods::pixel,
(uint32_t)(void*)::ImageMethods::showFrame,
(uint32_t)(void*)::basic::showLeds,
(uint32_t)(void*)::basic::showString,
(uint32_t)(void*)::basic::clearScreen,
(uint32_t)(void*)::basic::showAnimation,
(uint32_t)(void*)::basic::plotLeds,
(uint32_t)(void*)::basic::forever,
(uint32_t)(void*)::basic::pause,
(uint32_t)(void*)::input::onButtonPressed,
(uint32_t)(void*)::input::onGesture,
(uint32_t)(void*)::input::isGesture,
(uint32_t)(void*)::input::onPinPressed,
(uint32_t)(void*)::input::onPinReleased,
(uint32_t)(void*)::input::buttonIsPressed,
(uint32_t)(void*)::input::pinIsPressed,
(uint32_t)(void*)::input::acceleration,
(uint32_t)(void*)::input::lightLevel,
(uint32_t)(void*)::input::compassHeading,
(uint32_t)(void*)::input::temperature,
(uint32_t)(void*)::input::rotation,
(uint32_t)(void*)::input::magneticForce,
(uint32_t)(void*)::input::calibrateCompass,
(uint32_t)(void*)::input::setAccelerometerRange,
(uint32_t)(void*)::control::millis,
(uint32_t)(void*)::control::micros,
(uint32_t)(void*)::control::inBackground,
(uint32_t)(void*)::control::waitForEvent,
(uint32_t)(void*)::control::reset,
(uint32_t)(void*)::control::singleSimulator,
(uint32_t)(void*)::control::waitMicros,
(uint32_t)(void*)::control::raiseEvent,
(uint32_t)(void*)::control::onEvent,
(uint32_t)(void*)::control::eventValue,
(uint32_t)(void*)::control::eventTimestamp,
(uint32_t)(void*)::control::deviceName,
(uint32_t)(void*)::control::_hardwareVersion,
(uint32_t)(void*)::control::deviceSerialNumber,
(uint32_t)(void*)::control::deviceLongSerialNumber,
(uint32_t)(void*)::control::__midiSend,
(uint32_t)(void*)::control::__log,
(uint32_t)(void*)::control::allocateNotifyEvent,
(uint32_t)(void*)::control::dmesg,
(uint32_t)(void*)::control::dmesgPtr,
(uint32_t)(void*)::control::_ramSize,
(uint32_t)(void*)::control::gc,
(uint32_t)(void*)::control::heapDump,
(uint32_t)(void*)::control::setDebugFlags,
(uint32_t)(void*)::control::heapSnapshot,
(uint32_t)(void*)::control::profilingEnabled,
(uint32_t)(void*)::led::plot,
(uint32_t)(void*)::led::plotBrightness,
(uint32_t)(void*)::led::unplot,
(uint32_t)(void*)::led::pointBrightness,
(uint32_t)(void*)::led::brightness,
(uint32_t)(void*)::led::setBrightness,
(uint32_t)(void*)::led::stopAnimation,
(uint32_t)(void*)::led::setDisplayMode,
(uint32_t)(void*)::led::displayMode,
(uint32_t)(void*)::led::enable,
(uint32_t)(void*)::led::screenshot,
(uint32_t)(void*)::music::setVolume,
(uint32_t)(void*)::music::volume,
(uint32_t)(void*)::music::setBuiltInSpeakerEnabled,
(uint32_t)(void*)::music::isSoundPlaying,
(uint32_t)(void*)::music::setSilenceLevel,
(uint32_t)(void*)::pins::getPinAddress,
(uint32_t)(void*)::pins::digitalReadPin,
(uint32_t)(void*)::pins::digitalWritePin,
(uint32_t)(void*)::pins::analogReadPin,
(uint32_t)(void*)::pins::analogWritePin,
(uint32_t)(void*)::pins::analogSetPeriod,
(uint32_t)(void*)::pins::onPulsed,
(uint32_t)(void*)::pins::pulseDuration,
(uint32_t)(void*)::pins::pulseIn,
(uint32_t)(void*)::pins::servoWritePin,
(uint32_t)(void*)::pins::servoSetContinuous,
(uint32_t)(void*)::pins::servoSetPulse,
(uint32_t)(void*)::pins::analogSetPitchPin,
(uint32_t)(void*)::pins::analogSetPitchVolume,
(uint32_t)(void*)::pins::analogPitchVolume,
(uint32_t)(void*)::pins::analogPitch,
(uint32_t)(void*)::pins::setPull,
(uint32_t)(void*)::pins::setEvents,
(uint32_t)(void*)::pins::createBuffer,
(uint32_t)(void*)::pins::setMatrixWidth,
(uint32_t)(void*)::pins::i2cReadBuffer,
(uint32_t)(void*)::pins::i2cWriteBuffer,
(uint32_t)(void*)::pins::spiWrite,
(uint32_t)(void*)::pins::spiTransfer,
(uint32_t)(void*)::pins::spiFrequency,
(uint32_t)(void*)::pins::spiFormat,
(uint32_t)(void*)::pins::spiPins,
(uint32_t)(void*)::pins::pushButton,
(uint32_t)(void*)::pins::setAudioPin,
(uint32_t)(void*)::pins::setAudioPinEnabled,
(uint32_t)(void*)::serial::readUntil,
(uint32_t)(void*)::serial::readString,
(uint32_t)(void*)::serial::onDataReceived,
(uint32_t)(void*)::serial::writeString,
(uint32_t)(void*)::serial::writeBuffer,
(uint32_t)(void*)::serial::readBuffer,
(uint32_t)(void*)::serial::redirect,
(uint32_t)(void*)::serial::redirectWithStatus,
(uint32_t)(void*)::serial::setBaudRate,
(uint32_t)(void*)::serial::redirectToUSB,
(uint32_t)(void*)::serial::setRxBufferSize,
(uint32_t)(void*)::serial::setTxBufferSize,
(uint32_t)(void*)::serial::writeDmesg,
(uint32_t)(void*)::BufferMethods::getBytes,
(uint32_t)(void*)::BufferMethods::getByte,
(uint32_t)(void*)::BufferMethods::setByte,
(uint32_t)(void*)::BufferMethods::getUint8,
(uint32_t)(void*)::BufferMethods::isReadOnly,
(uint32_t)(void*)::BufferMethods::setUint8,
(uint32_t)(void*)::BufferMethods::setNumber,
(uint32_t)(void*)::BufferMethods::getNumber,
(uint32_t)(void*)::BufferMethods::length,
(uint32_t)(void*)::BufferMethods::fill,
(uint32_t)(void*)::BufferMethods::slice,
(uint32_t)(void*)::BufferMethods::shift,
(uint32_t)(void*)::BufferMethods::toString,
(uint32_t)(void*)::BufferMethods::toHex,
(uint32_t)(void*)::BufferMethods::rotate,
(uint32_t)(void*)::BufferMethods::write,
(uint32_t)(void*)::BufferMethods::hash,
(uint32_t)(void*)::control::createBuffer,
(uint32_t)(void*)::control::createBufferFromUTF8,
(uint32_t)(void*)::Math_::log2,
(uint32_t)(void*)::Math_::exp,
(uint32_t)(void*)::Math_::tanh,
(uint32_t)(void*)::Math_::sinh,
(uint32_t)(void*)::Math_::cosh,
(uint32_t)(void*)::Math_::atanh,
(uint32_t)(void*)::Math_::asinh,
(uint32_t)(void*)::Math_::acosh,
(uint32_t)(void*)::Math_::atan2,
(uint32_t)(void*)::Math_::tan,
(uint32_t)(void*)::Math_::sin,
(uint32_t)(void*)::Math_::cos,
(uint32_t)(void*)::Math_::atan,
(uint32_t)(void*)::Math_::asin,
(uint32_t)(void*)::Math_::acos,
(uint32_t)(void*)::Math_::sqrt,
(uint32_t)(void*)::light::sendWS2812Buffer,
(uint32_t)(void*)::light::sendWS2812BufferWithBrightness,
(uint32_t)(void*)::light::setMode,
(uint32_t)(void*)::input::onLogoEvent,
(uint32_t)(void*)::input::logoIsPressed,
(uint32_t)(void*)::pins::touchSetMode,
(uint32_t)(void*)::music::__playSoundExpression,
(uint32_t)(void*)::music::__stopSoundExpressions,
(uint32_t)(void*)::input::onSound,
(uint32_t)(void*)::input::soundLevel,
(uint32_t)(void*)::input::setSoundThreshold,
(uint32_t)(void*)::radio::off,
(uint32_t)(void*)::radio::on,
(uint32_t)(void*)::radio::raiseEvent,
(uint32_t)(void*)::radio::readRawPacket,
(uint32_t)(void*)::radio::sendRawPacket,
(uint32_t)(void*)::radio::onDataReceived,
(uint32_t)(void*)::radio::setGroup,
(uint32_t)(void*)::radio::setTransmitPower,
(uint32_t)(void*)::radio::setFrequencyBand,

PXT_SHIMS_END
