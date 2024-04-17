import { Card, Typography } from "@material-tailwind/react";
import useBookingInfo from "../../hooks/use-booking-info";
import TableSkeleton from "../loader/TableSkeleton";

const TABLE_HEAD = ["Name", "Phone", "Hotel", "Checkin", "Checkout"];

const PrevBookingTable = () => {
  const { books, load, fallDate } = useBookingInfo();

  return (
    <>
      {load ? (
        <TableSkeleton />
      ) : books?.length > 1 ? (
        <Card className="h-full w-full overflow-scroll md:overflow-hidden rounded mb-12">
          <table className="w-full min-w-max table-auto text-left">
            <thead className="">
              <tr className="text-center">
                {TABLE_HEAD.map((head, index) => (
                  <th key={index} className="bg-slate-800 text-white p-4">
                    <Typography
                      variant="small"
                      color="blue-gray"
                      className="font-normal leading-none"
                    >
                      {head}
                    </Typography>
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {books?.map(
                (
                  { firstName, lastName, hotelId, phone, checkin, checkout },
                  index
                ) => {
                  const isLast = index === books.length - 1;
                  const classes = isLast
                    ? "p-4"
                    : "p-4 border-b border-gray-100";

                  return (
                    fallDate > new Date(checkin) && (
                      <tr key={index} className="even:bg-slate-200 text-center">
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {`${firstName} ${lastName}`}
                          </Typography>
                        </td>
                        <td>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {phone}
                          </Typography>
                        </td>
                        <td>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {hotelId.name}
                          </Typography>
                        </td>
                        <td className={`${classes}`}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {checkin.split("T")[0]}
                          </Typography>
                        </td>
                        <td className={classes}>
                          <Typography
                            variant="small"
                            color="blue-gray"
                            className="font-normal"
                          >
                            {checkout.split("T")[0]}
                          </Typography>
                        </td>
                      </tr>
                    )
                  );
                }
              )}
            </tbody>
          </table>
        </Card>
      ) : (
        <div className="fixed text-center top-1/2 -translate-y-1/2 end-1/2 translate-x-1/2">
          <i className="fa-solid fa-calendar fa-3x text-blue-500 mb-5"></i>
          <h3 className="text-[30px]">You do not have previous booking </h3>
        </div>
      )}
    </>
  );
};

export default PrevBookingTable;
