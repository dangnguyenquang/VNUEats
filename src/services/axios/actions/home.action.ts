"use server"

import { server } from "@/services/axios"
import { FoodData } from "@/types/api/home"
import homeEndpoint from "../endpoints/home.endpoint"

export async function getHome(): Promise<FoodData> {
    try {
        const res = await server(homeEndpoint.gethome)

        return res
    } catch (error) {
        throw new Error("Đã có lỗi xảy ra")
    }
}
