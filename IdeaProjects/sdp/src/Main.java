public class Main {
    public static void main(String[] args) {
        // Создание машины с помощью паттерна Builder и Fluent API (цепочки вызовов)
        Car sportsCar = new CarBuilder()
                .setCarType(CarType.SPORTS_CAR)
                .setSeats(2)
                .setEngine("V8 Sport Engine")
                .setTripComputer(true)
                .setGpsNavigator(true)
                .build();

        System.out.println("Sports Car created successfully:");
        System.out.println(sportsCar);

        System.out.println("-----------------------------------");

        Car suvCar = new CarBuilder()
                .setCarType(CarType.SUV)
                .setSeats(5)
                .setEngine("V6 Diesel Engine")
                .setTripComputer(true)
                .setGpsNavigator(false)
                .build();

        System.out.println("SUV Car created successfully:");
        System.out.println(suvCar);
    }
}