// Add your code here

//% weight=10 color=#008B00 icon="\uf136" block="matest"
namespace matest {

    export enum aMotors {
        //% blockId="M1" block="M1"
        M1 = 0,
        //% blockId="M2" block="M2"
        M2 = 1,
        //% blockId="All" block="All"
        All = 2
    }

    export enum aServos {
        //% blockId="S1" block="S1"
        S1 = 0,
        //% blockId="S2" block="S2"
        S2 = 1
    }

    export enum Dir {
        //% blockId="CW" block="CW"
        CW = 0x0,
        //% blockId="CCW" block="CCW"
        CCW = 0x1
    }

    export enum Patrol {
        //% blockId="PatrolLeft" block="PatrolLeft"
        PatrolLeft = 13,
        //% blockId="PatrolRight" block="PatrolRight"
        PatrolRight = 14
    }

    export enum LED {
        //% blockId="LEDLeft" block="LEDLeft"
        LEDLeft = 8,
        //% blockId="LEDRight" block="LEDRight"
        LEDRight = 12
    }

    export enum LEDswitch {
        //% blockId="turnOn" block="turnOn"
        turnOn = 0x01,
        //% blockId="turnOff" block="turnOff"
        turnOff = 0x00
    }
    
    //% weight=90
    //% blockId=motor_MotorRun block="MotorX|%index|dir|%Dir|speed|%speed"
    //% speed.min=0 speed.max=255
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    export function MotorRun(index: aMotors, direction: Dir, speed: number): void {


    }

    //% weight=10
    //% blockId=motor_MotorRun2 block="Motor2|%index|dir|%Dir|speed|%speed"
    //% speed.min=0 speed.max=255
    //% index.fieldEditor="gridpicker" index.fieldOptions.columns=2
    //% direction.fieldEditor="gridpicker" direction.fieldOptions.columns=2
    export function MotorRun2(index: aMotors, direction: Dir, speed: number): void {


    }
}