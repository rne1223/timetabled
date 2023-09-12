import Event from "./Event";

const Calendar = () => {
  return (
    <table>
      <thead>
        <tr>
          <th></th>
          <th>Sunday</th>
          <th>Monday</th>
          <th>Tuesday</th>
          <th>Wednesday</th>
          <th>Thursday</th>
          <th>Friday</th>
          <th>Saturday</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td className="time">8 am</td>
          <Event event="Fancy Dinner 🎩" color="green" />
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Yolk 🍳" color="green" />
          <td></td>
        </tr>

        <tr>
          <td className="time">9 am</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Subway 🚊" color="pink" />
          <td></td>
          <td></td>
          <Event event="The Bean 🫘" color="blue" />
        </tr>

        <tr>
          <td className="time">10 am</td>
          <td></td>
          <Event event="Subway 🚊" color="pink" />
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td className="time">11 am</td>
          <td></td>
          <Event event="Deep Dish 🍕" color="blue" />
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td className="time">12 pm</td>
          <td></td>
          <td></td>
          <Event event="Subway 🚊" color="pink" />
          <td></td>
          <td></td>
          <td></td>
          <Event event="Cubs Game ⚾" color="green" />
        </tr>

        <tr>
          <td className="time">1 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Fancy Dinner 🍚" color="green" />
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td className="time">2 pm</td>
          <td></td>
          <Event event="Coffee 🍵" color="yellow" />
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Subway 🚊" color="pink" />
        </tr>

        <tr>
          <td className="time">3 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Subway 🚊" color="pink" />
          <td></td>
        </tr>

        <tr>
          <td className="time">4 pm</td>
          <Event event="Subway 🚊" color="green" />
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td className="time">5 pm</td>
          <td></td>
          <td></td>
          <Event event="Family Time 👪" color="yellow" />
          <td></td>
          <Event event="Subway 🚊" color="pink" />
          <td></td>
          <td></td>
        </tr>

      </tbody>
    </table>
  );
};

export default Calendar;
