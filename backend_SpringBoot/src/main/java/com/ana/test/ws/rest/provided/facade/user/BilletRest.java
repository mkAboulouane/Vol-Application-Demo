package com.ana.test.ws.rest.provided.facade.user;

import com.ana.test.service.user.facade.BilletService;
import java.util.List;

import com.ana.test.ws.rest.provided.dto.Page;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.DeleteMapping;
import org.springframework.web.bind.annotation.*;
import io.swagger.annotations.Api;
import io.swagger.annotations.ApiOperation;
import com.ana.test.bean.Billet;
import com.ana.test.ws.rest.provided.converter.BilletConverter;
import com.ana.test.ws.rest.provided.vo.BilletVo;


@Api("Manages Billet services")
@RestController
@RequestMapping("billet")
public class BilletRest {

    @Autowired
    private BilletService billetService;

    @Autowired
    private BilletConverter billetConverter;



       @ApiOperation("Finds a list of all Billets")
       @GetMapping("/")
       public List<BilletVo> findAll(){
           return billetConverter.toVo(billetService.findAll());
       }


       @ApiOperation("Finds a list of all Billets with pagination")
       @GetMapping("/paginate/")
       public Page<BilletVo> paginate(@RequestParam int page, @RequestParam int size) {
          org.springframework.data.domain.Page<Billet> paginate = billetService.paginate(page, size);
          return new Page<>(size, page, paginate.getTotalElements(), billetConverter.toVo(paginate.getContent()));
        }


       @ApiOperation("Saves the specified Billet")
       @PostMapping("/")
       public BilletVo save(@RequestBody  BilletVo  entityVo){
        Billet entity = billetConverter.toItem(entityVo);
           entity = billetService.save(entity);
        return billetConverter.toVo(entity);
       }


       @ApiOperation("Updates the specified  Billet")
       @PutMapping("/")
       public BilletVo update(@RequestBody  BilletVo  entityVo){
        Billet entity = billetConverter.toItem(entityVo);
           entity = billetService.update(entity);
        return billetConverter.toVo(entity);
       }


       @ApiOperation("delete the specified Billet By Id")
       @DeleteMapping("/{id}/")
       public int delete(@PathVariable Long id){
           return billetService.deleteById(id);
       }

       @ApiOperation("find the specified Billet By Id")
       @GetMapping("/{id}/")
       public BilletVo findById(@PathVariable Long id){
           return billetConverter.toVo( billetService.findById(id));
       }

       @ApiOperation("Search Billet by a specific criteria")
       @PostMapping("/search")
       public List<BilletVo> findByCriteria(@RequestBody BilletVo entity) {
          return billetConverter.toVo(billetService.findByCriteria(entity));
       }


       @ApiOperation("find the specified Billet By NumBillet")
       @GetMapping("/numbillet/{reference}/")
        public BilletVo findByNumBillet(String reference) {
        return billetConverter.toVo( billetService.findByNumBillet(reference));
       }




}