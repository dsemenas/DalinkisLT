import React from "react";
import Rating from "./Rating";

export default function Review() {
  const handleClick = () => {
    return 0;
  };

  const rating = 2.5;

  return (
    <div className="card card-compact w-full bg-base-100 shadow-md border">
      <div className="card-body">
        <div className="flex items-center space-x-2">
          <div className="avatar">
            <div className="w-12 rounded-full">
              <img src="https://daisyui.com/images/stock/photo-1534528741775-53994a69daeb.jpg" />
            </div>
          </div>
          <div className="flex justify-between items-center w-full">
            <div className="text-start text-md">
              <span className="block">Laura_1441</span>
              <span className="block text-gray-600 font-light">
                2023 m. gegužės 7
              </span>
            </div>
            <div className="flex items-center gap-x-1 text-accent">
              <span>{rating}</span>
              <Rating rating={rating} />
            </div>
          </div>
        </div>
        <div className="text-start">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Libero
          doloremque illo minus autem tenetur, quasi quos! Libero, officia a,
          suscipit accusantium officiis porro laboriosam vitae neque dolores
          reiciendis ipsum excepturi quisquam odit cumque! Nisi repudiandae
          harum accusantium? Cumque, dolorum deserunt. Atque, molestiae
          repellendus cumque commodi eveniet ipsum natus soluta similique auts
          tempora numquam minima. Neque repudiandae, minima quasi modi
          consectetur vel doloribus ullam quia quis numquam quos iste impedit
          velit!
        </div>
        <div className="card-actions justify-between items-center gap-x-2 p-x-3">
          <button className="btn btn-sm btn-primary">
            <i className="fa-sharp fa-solid fa-reply" />
            Reply
          </button>
          <div className="flex gap-x-3">
            <div className="block space-x-1">
              <span className="text-xs text-gray-500 font-light">20</span>
              <div className="tooltip tooltip-bottom" data-tip="Sutinku">
                <i
                  className="fa-solid fa-arrow-up cursor-pointer transition ease-in hover:text-primary duration-150"
                  onClick={handleClick}
                />
              </div>
            </div>

            <div className="block space-x-1">
              <span className="text-xs text-gray-500 font-light ">2</span>
              <div className="tooltip tooltip-bottom" data-tip="Nesutinku">
                <i
                  className="fa-solid fa-arrow-down cursor-pointer transition ease-in hover:text-primary duration-150"
                  onClick={handleClick}
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
