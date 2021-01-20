import React, { Component } from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from 'react-router-dom';
import CustomerList from './components/CustomerList'
import logo from './logo.svg';
import './App.css';


class App extends Component {
  render() {
    return(
      <Router>
            <div>
              <nav>
                <ul>
                  <li>
                    <Link to='/customers'>Customer List</Link>
                  </li>
                </ul>
              </nav>
              <Switch>
                <Route path='/customers'>
                  <Customers />
                </Route>
              </Switch>
            </div>
          </Router>
    )
  }
}

const customerList = [
  {
      'id': 1,
      'name': 'Shelley Rocha',
      'registered_at': '2015-04-29T14:54:14.000Z',
      'address': 'Ap #292-5216 Ipsum Rd.',
      'city': 'Hillsboro',
      'state': 'OR',
      'postal_code': '24309',
      'phone': '(322) 510-8695',
      'account_credit': 13.15,
      'videos_checked_out_count': 0
  },
  {
      'id': 2,
      'name': 'Curran Stout',
      'registered_at': '2014-04-17T04:40:20.000Z',
      'address': 'Ap #658-1540 Erat Rd.',
      'city': 'San Francisco',
      'state': 'California',
      'postal_code': '94267',
      'phone': '(908) 949-6758',
      'account_credit': 35.66,
      'videos_checked_out_count': 0
  },
  {
      'id': 3,
      'name': 'Roanna Robinson',
      'registered_at': '2014-11-28T21:14:08.000Z',
      'address': 'Ap #561-4214 Eget St.',
      'city': 'Harrisburg',
      'state': 'PA',
      'postal_code': '15867',
      'phone': '(323) 336-1841',
      'account_credit': 50.39,
      'videos_checked_out_count': 0
  },
  {
      'id': 4,
      'name': 'Carolyn Chandler',
      'registered_at': '2014-07-04T18:05:11.000Z',
      'address': '133-8707 Arcu. Avenue',
      'city': 'Fort Wayne',
      'state': 'IN',
      'postal_code': '73684',
      'phone': '(234) 837-2886',
      'account_credit': 21.79,
      'videos_checked_out_count': 0
  },
  {
      'id': 5,
      'name': 'Aquila Riddle',
      'registered_at': '2015-08-27T15:17:24.000Z',
      'address': 'Ap #187-9582 Primis St.',
      'city': 'Tacoma',
      'state': 'WA',
      'postal_code': '73251',
      'phone': '(925) 161-2223',
      'account_credit': 17.82,
      'videos_checked_out_count': 0
  },
  {
      'id': 6,
      'name': 'Phyllis Russell',
      'registered_at': '2014-04-03T04:44:46.000Z',
      'address': '746-8511 Ipsum Ave',
      'city': 'Boise',
      'state': 'Idaho',
      'postal_code': '76759',
      'phone': '(961) 964-5158',
      'account_credit': 88.67,
      'videos_checked_out_count': 0
  },
  {
      'id': 7,
      'name': 'Rajah Riggs',
      'registered_at': '2014-01-29T06:28:45.000Z',
      'address': 'Ap #881-3920 Malesuada Avenue',
      'city': 'Norman',
      'state': 'OK',
      'postal_code': '36134',
      'phone': '(540) 515-2339',
      'account_credit': 30.14,
      'videos_checked_out_count': 0
  },
  {
      'id': 8,
      'name': 'Amanda Curtis',
      'registered_at': '2014-11-18T08:43:15.000Z',
      'address': 'Ap #773-125 Nunc St.',
      'city': 'Iowa City',
      'state': 'Iowa',
      'postal_code': '18538',
      'phone': '(253) 271-5290',
      'account_credit': 47.22,
      'videos_checked_out_count': 0
  },
  {
      'id': 9,
      'name': 'Jacqueline Perry',
      'registered_at': '2015-07-23T17:18:35.000Z',
      'address': 'Ap #288-7228 Dis Rd.',
      'city': 'Anchorage',
      'state': 'AK',
      'postal_code': '99789',
      'phone': '(479) 207-8414',
      'account_credit': 96.28,
      'videos_checked_out_count': 0
  },
  {
      'id': 10,
      'name': 'Quinlan Rich',
      'registered_at': '2015-07-10T22:23:06.000Z',
      'address': 'Ap #727-9607 Nibh Avenue',
      'city': 'Hilo',
      'state': 'HI',
      'postal_code': '63747',
      'phone': '(521) 124-5753',
      'account_credit': 68.41,
      'videos_checked_out_count': 0
  },
  {
      'id': 11,
      'name': 'Ciara Summers',
      'registered_at': '2015-07-10T05:12:11.000Z',
      'address': 'Ap #412-1462 Molestie St.',
      'city': 'Grand Rapids',
      'state': 'Michigan',
      'postal_code': '44906',
      'phone': '(473) 496-4835',
      'account_credit': 56.88,
      'videos_checked_out_count': 0
  },
  {
      'id': 12,
      'name': 'Alfreda Hines',
      'registered_at': '2015-08-20T06:18:27.000Z',
      'address': 'P.O. Box 754, 627 Erat Avenue',
      'city': 'Anchorage',
      'state': 'Alaska',
      'postal_code': '99915',
      'phone': '(921) 910-1283',
      'account_credit': 55.59,
      'videos_checked_out_count': 0
  },
  {
      'id': 13,
      'name': 'Eugenia Roberson',
      'registered_at': '2014-02-23T18:19:11.000Z',
      'address': 'Ap #781-1953 Suspendisse Road',
      'city': 'Jackson',
      'state': 'MS',
      'postal_code': '67415',
      'phone': '(900) 501-6947',
      'account_credit': 22.71,
      'videos_checked_out_count': 0
  },
  {
      'id': 14,
      'name': 'Ferris Robles',
      'registered_at': '2015-03-16T23:45:12.000Z',
      'address': 'P.O. Box 344, 4911 Semper Rd.',
      'city': 'Independence',
      'state': 'Missouri',
      'postal_code': '46428',
      'phone': '(569) 834-1872',
      'account_credit': 4.91,
      'videos_checked_out_count': 0
  },
  {
      'id': 15,
      'name': 'Sopoline Fisher',
      'registered_at': '2014-05-19T01:25:58.000Z',
      'address': '543-8042 Porttitor Avenue',
      'city': 'Knoxville',
      'state': 'TN',
      'postal_code': '23142',
      'phone': '(603) 919-2974',
      'account_credit': 53.63,
      'videos_checked_out_count': 0
  },
  {
      'id': 16,
      'name': 'Vivien Justice',
      'registered_at': '2014-09-22T23:07:07.000Z',
      'address': '790-3681 Lobortis Rd.',
      'city': 'Sterling Heights',
      'state': 'MI',
      'postal_code': '54505',
      'phone': '(563) 349-0325',
      'account_credit': 83.76,
      'videos_checked_out_count': 0
  },
  {
      'id': 17,
      'name': 'Ginger Heath',
      'registered_at': '2015-02-27T11:10:39.000Z',
      'address': 'Ap #395-9452 Quisque St.',
      'city': 'Billings',
      'state': 'Montana',
      'postal_code': '25054',
      'phone': '(572) 140-2058',
      'account_credit': 89.69,
      'videos_checked_out_count': 0
  },
  {
      'id': 18,
      'name': 'Kieran Calhoun',
      'registered_at': '2014-08-24T10:03:45.000Z',
      'address': 'Ap #854-9111 Nunc, Road',
      'city': 'Savannah',
      'state': 'GA',
      'postal_code': '47373',
      'phone': '(909) 486-8575',
      'account_credit': 61.8,
      'videos_checked_out_count': 0
  },
  {
      'id': 19,
      'name': 'Winter Stephenson',
      'registered_at': '2015-08-07T15:09:11.000Z',
      'address': 'P.O. Box 887, 4257 Lorem Rd.',
      'city': 'Salt Lake City',
      'state': 'Utah',
      'postal_code': '63684',
      'phone': '(466) 617-0803',
      'account_credit': 1.41,
      'videos_checked_out_count': 0
  },
  {
      'id': 20,
      'name': 'Mallory Weaver',
      'registered_at': '2014-07-13T01:15:55.000Z',
      'address': '7297 Tortor, Avenue',
      'city': 'Houston',
      'state': 'Texas',
      'postal_code': '89807',
      'phone': '(727) 342-1336',
      'account_credit': 65.24,
      'videos_checked_out_count': 0
  },
  {
      'id': 21,
      'name': 'Audra Vance',
      'registered_at': '2014-11-01T08:37:40.000Z',
      'address': 'P.O. Box 906, 9067 A Street',
      'city': 'Columbus',
      'state': 'Ohio',
      'postal_code': '43007',
      'phone': '(832) 502-4114',
      'account_credit': 76.71,
      'videos_checked_out_count': 0
  },
  {
      'id': 22,
      'name': 'Aladdin Fowler',
      'registered_at': '2015-05-25T09:50:55.000Z',
      'address': 'Ap #548-6390 Ornare Av.',
      'city': 'Aurora',
      'state': 'IL',
      'postal_code': '92483',
      'phone': '(201) 728-7318',
      'account_credit': 90.12,
      'videos_checked_out_count': 0
  },
  {
      'id': 23,
      'name': 'Dominique Battle',
      'registered_at': '2014-01-25T09:47:14.000Z',
      'address': 'P.O. Box 753, 5236 At Rd.',
      'city': 'Gaithersburg',
      'state': 'MD',
      'postal_code': '49893',
      'phone': '(385) 326-1715',
      'account_credit': 88.51,
      'videos_checked_out_count': 0
  },
  {
      'id': 24,
      'name': 'Kimberly Savage',
      'registered_at': '2014-09-20T09:37:33.000Z',
      'address': 'Ap #888-6281 Aliquam Av.',
      'city': 'Virginia Beach',
      'state': 'VA',
      'postal_code': '50164',
      'phone': '(285) 195-0154',
      'account_credit': 41.86,
      'videos_checked_out_count': 0
  },
  {
      'id': 25,
      'name': 'Branden Craig',
      'registered_at': '2014-09-23T04:05:52.000Z',
      'address': '768-8145 Elit Road',
      'city': 'Hattiesburg',
      'state': 'MS',
      'postal_code': '99128',
      'phone': '(972) 938-4626',
      'account_credit': 92.64,
      'videos_checked_out_count': 0
  },
  {
      'id': 26,
      'name': 'Hammett Beach',
      'registered_at': '2014-08-23T20:57:12.000Z',
      'address': '206-6384 Morbi Road',
      'city': 'Butte',
      'state': 'MT',
      'postal_code': '54656',
      'phone': '(833) 249-0504',
      'account_credit': 60.65,
      'videos_checked_out_count': 0
  },
  {
      'id': 27,
      'name': 'Dai Meadows',
      'registered_at': '2014-08-17T10:38:21.000Z',
      'address': '1083 Enim, St.',
      'city': 'Sioux City',
      'state': 'IA',
      'postal_code': '63549',
      'phone': '(204) 993-4985',
      'account_credit': 87.9,
      'videos_checked_out_count': 0
  },
  {
      'id': 28,
      'name': 'Grady Chang',
      'registered_at': '2015-05-18T11:03:19.000Z',
      'address': '8819 Nam St.',
      'city': 'Sacramento',
      'state': 'CA',
      'postal_code': '90337',
      'phone': '(306) 153-3636',
      'account_credit': 75.94,
      'videos_checked_out_count': 0
  },
  {
      'id': 29,
      'name': 'Cody Woodard',
      'registered_at': '2014-06-24T08:42:54.000Z',
      'address': 'P.O. Box 990, 1927 Quis Ave',
      'city': 'Gaithersburg',
      'state': 'Maryland',
      'postal_code': '68459',
      'phone': '(606) 363-0837',
      'account_credit': 97.75,
      'videos_checked_out_count': 0
  },
  {
      'id': 30,
      'name': 'Ulysses Whitfield',
      'registered_at': '2014-11-21T03:38:20.000Z',
      'address': '906-7966 Adipiscing Street',
      'city': 'Laramie',
      'state': 'Wyoming',
      'postal_code': '95684',
      'phone': '(371) 627-1105',
      'account_credit': 93.18,
      'videos_checked_out_count': 0
  }
]

const Customers = () => {
  return(
    <div>
      <h2>Customers</h2>
      < CustomerList list={customerList} />
    </div>
  ) 
};

export default App;
