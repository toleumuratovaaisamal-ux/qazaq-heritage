public class CarBuilder implements Builder {
    private CarType carType;
    private int seats;
    private String engine;
    private boolean gpsNavigator;
    private boolean tripComputer;

    @Override
    public Builder setCarType(CarType carType) {
        this.carType = carType;
        return this;
    }

    @Override
    public Builder setSeats(int seats) {
        if (seats <= 0) {
            throw new IllegalArgumentException("Number of seats must be greater than 0");
        }
        this.seats = seats;
        return this;
    }

    @Override
    public Builder setEngine(String engine) {
        if (engine == null || engine.trim().isEmpty()) {
            throw new IllegalArgumentException("Engine cannot be null or empty");
        }
        this.engine = engine;
        return this;
    }

    @Override
    public Builder setGpsNavigator(boolean gpsNavigator) {
        this.gpsNavigator = gpsNavigator;
        return this;
    }

    @Override
    public Builder setTripComputer(boolean tripComputer) {
        this.tripComputer = tripComputer;
        return this;
    }

    public Car build() {
        // Валидация состояния перед сборкой (Clean Code)
        if (carType == null || engine == null) {
            throw new IllegalStateException("Cannot build Car: CarType and Engine must be specified.");
        }
        return new Car(carType, seats, engine, gpsNavigator, tripComputer);
    }
}