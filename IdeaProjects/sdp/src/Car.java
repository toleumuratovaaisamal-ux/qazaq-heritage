public class Car {
    private final CarType carType;
    private final int seats;
    private final String engine;
    private final boolean gpsNavigator;
    private final boolean tripComputer;

    public Car(CarType carType, int seats, String engine, boolean gpsNavigator, boolean tripComputer) {
        this.carType = carType;
        this.seats = seats;
        this.engine = engine;
        this.gpsNavigator = gpsNavigator;
        this.tripComputer = tripComputer;
    }

    public CarType getCarType() { return carType; }
    public int getSeats() { return seats; }
    public String getEngine() { return engine; }
    public boolean hasGpsNavigator() { return gpsNavigator; }
    public boolean hasTripComputer() { return tripComputer; }

    @Override
    public String toString() {
        return "Car{" +
                "carType=" + carType +
                ", seats=" + seats +
                ", engine='" + engine + '\'' +
                ", gpsNavigator=" + gpsNavigator +
                ", tripComputer=" + tripComputer +
                '}';
    }
}