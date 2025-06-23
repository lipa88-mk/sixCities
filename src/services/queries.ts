import { useMutation, useQuery } from "@tanstack/react-query";
import { api } from "../store";
import { Offer } from "../types/types";
import { ApiRoute, HttpCode } from "../const";
import { AxiosError } from "axios";
import { queryClient } from "..";

export const useFetchOffers = () => {
  return useQuery({
    queryKey: ["offers"],
    queryFn: async () => {
      try {
        const response = await api.get<Offer[]>(ApiRoute.Offers);
        return response.data;
      } catch (error) {
        const axiosError = error as Error;
        console.error('Error fetching offers:', axiosError.message);
        throw axiosError;
      }
    }
  })
}

export const useFetchProperty = (offerId: string | undefined) => {
  return useQuery({
      queryKey: ["propertyData",offerId],
      queryFn: async () => {
        try {
          const response = await api.get<Offer>(
            `${ApiRoute.Offers}/${offerId}`
          );
          return response.data;
        } catch (error) {
          const axiosError = error as AxiosError;
          if (axiosError.response?.status === HttpCode.NotFound) {
            // ToDo: Handle not found error
            throw new Error('Offer not found.');
          }
          throw error;
        }
      },
      enabled: !!offerId,
    });
}

export const useUpdateFavorites = (id: number) => {
return useMutation<Offer, unknown, number>({
    mutationFn: async (status: number) => {
      const { data } = await api.post<Offer>(
        `${ApiRoute.Favorites}/${id}/${status}`,
        status
      );
      return data;
    },
    onSuccess: (data) => {
      console.log("Bookmark updated successfully:", data);
      queryClient.invalidateQueries({ queryKey: ["propertyData"] });
      queryClient.invalidateQueries({ queryKey: ["offers"] });
      queryClient.invalidateQueries({ queryKey: ["favorites"] });
    },
  });
};

export const useFetchFavorites = () => {
  return useQuery({
      queryKey: ["favorites"],
      queryFn: async () => {
        try {
          const response = await api.get<Offer[]>(ApiRoute.Favorites);
          return response.data;
        } catch (error) {
          const axiosError = error as Error;
          console.error('Error fetching favorites:', axiosError.message);
          throw axiosError;
        }
      }
    });
}
