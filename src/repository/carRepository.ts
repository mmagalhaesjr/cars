import prisma from "../config/database.js"
import { cars } from "@prisma/client";

async function getCars(): Promise<cars[]> {

  return await prisma.cars.findMany()
}

async function getCar(id: number):Promise<cars | null> {

  return await prisma.cars.findUnique({
    where: {
      "id": id
    }
  })
}

async function getCarWithLicensePlate(licensePlate: string): Promise<cars | null> {

  return await prisma.cars.findUnique({
    where: {
      "licensePlate": licensePlate
    }
  })
}

async function createCar(model: string, licensePlate: string, year: number, color: string): Promise<cars> {

  return await prisma.cars.create({
    data: {
      "model": model,
      "licensePlate": licensePlate,
      "year": year,
      "color": color
    }
  })
}

async function deleteCar(id: number): Promise<cars> {

  return await prisma.cars.delete({
    where: {
      "id": id
    }
  })
}

const carRepository = {
  getCar,
  getCarWithLicensePlate,
  getCars,
  createCar,
  deleteCar
}

export default carRepository;