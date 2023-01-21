export class Utils {
    public static clone(object) {
        return JSON.parse(JSON.stringify(object));
    }
    public static isValidLength(field,wantedLength){
        return field.length<=wantedLength;
    }
    public static empty(str){
        return !str || !/[^\s]+/.test(str);
    }
}
