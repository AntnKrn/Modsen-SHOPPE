import { createApi, fakeBaseQuery } from '@reduxjs/toolkit/query/react';
import { deleteField, doc, getDoc, updateDoc } from 'firebase/firestore';
import { db } from '../../../constants/firebase/firebaseAuthConfig';
import { IBusketProdut } from '../../../interfaces/IBusket';

export const busketApi = createApi({
  reducerPath: 'busketApi',
  baseQuery: fakeBaseQuery(),
  tagTypes: ['Products'],
  endpoints: (build) => ({
    getBusket: build.query<IBusketProdut[], string>({
      queryFn: async (uuid) => {
        console.log(uuid);
        try {
          const busketRef = doc(db, 'busket', uuid);
          const busketSnap = await getDoc(busketRef);

          return { data: Object.values(busketSnap.data()) };
        } catch (err) {
          return err;
        }
      },
      providesTags: (result) =>
        result
          ? [
              ...result.map(({ id }) => ({ type: 'Products' as const, id })),
              'Products',
            ]
          : ['Products'],
    }),
    deleteFromBusket: build.mutation<void, { uuid: string; id: number }>({
      queryFn: async ({ uuid, id }) => {
        try {
          console.log(uuid, id);
          const busketRef = doc(db, 'busket', uuid);
          await updateDoc(busketRef, {
            [id]: deleteField(),
          });
          return { isSuccess: true };
        } catch (err) {
          return err;
        }
      },
      invalidatesTags: (result, error, arg) => [
        { type: 'Products', id: arg.id },
      ],
    }),
    updateBusket: build.mutation<
      void,
      {
        uuid: string;
        id: number;
        image: string;
        title: string;
        price: number;
        quantity: number;
      }
    >({
      queryFn: async ({ uuid, id, quantity, image, title, price }) => {
        try {
          const busketRef = doc(db, 'busket', uuid);

          const result = await updateDoc(busketRef, {
            [id]: {
              id: id,
              image: image,
              title: title,
              price: price,
              quantity: quantity,
            },
          });
          return { data: result };
        } catch (err) {
          return err;
        }
      },
      invalidatesTags: (result, error, arg) => [
        { type: 'Products', id: arg.id },
      ],
    }),
    addToBusket: build.mutation<
      void,
      {
        uuid: string;
        id: number;
        image: string;
        title: string;
        price: number;
        quantity: number;
      }
    >({
      queryFn: async ({ uuid, id, image, title, price, quantity }) => {
        try {
          const busketRef = doc(db, 'busket', uuid);
          console.log(uuid);
          const result = await updateDoc(busketRef, {
            [id]: {
              id: id,
              image: image,
              title: title,
              price: price,
              quantity: quantity,
            },
          });
          return { data: result };
        } catch (err) {
          return err;
        }
      },
      invalidatesTags: ['Products'],
    }),
  }),
});

export const {
  useGetBusketQuery,
  useDeleteFromBusketMutation,
  useUpdateBusketMutation,
  useAddToBusketMutation,
} = busketApi;
