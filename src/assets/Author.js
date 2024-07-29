export const Author = ({ authorProfile, authorName }) => {
  return (
    <div className="flex items-center gap-2">
      <img src={authorProfile} alt="" className="rounded-full w-9 h-9" />
      <p className="font-medium text-[#97989F]">{authorName}</p>
    </div>
  );
};
