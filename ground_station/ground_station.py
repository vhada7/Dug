from pymavlink import mavutil


RADIO = mavutil.mavlink_connection('COM3', baud=57600)


msg = RADIO.mav.manual_control_encode(RADIO.target_system, 0, 0, 0, 0, 0)