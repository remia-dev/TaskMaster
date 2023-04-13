import { NoteModel } from "../models/note";
import { formatDate } from "../util/fortmatDate";

interface NoteProps {
  note: NoteModel;
}

const Note = ({ note }: NoteProps) => {
  const { title, text, createdAt, updatedAt } = note;
  let createdUpdatedText: string;
  if(updatedAt! > createdAt){
    createdUpdatedText = "Updated: " + formatDate(updatedAt!)
  }else{
    createdUpdatedText = "Created: " + formatDate(createdAt)

  }

  return (
    <div className="bg-pink-200 rounded-lg hover:shadow-[0_2px_15px_-3px_rgba(0,0,0,0.07),0_10px_20px_-2px_rgba(0,0,0,0.04)]">
      <div className="block w-[250px] h-[230px] rounded-lg bg-pink-100 p-6  dark:bg-neutral-700 transition-shadow .2s ease-in-out cursor-pointer">
        <h5 className="mb-2 text-xl font-medium leading-tight text-neutral-800 dark:text-neutral-50">
          {title}
        </h5>
        <p className="mb-4 text-base text-neutral-600 dark:text-neutral-200 whitespace-pre-line overflow-hidden ">
          {text}
        </p>
        {/*<butto
          type="button"
          className="inline-block rounded bg-primary px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] "
          data-te-ripple-init
          data-te-ripple-color="light"
        >
          Button
  </button> */}
      </div>
      <div className="text-gray-400 ml-4 text-sm mb-2 mt-2">
        {createdUpdatedText}

      </div>
    </div>
  );
};
export default Note;
