class Car {

    constructor(license, driver){
        this.id;
        this.license = license;
        this.driver = driver;
        this.passengers;
    }

    printDataCar(){
        console.log(this.license)
        console.log(this.driver)
    }
}


export {Car};