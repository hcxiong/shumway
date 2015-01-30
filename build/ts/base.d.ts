/// <reference path="../../src/base/es6-promises.d.ts" />
declare var jsGlobal: any;
declare var inBrowser: boolean;
declare var inFirefox: boolean;
declare var putstr: any;
declare var release: boolean;
declare var profile: boolean;
declare var dateNow: () => number;
declare var dump: (message: string) => void;
declare function dumpLine(line: string): void;
declare var START_TIME: number;
interface String {
    padRight(c: string, n: number): string;
    padLeft(c: string, n: number): string;
    endsWith(s: string): boolean;
}
interface Function {
    boundTo: boolean;
}
interface Array<T> {
    runtimeId: number;
}
interface Math {
    imul(a: number, b: number): number;
    clz32(x: number): number;
}
interface Error {
    stack: string;
}
interface Uint8ClampedArray extends ArrayBufferView {
    BYTES_PER_ELEMENT: number;
    length: number;
    [index: number]: number;
    get(index: number): number;
    set(index: number, value: number): void;
    set(array: Uint8Array, offset?: number): void;
    set(array: number[], offset?: number): void;
    subarray(begin: number, end?: number): Uint8ClampedArray;
}
declare var Uint8ClampedArray: {
    new (length: number): Uint8ClampedArray;
    new (array: Uint8Array): Uint8ClampedArray;
    new (array: number[]): Uint8ClampedArray;
    new (buffer: ArrayBuffer, byteOffset?: number, length?: number): Uint8ClampedArray;
    prototype: Uint8ClampedArray;
    BYTES_PER_ELEMENT: number;
};
declare module Shumway {
    enum CharacterCodes {
        _0 = 48,
        _1 = 49,
        _2 = 50,
        _3 = 51,
        _4 = 52,
        _5 = 53,
        _6 = 54,
        _7 = 55,
        _8 = 56,
        _9 = 57,
    }
    var UINT32_CHAR_BUFFER_LENGTH: number;
    var UINT32_MAX: number;
    var UINT32_MAX_DIV_10: number;
    var UINT32_MAX_MOD_10: number;
    function isString(value: any): boolean;
    function isFunction(value: any): boolean;
    function isNumber(value: any): boolean;
    function isInteger(value: any): boolean;
    function isArray(value: any): boolean;
    function isNumberOrString(value: any): boolean;
    function isObject(value: any): boolean;
    function toNumber(x: any): number;
    function isNumericString(value: string): boolean;
    function isNumeric(value: any): boolean;
    function isIndex(value: any): boolean;
    function isNullOrUndefined(value: any): boolean;
    module Debug {
        function error(message: string): void;
        function assert(condition: any, message?: any): void;
        function assertUnreachable(msg: string): void;
        function assertNotImplemented(condition: boolean, message: string): void;
        function warning(message: any, arg1?: any, arg2?: any): void;
        function notUsed(message: string): void;
        function notImplemented(message: string): void;
        function dummyConstructor(message: string): void;
        function abstractMethod(message: string): void;
        function somewhatImplemented(message: string): void;
        function unexpected(message?: any): void;
        function unexpectedCase(message?: any): void;
    }
    function getTicks(): number;
    interface Map<T> {
        [name: string]: T;
    }
    module ArrayUtilities {
        function popManyInto(src: any[], count: number, dst: any[]): void;
        function popMany<T>(array: T[], count: number): T[];
        function popManyIntoVoid(array: any[], count: number): void;
        function pushMany(dst: any[], src: any[]): void;
        function top(array: any[]): any;
        function last(array: any[]): any;
        function peek(array: any[]): any;
        function indexOf<T>(array: T[], value: T): number;
        function equals<T>(a: T[], b: T[]): boolean;
        function pushUnique<T>(array: T[], value: T): number;
        function unique<T>(array: T[]): T[];
        function copyFrom(dst: any[], src: any[]): void;
        function ensureTypedArrayCapacity(array: any, capacity: number): any;
        class ArrayWriter {
            _u8: Uint8Array;
            _u16: Uint16Array;
            _i32: Int32Array;
            _f32: Float32Array;
            _u32: Uint32Array;
            _offset: number;
            constructor(initialCapacity?: number);
            reset(): void;
            offset: number;
            getIndex(size: number): number;
            ensureAdditionalCapacity(size: any): void;
            ensureCapacity(minCapacity: number): void;
            writeInt(v: number): void;
            writeIntAt(v: number, offset: number): void;
            writeIntUnsafe(v: number): void;
            writeFloat(v: number): void;
            writeFloatUnsafe(v: number): void;
            write4Floats(a: number, b: number, c: number, d: number): void;
            write4FloatsUnsafe(a: number, b: number, c: number, d: number): void;
            write6Floats(a: number, b: number, c: number, d: number, e: number, f: number): void;
            write6FloatsUnsafe(a: number, b: number, c: number, d: number, e: number, f: number): void;
            subF32View(): Float32Array;
            subI32View(): Int32Array;
            subU16View(): Uint16Array;
            subU8View(): Uint8Array;
            hashWords(hash: number, offset: number, length: number): number;
            reserve(size: number): void;
        }
    }
    class ArrayReader {
        _u8: Uint8Array;
        _u16: Uint16Array;
        _i32: Int32Array;
        _f32: Float32Array;
        _u32: Uint32Array;
        _offset: number;
        constructor(buffer: ArrayBuffer);
        offset: number;
        isEmpty(): boolean;
        readInt(): number;
        readFloat(): number;
    }
    module ObjectUtilities {
        function boxValue(value: any): any;
        function toKeyValueArray(object: Object): any[];
        function isPrototypeWriteable(object: Object): boolean;
        function hasOwnProperty(object: Object, name: string): boolean;
        function propertyIsEnumerable(object: Object, name: string): boolean;
        function getOwnPropertyDescriptor(object: Object, name: string): PropertyDescriptor;
        function hasOwnGetter(object: Object, name: string): boolean;
        function getOwnGetter(object: Object, name: string): () => any;
        function hasOwnSetter(object: Object, name: string): boolean;
        function createMap<T>(): Map<T>;
        function createArrayMap<T>(): Map<T>;
        function defineReadOnlyProperty(object: Object, name: string, value: any): void;
        function getOwnPropertyDescriptors(object: Object): Map<PropertyDescriptor>;
        function cloneObject(object: Object): Object;
        function copyProperties(object: Object, template: Object): void;
        function copyOwnProperties(object: Object, template: Object): void;
        function copyOwnPropertyDescriptors(object: Object, template: Object, overwrite?: boolean): void;
        function getLatestGetterOrSetterPropertyDescriptor(object: any, name: any): PropertyDescriptor;
        function defineNonEnumerableGetterOrSetter(obj: any, name: any, value: any, isGetter: any): void;
        function defineNonEnumerableGetter(obj: any, name: any, getter: any): void;
        function defineNonEnumerableSetter(obj: any, name: any, setter: any): void;
        function defineNonEnumerableProperty(obj: any, name: any, value: any): void;
        function defineNonEnumerableForwardingProperty(obj: any, name: string, otherName: string): void;
        function defineNewNonEnumerableProperty(obj: any, name: string, value: any): void;
        function createPublicAliases(obj: any, names: string[]): void;
    }
    module FunctionUtilities {
        function makeForwardingGetter(target: string): () => any;
        function makeForwardingSetter(target: string): (any: any) => void;
        function bindSafely(method: Function, receiver: Object): () => any;
    }
    module StringUtilities {
        function repeatString(c: string, n: number): string;
        function memorySizeToString(value: number): string;
        function toSafeString(value: any): string;
        function toSafeArrayString(array: any): string;
        function utf8decode(str: string): Uint8Array;
        function utf8encode(bytes: Uint8Array): string;
        function base64ArrayBuffer(arrayBuffer: ArrayBuffer): string;
        function escapeString(str: string): string;
        function fromCharCodeArray(buffer: Uint8Array): string;
        function variableLengthEncodeInt32(n: any): string;
        function toEncoding(n: any): string;
        function fromEncoding(s: any): any;
        function variableLengthDecodeInt32(s: any): number;
        function trimMiddle(s: string, maxLength: number): string;
        function multiple(s: string, count: number): string;
        function indexOfAny(s: string, chars: string[], position: number): number;
        function concat3(s0: any, s1: any, s2: any): string;
        function concat4(s0: any, s1: any, s2: any, s3: any): string;
        function concat5(s0: any, s1: any, s2: any, s3: any, s4: any): string;
        function concat6(s0: any, s1: any, s2: any, s3: any, s4: any, s5: any): string;
        function concat7(s0: any, s1: any, s2: any, s3: any, s4: any, s5: any, s6: any): string;
        function concat8(s0: any, s1: any, s2: any, s3: any, s4: any, s5: any, s6: any, s7: any): string;
        function concat9(s0: any, s1: any, s2: any, s3: any, s4: any, s5: any, s6: any, s7: any, s8: any): string;
    }
    module HashUtilities {
        function hashBytesTo32BitsMD5(data: Uint8Array, offset: number, length: number): number;
        function hashBytesTo32BitsAdler(data: Uint8Array, offset: number, length: number): number;
    }
    class Random {
        private static _state;
        static seed(seed: number): void;
        static next(): number;
    }
    interface IReferenceCountable {
        _referenceCount: number;
        _addReference(): any;
        _removeReference(): any;
    }
    class WeakList<T extends IReferenceCountable> {
        private _map;
        private _list;
        constructor();
        clear(): void;
        push(value: T): void;
        remove(value: T): void;
        forEach(callback: (value: T) => void): void;
        length: number;
    }
    module NumberUtilities {
        function pow2(exponent: number): number;
        function clamp(value: number, min: number, max: number): number;
        function roundHalfEven(value: number): number;
        function epsilonEquals(value: number, other: number): boolean;
    }
    enum Numbers {
        MaxU16 = 65535,
        MaxI16 = 32767,
        MinI16 = -32768,
    }
    module IntegerUtilities {
        var i8: Int8Array;
        var u8: Uint8Array;
        var i32: Int32Array;
        var f32: Float32Array;
        var f64: Float64Array;
        var nativeLittleEndian: boolean;
        function floatToInt32(v: number): number;
        function int32ToFloat(i: number): number;
        function swap16(i: number): number;
        function swap32(i: number): number;
        function toS8U8(v: number): number;
        function fromS8U8(i: number): number;
        function clampS8U8(v: number): number;
        function toS16(v: number): number;
        function bitCount(i: number): number;
        function ones(i: number): number;
        function trailingZeros(i: number): number;
        function getFlags(i: number, flags: string[]): string;
        function isPowerOfTwo(x: number): boolean;
        function roundToMultipleOfFour(x: number): number;
        function nearestPowerOfTwo(x: number): number;
        function roundToMultipleOfPowerOfTwo(i: number, powerOfTwo: number): number;
    }
    module GeometricUtilities {
        function pointInPolygon(x: number, y: number, polygon: Float32Array): boolean;
        function signedArea(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): number;
        function counterClockwise(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): boolean;
        function clockwise(x0: number, y0: number, x1: number, y1: number, x2: number, y2: number): boolean;
        function pointInPolygonInt32(x: number, y: number, polygon: Int32Array): boolean;
    }
    enum LogLevel {
        Error = 1,
        Warn = 2,
        Debug = 4,
        Log = 8,
        Info = 16,
        All = 31,
    }
    class IndentingWriter {
        static PURPLE: string;
        static YELLOW: string;
        static GREEN: string;
        static RED: string;
        static BOLD_RED: string;
        static ENDC: string;
        static logLevel: LogLevel;
        private static _consoleOut;
        private static _consoleOutNoNewline;
        private _tab;
        private _padding;
        private _suppressOutput;
        private _out;
        private _outNoNewline;
        constructor(suppressOutput?: boolean, out?: any);
        write(str?: string, writePadding?: boolean): void;
        writeLn(str?: string): void;
        writeObject(str?: string, object?: Object): void;
        writeTimeLn(str?: string): void;
        writeComment(str: string): void;
        writeLns(str: string): void;
        errorLn(str: string): void;
        warnLn(str: string): void;
        debugLn(str: string): void;
        logLn(str: string): void;
        infoLn(str: string): void;
        yellowLn(str: string): void;
        greenLn(str: string): void;
        boldRedLn(str: string): void;
        redLn(str: string): void;
        purpleLn(str: string): void;
        colorLn(color: string, str: string): void;
        redLns(str: string): void;
        colorLns(color: string, str: string): void;
        enter(str: string): void;
        leaveAndEnter(str: string): void;
        leave(str?: string): void;
        indent(): void;
        outdent(): void;
        writeArray(arr: any[], detailed?: boolean, noNumbers?: boolean): void;
    }
    class SortedList<T> {
        static RETURN: number;
        static DELETE: number;
        private _compare;
        private _head;
        private _length;
        constructor(compare: (l: T, r: T) => number);
        push(value: T): void;
        forEach(visitor: (value: T) => any): void;
        isEmpty(): boolean;
        pop(): T;
        contains(value: T): boolean;
        toString(): string;
    }
    class CircularBuffer {
        index: number;
        start: number;
        array: ArrayBufferView;
        _size: number;
        _mask: number;
        constructor(Type: any, sizeInBits?: number);
        get(i: any): any;
        forEachInReverse(visitor: any): void;
        write(value: any): void;
        isFull(): boolean;
        isEmpty(): boolean;
        reset(): void;
    }
    module BitSets {
        var ADDRESS_BITS_PER_WORD: number;
        var BITS_PER_WORD: number;
        var BIT_INDEX_MASK: number;
        interface BitSet {
            set: (i: any) => void;
            setAll: () => void;
            assign: (set: BitSet) => void;
            clear: (i: number) => void;
            get: (i: number) => boolean;
            clearAll: () => void;
            intersect: (other: BitSet) => void;
            subtract: (other: BitSet) => void;
            negate: () => void;
            forEach: (fn: any) => void;
            toArray: () => boolean[];
            equals: (other: BitSet) => boolean;
            contains: (other: BitSet) => boolean;
            isEmpty: () => boolean;
            clone: () => BitSet;
            recount: () => void;
            toString: (names: string[]) => string;
            toBitString: (on: string, off: string) => string;
        }
        class Uint32ArrayBitSet implements BitSet {
            size: number;
            bits: Uint32Array;
            count: number;
            dirty: number;
            length: number;
            constructor(length: number);
            recount(): void;
            set(i: any): void;
            setAll(): void;
            assign(set: any): void;
            clear(i: any): void;
            get(i: any): boolean;
            clearAll(): void;
            private _union(other);
            intersect(other: Uint32ArrayBitSet): void;
            subtract(other: Uint32ArrayBitSet): void;
            negate(): void;
            forEach(fn: any): void;
            toArray(): boolean[];
            equals(other: Uint32ArrayBitSet): boolean;
            contains(other: Uint32ArrayBitSet): boolean;
            toBitString: (on: string, off: string) => string;
            toString: (names: string[]) => string;
            isEmpty(): boolean;
            clone(): Uint32ArrayBitSet;
        }
        class Uint32BitSet implements BitSet {
            size: number;
            bits: number;
            count: number;
            dirty: number;
            singleWord: boolean;
            length: number;
            constructor(length: number);
            recount(): void;
            set(i: any): void;
            setAll(): void;
            assign(set: Uint32BitSet): void;
            clear(i: number): void;
            get(i: number): boolean;
            clearAll(): void;
            private _union(other);
            intersect(other: Uint32BitSet): void;
            subtract(other: Uint32BitSet): void;
            negate(): void;
            forEach(fn: any): void;
            toArray(): boolean[];
            equals(other: Uint32BitSet): boolean;
            contains(other: Uint32BitSet): boolean;
            toBitString: (on: string, off: string) => string;
            toString: (names: string[]) => string;
            isEmpty(): boolean;
            clone(): Uint32BitSet;
        }
        function BitSetFunctor(length: number): () => any;
    }
    class ColorStyle {
        static TabToolbar: string;
        static Toolbars: string;
        static HighlightBlue: string;
        static LightText: string;
        static ForegroundText: string;
        static Black: string;
        static VeryDark: string;
        static Dark: string;
        static Light: string;
        static Grey: string;
        static DarkGrey: string;
        static Blue: string;
        static Purple: string;
        static Pink: string;
        static Red: string;
        static Orange: string;
        static LightOrange: string;
        static Green: string;
        static BlueGrey: string;
        private static _randomStyleCache;
        private static _nextStyle;
        static randomStyle(): any;
        private static _gradient;
        static gradientColor(value: any): string;
        static contrastStyle(rgb: string): string;
        static reset(): void;
    }
    interface UntypedBounds {
        xMin: number;
        yMin: number;
        xMax: number;
        yMax: number;
    }
    interface ASRectangle {
        x: number;
        y: number;
        width: number;
        height: number;
    }
    class Bounds {
        xMin: number;
        yMin: number;
        xMax: number;
        yMax: number;
        constructor(xMin: number, yMin: number, xMax: number, yMax: number);
        static FromUntyped(source: UntypedBounds): Bounds;
        static FromRectangle(source: ASRectangle): Bounds;
        setElements(xMin: number, yMin: number, xMax: number, yMax: number): void;
        copyFrom(source: Bounds): void;
        contains(x: number, y: number): boolean;
        unionInPlace(other: Bounds): void;
        extendByPoint(x: number, y: number): void;
        extendByX(x: number): void;
        extendByY(y: number): void;
        intersects(toIntersect: Bounds): boolean;
        isEmpty(): boolean;
        width: number;
        height: number;
        getBaseWidth(angle: number): number;
        getBaseHeight(angle: number): number;
        setEmpty(): void;
        setToSentinels(): void;
        clone(): Bounds;
        toString(): string;
    }
    class DebugBounds {
        private _xMin;
        private _yMin;
        private _xMax;
        private _yMax;
        constructor(xMin: number, yMin: number, xMax: number, yMax: number);
        static FromUntyped(source: UntypedBounds): DebugBounds;
        static FromRectangle(source: ASRectangle): DebugBounds;
        setElements(xMin: number, yMin: number, xMax: number, yMax: number): void;
        copyFrom(source: DebugBounds): void;
        contains(x: number, y: number): boolean;
        unionInPlace(other: DebugBounds): void;
        extendByPoint(x: number, y: number): void;
        extendByX(x: number): void;
        extendByY(y: number): void;
        intersects(toIntersect: DebugBounds): boolean;
        isEmpty(): boolean;
        xMin: number;
        yMin: number;
        xMax: number;
        width: number;
        yMax: number;
        height: number;
        getBaseWidth(angle: number): number;
        getBaseHeight(angle: number): number;
        setEmpty(): void;
        clone(): DebugBounds;
        toString(): string;
        private assertValid();
    }
    class Color {
        r: number;
        g: number;
        b: number;
        a: number;
        constructor(r: number, g: number, b: number, a: number);
        static FromARGB(argb: number): Color;
        static FromRGBA(rgba: number): Color;
        toRGBA(): number;
        toCSSStyle(): string;
        set(other: Color): void;
        static Red: Color;
        static Green: Color;
        static Blue: Color;
        static None: Color;
        static White: Color;
        static Black: Color;
        private static colorCache;
        static randomColor(alpha?: number): Color;
        static parseColor(color: string): Color;
    }
    module ColorUtilities {
        function RGBAToARGB(rgba: number): number;
        function ARGBToRGBA(argb: number): number;
        function rgbaToCSSStyle(color: number): string;
        function cssStyleToRGBA(style: string): number;
        function hexToRGB(color: string): number;
        function rgbToHex(color: number): string;
        function isValidHexColor(value: any): boolean;
        function clampByte(value: number): number;
        function unpremultiplyARGB(pARGB: number): number;
        function premultiplyARGB(uARGB: number): number;
        function ensureUnpremultiplyTable(): void;
        function tableLookupUnpremultiplyARGB(pARGB: any): number;
        function blendPremultipliedBGRA(tpBGRA: number, spBGRA: number): number;
        function convertImage(sourceFormat: ImageType, targetFormat: ImageType, source: Int32Array, target: Int32Array): void;
    }
    class ArrayBufferPool {
        private _list;
        private _maxSize;
        private static _enabled;
        constructor(maxSize?: number);
        acquire(length: number): ArrayBuffer;
        release(buffer: ArrayBuffer): void;
        ensureUint8ArrayLength(array: Uint8Array, length: number): Uint8Array;
        ensureFloat64ArrayLength(array: Float64Array, length: number): Float64Array;
    }
    module Telemetry {
        enum Feature {
            EXTERNAL_INTERFACE_FEATURE = 1,
            CLIPBOARD_FEATURE = 2,
            SHAREDOBJECT_FEATURE = 3,
            VIDEO_FEATURE = 4,
            SOUND_FEATURE = 5,
            NETCONNECTION_FEATURE = 6,
        }
        enum ErrorTypes {
            AVM1_ERROR = 1,
            AVM2_ERROR = 2,
        }
        var instance: ITelemetryService;
    }
    interface ITelemetryService {
        reportTelemetry(data: any): any;
    }
    interface FileLoadingRequest {
        url: string;
        data: any;
    }
    interface FileLoadingProgress {
        bytesLoaded: number;
        bytesTotal: number;
    }
    interface FileLoadingSession {
        onopen?: () => void;
        onclose?: () => void;
        onprogress?: (data: any, progressStatus: FileLoadingProgress) => void;
        onhttpstatus?: (location: string, httpStatus: number, httpHeaders: any) => void;
        onerror?: (e: any) => void;
        open(request: FileLoadingRequest): any;
    }
    interface IFileLoadingService {
        createSession(): FileLoadingSession;
        setBaseUrl(url: string): any;
        resolveUrl(url: string): string;
        navigateTo(url: string, target: string): any;
    }
    module FileLoadingService {
        var instance: IFileLoadingService;
    }
    function registerCSSFont(id: number, buffer: ArrayBuffer, forceFontInit: boolean): void;
    interface IExternalInterfaceService {
        enabled: boolean;
        initJS(callback: (functionName: string, args: any[]) => any): any;
        registerCallback(functionName: string): any;
        unregisterCallback(functionName: string): any;
        eval(expression: any): any;
        call(request: any): any;
        getId(): string;
    }
    module ExternalInterfaceService {
        var instance: IExternalInterfaceService;
    }
    class ClipboardService {
        static instance: ClipboardService;
        setClipboard(data: string): void;
    }
    class Callback {
        private _queues;
        constructor();
        register(type: any, callback: any): void;
        unregister(type: string, callback: any): void;
        notify(type: string, args: any): void;
        notify1(type: string, value: any): void;
    }
    enum ImageType {
        None = 0,
        PremultipliedAlphaARGB = 1,
        StraightAlphaARGB = 2,
        StraightAlphaRGBA = 3,
        JPEG = 4,
        PNG = 5,
        GIF = 6,
    }
    function getMIMETypeForImageType(type: ImageType): string;
    module UI {
        function toCSSCursor(mouseCursor: number): string;
    }
    class PromiseWrapper<T> {
        promise: Promise<T>;
        resolve: (result: T) => void;
        reject: (reason: any) => void;
        then(onFulfilled: any, onRejected: any): Promise<{}>;
        constructor();
    }
}
declare var exports: any;
declare module Shumway.Options {
    class Argument {
        shortName: string;
        longName: string;
        type: any;
        options: any;
        positional: boolean;
        parseFn: any;
        value: any;
        constructor(shortName: any, longName: any, type: any, options: any);
        parse(value: any): void;
    }
    class ArgumentParser {
        args: any[];
        constructor();
        addArgument(shortName: any, longName: any, type: any, options: any): Argument;
        addBoundOption(option: any): void;
        addBoundOptionSet(optionSet: any): void;
        getUsage(): string;
        parse(args: any): any[];
    }
    class OptionSet {
        name: string;
        settings: any;
        options: any;
        open: boolean;
        constructor(name: string, settings?: any);
        register(option: any): any;
        trace(writer: any): void;
        getSettings(): {};
        setSettings(settings: any): void;
    }
    class Option {
        longName: string;
        shortName: string;
        type: string;
        defaultValue: any;
        value: any;
        description: string;
        config: any;
        ctrl: any;
        constructor(shortName: any, longName: any, type: any, defaultValue: any, description: any, config?: any);
        parse(value: any): void;
        trace(writer: any): void;
    }
}
declare module Shumway.Settings {
    var ROOT: string;
    var shumwayOptions: Options.OptionSet;
    function isStorageSupported(): boolean;
    function load(key?: string): any;
    function save(settings?: any, key?: string): void;
    function setSettings(settings: any): void;
    function getSettings(settings: any): {};
}
declare module Shumway.Metrics {
    class Timer {
        private static _base;
        private static _top;
        private static _flat;
        private static _flatStack;
        private _parent;
        private _name;
        private _begin;
        private _last;
        private _total;
        private _count;
        private _timers;
        constructor(parent: Timer, name: string);
        static time(name: any, fn: Function): void;
        static start(name: any): void;
        static stop(): void;
        static stopStart(name: any): void;
        start(): void;
        stop(): void;
        toJSON(): {
            name: string;
            total: number;
            timers: Map<Timer>;
        };
        trace(writer: IndentingWriter): void;
        static trace(writer: IndentingWriter): void;
    }
    class Counter {
        static instance: Counter;
        private _enabled;
        private _counts;
        private _times;
        counts: Map<number>;
        constructor(enabled: boolean);
        setEnabled(enabled: boolean): void;
        clear(): void;
        toJSON(): {
            counts: Map<number>;
            times: Map<number>;
        };
        count(name: string, increment?: number, time?: number): number;
        trace(writer: IndentingWriter): void;
        private _pairToString(times, pair);
        toStringSorted(): string;
        traceSorted(writer: IndentingWriter, inline?: boolean): void;
    }
    class Average {
        private _samples;
        private _count;
        private _index;
        constructor(max: any);
        push(sample: number): void;
        average(): number;
    }
}
declare module Shumway.ArrayUtilities {
    class Inflate {
        onData: (buffer: Uint8Array) => void;
        _error: any;
        error: any;
        constructor(verifyHeader: boolean);
        push(data: Uint8Array): void;
        close(): void;
        static create(verifyHeader: boolean): Inflate;
        _processZLibHeader(buffer: Uint8Array, start: number, end: number): number;
        static inflate(data: Uint8Array, expectedLength: number, zlibHeader: boolean): Uint8Array;
    }
    class Adler32 {
        private a;
        private b;
        constructor();
        update(data: Uint8Array, start: number, end: number): void;
        getChecksum(): number;
    }
    class Deflate {
        onData: (data: Uint8Array) => void;
        private _writeZlibHeader;
        private _state;
        private _adler32;
        constructor(writeZlibHeader: boolean);
        push(data: Uint8Array): void;
        finish(): void;
    }
}
declare module Shumway.ArrayUtilities {
    interface IDataInput {
        readBytes: (bytes: DataBuffer, offset?: number, length?: number) => void;
        readBoolean: () => boolean;
        readByte: () => number;
        readUnsignedByte: () => number;
        readShort: () => number;
        readUnsignedShort: () => number;
        readInt: () => number;
        readUnsignedInt: () => number;
        readFloat: () => number;
        readDouble: () => number;
        readMultiByte: (length: number, charSet: string) => string;
        readUTF: () => string;
        readUTFBytes: (length: number) => string;
        bytesAvailable: number;
        objectEncoding: number;
        endian: string;
    }
    interface IDataOutput {
        writeBytes: (bytes: DataBuffer, offset?: number, length?: number) => void;
        writeBoolean: (value: boolean) => void;
        writeByte: (value: number) => void;
        writeShort: (value: number) => void;
        writeInt: (value: number) => void;
        writeUnsignedInt: (value: number) => void;
        writeFloat: (value: number) => void;
        writeDouble: (value: number) => void;
        writeMultiByte: (value: string, charSet: string) => void;
        writeUTF: (value: string) => void;
        writeUTFBytes: (value: string) => void;
        objectEncoding: number;
        endian: string;
    }
    class PlainObjectDataBuffer {
        buffer: ArrayBuffer;
        length: number;
        littleEndian: boolean;
        constructor(buffer: ArrayBuffer, length: number, littleEndian: boolean);
    }
    class DataBuffer implements IDataInput, IDataOutput {
        private static _nativeLittleEndian;
        private static INITIAL_SIZE;
        private _buffer;
        private _length;
        private _position;
        private _littleEndian;
        private _objectEncoding;
        private _u8;
        private _i32;
        private _f32;
        private _bitBuffer;
        private _bitLength;
        private static _arrayBufferPool;
        constructor(initialSize?: number);
        static FromArrayBuffer(buffer: ArrayBuffer, length?: number): DataBuffer;
        static FromPlainObject(source: PlainObjectDataBuffer): DataBuffer;
        toPlainObject(): PlainObjectDataBuffer;
        private _resetViews();
        private _requestViews(flags);
        getBytes(): Uint8Array;
        private _ensureCapacity(length);
        clear(): void;
        readBoolean(): boolean;
        readByte(): number;
        readUnsignedByte(): number;
        readBytes(bytes: DataBuffer, offset?: number, length?: number): void;
        readShort(): number;
        readUnsignedShort(): number;
        readInt(): number;
        readUnsignedInt(): number;
        readFloat(): number;
        readDouble(): number;
        writeBoolean(value: boolean): void;
        writeByte(value: number): void;
        writeUnsignedByte(value: number): void;
        writeRawBytes(bytes: Uint8Array): void;
        writeBytes(bytes: DataBuffer, offset?: number, length?: number): void;
        writeShort(value: number): void;
        writeUnsignedShort(value: number): void;
        writeInt(value: number): void;
        write2Ints(a: number, b: number): void;
        write4Ints(a: number, b: number, c: number, d: number): void;
        writeUnsignedInt(value: number): void;
        write2UnsignedInts(a: number, b: number): void;
        write4UnsignedInts(a: number, b: number, c: number, d: number): void;
        writeFloat(value: number): void;
        write6Floats(a: number, b: number, c: number, d: number, e: number, f: number): void;
        writeDouble(value: number): void;
        readRawBytes(): Int8Array;
        writeUTF(value: string): void;
        writeUTFBytes(value: string): void;
        readUTF(): string;
        readUTFBytes(length: number): string;
        length: number;
        bytesAvailable: number;
        position: number;
        buffer: ArrayBuffer;
        bytes: Uint8Array;
        ints: Int32Array;
        objectEncoding: number;
        endian: string;
        toString(): string;
        toBlob(type: string): Blob;
        writeMultiByte(value: string, charSet: string): void;
        readMultiByte(length: number, charSet: string): string;
        getValue(name: number): any;
        setValue(name: number, value: any): void;
        readFixed(): number;
        readFixed8(): number;
        readFloat16(): number;
        readEncodedU32(): number;
        readBits(size: number): number;
        readUnsignedBits(size: number): number;
        readFixedBits(size: number): number;
        readString(length?: number): string;
        align(): void;
        private _compress(algorithm);
        private _uncompress(algorithm);
    }
}
declare module Shumway {
    import DataBuffer = Shumway.ArrayUtilities.DataBuffer;
    enum PathCommand {
        BeginSolidFill = 1,
        BeginGradientFill = 2,
        BeginBitmapFill = 3,
        EndFill = 4,
        LineStyleSolid = 5,
        LineStyleGradient = 6,
        LineStyleBitmap = 7,
        LineEnd = 8,
        MoveTo = 9,
        LineTo = 10,
        CurveTo = 11,
        CubicCurveTo = 12,
    }
    enum GradientType {
        Linear = 16,
        Radial = 18,
    }
    enum GradientSpreadMethod {
        Pad = 0,
        Reflect = 1,
        Repeat = 2,
    }
    enum GradientInterpolationMethod {
        RGB = 0,
        LinearRGB = 1,
    }
    enum LineScaleMode {
        None = 0,
        Normal = 1,
        Vertical = 2,
        Horizontal = 3,
    }
    interface ShapeMatrix {
        a: number;
        b: number;
        c: number;
        d: number;
        tx: number;
        ty: number;
    }
    class PlainObjectShapeData {
        commands: Uint8Array;
        commandsPosition: number;
        coordinates: Int32Array;
        morphCoordinates: Int32Array;
        coordinatesPosition: number;
        styles: ArrayBuffer;
        stylesLength: number;
        morphStyles: ArrayBuffer;
        morphStylesLength: number;
        hasFills: boolean;
        hasLines: boolean;
        constructor(commands: Uint8Array, commandsPosition: number, coordinates: Int32Array, morphCoordinates: Int32Array, coordinatesPosition: number, styles: ArrayBuffer, stylesLength: number, morphStyles: ArrayBuffer, morphStylesLength: number, hasFills: boolean, hasLines: boolean);
    }
    class ShapeData {
        commands: Uint8Array;
        commandsPosition: number;
        coordinates: Int32Array;
        morphCoordinates: Int32Array;
        coordinatesPosition: number;
        styles: DataBuffer;
        morphStyles: DataBuffer;
        hasFills: boolean;
        hasLines: boolean;
        constructor(initialize?: boolean);
        static FromPlainObject(source: PlainObjectShapeData): ShapeData;
        moveTo(x: number, y: number): void;
        lineTo(x: number, y: number): void;
        curveTo(controlX: number, controlY: number, anchorX: number, anchorY: number): void;
        cubicCurveTo(controlX1: number, controlY1: number, controlX2: number, controlY2: number, anchorX: number, anchorY: number): void;
        beginFill(color: number): void;
        writeMorphFill(color: number): void;
        endFill(): void;
        endLine(): void;
        lineStyle(thickness: number, color: number, pixelHinting: boolean, scaleMode: LineScaleMode, caps: number, joints: number, miterLimit: number): void;
        writeMorphLineStyle(thickness: number, color: number): void;
        beginBitmap(pathCommand: PathCommand, bitmapId: number, matrix: ShapeMatrix, repeat: boolean, smooth: boolean): void;
        writeMorphBitmap(matrix: ShapeMatrix): void;
        beginGradient(pathCommand: PathCommand, colors: number[], ratios: number[], gradientType: number, matrix: ShapeMatrix, spread: number, interpolation: number, focalPointRatio: number): void;
        writeMorphGradient(colors: number[], ratios: number[], matrix: ShapeMatrix): void;
        writeCommandAndCoordinates(command: PathCommand, x: number, y: number): void;
        writeCoordinates(x: number, y: number): void;
        writeMorphCoordinates(x: number, y: number): void;
        clear(): void;
        isEmpty(): boolean;
        clone(): ShapeData;
        toPlainObject(): PlainObjectShapeData;
        buffers: ArrayBuffer[];
        private _writeStyleMatrix(matrix, isMorph);
        private ensurePathCapacities(numCommands, numCoordinates);
    }
}
declare module Shumway.SWF.Parser {
    enum SwfTag {
        CODE_END = 0,
        CODE_SHOW_FRAME = 1,
        CODE_DEFINE_SHAPE = 2,
        CODE_FREE_CHARACTER = 3,
        CODE_PLACE_OBJECT = 4,
        CODE_REMOVE_OBJECT = 5,
        CODE_DEFINE_BITS = 6,
        CODE_DEFINE_BUTTON = 7,
        CODE_JPEG_TABLES = 8,
        CODE_SET_BACKGROUND_COLOR = 9,
        CODE_DEFINE_FONT = 10,
        CODE_DEFINE_TEXT = 11,
        CODE_DO_ACTION = 12,
        CODE_DEFINE_FONT_INFO = 13,
        CODE_DEFINE_SOUND = 14,
        CODE_START_SOUND = 15,
        CODE_STOP_SOUND = 16,
        CODE_DEFINE_BUTTON_SOUND = 17,
        CODE_SOUND_STREAM_HEAD = 18,
        CODE_SOUND_STREAM_BLOCK = 19,
        CODE_DEFINE_BITS_LOSSLESS = 20,
        CODE_DEFINE_BITS_JPEG2 = 21,
        CODE_DEFINE_SHAPE2 = 22,
        CODE_DEFINE_BUTTON_CXFORM = 23,
        CODE_PROTECT = 24,
        CODE_PATHS_ARE_POSTSCRIPT = 25,
        CODE_PLACE_OBJECT2 = 26,
        CODE_REMOVE_OBJECT2 = 28,
        CODE_SYNC_FRAME = 29,
        CODE_FREE_ALL = 31,
        CODE_DEFINE_SHAPE3 = 32,
        CODE_DEFINE_TEXT2 = 33,
        CODE_DEFINE_BUTTON2 = 34,
        CODE_DEFINE_BITS_JPEG3 = 35,
        CODE_DEFINE_BITS_LOSSLESS2 = 36,
        CODE_DEFINE_EDIT_TEXT = 37,
        CODE_DEFINE_VIDEO = 38,
        CODE_DEFINE_SPRITE = 39,
        CODE_NAME_CHARACTER = 40,
        CODE_PRODUCT_INFO = 41,
        CODE_DEFINE_TEXT_FORMAT = 42,
        CODE_FRAME_LABEL = 43,
        CODE_DEFINE_BEHAVIOUR = 44,
        CODE_SOUND_STREAM_HEAD2 = 45,
        CODE_DEFINE_MORPH_SHAPE = 46,
        CODE_GENERATE_FRAME = 47,
        CODE_DEFINE_FONT2 = 48,
        CODE_GEN_COMMAND = 49,
        CODE_DEFINE_COMMAND_OBJECT = 50,
        CODE_CHARACTER_SET = 51,
        CODE_EXTERNAL_FONT = 52,
        CODE_DEFINE_FUNCTION = 53,
        CODE_PLACE_FUNCTION = 54,
        CODE_GEN_TAG_OBJECTS = 55,
        CODE_EXPORT_ASSETS = 56,
        CODE_IMPORT_ASSETS = 57,
        CODE_ENABLE_DEBUGGER = 58,
        CODE_DO_INIT_ACTION = 59,
        CODE_DEFINE_VIDEO_STREAM = 60,
        CODE_VIDEO_FRAME = 61,
        CODE_DEFINE_FONT_INFO2 = 62,
        CODE_DEBUG_ID = 63,
        CODE_ENABLE_DEBUGGER2 = 64,
        CODE_SCRIPT_LIMITS = 65,
        CODE_SET_TAB_INDEX = 66,
        CODE_FILE_ATTRIBUTES = 69,
        CODE_PLACE_OBJECT3 = 70,
        CODE_IMPORT_ASSETS2 = 71,
        CODE_DO_ABC_DEFINE = 72,
        CODE_DEFINE_FONT_ALIGN_ZONES = 73,
        CODE_CSM_TEXT_SETTINGS = 74,
        CODE_DEFINE_FONT3 = 75,
        CODE_SYMBOL_CLASS = 76,
        CODE_METADATA = 77,
        CODE_DEFINE_SCALING_GRID = 78,
        CODE_DO_ABC = 82,
        CODE_DEFINE_SHAPE4 = 83,
        CODE_DEFINE_MORPH_SHAPE2 = 84,
        CODE_DEFINE_SCENE_AND_FRAME_LABEL_DATA = 86,
        CODE_DEFINE_BINARY_DATA = 87,
        CODE_DEFINE_FONT_NAME = 88,
        CODE_START_SOUND2 = 89,
        CODE_DEFINE_BITS_JPEG4 = 90,
        CODE_DEFINE_FONT4 = 91,
    }
    enum DefinitionTags {
        CODE_DEFINE_SHAPE = 2,
        CODE_DEFINE_BITS = 6,
        CODE_DEFINE_BUTTON = 7,
        CODE_DEFINE_FONT = 10,
        CODE_DEFINE_TEXT = 11,
        CODE_DEFINE_SOUND = 14,
        CODE_DEFINE_BITS_LOSSLESS = 20,
        CODE_DEFINE_BITS_JPEG2 = 21,
        CODE_DEFINE_SHAPE2 = 22,
        CODE_DEFINE_SHAPE3 = 32,
        CODE_DEFINE_TEXT2 = 33,
        CODE_DEFINE_BUTTON2 = 34,
        CODE_DEFINE_BITS_JPEG3 = 35,
        CODE_DEFINE_BITS_LOSSLESS2 = 36,
        CODE_DEFINE_EDIT_TEXT = 37,
        CODE_DEFINE_SPRITE = 39,
        CODE_DEFINE_MORPH_SHAPE = 46,
        CODE_DEFINE_FONT2 = 48,
        CODE_DEFINE_VIDEO_STREAM = 60,
        CODE_DEFINE_FONT3 = 75,
        CODE_DEFINE_SHAPE4 = 83,
        CODE_DEFINE_MORPH_SHAPE2 = 84,
        CODE_DEFINE_BINARY_DATA = 87,
        CODE_DEFINE_BITS_JPEG4 = 90,
        CODE_DEFINE_FONT4 = 91,
    }
    enum ImageDefinitionTags {
        CODE_DEFINE_BITS = 6,
        CODE_DEFINE_BITS_JPEG2 = 21,
        CODE_DEFINE_BITS_JPEG3 = 35,
        CODE_DEFINE_BITS_JPEG4 = 90,
    }
    enum FontDefinitionTags {
        CODE_DEFINE_FONT = 10,
        CODE_DEFINE_FONT2 = 48,
        CODE_DEFINE_FONT3 = 75,
        CODE_DEFINE_FONT4 = 91,
    }
    enum ControlTags {
        CODE_PLACE_OBJECT = 4,
        CODE_PLACE_OBJECT2 = 26,
        CODE_PLACE_OBJECT3 = 70,
        CODE_REMOVE_OBJECT = 5,
        CODE_REMOVE_OBJECT2 = 28,
        CODE_START_SOUND = 15,
        CODE_START_SOUND2 = 89,
        CODE_VIDEO_FRAME = 61,
    }
    enum PlaceObjectFlags {
        Move = 1,
        HasCharacter = 2,
        HasMatrix = 4,
        HasColorTransform = 8,
        HasRatio = 16,
        HasName = 32,
        HasClipDepth = 64,
        HasClipActions = 128,
        HasFilterList = 256,
        HasBlendMode = 512,
        HasCacheAsBitmap = 1024,
        HasClassName = 2048,
        HasImage = 4096,
        HasVisible = 8192,
        OpaqueBackground = 16384,
        Reserved = 32768,
    }
    enum AVM1ClipEvents {
        Load = 1,
        EnterFrame = 2,
        Unload = 4,
        MouseMove = 8,
        MouseDown = 16,
        MouseUp = 32,
        KeyDown = 64,
        KeyUp = 128,
        Data = 256,
        Initialize = 512,
        Press = 1024,
        Release = 2048,
        ReleaseOutside = 4096,
        RollOver = 8192,
        RollOut = 16384,
        DragOver = 32768,
        DragOut = 65536,
        KeyPress = 131072,
        Construct = 262144,
    }
}
declare module Shumway {
    interface BinaryFileReaderProgressInfo {
        loaded: number;
        total: number;
    }
    class BinaryFileReader {
        url: string;
        method: string;
        mimeType: string;
        data: any;
        constructor(url: string, method?: string, mimeType?: string, data?: any);
        readAll(progress: (response: any, loaded: number, total: number) => void, complete: (response: any, error?: any) => void): void;
        readChunked(chunkSize: number, ondata: (data: Uint8Array, progress: BinaryFileReaderProgressInfo) => void, onerror: (err: any) => void, onopen?: () => void, oncomplete?: () => void, onhttpstatus?: (location: string, status: string, responseHeaders: any) => void): void;
        readAsync(ondata: (data: Uint8Array, progress: BinaryFileReaderProgressInfo) => void, onerror: (err: any) => void, onopen?: () => void, oncomplete?: () => void, onhttpstatus?: (location: string, status: string, responseHeaders: any) => void): void;
    }
}
declare module Shumway.Remoting {
    interface IRemotable {
        _id: number;
    }
    enum RemotingPhase {
        Objects = 0,
        References = 1,
    }
    enum MessageBits {
        HasMatrix = 1,
        HasBounds = 2,
        HasChildren = 4,
        HasColorTransform = 8,
        HasClipRect = 16,
        HasMiscellaneousProperties = 32,
        HasMask = 64,
        HasClip = 128,
    }
    enum IDMask {
        None = 0,
        Asset = 134217728,
    }
    enum MessageTag {
        EOF = 0,
        UpdateFrame = 100,
        UpdateGraphics = 101,
        UpdateBitmapData = 102,
        UpdateTextContent = 103,
        UpdateStage = 104,
        UpdateNetStream = 105,
        RequestBitmapData = 106,
        DrawToBitmap = 200,
        MouseEvent = 300,
        KeyboardEvent = 301,
        FocusEvent = 302,
    }
    enum FilterType {
        Blur = 0,
        DropShadow = 1,
    }
    enum ColorTransformEncoding {
        Identity = 0,
        AlphaMultiplierOnly = 1,
        All = 2,
    }
    enum VideoPlaybackEvent {
        Initialized = 0,
        PlayStart = 1,
        PlayStop = 2,
        BufferFull = 3,
        Progress = 4,
        BufferEmpty = 5,
        Error = 6,
        Metadata = 7,
        Seeking = 8,
    }
    enum VideoControlEvent {
        Init = 1,
        Pause = 2,
        Seek = 3,
        GetTime = 4,
        GetBufferLength = 5,
        SetSoundLevels = 6,
        GetBytesLoaded = 7,
        GetBytesTotal = 8,
    }
    enum StageScaleMode {
        ShowAll = 0,
        ExactFit = 1,
        NoBorder = 2,
        NoScale = 4,
    }
    enum StageAlignFlags {
        None = 0,
        Top = 1,
        Bottom = 2,
        Left = 4,
        Right = 8,
        TopLeft,
        BottomLeft,
        BottomRight,
        TopRight,
    }
    var MouseEventNames: string[];
    var KeyboardEventNames: string[];
    enum KeyboardEventFlags {
        CtrlKey = 1,
        AltKey = 2,
        ShiftKey = 4,
    }
    enum FocusEventType {
        DocumentHidden = 0,
        DocumentVisible = 1,
        WindowBlur = 2,
        WindowFocus = 3,
    }
    interface DisplayParameters {
        stageWidth: number;
        stageHeight: number;
        pixelRatio: number;
        screenWidth: number;
        screenHeight: number;
    }
}
declare var throwError: (className: string, error: any, replacement1?: any, replacement2?: any, replacement3?: any, replacement4?: any) => void;
declare var Errors: any;