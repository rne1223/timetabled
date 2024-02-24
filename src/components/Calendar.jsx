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
          <td></td>
          <td></td>
          <Event event="Fancy 🎩" color="green"  location='Hat Store'/>
          <td></td>
          <td></td>
          <Event event="Yolk 🍳" color="green" location='Church'/>
          <td></td>
        </tr>

        <tr>
          <td className="time">9 am</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Subway 🚊" color="pink" location='Eat Fresh'/>
          <td></td>
          <td></td>
          <Event event="The Bean 🫘" color="blue" location='Tia'/>
        </tr>

        <tr>
          <td className="time">10 am</td>
          <td></td>
          <Event event="Subway 🚊" color="pink" location='Eat Fresh'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td className="time">11 am</td>
          <td></td>
          <Event event="Deep Dish 🍕" color="blue" location='Dominos'/>
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
          <Event event="Subway 🚊" color="pink" location='Eat Fresh'/>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Cubs Game ⚾" color="green" location='San Francisco'/>
        </tr>

        <tr>
          <td className="time">1 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Fancy Dinner 🍚" color="green" location='Chinatown'/>
          <td></td>
          <td></td>
          <td></td>
        </tr>

        <tr>
          <td className="time">2 pm</td>
          <td></td>
          <Event event="Coffee 🍵" color="yellow" location='Home'/>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Subway 🚊" color="pink" location='Eat Fresh'/>
        </tr>

        <tr>
          <td className="time">3 pm</td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <td></td>
          <Event event="Subway 🚊" color="pink" location='Eat Fresh'/>
          <td></td>
        </tr>

        <tr>
          <td className="time">4 pm</td>
          <Event event="Subway 🚊" color="green" location='Eat Fresh'/>
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
          <Event event="Family Time 👪" color="yellow" location='Home'/>
          <td></td>
          <Event event="Subway 🚊" color="pink" location='Eat Fresh'/>
          <td></td>
          <td></td>
        </tr>

      </tbody>
    </table>
  );
};

export default Calendar;
