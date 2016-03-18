/**
 * Created by Sanil on 2/20/2016.
 */
(function(){

    'use strict';

    angular
        .module("FormBuilderApp")
        .factory("FormService",FormService)

    function FormService($http){

       var api = {
           createFormForUser: createFormForUser,
           findAllFormsForUser: findAllFormsForUser,
           deleteFormById: deleteFormById,
           updateFormById: updateFormById
       };

       return api;

        // function to create forms for a user
        function createFormForUser(userId, form){
            $http.post("/api/assignment/user/"+userId+"/form",form);
        }


        // functions finds forms of all users
        function findAllFormsForUser(userId){
            $http.get("/api/assignment/user/"+userId+"/form");
        }

        // function to delete form by id
        function deleteFormById(formId){
            $http.delete("/api/assignment/form/"+formId)
        }

        // function updates the form by its id
        function updateFormById(formId,newForm){
            $http.put("/api/assignment/form/"+formId,newForm);
        }

    }

})();