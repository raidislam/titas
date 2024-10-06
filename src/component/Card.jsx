export default function Card({ card }) {
  return (
    <div
      style={{
        backgroundColor: `${
          card.background_color ? card.background_color : "#f2f2f2"
        }`,
      }}
      className="flex flex-col h-full items-center border border-gray-200 rounded-lg shadow md:flex-row md:max-w-xl hover:bg-gray-100 dark:border-gray-700 dark:bg-gray-800 dark:hover:bg-gray-700"
    >
      <img
        className="object-cover h-full md:w-48 md:rounded-none md:rounded-s-lg"
        src={card.image ? card.image : "/images/profile.jpg"}
        alt="profile image"
      />
      <div className="flex flex-col justify-between p-4 leading-normal">
        <p className="mb-1 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">
          {card.name}
        </p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          {card.post}
        </p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          {card.rank}
        </p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          {card.city}
        </p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          {card.code}
        </p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          {card.phone}
        </p>
        <p className="mb-1 font-normal text-gray-700 dark:text-gray-400">
          {card.email}
        </p>
      </div>
    </div>
  );
}
