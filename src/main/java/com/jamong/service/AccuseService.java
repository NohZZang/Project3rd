package com.jamong.service;

import java.util.List;

import com.jamong.domain.AccuseVO;
import com.jamong.domain.InquireVO;

public interface AccuseService {

	void insertAccuse(AccuseVO a);

	int getListCount(AccuseVO a);

	List<AccuseVO> getAccuseList(AccuseVO a);

	

}
