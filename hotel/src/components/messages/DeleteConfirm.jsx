import { Button, ButtonGroup } from "@material-tailwind/react";

const DeleteConfirm = ({ show, handleDelete, close }) => {
  return (
    <>
      {show && (
        <div className="dark-overlay">
          <div className="absolute start-1/2 -translate-x-1/2 bg-white px-5 rounded z-[1350] duration-500">
            <div className="py-3 text-center">
              <p className="p-3 my-7 text-red-800 bg-red-100 rounded-sm border border-red-200">
                Are you sure you want delete this booking ?
              </p>
              <ButtonGroup className="flex items-center justify-end gap-3 pb-2">
                <Button
                  className="bg-red-500 py-1 px-3 font-normal text-[15px] outline-none rounded duration-200 hover:bg-red-600"
                  onClick={handleDelete}
                >
                  delete
                </Button>
                <Button
                  className="py-1 px-3 font-normal bg-slate-700 text-[15px] outline-none rounded duration-200 hover:bg-slate-600"
                  onClick={close}
                >
                  cancel
                </Button>
              </ButtonGroup>
            </div>
          </div>
        </div>
      )}
    </>
  );
};
export default DeleteConfirm;
