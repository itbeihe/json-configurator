window.jsonConfigurator = function(conf){
    var textAreaObj = (conf.target);

    var objectCell = new JsonC.ObjectField(cellConf);

    var returnObj = {
        jc : objectCell
    }

    return returnObj;


}
