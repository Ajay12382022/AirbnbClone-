import useSWR from "swr";

export default function House(props) {
  const { data: houses } = useSWR(`/api/house/getAll`);

  console.log(houses);
  return (
    <div className="p-6">
      <div className="relative">
        <img src="/home.jpg" className="object-cover rounded-2xl" />
        <div className="absolute text-black font-bold bottom-6 text-xl ml-2"> Jharkhand

        </div>
      </div>
      <div className="flex justify-between">
        <div>
            <p className="font-semibold">$ {props.price}</p>
            <p>{props.address}</p>
        </div>
      </div>
    </div>
  );
}