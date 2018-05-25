package au.gov.vic.ecodev.mrt.web.controller.rest;

import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.springframework.web.bind.annotation.CrossOrigin;
import org.springframework.web.bind.annotation.PathVariable;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RestController;

@CrossOrigin(origins = "http://localhost")
@RestController
public class MyRestController {

	@RequestMapping("/template/{batchId}")
	public Map<String, List<Map<String, Object>>> doPopulate(@PathVariable String batchId) {
		Map<String, Object> titleMap = new HashMap<>();
		titleMap.put("1", "holeId");
		titleMap.put("2", "drillingCode");
		titleMap.put("3", "easting");
		titleMap.put("4", "northing");
		List<Map<String, Object>> sl4DataRecord = new ArrayList<>();
		sl4DataRecord.add(titleMap);
		String holeId = "holeId" + batchId;
		String drillingCode = "drillingCode" + batchId;
		String easting = "732788.58";
		String northing = "6086182.18";
		Map<String, Object> map = new HashMap<>();
		map.put("holeId", holeId);
		map.put("drillingCode", drillingCode);
		map.put("easting", easting);
		map.put("northing", northing);
		sl4DataRecord.add(map);
		
		String holeIdReversed = "holeId" + new StringBuilder(batchId).reverse().toString();
		String drillingCodeReversed = "drilingCode" + new StringBuilder(batchId).reverse().toString();
		Map<String, Object> map1 = new HashMap<>();
		map1.put("holeId", holeIdReversed);
		map1.put("drillingCode", drillingCodeReversed);
		map1.put("easting", easting);
		map1.put("northing", northing);
		sl4DataRecord.add(map1);
		
		Map<String, List<Map<String, Object>>> resultMap = new HashMap<>();
		resultMap.put("SL4", sl4DataRecord);
		List<Map<String, Object>> ds4DataRecords = new ArrayList<>();
		ds4DataRecords.add(titleMap);
		ds4DataRecords.add(map1);
		resultMap.put("DS4", ds4DataRecords);
		return resultMap;
	}
}
