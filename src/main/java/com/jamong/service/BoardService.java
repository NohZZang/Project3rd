package com.jamong.service;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.web.multipart.MultipartFile;

import com.jamong.domain.BoardVO;

public interface BoardService {

	void insertBoard(BoardVO b);

}
