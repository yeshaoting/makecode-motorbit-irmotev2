
EM_IR.OnPressEvent(function (message) {
    if (message == EM_RemoteButton.EM_A) {
        // A键亮红灯
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Red)
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Red)
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Red)
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Red)
    } else if (message == EM_RemoteButton.EM_B) {
        // B键亮绿灯
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Green)
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Green)
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Green)
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Green)
    } else if (message == EM_RemoteButton.EM_C) {
        // C键亮蓝灯
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Blue)
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Blue)
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Blue)
        motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Blue)
    } else if (message == EM_RemoteButton.EM_D) {
        // D键关掉所有灯
        motorbit.close_all_the_on_board_lights()
    } else if (message == EM_RemoteButton.EM_Down) {
        // 按DOWN键 车后退
        motorbit.MotorRun(motorbit.Motors.M1, -255)
        motorbit.MotorRun(motorbit.Motors.M2, -255)
        motorbit.MotorRun(motorbit.Motors.M3, 255)
        motorbit.MotorRun(motorbit.Motors.M4, 255)
    } else if (message == EM_RemoteButton.EM_Ok) {
        // OK 键 停止
        motorbit.MotorStopAll()
    } else if (message == EM_RemoteButton.EM_UP) {
        // 按UP 车向前
        motorbit.MotorRun(motorbit.Motors.M1, 255)
        motorbit.MotorRun(motorbit.Motors.M2, 255)
        motorbit.MotorRun(motorbit.Motors.M3, -255)
        motorbit.MotorRun(motorbit.Motors.M4, -255)
    } else if (message == EM_RemoteButton.EM_Right) {
        // 按RIGHT键 车向右转
        motorbit.MotorRun(motorbit.Motors.M1, 255)
        motorbit.MotorRun(motorbit.Motors.M2, 255)
        motorbit.MotorRun(motorbit.Motors.M3, -80)
        motorbit.MotorRun(motorbit.Motors.M4, -80)
    } else if (message == EM_RemoteButton.EM_Left) {
        // 按LEFT键 车向左转
        motorbit.MotorRun(motorbit.Motors.M1, 80)
        motorbit.MotorRun(motorbit.Motors.M2, 80)
        motorbit.MotorRun(motorbit.Motors.M4, -255)
        motorbit.MotorRun(motorbit.Motors.M3, -255)
    } else if (message == EM_RemoteButton.EM_NUM6) {
        // 按6 向右平移
        motorbit.MotorRun(motorbit.Motors.M1, 255)
        motorbit.MotorRun(motorbit.Motors.M2, -255)
        motorbit.MotorRun(motorbit.Motors.M3, -255)
        motorbit.MotorRun(motorbit.Motors.M4, 255)
    } else if (message == EM_RemoteButton.EM_NUM4) {
        // 按4 向左平移
        motorbit.MotorRun(motorbit.Motors.M1, -255)
        motorbit.MotorRun(motorbit.Motors.M2, 255)
        motorbit.MotorRun(motorbit.Motors.M3, 255)
        motorbit.MotorRun(motorbit.Motors.M4, -255)
    } else if (message == EM_RemoteButton.EM_NUM1) {
        // 按1 流水灯
        for (let index = 0; index < 3; index++) {
            motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Red)
            basic.pause(50)
            motorbit.close_the_on_board_lights(Offset.ONE)
            motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Orange)
            basic.pause(50)
            motorbit.close_the_on_board_lights(Offset.ONE)
            motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Orange)
            basic.pause(50)
            motorbit.close_the_on_board_lights(Offset.ONE)
            motorbit.Setting_the_on_board_lights(Offset.ONE, RgbColors.Green)
            basic.pause(50)
            motorbit.close_the_on_board_lights(Offset.ONE)
            basic.pause(50)
        }
    }
})
EM_IR.IrRemote_init(IrPins.P5)
basic.showIcon(IconNames.Heart)
