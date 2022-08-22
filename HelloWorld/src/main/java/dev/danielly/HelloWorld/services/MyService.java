package dev.danielly.HelloWorld.services;

import dev.danielly.HelloWorld.models.Device;

import java.util.List;

public interface MyService
{
    Device save(Device device);
    Device getDeviceByMac(String macAddress);
    List<Device> getAllDevices();
}
