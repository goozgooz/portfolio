'use strict';

var projects = [];

function Project(project){
  this.projectName = project.projectName;
  this.description = project.description;
  this.picture = project.picture;
  this.date = project.date;
};

Project.prototype.toHtml = function() {
  var $newProject = $('project').clone();
  $newProject.removeClass();

  $newProject.find('.project-titles').html(this.projectName);
  $newProject.find('.project-des').html(this.description);
  $newProject.find('.project-img').html(this.picture);
  $newProject.find('.time').html('about ' + parseInt((new Date() - new Date(this.date)) / 60 / 60 / 24 / 1000) + ' days ago');
  return $newProject;
};

allProjects.forEach(function(projectData){
  projects.push(new Project(projectData));
});

projects.forEach(function(project) {
  $('.project-holder').append(project.toHtml());
});
