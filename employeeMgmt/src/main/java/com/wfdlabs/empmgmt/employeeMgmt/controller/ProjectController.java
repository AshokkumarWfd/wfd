package com.wfdlabs.empmgmt.employeeMgmt.controller;

import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.RestController;
import org.springframework.beans.factory.annotation.Autowired;
import com.wfdlabs.empmgmt.employeeMgmt.entity.Project;
import com.wfdlabs.empmgmt.employeeMgmt.service.ProjectService;

@RestController
@RequestMapping("/Project")
public class ProjectController {
	@Autowired
	private ProjectService projectService;

	@RequestMapping(method = RequestMethod.POST)
	public Project createProject(@RequestBody Project project) {
		System.out.println("Project:" + project);
		project.setUpdateDate(null);
		return projectService.createProject(project);
	}

	@RequestMapping(method = RequestMethod.GET)
	public Project getproject(@RequestParam Integer projectTypeId) {
		System.out.println("project:" + projectTypeId);
		return projectService.getproject(projectTypeId);
	}

}
