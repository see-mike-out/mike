var data = [
  {'country_code': 'AUS', 'country_name': 'Australia', 'wagegap': '15.385', 'workhour': '1663.6', 'workhour_rank': '23', 'wuw': '255.9449', 'wuw_rank': '15', 'wpw': '1407.6551', 'wpw_rank': '20'},
  {'country_code': 'AUT', 'country_name': 'Austria', 'wagegap': '17.729', 'workhour': '1629.4', 'workhour_rank': '25', 'wuw': '288.8763', 'wuw_rank': '11', 'wpw': '1340.5237', 'wpw_rank': '25'},
  {'country_code': 'BEL', 'country_name': 'Belgium', 'wagegap': '3.299', 'workhour': '1560', 'workhour_rank': '27', 'wuw': '51.4644', 'wuw_rank': '32', 'wpw': '1508.5356', 'wpw_rank': '15'},
  {'country_code': 'CAN', 'country_name': 'Canada', 'wagegap': '19.229', 'workhour': '1703', 'workhour_rank': '20', 'wuw': '327.4699', 'wuw_rank': '7', 'wpw': '1375.5301', 'wpw_rank': '22'},
  {'country_code': 'CZE', 'country_name': 'Czech Republic', 'wagegap': '16.255', 'workhour': '1771', 'workhour_rank': '15', 'wuw': '287.876', 'wuw_rank': '12', 'wpw': '1483.124', 'wpw_rank': '17'},
  {'country_code': 'DNK', 'country_name': 'Denmark', 'wagegap': '6.324', 'workhour': '1458', 'workhour_rank': '29', 'wuw': '92.2039', 'wuw_rank': '27', 'wpw': '1365.7961', 'wpw_rank': '23'},
  {'country_code': 'FIN', 'country_name': 'Finland', 'wagegap': '19.609', 'workhour': '1643', 'workhour_rank': '24', 'wuw': '322.1759', 'wuw_rank': '8', 'wpw': '1320.8241', 'wpw_rank': '28'},
  {'country_code': 'DEU', 'country_name': 'Germany', 'wagegap': '17.08', 'workhour': '1366.4', 'workhour_rank': '32', 'wuw': '233.3811', 'wuw_rank': '18', 'wpw': '1133.0189', 'wpw_rank': '32'},
  {'country_code': 'GRC', 'country_name': 'Greece', 'wagegap': '9.091', 'workhour': '2026', 'workhour_rank': '4', 'wuw': '184.1837', 'wuw_rank': '22', 'wpw': '1841.8163', 'wpw_rank': '2'},
  {'country_code': 'HUN', 'country_name': 'Hungary', 'wagegap': '3.773', 'workhour': '1857.9', 'workhour_rank': '10', 'wuw': '70.0986', 'wuw_rank': '30', 'wpw': '1787.8014', 'wpw_rank': '4'},
  {'country_code': 'ISL', 'country_name': 'Iceland', 'wagegap': '13.593', 'workhour': '1864.1', 'workhour_rank': '8', 'wuw': '253.3871', 'wuw_rank': '16', 'wpw': '1610.7129', 'wpw_rank': '9'},
  {'country_code': 'IRL', 'country_name': 'Ireland', 'wagegap': '15.173', 'workhour': '1821.26', 'workhour_rank': '13', 'wuw': '276.3398', 'wuw_rank': '13', 'wpw': '1544.9202', 'wpw_rank': '12'},
  {'country_code': 'ITA', 'country_name': 'Italy', 'wagegap': '5.556', 'workhour': '1718.8', 'workhour_rank': '19', 'wuw': '95.4965', 'wuw_rank': '26', 'wpw': '1623.3035', 'wpw_rank': '8'},
  {'country_code': 'JPN', 'country_name': 'Japan', 'wagegap': '25.871', 'workhour': '1729', 'workhour_rank': '18', 'wuw': '447.3096', 'wuw_rank': '3', 'wpw': '1281.6904', 'wpw_rank': '30'},
  {'country_code': 'KOR', 'country_name': 'Korea', 'wagegap': '36.653', 'workhour': '2124', 'workhour_rank': '3', 'wuw': '778.5097', 'wuw_rank': '1', 'wpw': '1345.4903', 'wpw_rank': '24'},
  {'country_code': 'LUX', 'country_name': 'Luxembourg', 'wagegap': '4.138', 'workhour': '1509', 'workhour_rank': '28', 'wuw': '62.4424', 'wuw_rank': '31', 'wpw': '1446.5576', 'wpw_rank': '19'},
  {'country_code': 'NLD', 'country_name': 'Netherlands', 'wagegap': '14.115', 'workhour': '1420', 'workhour_rank': '31', 'wuw': '200.433', 'wuw_rank': '21', 'wpw': '1219.567', 'wpw_rank': '31'},
  {'country_code': 'NZL', 'country_name': 'New Zealand', 'wagegap': '6.083', 'workhour': '1762', 'workhour_rank': '16', 'wuw': '107.1825', 'wuw_rank': '25', 'wpw': '1654.8175', 'wpw_rank': '7'},
  {'country_code': 'NOR', 'country_name': 'Norway', 'wagegap': '6.283', 'workhour': '1426.9', 'workhour_rank': '30', 'wuw': '89.6521', 'wuw_rank': '28', 'wpw': '1337.2479', 'wpw_rank': '26'},
  {'country_code': 'POL', 'country_name': 'Poland', 'wagegap': '11.073', 'workhour': '1923', 'workhour_rank': '6', 'wuw': '212.9338', 'wuw_rank': '20', 'wpw': '1710.0662', 'wpw_rank': '5'},
  {'country_code': 'PRT', 'country_name': 'Portugal', 'wagegap': '18.88', 'workhour': '1865', 'workhour_rank': '7', 'wuw': '352.112', 'wuw_rank': '6', 'wpw': '1512.888', 'wpw_rank': '14'},
  {'country_code': 'SVK', 'country_name': 'Slovak Republic', 'wagegap': '14.35', 'workhour': '1760', 'workhour_rank': '17', 'wuw': '252.56', 'wuw_rank': '17', 'wpw': '1507.44', 'wpw_rank': '16'},
  {'country_code': 'CHE', 'country_name': 'Switzerland', 'wagegap': '16.941', 'workhour': '1568.3', 'workhour_rank': '26', 'wuw': '265.6857', 'wuw_rank': '14', 'wpw': '1302.6143', 'wpw_rank': '29'},
  {'country_code': 'TUR', 'country_name': 'Turkey', 'wagegap': '6.883', 'workhour': '1832', 'workhour_rank': '12', 'wuw': '126.0966', 'wuw_rank': '23', 'wpw': '1705.9034', 'wpw_rank': '6'},
  {'country_code': 'GBR', 'country_name': 'United Kingdom', 'wagegap': '17.383', 'workhour': '1677', 'workhour_rank': '21', 'wuw': '291.5129', 'wuw_rank': '10', 'wpw': '1385.4871', 'wpw_rank': '21'},
  {'country_code': 'USA', 'country_name': 'United States', 'wagegap': '17.451', 'workhour': '1789', 'workhour_rank': '14', 'wuw': '312.1984', 'wuw_rank': '9', 'wpw': '1476.8016', 'wpw_rank': '18'},
  {'country_code': 'SVN', 'country_name': 'Slovenia', 'wagegap': '4.996', 'workhour': '1676', 'workhour_rank': '22', 'wuw': '83.733', 'wuw_rank': '29', 'wpw': '1592.267', 'wpw_rank': '11'},
  {'country_code': 'EST', 'country_name': 'Estonia', 'wagegap': '28.339', 'workhour': '1859', 'workhour_rank': '9', 'wuw': '526.822', 'wuw_rank': '2', 'wpw': '1332.178', 'wpw_rank': '27'},
  {'country_code': 'MEX', 'country_name': 'Mexico', 'wagegap': '18.3', 'workhour': '2228.4', 'workhour_rank': '1', 'wuw': '407.7972', 'wuw_rank': '5', 'wpw': '1820.6028', 'wpw_rank': '3'},
  {'country_code': 'LTU', 'country_name': 'Lithuania', 'wagegap': '12.435', 'workhour': '1834', 'workhour_rank': '11', 'wuw': '228.0579', 'wuw_rank': '19', 'wpw': '1605.9421', 'wpw_rank': '10'},
  {'country_code': 'LVA', 'country_name': 'Latvia', 'wagegap': '21.123', 'workhour': '1938', 'workhour_rank': '5', 'wuw': '409.3637', 'wuw_rank': '4', 'wpw': '1528.6363', 'wpw_rank': '13'},
  {'country_code': 'CRI', 'country_name': 'Costa Rica', 'wagegap': '5.15', 'workhour': '2209.6', 'workhour_rank': '2', 'wuw': '113.7944', 'wuw_rank': '24', 'wpw': '2095.8056', 'wpw_rank': '1'}
];

var rownames = ['AUS', 'AUT', 'BEL', 'CAN', 'CZE', 'DNK', 'FIN', 'DEU', 'GRC', 'HUN',
                'ISL', 'IRL', 'ITA', 'JPN', 'KOR', 'LUX', 'NLD', 'NZL', 'NOR', 'POL',
                'PRT', 'SVK', 'CHE', 'TUR', 'GBR', 'USA', 'SVN', 'EST', 'MEX', 'LTU',
                'LVA', 'CRI'];

var colnames = ['country_code', 'country_name', 'wagegap', 'workhour', 'workhour_rank', 'wuw', 'wuw_rank', 'wpw', 'wpw_rank'];
